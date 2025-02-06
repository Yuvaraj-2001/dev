import { useState, useReducer, useEffect } from "react";
import SelectTopics from "./write/selectTopics";
import ContentEditor from "./write/ContentEditor";
import { usePostCollectionMutation, usePostBlogMutation } from "../store/apis/blog";


const initialState = { topicId: null, collectionTitle: null, blogTitle: null };
function reducer(state, action) {
    switch (action.type) {
      case 'topic':
        return { ...state, topicId: action.payload };
      case 'collection':
        return { ...state, collectionTitle: action.payload };
      case 'blog':
        return { ...state, blogTitle: action.payload };
      case 'reset':
        return initialState;
      default:
        throw new Error('Unknown action type');
    }
}

function WriteBlog(){


    const [ sendCollections, collections ] = usePostCollectionMutation();
    const [ sendBlog, blogs ] = usePostBlogMutation();


    const [inputState, dispatch] = useReducer(reducer, initialState);
    const [divContent, setDivContent] = useState();

    // useEffect(() => {

    // }, [])

    const logChange = (ref) => {
        console.log("ref", ref);  // Logs the selected topic id when a topic is selected from the dropdown
        setDivContent(ref);
    }

    const handleTopicChange = (topic) => {
        dispatch({ type: 'topic', payload: topic.id });
    };

    const handleNavTitle = (ev) => {
        dispatch({ type: 'collection', payload: ev.target.value });
    };

    const handleBlogTitle = (ev) => {
        dispatch({ type: 'blog', payload: ev.target.value });

    };

    const handleSubmit = () => {
        const data = { ...inputState, blogContent: [divContent?.outerHTML]};
        console.log(data);
        if(!inputState.topicId || !inputState.blogTitle || !inputState.collectionTitle) {
            alert("Please fill out all required fields");  // Alert user if required fields are not filled out.
            return;
        }

        const sendCollectionAndPublish = async () => {
           const collectionResponse = await sendCollections(data);
           const collectionID = collectionResponse;
           const blogResponse = await sendBlog(collectionID);
            console.log(blogResponse);
            dispatch({ type:'reset' });  // Reset the form state after publishing the blog.
        }
        sendCollectionAndPublish();

        // console.log("click me ", divContent)/
    };

    return (
        <div>
            <SelectTopics topicSend={handleTopicChange}/>

            <div className="text-1.5r my-2 mt-3">Navigation Title:</div>
            <input className="w-full p-2 border text-black text-1.5r" type="text" value={inputState.collectionTitle || ''} onInput={ handleNavTitle} />
            <div className="text-1.5r my-2 mt-3">Blog title:</div>
            <input className="w-full p-2 border text-black text-1.5r" type="text" value={inputState.blogTitle || ''} onInput={handleBlogTitle} />

            <ContentEditor handleChange={logChange}/>
            <button className="w-full bg-purple-500 text-white font-bold py-5 px-4 rounded-lg hover:bg-purple-600 text-2r" onClick={handleSubmit}>
                Submit blog
            </button>
            <br/>
            <br/>

        </div>
        

    )
}

export default WriteBlog;