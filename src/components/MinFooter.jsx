import { assets } from "../assets/icons/assets"

function MinFooter() {
    return (
        <>
            <section className="bg-black h-full w-full py-10" id="contact">
                {/* section top */}
                <section className="grid md:grid-cols-2 grid-cols-1 md:justify-between w-5/6 mx-auto pt-5">
                    <section className="text-white flex md:flex-row flex-col md:gap-5 mb-5 items-center">
                        <p className="text-2xl font-medium">3legant.</p>
                        <p className="invisible md:visible text-gray-600">|</p>
                        <p>Gift & Decoration Store</p>
                    </section>
                    <section className="text-white flex md:flex-row flex-col md:gap-5 gap-4 md:justify-end items-center mb-5">
                        <a href="">Home</a>
                        <a href="">Shop</a>
                        <a href="">Product</a>
                        <a href="">Blog</a>
                        <a href="">Contact Us</a>
                    </section>
                </section>
                {/* section bottom */}
                <section className="grid md:grid-cols-2 grid-cols-1 justify-between w-5/6 mx-auto border-t-[1px] border-gray-600 pt-3">
                    <section className="text-white flex md:flex-row flex-col md:gap-5 gap-4 mb-5 items-center text-center">
                        <p>Copyright © 2023 3legant. All rights reserved</p>
                        <p className="font-medium">Privacy Policy</p>
                        <p className="font-medium">Terms of Use</p>
                    </section>
                    <section className="flex gap-4 md:justify-end justify-center mb-10 mt-2">
                        <img className="cursor-pointer" src={assets.insta} alt="" />
                        <img className="cursor-pointer" src={assets.facebook} alt="" />
                        <img className="cursor-pointer" src={assets.youtube} alt="" />
                    </section>
                </section>

            </section>
        </>
    )
}

export default MinFooter