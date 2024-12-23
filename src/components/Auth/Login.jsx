import React, { useState } from "react";

const Login = ({handleLogin}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const submiHandler=(e)=>{
      
        e.preventDefault()
        handleLogin(email,password)
        setemail("")
        setpassword("")
    }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form 
        onSubmit={(e)=>{
            submiHandler(e)
        }}
         className="flex flex-col items-center justify-center">
          <input 
          value={email}
          onChange={(e)=>{
            setemail(e.target.value)
          }}
          required
            className="bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 text-xl outline-none text-white placeholder:text-gray-400 "
            type="email"
            placeholder="Enter your email"
          />
          <input
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
          }}
          required
          className=" bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 text-xl outline-none text-white placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Enter your Password"
          />
          <button className="border-2 bg-emerald-600 rounded-full py-4 px-5 text-xl outline-none text-white border-none mt-5 placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
