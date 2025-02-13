import DOMPurify from 'dompurify';
import { Editor } from "@monaco-editor/react";
import { redirect } from '../../commons/common-method';

function BlogTemplate({ blog, heading }) {
    
    const handleEditorDidMount = (editor) => {
        autoResize(editor);
    };

    const blogContent = blog.map((b) => { 
        if (b.type === 'content') {
            const cleanHtml = DOMPurify.sanitize(b.content);
            return (
                <div className='blog-template-div' key={b.id}>
                    <div dangerouslySetInnerHTML={{ __html: cleanHtml }}></div>
                </div>
            );
        } else if (b.type === 'code') {
            return (
                <div key={b.id}>
                    <Editor 
                        theme="vs-dark" 
                        language={b.codeType}  
                        value={b.code}  
                        onMount={handleEditorDidMount} 
                        options={{ readOnly: true }} 
                    />
                    <div className='flex justify-center items-center gap-4'>
                        <span>Source:</span>
                        {b.link && (
                            <button 
                                className='p-3 text-1r border border-purple-400 rounded' 
                                onClick={() => redirect(b.link)}
                            >
                                {b.btn}
                            </button>
                        )}
                    </div>
                </div>
            );
        } else if (b.type === 'image') {
            return (
                <div className='blog-template-div flex flex-col items-center' key={b.id}>
                   <div className="w-[500px] h-[350px] overflow-hidden border border-gray-300 rounded-lg shadow-sm">
                        <img 
                            src={b.image} 
                            alt="Uploaded" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    {b.btn && (
                        <button 
                            className='mt-2 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600' 
                            onClick={() => b.link && redirect(b.link)}
                        >
                            {b.btn}
                        </button>
                    )}
                </div>
            );
        }

        return null; // In case of an unknown type
    });

    const autoResize = (editor) => {
        const updateHeight = () => {
            const contentHeight = editor.getContentHeight();
            editor.layout({ width: "100%", height: contentHeight });
        };
    
        updateHeight(); // Initial height update
        editor.onDidChangeModelContent(updateHeight); // Adjust on content change
    };

    return (
        <div className="p-5">
            <h1 className="text-purple-400 text-2.5r py-5">{heading}</h1>
            {blogContent}
        </div>
    );
}

export default BlogTemplate;
