import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";

export default function Layout(){
    return (
        <dev className = "p-4 flex flex-col min-h-screen">
            <Header />
            <Outlet />
        </dev>
    );
}