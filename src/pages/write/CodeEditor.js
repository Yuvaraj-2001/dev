import { useState } from "react";
import { Editor } from "@monaco-editor/react";



function CodeEditor({ value, onUpdate }) {
    console.log(value);
    const [code, setCode] = useState(value.code);

    const handleEditorChange = (newValue) => {
        console.log("onChange - New Code:", newValue);
        setCode(newValue);
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
                value={code}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
            />
        </div>
    );
}

export default CodeEditor;
