"use client";

import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react"; // nice error icon

export default function Error({ error, reset }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        console.error(error);
        setShow(true);
    }, [error]);

    if (!show) return null;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-6 text-center animate-fadeIn">
            <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-10 max-w-lg w-full transform transition-all duration-500 hover:scale-[1.01]">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-red-100 dark:bg-red-900/40 rounded-full">
                        <AlertCircle className="h-12 w-12 text-red-600 dark:text-red-400 animate-pulse" />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-4xl font-extrabold  dark:text-white  mb-3">
                    Oops, Something went wrong!
                </h2>

                {/* Subtitle */}
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    We couldn’t load this page. Please try again or contact support if the issue persists.
                </p>

                {/* Error Details */}
                <p className="text-sm text-red-800 font-extrabold dark:text-red-800 italic mb-6">
                    {error?.message || "Unknown error occurred"}
                </p>

                {/* Retry Button */}
                <button
                    onClick={() => reset()}
                    className="px-6 py-3 text-white font-semibold rounded-xl shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-transform transform hover:scale-105"
                >
                    🔄 Try Again
                </button>
            </div>
        </div>
    );
}
