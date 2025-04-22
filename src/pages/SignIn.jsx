import axios from "axios"
import { assetsimg } from "../assets/images/assetsimg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function SignIn() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [err,setErr]=useState(null)
    const navigate=useNavigate()
    const {setAuth,auth}=useAuth()
    console.log(auth?.user?.cart)

    const handleLogin=async(e)=>{
        e.preventDefault()
        const userdata={email,password}
        if(email&&password){
            try {
                const response=await axios.post('http://localhost:3000/auth/login',userdata)
                const authData = { accessToken: response.data.token, user: response.data.data.user };
                localStorage.setItem('auth', JSON.stringify(authData));
                setAuth(authData)
                setErr(null)
                navigate('/home')
            } catch (error) {
                if(error.response){
                    switch(error.response.status){
                        case 400:
                            setErr('Please provide email and password')
                            break
                        case 401:
                            setErr('Incorrect email or password, Please try again')
                            break
                        case 404:
                            setErr('No account found with this email. Please sign up first.')
                            break
                        default:
                            setErr('Something went wrong. Please try again later.')
                            break
                        }
                    }
                }
        }
        else{
            setErr('Please Enter Email and Password')
        }
    }
    return (
        <>
            <section className="grid md:grid-cols-2 ">
                <section className="">
                    <img src={assetsimg.login} alt="login image" className="md:h-screen md:w-3/4 w-full" />
                </section>
                <section className="md:mt-40 mt-10 md:w-2/3 xs:w-3/4 w-11/12 md:mx-0 mx-auto">
                    <p className="text-3xl font-medium mb-3">Sign In</p>
                    <p className="text-zinc-500">Don’t have an accout yet? <Link to='/' className="text-emerald-500">Sign Up</Link></p>
                    <form action="" className=" mt-10" onSubmit={handleLogin}>
                        <sectionc className="flex flex-col gap-5">
                            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Your username or email address" className="border-0 border-b-2 border-b-zinc-200 focus:border-b-black focus:ring-0 ps-0 pb-3 " />
                            <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" className="border-0 border-b-2 border-b-zinc-200 focus:border-b-black focus:ring-0 ps-0 pb-3 " />
                        </sectionc>
                        <div className="my-5 text text-red-600">{err&&err}</div>
                        <section className="flex justify-between mt-10">
                            <section className="flex gap-2 items-center">
                                <input type="checkbox" className="rounded text-zinc-500 checked:bg-black focus:ring-0" />
                                <p className="text-zinc-500 ">Remember me</p>
                            </section>
                            <section>
                                <p className="font-medium">Forgot Password?</p>
                            </section>
                        </section>
                        <button type="submit" className="p-2 bg-black text-center w-full text-white rounded my-10">Sign In</button>
                    </form>
                </section>
            </section>
        </>
    )
}

export default SignIn