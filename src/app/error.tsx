"use client";

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 text-white px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
                Oops!
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-center">
                Something went wrong. Please try again later.
            </p>
        </div>
    );
}
