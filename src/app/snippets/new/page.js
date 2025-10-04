"use client"


import React, {useActionState} from 'react';
import * as actions from "@/actions";

const SnippetCreatePage = () => {

    const [formState, action] = useActionState(actions.createSnippet, {message: "", title: "", code: ""})

    console.log("FORM STATE MESSAGE ", formState)

    return (
        <form
            action={action}
            className="w-full max-w-md mx-auto mt-10 p-6 bg-white/80 backdrop-blur-md border border-amber-200 shadow-lg rounded-2xl animate-fadeIn"
        >
            <h3 className="text-2xl font-semibold text-amber-900 mb-6 text-center">
                ✨ Create a Snippet
            </h3>

            <div className="flex flex-col gap-6">
                {/* Title */}
                <div className="flex flex-col">
                    <label
                        htmlFor="title"
                        className="text-sm font-medium text-gray-700 mb-2"
                    >
                        Title
                    </label>
                    <input
                        defaultValue={formState?.title || ""}
                        type="text"
                        id="sahan"
                        name="title"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
                    />

                    {formState.errors?.title && (
                        <span className="mt-1 text-sm text-red-600">
            {formState.errors.title}
          </span>
                    )}

                </div>

                {/* Code */}
                <div className="flex flex-col">
                    <label
                        htmlFor="code"
                        className="text-sm font-medium text-gray-700 mb-2"
                    >
                        Code
                    </label>
                    <textarea
                        defaultValue={formState?.code || ""}
                        id="hode"
                        name="code"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
                    />

                    {formState.errors?.code && (
                        <span className="mt-1 text-sm text-red-600">
                            {formState.errors.code}
                         </span>
                    )}


                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-amber-500 text-white font-semibold rounded-xl shadow-md hover:bg-amber-600 hover:shadow-lg active:scale-95 transition-all duration-300 animate-bounceOnce"
                >
                    🚀 Submit
                </button>


                {/* General error */}
                {formState.errors?.general && (
                    <div className="mt-4 p-3 rounded-lg bg-red-100 text-red-700 text-center text-sm">
                        {formState.errors.general}
                    </div>
                )}

            </div>


        </form>
    );
};

export default SnippetCreatePage;


