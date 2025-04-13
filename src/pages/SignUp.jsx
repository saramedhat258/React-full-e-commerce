import { Link } from "react-router-dom"
import { assetsimg } from "../assets/images/assetsimg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useAuth } from "../context/AuthContext"

function SignUp() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [err,setErr]=useState(null)
    const navigate=useNavigate()
    const {setAuth}=useAuth()

    const handleRegister=async (e)=>{
        e.preventDefault()
        const newUser={name,email,password}
        
        try {
            const response=await axios.post('http://localhost:3000/auth/signup',newUser)
            localStorage.setItem('token',response.data.token)
            const authData = { accessToken: response.data.token, user: response.data.data.user };
            localStorage.setItem('auth', JSON.stringify(authData));
            setAuth(authData)
            navigate("/home");
        } catch (error) {
            
            if(error.response){
                error.response.status==400?
                setErr('Email is already registered, Please login')
                :setErr('Registration failed')
            }
            else{
                setErr("Registration failed:", error.response.data)
            }
        }
    }
    return (
        <>
            <section className="grid md:grid-cols-2 ">
                <section className="" >
                    <img src={assetsimg.login} alt="login image" className="md:h-screen md:w-3/4 w-full" />
                </section>
                <section className="md:mt-32 mt-10 md:w-2/3 xs:w-3/4 w-11/12 md:mx-0 mx-auto">
                    <p className="text-3xl font-medium mb-3">Sign Up</p>
                    <p className="text-zinc-500">Already have an account? <Link to='/signin' className="text-emerald-500">Sign In</Link></p>
                    <form action="" className=" mt-10" onSubmit={handleRegister}>
                        <sectionc className="flex flex-col gap-5">
                            <input type="text" placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} className="border-0 border-b-2 border-b-zinc-200 focus:border-b-black focus:ring-0 ps-0 pb-3  " />
                            <input type="text" placeholder="Email address" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="border-0 border-b-2 border-b-zinc-200 focus:border-b-black focus:ring-0 ps-0 pb-3 " />
                            <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="border-0 border-b-2 border-b-zinc-200 focus:border-b-black focus:ring-0 ps-0 pb-3 " />
                        </sectionc>
                        <div className="my-5 text text-red-600">{err&&err}</div>
                        <section className="flex gap-2 items-center mt-10">
                            <input type="checkbox" className="rounded text-zinc-500 checked:bg-black focus:ring-0"/>
                            <p className="text-zinc-500">I agree with <span className="text-black font-medium">Privacy Policy</span > and <span className="text-black font-medium">Terms of Use</span></p>
                        </section>
                        <button type="submit" className="p-2 bg-black text-center w-full text-white rounded my-10">Sign Up</button>
                    </form>
                </section>
            </section>
        </>
    )
}

export default SignUp