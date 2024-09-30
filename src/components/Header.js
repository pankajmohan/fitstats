import logo from '../tree-logo.jpeg';

function Header() {
    return (
        <header className="bg-yellow-200 p-4">
            <div className="flex justify-center md:justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 w-8 mr-2 mix-blend-multiply" />
                    <span className="text-sm md:text-xl font-bold">FitStats</span>

                </div>
                <div>
                <span className="text-lg md:text-3xl font-bold  hidden md:block">FitStats</span>
                </div>
                <a href="/contact" className="text-blue-500 hover:text-blue-700 hidden md:block">Welcome,User</a>
            </div>
        </header>
    );
}

export default Header;
