export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 text-white">
            <h1 className="text-6xl font-bold mb-4">
                404
            </h1>
            <h2 className="text-2xl font-semibold mb-6">
                Page Not Found
            </h2>
            <p className="text-lg mb-8">
                Sorry, the page you are looking for does not exist.
            </p>
        </div>
    );
}
