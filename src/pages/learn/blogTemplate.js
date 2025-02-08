import DOMPurify from 'dompurify';
import { Editor } from "@monaco-editor/react";
import {redirect} from '../../commons/common-method'

function BlogTemplate({blog, heading}){



    const handleEditorDidMount = (editor) => {
        autoResize(editor);
      };

      
    const blogContent = blog.map((b) => { 
        if(b.type === 'content'){
            const cleanHtml = DOMPurify.sanitize(b.content);
            return <div className='blog-template-div'>
                <div key={b.id} dangerouslySetInnerHTML={{ __html: cleanHtml }}></div>
            </div>;
        }else if(b.type === 'code'){
            return <div>
                 <Editor  theme="vs-dark" language={b.codeType}  value={b.code}  onMount={handleEditorDidMount}/>
                    <div className='flex justify-center items-center gap-4'>
                      <span> Source:</span> <button className='p-3 text-1r border border-purple-400 rounded' onClick={()=> redirect(b.link)}>{b.btn}</button>
                    </div>
                </div>
        }
    });

    const autoResize = (editor) => {
        const updateHeight = () => {
          const contentHeight = editor.getContentHeight();
          editor.layout({ width: "100%", height: contentHeight });
        };
    
        updateHeight(); // Initial height update
        editor.onDidChangeModelContent(updateHeight); // Adjust on content change
    };

    return <div className="p-5">
        <h1 className="text-purple-400 text-2.5r py-5">{heading}</h1>
       {blogContent}
    </div>
}

export default BlogTemplate;