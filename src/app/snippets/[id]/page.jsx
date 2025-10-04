import React from 'react';
import {connectDB} from "@/lib/helpers";
import {notFound} from "next/navigation";
import {ObjectId} from "bson";
import Link from "next/link";
import * as actions from "@/actions/index"

const SnippetsDetailPage = async ({params, searchParams}) => {

    let {id} = await params
    console.log("ID ", id)

    // 1. Validate the ID format before querying Prisma
    if (!ObjectId.isValid(id)) {
        console.warn("Invalid ObjectId format:", id);

    }

    // const search=await searchParams
    const snippet = await prisma.snippet.findUnique({where: {id: id}})

    // await new Promise ((resolve, reject)=>{
    //     setTimeout(()=>{
    //        resolve()
    //     },2000)
    // })

    // if(snippet){
    //     // Throw an intentional error for testing
    //     throw new Error("This is a test error to show error.jsx");
    // }
    // return notFound();

    console.log("Founded Snippet Found: " + snippet.code);
    console.log("Founded Snippet Found: " + snippet.title);

    const deleteSnippetAction=actions.deleteSnippet.bind(null,id);

    return (

        <div className="max-w-4xl mx-auto px-6 py-10">
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {snippet?.title || "Untitled Snippet"}
                    </h2>
                    <div className="flex gap-3">

                        <Link
                            href={`/snippets/${id}/edit`}
                            className="px-4 py-2 bg-[#19183B] hover:bg-[#B95E82] text-white rounded-lg shadow transition"
                        >
                            ✏️ Edit
                        </Link>

                        <form
                            action={deleteSnippetAction}
                        >
                            <button type={"submit"} className={"px-4 py-2  bg-[#37353E] hover:bg-[#5D2F77] text-white rounded-lg shadow transition"}>
                                🗑 Delete
                            </button>
                        </form>


                    </div>
                </div>
                {/* Code Block */}
                <div className="bg-gray-900 text-gray-100 rounded-xl shadow-inner p-4 overflow-x-auto">
                  <pre className="text-sm leading-relaxed p-3">
                    <code>{snippet?.code}</code>
                  </pre>
                </div>
            </div>
        </div>
    );
};

export default SnippetsDetailPage;


