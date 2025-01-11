import { NavLink } from "react-router-dom";

// Function to determine the active class for NavLink
const getActiveClass = ({ isActive }) => {
    return isActive ? "text-purple-500" : "hover:text-white";
};

export default function Header() {
    return (
        <div className="w-full fixed bg-gray-800 border-b border-double border-purple-500">
            <div className="container mx-auto">
                <div className="w-full py-5 mob:px-8 des:px-10">
                    <div className="flex justify-between items-center">
                        <div className="text-white text-h1">
                            <NavLink to="/" className="hover:text-white">
                                YUVARAJ
                            </NavLink>
                        </div>
                        <nav className="text-white text-s1 mob:hidden">
                            <ul className="flex justify-start gap-8 text-slate-300 cursor-pointer">
                                <li>
                                    <NavLink to="/" className={getActiveClass}>
                                        <span className="text-purple-500">#</span> Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/portfolio" className={getActiveClass}>
                                        <span className="text-purple-500">#</span> Portfolio
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={getActiveClass}>
                                        <span className="text-purple-500">#</span> About Me
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blogs" className={getActiveClass}>
                                        <span className="text-purple-500">#</span> Handcode Blogs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/ebooks" className={getActiveClass}>
                                        <span className="text-purple-500">#</span> E-books
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/connect" className={getActiveClass}>
                                        <span className="text-purple-500">#</span> Connect Me
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="absolute left-2.5 flex flex-col items-center gap-1 mob:hidden">
                        <div className="w-1 h-60 bg-slate-400 rounded-sm"></div>
                        <div className="pt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                className="bi bi-github"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                className="bi bi-medium"
                                viewBox="0 0 16 16"
                            >
                                <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
