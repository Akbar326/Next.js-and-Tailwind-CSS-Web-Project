"use client";

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 text-white">
            <h1 className="text-6xl font-bold mb-4">
                Oops!
            </h1>
            <p className="text-xl mb-6">
                Something went wrong. Please try again later.
            </p>
        </div>
    );
}
