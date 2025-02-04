import SelectTopics from "./write/selectTopics";

function WriteBlog(){
    
    return (
        <div>
            <h1>Name</h1>
            <SelectTopics topicSend={(p)=>console.log(p)}/>
        </div>
        

    )
}

export default WriteBlog;