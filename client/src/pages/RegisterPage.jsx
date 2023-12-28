import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function registerUser(ev) {
    //send request to api
    ev.preventDefault();
    try{
      await axios.post("/register", {
        firstName,
        lastName,
        email,
        password
      });
      alert("Registration successful. Now you can log in")
    }catch (e) {
      alert("Registration faild, Please try again later")
    }

  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto " onSubmit={registerUser}>
          <input
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={(ev) => setFirstName(ev.target.value)}
          />
          <input
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={(ev) => setLastName(ev.target.value)}
          />
          <input
            type="email"
            placeholder="Pleae enter your email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Pleae enter your password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />

          <button className="primary">Register</button>
          <div className="text-center py-2">
            Already a member?{" "}
            <Link className="underline" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
