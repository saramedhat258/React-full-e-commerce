import MinFooter from "./MinFooter"
import { assetsimg } from "../../assets/images/assetsimg"
function Footer() {
    return (
        <>
            <section className="h-96 w-full mt-10" style={{ backgroundImage: `url(${assetsimg.footer})`, backgroundSize: 'cover' }}>
                <section className="mx-auto pt-32 w-2/3 text-center">
                    <p className="text-4xl font-medium mb-2">Join Our Newsletter</p>
                    <p>Sign up for deals, new products and promotions</p>
                    <input placeholder="email address" type="text" className="rounded-md focus: outline-0 md:w-1/2 w-11/12 mt-7 border-b-2 pb-3 placeholder:text-slate-400 border-slate-300 mx-auto  bg-transparent " />
                </section>
            </section>
            <MinFooter />
        </>
    )
}

export default Footer