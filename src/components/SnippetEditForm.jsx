"use client"

import React, {useState} from 'react';
import {Editor} from "@monaco-editor/react";
import * as actions from "@/actions/index"
import {motion} from "framer-motion";

const SnippetEditForm = ({snippet}) => {

    const [code, setCode] = useState(snippet.code)
    const onEditorChangeHandler = (currentCode) => {
        setCode(currentCode)
    }
    // TODO preloaded version of server action
    const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code)

    return (

        <motion.div
            initial={{scale: 0.98, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{duration: 0.4, delay: 0.2}}
            className="rounded-xl overflow-hidden shadow-inner border border-gray-600"
        >
            {/*TODO Editor*/}

            <Editor
                height={"40vh"}
                theme={"vs-dark"}
                language={"javascript"}
                defaultValue={snippet.code}
                onChange={onEditorChangeHandler}
            />

            {/* Form */}
            <form action={editSnippetAction} className="mt-6 flex justify-center">
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, backgroundColor: "#5D2F77" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                    💾 Save Changes
                </motion.button>
            </form>

        </motion.div>


    )
}

export default SnippetEditForm;


