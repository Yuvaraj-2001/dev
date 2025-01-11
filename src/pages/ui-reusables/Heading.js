import { BsArrowRight } from "react-icons/bs";

export default function Heading(prop){

    return <div className="py-2r flex justify-between items-center">
        <div className="flex items-center gap-6 ">
            <h2 className="text-4r"><span className="text-purple-500">{prop.icon}</span> {prop.text}</h2>
            {prop.line && <div className="h-1 w-96 bg-slate-200 rounded-sm"></div>}
        </div>
       
        {prop.arrow && 
        <div className="flex gap-3 items-center cursor-pointer">
            <span className="text-2r pl-1r">{prop.arrow}</span>
            <span>
                <BsArrowRight size={30}/>
            </span>
        </div>
        }
    </div>
}