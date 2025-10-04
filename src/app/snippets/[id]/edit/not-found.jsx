import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center px-4">
            <h1 className="text-6xl font-extrabold text-amber-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Snippet Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                The snippet you are Trying to Edit  for doesn’t exist or the ID is invalid.
            </p>
            <Link
                href="/snippets"
                className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600 transition"
            >
                Go Back to Snippets
            </Link>
        </div>
    );
}