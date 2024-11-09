export default function LoadingPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 text-white px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-bounce text-center">
                Loading...
            </h1>
            <p className="text-lg sm:text-xl mb-6 font-medium animate-pulse text-center">
                Please wait a moment.
            </p>
            <div className="mt-8 w-16 h-16 sm:w-20 sm:h-20 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}
