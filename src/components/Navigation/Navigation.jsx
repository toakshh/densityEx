import Logo from "../../assets/logo/logo.png"

const Navigation = () => {

    return (
        <nav className="bg-white-200 text-black px-16 py-8 w-full flex items-center justify-between sticky ">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-4">
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-12 w-12 rounded-full hover:scale-125 ease-in-out duration-500"
                />
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6 hover:underline-offset-2">
                <a href="#" className=" p-2 rounded-md hover:text-yellow-600 hover:underline hover:shadow-xl transition-all">Emotions</a>
                <a href="#" className=" p-2 rounded-md hover:text-yellow-600 hover:underline hover:shadow-xl transition-all">Manifesto</a>
                <a href="#" className=" p-2 rounded-md hover:text-yellow-600 hover:underline hover:shadow-xl transition-all">Self Awareness Test</a>
                <a href="#" className=" p-2 rounded-md hover:text-yellow-600 hover:underline hover:shadow-xl transition-all">Work With Us</a>
            </div>

            {/* Download App Button */}
            <div className="">
                <button className="bg-black hover:bg-yellow-200 hover:text-black text-white py-2 px-4 rounded-full transition-colors duration-500">
                    Download App
                </button>
            </div>
        </nav>
    );
}

export default Navigation