import { redirect } from "../../commons/common-method";
export default function Card({props}){
    const renderedItems = [];
    for (let i = 0; i < props.skills.length; i++) {
        renderedItems.push(<span className="pl-2 text-slate-400" key={i}>{props.skills[i]}</span>);
    }
    
    return <div className="border border-slate-400">
        {
            props.heading &&
            <h4 className="border-b border-slate-400 text-white p-3">{props.heading}</h4>
        }

       {props.img &&  <div className="border-b border-slate-400 p-2">
            <img src={props.img} className="h-52 " />
        </div>}

        {
            props.skills.length && 
            <div className="border-b border-slate-400 p-3">
                {renderedItems}
            </div>
        }

        
       
        <div>
           {props.mainHeading && <h4 className="text-2xl p-4 pb-2">{props.mainHeading}</h4>} 
           {props.subtitle && <div className="text-l pl-4 pb-2 text-slate-400">{props.subtitle}</div> } 
           {props.link && <button className="m-4 py-1 px-7 border text-l border-solid border-purple-500"  onClick={()=> redirect(props.link)} >Live</button>}
        </div>
        

    </div>
}