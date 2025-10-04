import React from 'react';
import Image from "next/image";
import prisma from "../../../prisma";
import Link from "next/link";

const SnippetsPage = async () => {


    const snippets = await prisma.snippet.findMany()

    console.log("Rendered Snippets ", snippets)

    return (

        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Code Snippets</h2>

            {/* Grid layout */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {snippets.map((snippet) => {

                    // console.log(snippet)

                    // return   <h1>hello</h1>

                    return (
                        <div
                            key={snippet.id}
                            className="rounded-2xl  shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden"
                        >
                            {/*/!* Image *!/*/}
                            {/*<img*/}
                            {/*    src={snippet.image}*/}
                            {/*    alt={snippet.title}*/}
                            {/*    className="w-full h-40 object-cover"*/}
                            {/*/>*/}

                            <Image
                                src={"https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko="}
                                width={640}
                                height={480}
                                style={{objectFit: 'cover'}}
                                alt={"default Image"}
                            />

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{snippet.title}</h3>
                                <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg overflow-x-auto text-sm">
                                <code className="text-gray-800 dark:text-gray-200 font-mono">
                                  {snippet.code}
                                </code>
                              </pre>

                                <Link href={`/snippets/${snippet.id}`}>
                                    <span className="inline-block mt-3 text-amber-500 hover:underline">
                                        View More
                                    </span>
                                </Link>

                            </div>


                        </div>

                    )

                })}

            </div>
        </div>
    );
};

export default SnippetsPage;


