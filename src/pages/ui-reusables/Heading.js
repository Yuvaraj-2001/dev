export default function Heading(prop){

    return <div className="flex justify-between ">
        <div className="flex items-center gap-6 ">
            <h2 className="text-2xl"><span className="text-purple-500">{prop.icon}</span> {prop.text}</h2>
            {prop.line && <div className="h-1 w-96 bg-slate-200 rounded-sm"></div>}
        </div>
       
        {prop.arrow && <div className="flex gap-3">
            <span>{prop.arrow}</span>
            <span>{'--->'}</span>
        </div>}
    </div>
}