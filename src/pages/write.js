import { useState } from "react";
import SelectTopics from "./write/selectTopics";
import ContentEditor from "./components/ContentEditor";

function WriteBlog(){

    const [topicSelected, setTopic] = useState();
    const [divContent, setDivContent] = useState();
    const [navTitle, setNavTitle] = useState();
    const [blogTitle, setBlogTitle] = useState();

    const logChange = (ref) => {
        console.log("ref", ref);  // Logs the selected topic id when a topic is selected from the dropdown
        setDivContent(ref);
    }

    const handleNavTitle = (ev) => {
      
        console.log(ev.target.innerText);

    }
    const handleSubmit = () => {
        console.log("click me ", divContent)
    }



    return (
        <div>
            {topicSelected}
            <SelectTopics topicSend={(t)=> setTopic(t.id)}/>
            Navigation Title: <input className="w-100" type="text" value={navTitle} onInput={ handleNavTitle} />
            Blog title: <input type="text"  />

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