import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function LoginPage(){
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    async function handleLoginSubmit(ev){
        ev.preventDefault();
        try{
            await axios.post('/login', {email, password},{withCredentials:true})
            alert("Login!")
        }catch (e) {
            alert("Login failed!")
        }
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className = "mb-64">
                <h1 className="text-4xl text-center mb-4" >Login</h1>
                <form className="max-w-md mx-auto " onSubmit={handleLoginSubmit}>
                    <input type='email' placeholder="Pleae enter your email" value={email}
                           onChange={ev=>setEmail(ev.target.value)}/>
                    <input type='password' placeholder="Pleae enter your password" value={password}
                           onChange={ev=>setPassword(ev.target.value)}/>
                    <button className="primary">Login</button>
                    <div className="text-center py-2">Don't have a account yet? <Link className="underline" to={'/register'}>register now</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}