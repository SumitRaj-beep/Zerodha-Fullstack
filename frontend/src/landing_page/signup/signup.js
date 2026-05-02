
import axios from 'axios';
import React, { useState } from "react";





function Signup() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState(""); 
const handleSignup = async (e) => {
  e.preventDefault();
 try{
  const res = await axios.post("http://localhost:3002/signup", {
    email,
    password,
  });

  localStorage.setItem("token", res.data.token);
 window.location.href = `http://localhost:3001?token=${res.data.token}`;
 }


 catch(err){
   console.error("Signup failed:", err.response?.data);
 }
// 🔥 update axios immediately


};

return (
  <>

  <div class='sign'>
    <form onSubmit={handleSignup}>
      <h4>Enter your details</h4>
      <h3>Enter Email</h3>
      <input type="email" placeholder="email"   onChange={(e) => setEmail(e.target.value)}/>
      
      <h3>Enter Password</h3>
      <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Submit</button>

    </form>
    </div>
    
  </>
);
}

export default Signup;