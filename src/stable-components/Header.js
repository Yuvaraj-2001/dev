

export default function Header(){
    return <div className="p-5 bg-gray-800">
        <div className="flex justify-between">
            <div className="text-white text-2xl">YUVARAJ</div>
            <nav className="text-white">
                <ul className="flex justify-start gap-2 text-slate-300">
                    <li className="pr-2 hover:text-white"><span className="text-purple-500">#</span>Home</li>
                    <li className="pr-2 hover:text-white"><span className="text-purple-500">#</span>Portfolio</li>
                    <li className="pr-2 hover:text-white"><span className="text-purple-500">#</span>Handcode Blogs</li>
                    <li className="pr-2 hover:text-white"><span className="text-purple-500">#</span>E-books</li>
                    <li className="pr-2 hover:text-white"><span className="text-purple-500">#</span>Connect Me</li>
                </ul>
            </nav>
        </div>

        <div className="absolute left-2.5">
            <div className="w-1 h-60 bg-slate-300"></div>
            <div>github</div>
            <div>stackblitz</div>
            <div>medium</div>
        </div>
    </div>;
}