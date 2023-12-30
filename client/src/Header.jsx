import {Link} from "react-router-dom";
import {UserContext} from "./UserContext.jsx";
import {useContext} from "react";

export default function Header() {
    const {user} = useContext(UserContext);
    return (
            <div>
                <header className=' flex justify-between'>
                    <a href="" className="flex items-center gap-1">
                        {/* classname -rotate-90 将图标旋转九十度 */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                             className="w-8 h-8 -rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768
             59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                        {/* font-bold text-xl 粗黑体 加大 */}
                        <span className="font-bold text-xl">EzSalon</span>
                    </a>

                    {/*  search bar 加边框*/}
                    <div className='flex gap-2 border border-gray-300 py-2 px-4 rounded-full shadow-md shadow-gray-300'>
                        <div>Any Treatment</div>
                        <div className="border-l border-gray-300"></div>
                        <div>location</div>
                        <div className="border-l border-gray-300"></div>
                        <div>Date</div>
                        <div className="border-l border-gray-300"></div>
                        <div>time</div>
                        {/*red the search bar, text part keep white  round the button */}
                        <button className="bg-red-500 text-white p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>

                    <Link to="/login" className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 '>
                        {/*burger bar*/}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        {/*user icon*/}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </Link>
                </header>
            </div>
    )
}