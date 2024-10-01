import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';

const Graphs = ({ workoutData }) => {
  const [selectedBodyPart, setSelectedBodyPart] = useState('');

  useEffect(() => {
    const bodyParts = getUniqueBodyParts(workoutData);
    if (bodyParts.length > 0) {
      setSelectedBodyPart(bodyParts[0]); // Set to the first available body part
    }
  }, [workoutData]);

  function getUniqueBodyParts(data) {
    const bodyParts = new Set();
    Object.values(data).forEach(exercises => {
      exercises.forEach(({ bodypart }) => {
        bodyParts.add(bodypart);
      });
    });
    return Array.from(bodyParts);
  }

  function prepareGraphData(data) {
    const exerciseData = {};

    Object.entries(data).forEach(([date, exercises]) => {
        exercises.forEach(({ bodypart, exercise, sets }) => {
            const maxWeight = Math.max(...sets.map(set => parseFloat(set.weight) || 0));

            // Initialize exerciseData structure
            if (!exerciseData[bodypart]) {
                exerciseData[bodypart] = {};
            }
            if (!exerciseData[bodypart][exercise]) {
                exerciseData[bodypart][exercise] = { id: exercise, data: [] };
            }

            // Push the data point with the date (converted to timestamp) and max weight
            exerciseData[bodypart][exercise].data.push({ x: new Date(date).getTime(), y: maxWeight });
        });
    });

    // Convert exerciseData to a more usable format for the graph and sort by date
    const formattedData = {};
    Object.entries(exerciseData).forEach(([bodypart, exercises]) => {
        formattedData[bodypart] = Object.values(exercises).map(exercise => {
            // Sort the exercise data by date
            exercise.data.sort((a, b) => a.x - b.x);
            return exercise;
        });
    });

    return formattedData;
}


  const graphData = prepareGraphData(workoutData);

  const getLineColor = (exercise) => {
    switch (exercise) {
      case 'Overhead Press':
      case 'Bench Press':
      case 'Deadlifts':
        return '#D69e2e';
      default:
        return '#D69e2e';
    }
  };

  return (
    <div className="container mx-auto bg-yellow-200 p-4 my-3 rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Previous Workouts</h1>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        {Object.keys(graphData).map((bodypart) => (
          <button
            key={bodypart}
            className={`p-2 min-w-[90px] rounded-lg ${selectedBodyPart === bodypart ? 'bg-yellow-400' : 'bg-yellow-200'} hover:bg-yellow-300`}
            onClick={() => setSelectedBodyPart(bodypart)}
          >
            {bodypart}
          </button>
        ))}
      </div>

      {/* Check for workout data */}
      {Object.keys(graphData).length === 0 ? (
        <div className="text-center text-lg text-gray-600">No workouts available</div>
      ) : (
        // Selected Body Part Graphs
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-yellow-400 p-4 rounded-lg">
          {Object.values(graphData[selectedBodyPart] || {}).map((exercise, index) => (
            <div key={index} className="bg-yellow-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{exercise.id}</h3>
              <div style={{ height: '300px' }}>
                <ResponsiveLine
                  data={[exercise]}
                  margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
                  axisBottom={{
                    tickValues: 'every 1 days',
                    legend: 'Date',
                    legendOffset: 36,
                    legendPosition: 'middle',
                  }}
                  axisLeft={{
                    legend: 'Weight (lbs)',
                    legendOffset: -40,
                    legendPosition: 'middle',
                  }}
                  enablePoints={true}
                  pointSize={10}
                  pointColor={{ from: 'color', modifiers: [] }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  colors={[getLineColor(exercise.id)]}
                  enableArea={false}
                  enableGridX={true}
                  enableGridY={true}
                  useMesh={true}
                  legends={[{
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 0,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.85,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  }]}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Graphs;
