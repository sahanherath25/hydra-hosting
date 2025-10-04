import React from 'react';
import {notFound} from "next/navigation";
import {ObjectId} from "bson";
import prisma from "../../../../../prisma";
import SnippetEditForm from "@/components/SnippetEditForm";


const SnippetEditPage = async ({params, searchParams}) => {

    const {id} = await params

    if (!ObjectId.isValid(id)) {
        console.warn("Invalid ObjectId format:", id);
        notFound()

    }
    const foundSnippet = await prisma.snippet.findFirst({where: {id}})

    return (

        <div
            className="max-w-4xl mx-auto p-6 mt-8 rounded-2xl shadow-lg bg-gradient-to-br from-[#1E1E2F] to-[#2C2C3E] border border-gray-700"
        >
            <h2 className="text-2xl font-bold mb-4 text-white text-center tracking-wide">
                ✨ Edit Your Snippet
            </h2>

            <SnippetEditForm snippet={foundSnippet}/>

        </div>
    );
};

export default SnippetEditPage;


//
// {/*TODO Form Element 1*/}
// <div className="flex flex-col">
//     <label htmlFor="firstName">First Name </label>
//     <input className={"border max-w-xl"} type="text" name={"firstName"}/>
// </div>
// {/*TODO Form Element 2 */}
// <div className="flex flex-col">
//     <label htmlFor="lasstName">Last  Name </label>
//     <input className={"border max-w-xl"} type="text" name={"lastName"}/>
// </div>