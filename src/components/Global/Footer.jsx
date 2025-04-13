import MinFooter from "./MinFooter"
import { assetsimg } from "../../assets/images/assetsimg"
function Footer() {
    return (
        <>
            <section className="h-96 w-full mt-10" style={{ backgroundImage: `url(${assetsimg.footer})`, backgroundSize: 'cover' }}>
                <section className="mx-auto pt-32 w-2/3 text-center">
                    <p className="text-4xl font-medium mb-2">Join Our Newsletter</p>
                    <p>Sign up for deals, new products and promotions</p>
                    <input placeholder="email address" type="text" className=" focus:ring-0 rounded-md focus:outline-none md:w-1/2 w-11/12 mt-7 border-0 border-b-2 focus:border-b-black pb-3 placeholder:text-gray-400 border-gray-400 mx-auto  bg-transparent " />
                </section>
            </section>
            <MinFooter />
        </>
    )
}

export default Footer