"use server"

import {redirect} from "next/navigation";
import {connectDB} from "@/lib/helpers";
import {c} from "react/compiler-runtime";
import {revalidatePath} from "next/cache";

// export const createSnippet = async (formState, formData) => {
//
//     console.log("FORM State  ", formData)
//     console.log("FORM Data  ", formData)
//
//     // TODO Exception handling For Other Errors
//     try {
//
//         // TODO Getting Values from the Form
//         const title = formData.get("title")
//         const code = formData.get("code")
//
//         const currentFormState = {title, code}
//
// //    TODO Checking If title and Code is String && empty
//         if (typeof title === "string" && title.length < 3) {
//             return {...currentFormState, message: "Title Must At Least Have 3 Characters"}
//         }
//
//         if (typeof code === "string" && code.length < 10) {
//             return {...currentFormState, message: " Code Must At Least Have 3 Characters"}
//         }
//
//         const createdSnippet = await prisma.snippet.create({
//             data: {
//                 title,
//                 code
//             }
//         })
//         console.log("Snippet ", createdSnippet)
//
//     } catch (err) {
//
//         if(err instanceof Error) {
//
//             console.log("Error ", err)
//             return { message: err.message }
//         }else {
//
//             return { message: "Something Went Wrong" }
//         }
//
//     }
//     redirect("/")
//
// }

// Server action for Form fields specific
export const createSnippet = async (formState, formData) => {

    console.log("FORM State  ", formData)
    console.log("FORM Data  ", formData)

    try {
        // TODO Getting Values from the Form
        const title = formData.get("title")
        const code = formData.get("code")
        const currentFormState = {title, code}

        // TODO Creating a Error Object
        const errors = {};


        if(!title){
            errors.title = "Title is missing";
            return { errors,...currentFormState };
        }

        if(!code){
            errors.code = "Code  is missing";
            return { errors,...currentFormState };
        }


//    TODO Checking If title and Code is String && empty
        if (typeof title === "string" && title.length < 3) {
            // TODO If There is error adding property for Error
            errors.title = "Title must be at least 3 characters";
            // return {...currentFormState, message: "Title Must At Least Have 3 Characters"}
        }

        if (typeof code === "string" && code.length < 10) {
            errors.code = "Code that entered is not valid.Less than 3 characters";
            // return {...currentFormState, message: " Code Must At Least Have 3 Characters"}
        }

        if (Object.keys(errors).length > 0) {
            return { errors,...currentFormState };
        }

        const createdSnippet = await prisma.snippet.create({
            data: {
                title,
                code
            }
        })
        console.log("Snippet ", createdSnippet)

    } catch (err) {

        if(err instanceof Error) {

            console.log("Error ", err)
            return { errors: { general: err} };
        }else {

            return { message: err }
        }

    }

    // TODO If we create  a snippet that should be show and home page need to be re-render
    revalidatePath(`/snippets`)

    redirect("/snippets")

}

export const editSnippet = async (snippetId, updatedCode) => {

    console.log("Edit Snippet Called")
    console.log("Edited Snippet Id Code ", snippetId)
    console.log("Updated Code ", updatedCode)

    await prisma.snippet.update(
        {
            where: {id: snippetId},
            data: {code: updatedCode}
        })

    revalidatePath(`/snippets/${snippetId}`)
    redirect(`/snippets/${snippetId}`)

}

export const deleteSnippet = async (snippetId, updatedCode) => {

    await prisma.snippet.delete({
        where: {id: snippetId}
    })

    // TODO If we delete a snippet home page need to be re-render again

    revalidatePath(`/snippets`)

    // TODO Redirect User To the Main Page
    redirect(`/snippets`)

}


// export const createSnippet = async (formState,formData)=> {
//
//     console.log("FORM DATA ", formData)
//
//     // TODO Getting Values from the Form
//     const title = formData.get("title")
//     const code = formData.get("code")
//
//     await connectDB()
//
//     // TODO Save Values in the DDatabase
//     try {
//         const createdSnippet = await prisma.snippet.create({
//             data: {
//                 title,
//                 code
//             }
//         })
//         console.log("Snippet ", createdSnippet)
//
//     } catch (err) {
//         console.log("Error ", err)
//     }
//     //   TODO Redirect User to Home
//     redirect("/snippets")
// }

