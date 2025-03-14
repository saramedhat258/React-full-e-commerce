import { assetsimg } from "../assets/images/assetsimg"
function SignUp() {
    return (
        <>
            <section className="grid md:grid-cols-2 ">
                <section className="">
                    <img src={assetsimg.login} alt="login image" className="md:h-screen md:w-3/4 w-full" />
                </section>
                <section className="md:mt-32 mt-10 md:w-2/3 xs:w-3/4 w-11/12 md:mx-0 mx-auto">
                    <p className="text-3xl font-medium mb-3">Sign In</p>
                    <p className="text-zinc-500">Don’t have an accout yet? <span className="text-emerald-500">Sign Up</span></p>
                    <form action="" className=" mt-10">
                        <sectionc className="flex flex-col gap-5">
                            <input type="text" placeholder="Your name" className="ps-0 pb-3 border-0 border-zinc-200 focus:border-0 border-b-2 " />
                            <input type="text" placeholder="Username" className="ps-0 pb-3 border-0 border-zinc-200 focus:border-0 border-b-2 " />
                            <input type="text" placeholder="Email address" className="ps-0 pb-3 border-0 border-zinc-200 focus:border-0 border-b-2 " />
                            <input type="text" placeholder="Password" className="border-0 ps-0 pb-3 border-zinc-200 focus:border-0 border-b-2 " />
                        </sectionc>
                        <section className="flex gap-2 items-center mt-10">
                            <input type="checkbox" className="rounded text-zinc-500"/>
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