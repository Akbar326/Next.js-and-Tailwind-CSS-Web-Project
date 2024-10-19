export default function LoadingPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 text-white">
            <h1 className="text-5xl font-bold mb-6 animate-bounce">
                Loading...
            </h1>
            <p className="text-lg font-medium animate-pulse">
                Please wait a moment.
            </p>
            <div className="mt-8 w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}
