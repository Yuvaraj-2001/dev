import { redirect } from "../../commons/common-method";
export default function Card(props){
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

        
       
        <div className="p-4">
           {props.mainHeading && <h4 className="text-2xl pb-2">{props.mainHeading}</h4>} 
           {props.subtitle && <span className="text-l pb-2 text-slate-400">{props.subtitle}</span> } 
           <br/>
            <button className="mt-2 py-1 px-7 border text-l border-solid border-purple-500"  onClick={()=> redirect(props.link)} >{props.btnText}</button>
        </div>
        

    </div>
}