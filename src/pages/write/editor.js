import { useEffect, useReducer } from 'react';
import ContentEditor from './ContentEditor';
import CodeEditor from './CodeEditor';

const initialState  = [];

function reducer(state, action) {
    switch (action.type) {
      case 'code':
            return [...state, {id: Date.now(), type: 'code', code: action.payload.code, codeType: action.payload.codeType || '', link: action.payload.link || '', btn: action.payload.btn || '' }]
    
      case 'codeEdit':
        return state.map(item =>
            item.id === action.id ? { ...item, code: action.payload.code, codeType: action.payload.codeType || '', link: action.payload.link || '', btn: action.payload.btn || '' } : item
          );
      case 'contentEdit':
        return state.map(item =>
            item.id === action.id ? { ...item, content: action.payload.content } : item
          );
      case 'content':
            return [...state, {id: Date.now(), type: 'content', content: action.payload.content  }]
      case 'image':
            return [...state, {id: Date.now(), type: 'image', image: action.payload.image, link: action.payload.link, source: action.payload.source}]
       case 'remove':
            const newState = state.filter(item => item.id !== action.payload.id);
            return newState;
      case 'reset':
        return initialState;
      default:
        throw new Error('Unknown action type');
    }
}

function Editor({ blurChange }){

    const [allEditor, setEditor] = useReducer(reducer, initialState);

    const contentChange = (value, index) => {
        setEditor({
            type: 'contentEdit',
            payload: { content: value },
            id: index
        });
    };

    useEffect(()=>{
        blurChange(allEditor);
    }, [allEditor])

    const removeIndex = (id) => {
        setEditor({
          type: "remove",
          payload: { id }
        });
        blurChange(allEditor);
    };

    const addContent = () => {
        setEditor({
            type: 'content',
            payload: { content: '' },
        });
    }

    const addCodeEditor = () => {
        setEditor({
            type: 'code',
            payload: { code: '', codeType: 'javascript', link:'', btn: ''  },
        });
    }

    const editFromCodeEditor = (value) => {
        
        console.log('parent', value);


    };
    console.log(allEditor);
    const content = allEditor.map((editor) => {
        if (editor.type === 'content') {
            return <ContentEditor key={editor.id} value={editor} index={editor.id} remove={removeIndex} handleChange={contentChange}/>
        }
        if (editor.type === 'code') {
            return <CodeEditor key={editor.id} value={editor} index={editor.id} remove={removeIndex} onUpdate={editFromCodeEditor}/>
        }
    })



    return <div>

        {content}

        <div className='mt-4 flex text-slate-200 justify-center gap-8'>
            <button className='p-5 border border-purple-300' onClick={addCodeEditor} >Code Editor</button>
            <button className='p-5 border border-purple-300' onClick={addContent}>Content</button>
            <button className='p-5 border border-purple-300'>Image</button>
        </div>
    </div>;
}

export default Editor;