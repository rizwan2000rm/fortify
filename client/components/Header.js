const Header = () => {
  return (
    <div>
      <header className="text-white bg-yellow-500 body-font p-5">
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
      </header>
    </div>
  );
};

export default Header;
