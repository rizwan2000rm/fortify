const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-16 md:flex-row md:justify-between flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/hero-image.webp"
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hassle free password management
          </h1>
          <p className="mb-8 leading-relaxed">
            Store all your passwords without sacrificing security. Removes
            obstacles, letting you get back to the things you love most.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Get Started
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Demo Here
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
