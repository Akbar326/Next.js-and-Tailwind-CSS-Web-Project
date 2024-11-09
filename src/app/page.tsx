export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 px-6 sm:px-8 overflow-x-hidden">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 text-center drop-shadow-2xl hover:text-blue-200 transition duration-300 ease-in-out">
        Welcome to the Home Page
      </h1>
      <p className="text-lg sm:text-xl text-gray-100 text-center mb-6 max-w-3xl mx-auto leading-relaxed">
        This website features five pages with a clean and modern design, built using <span className="font-semibold">Tailwind CSS</span>. Experience <span className="font-semibold">responsive layouts</span>, <span className="font-semibold ">dynamic routing</span>, and smooth transitions for an improved user experience.
      </p>
      <p className="text-lg sm:text-xl text-gray-100 text-center mb-6 max-w-3xl mx-auto leading-relaxed">
        Enjoy the <span className="font-semibold">modular components</span> and seamless navigation, with features like <span className="font-semibold">loading pages</span>, error handling, and intentional delays to enhance usability.
      </p>
    </div>
  );
}
