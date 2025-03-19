import Footer from "../components/Footer"
import Header from "../components/Header"
import { assetsimg } from "../assets/images/assetsimg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { assets } from "../assets/icons/assets"
import Bestsellers from "../components/Bestsellers"
import { useEffect, useState } from "react"
import { fetchproducts } from "../Axios"
function Home() {
    const [AllProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetchproducts(setAllProducts)
    }, [])

    return (
        <>
            <Header />
            {/* slider////////////////////////////// */}
            <section >
                <img className="w-5/6 mx-auto pt-14 md:pt-[4.5rem]" src={assetsimg.header} alt="header image" />
            </section>
            {/*simply unique /////////////////////// */}
            <section className="w-5/6 mx-auto gap-5 grid md:grid-cols-2 grid-cols-1 mt-5 ">
                <p className="md:text-7xl text-4xl font-medium ">Simply Unique/
                    Simply Better.</p>
                <p className="md:my-auto mt-3 md:text-2xl"> <span className="font-bold ">3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
            </section>
            {/* shopping cards ////////////////////// */}
            <section className="relative mt-10 gap-5 w-5/6 mx-auto grid md:grid-cols-2 grid-cols-1 ">
                <section className="bg-slate-100">
                    <section className="absolute lg:top-14 lg:left-14 md:top-5 sm:top-16:md xs:top-10 xs:left-10 top-3 left-5">
                        <p className="lg:text-4xl md:text-3xl sm:text-4xl xs:text-2xl text-lg font-bold">Living Room</p>
                        <p className="mt-2 sm:mt-5 border-b-2 border-black w-5/6 sm:w-1/2 text-sm pb-2 font-medium">Shop Now <FontAwesomeIcon icon={faArrowRight} /></p>
                    </section>
                    <img src={assetsimg.living} className="w-full" alt="living room section" />
                </section>
                <section className="grid grid-rows-2 gap-5">
                    <section className="relative bg-slate-100">
                        <section className="absolute text-sm xs:bottom-8 lg:left-10 lg:bottom-14 md:left-3  xs:left-8 bottom-5 left-5">
                            <p className="lg:text-4xl md:text-3xl sm:text-4xl text-lg xs:text-2xl font-bold">Bedroom</p>
                            <p className="mt-2 sm:mt-5 border-b-2 border-black lg:w-8/12 pb-2 sm:w-3/4 font-medium">Shop Now <FontAwesomeIcon icon={faArrowRight} /></p>
                        </section>
                        <section>
                            <img src={assetsimg.bedroom} alt="bedroom section" />
                        </section>
                    </section>
                    <section className="relative bg-slate-100">
                        <section className="absolute text-sm xs:bottom-8 lg:left-10 lg:bottom-14 md:left-3  xs:left-8 bottom-5 left-5">
                            <p className="lg:text-4xl md:text-3xl sm:text-4xl text-lg xs:text-2xl font-bold">Kitchen</p>
                            <p className="mt-2 sm:mt-5 border-b-2 border-black pb-2 md:w-5/6 sm:w-3/4 font-medium">Shop Now <FontAwesomeIcon icon={faArrowRight} /></p>
                        </section>
                        <section>
                            <img src={assetsimg.kitchen} alt="kitchen section" />
                        </section>
                    </section>
                </section>
            </section>
            {/* best seller */}
            <section className="grid md:grid-cols-2 justify-between w-5/6 mx-auto mt-5">
                <section>
                    <p className="text-3xl font-medium">New</p>
                    <p className="text-3xl font-medium">Arrivals</p>
                </section>
                <p className="my-auto text-end hidden md:block"><span className="border-b-2 border-black w-1/2 pb-1 font-medium">More Products <FontAwesomeIcon icon={faArrowRight} /></span> </p>
            </section>
            <section className="">
                <div className="scroll-pl-6 snap-x flex gap-8 w-5/6 mx-auto overflow-x-scroll scroll-smooth mt-10 scrollbar-hide">
                    {AllProducts.map(pro => {
                        if (pro?.newarr===true) {
                            return(
                                <div key={pro.id}>
                                <Bestsellers pro={pro} />
                            </div>
                            )
                            
                        }
                    }
                    )}

                </div>
            </section>
            {/* services //////////////////////////////////*/}
            <section className="w-5/6 mx-auto grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 my-10">
                <section className="xs:ps-10 xs:pt-10 ps-4 pt-5 flex flex-col gap-4 bg-slate-100 xs:h-52 h-48 ">
                    <img className="xs:w-12 w-9" src={assets.delivry} alt="delivry service" />
                    <div>
                        <p className="md:text-lg font-medium">Free Shipping</p>
                        <p className=" text-slate-500">order above $200</p>
                    </div>
                </section>

                <section className="xs:ps-10 xs:pt-10 ps-4 pt-5 flex flex-col gap-4 bg-slate-100 xs:h-52 h-48">
                    <img className="xs:w-12 w-9" src={assets.money} alt="delivry service" />
                    <div>
                        <p className="text-lg font-medium">Money Back</p>
                        <p className=" text-slate-500">30 Days gurantee</p>
                    </div>
                </section>

                <section className="xs:ps-10 xs:pt-10 ps-4 pt-5 flex flex-col gap-4 bg-slate-100 xs:h-52 h-48 ">
                    <img className="xs:w-12 w-9" src={assets.secure} alt="delivry service" />
                    <div>
                        <p className="text-lg font-medium">Secure Payment</p>
                        <p className=" text-slate-500">Secured by Stripe</p>
                    </div>
                </section>
                <section className="xs:ps-10 xs:pt-10 ps-4 pt-5 flex flex-col gap-4 bg-slate-100 xs:h-52 h-48 ">
                    <img className="xs:w-12 w-9" src={assets.call} alt="delivry service" />
                    <div>
                        <p className="text-lg font-medium">24/7 Support</p>
                        <p className="text-slate-500">Phone and Email support</p>
                    </div>
                </section>
            </section>
            {/* sales poster ///////*/}
            <section className="grid xm:grid-cols-2 grid-cols-1 gap-0 ">
                <section className="">
                    <img src={assetsimg.lower_prices} className="w-full xm:h-5/6" alt="lower prices images" />
                </section>
                <section className="bg-slate-100 xm:h-5/6 flex items-center ">
                    <section className="pb-12 mx-auto w-5/6 h-5/6 my-auto xm:mt-28 ">
                        <p className="text-blue-700">SALE UP TO 35% OFF</p>
                        <p className="xm:text-4xl text-3xl font-medium">HUNDREDS of</p>
                        <p className="xm:text-4xl text-3xl font-medium mb-4">New lower prices!</p>
                        <p className="xm:text-lg w-4/6 mb-5">It’s more affordable than ever to give every room in your home a stylish makeover</p>
                        <p className=""><span className="border-b-2 border-black pb-2 w-1/2">Shop Now <FontAwesomeIcon icon={faArrowRight} /></span></p>
                    </section>
                </section>
            </section>
            <Footer />
        </>
    )
}

export default Home