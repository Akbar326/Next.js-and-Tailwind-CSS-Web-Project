const ServicesPage = () => {
  if (process.env.NODE_ENV === 'development') {
    throw new Error("This is an error");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-700 drop-shadow-lg hover:text-blue-900 transition duration-300 ease-in-out">
        Our Services
      </h1>
      <p className="text-xl font-normal text-gray-100 mb-8 px-4 text-center">
        Here are the services we offer.
      </p>
    </div>
  );
};

export default ServicesPage;
