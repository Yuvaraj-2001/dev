import { useEffect, useReducer } from 'react';
import ContentEditor from './ContentEditor';

const initialState  = [];

function reducer(state, action) {
    switch (action.type) {
      case 'code':
            return [...state, {id: Date.now(), type: 'code', content: action.payload.code, contentType: action.payload.contentType, link: action.payload.link, source: action.payload.source }]
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
            console.log(newState);
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
        debugger
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
        debugger
        setEditor({
            type: 'content',
            payload: { content: '' },
        });
    }

    const content = allEditor.map((editor) => {
        if (editor.type === 'content') {
            return <ContentEditor key={editor.id} value={editor} index={editor.id} remove={removeIndex} handleChange={contentChange}/>
        }
    })



    return <div>

        {content}

        <div className='mt-4 flex text-slate-200 justify-center gap-8'>
            <button className='p-5 border border-purple-300' >Code Editor</button>
            <button className='p-5 border border-purple-300' onClick={addContent}>Content</button>
            <button className='p-5 border border-purple-300'>Image</button>
        </div>
    </div>;
}

export default Editor;