const Navbar = () => {
  return (
    <header className="text-white bg-yellow-500 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between items-center">
        <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-yellow-500 p-2 bg-white rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-white">Fortify</span>
        </a>
        <div>
          <a className="mr-5 hover:text-yellow-700 cursor-pointer">About Me</a>
          <a className="mr-5 hover:text-yellow-700 cursor-pointer">Github</a>
          <button className="inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none hover:text-yellow-700 rounded text-base mt-4 md:mt-0">
            Demo
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6 ml-1 mt-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
