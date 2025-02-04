import { useState } from "react";
import SelectTopics from "./write/selectTopics";
import ContentEditor from "./components/ContentEditor";

function WriteBlog(){

    const [topicSelected, setTopic] = useState();


    const logChange = (ref) => {
        console.log("ref", ref);  // Logs the selected topic id when a topic is selected from the dropdown
    }



    return (
        <div>
            {topicSelected}
            <SelectTopics topicSend={(t)=> setTopic(t.id)}/>
            Navigation Title: <input type="text" />

            <ContentEditor handleChange={logChange}/>
            
        </div>
        

    )
}

export default WriteBlog;