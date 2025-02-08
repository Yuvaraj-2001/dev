import { useState, useReducer } from "react";
import { Editor } from "@monaco-editor/react";

const reducer = (state, action) =>{
    switch (action.type) {
        case 'codeType':
            return {...state, codeType: action.payload};
        case 'btn':
            return {...state, btn: action.payload};
        case 'code':
            return {...state, code: action.payload};
        case 'link':
            return {...state, link: action.payload};
        default:
            return state;
    }
};

function CodeEditor({ value, onUpdate }) {
    console.log('intital', value);
    const [codeReducerVal, setCodeReducerVal] = useReducer(reducer, value);

    const handleEditorChange = (newValue) => {
        console.log("onChange - New Code:", newValue);
        setCodeReducerVal({
            type: 'code',
            payload: newValue,
        });
    };

    const handleEditorDidMount = (editor, monaco) => {
        editor.onDidBlurEditorText(() => {
            const updatedCode = editor.getValue(); // Get the latest value from editor
            console.log("onBlur - Updated Code:", updatedCode);
            onUpdate(updatedCode); // Call parent update function when blur event occurs
        });
    };

    return (
        <div className="border border-slate-200 p-4 mt-3">
            <div className="flex gap-3 cursor-pointer mb-3">
                <div className="border border-purple-400 p-4">HTML</div>
                <div className="border border-purple-400 p-4">CSS</div>
                <div className="border border-purple-400 p-4">JAVASCRIPT</div>
                <div className="flex">
                    Link: <input type="text" className="w-full text-black text-1.5r" />
                    BTN: <input type="text" className="w-full text-black text-1.5r" />
                </div>
            </div>
            <Editor
                height="300px"
                theme="vs-dark"
                language={value.codeType}
                value={codeReducerVal.code}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
            />
        </div>
    );
}

export default CodeEditor;
