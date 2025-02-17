
import { useSearchParams } from "react-router-dom";


function Collection({allCollection, blogSelect}){
    const [searchParams, setSearchParams] = useSearchParams();
    const learnID = atob(searchParams.get("blog"));

    const content = allCollection.map((c)=>{
         return <div className={"text-left mt-4 text-2.5r " +( c.id == learnID ? 'text-purple-500 bg-slate-200 ' : 'text-slate-200')} onClick={()=>blogSelect(c.id)}>{c.title}</div>
    })
    // return JSON.stringify(allCollection);
    return <div className="p-3 pl-0">
        <div className="bg-slate-200"></div>
        {content}
    </div>

}

export default Collection;