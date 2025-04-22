import Footer from "../components/Global/Footer"
import Header from "../components/Global/Header"
import { assetsimg } from "../assets/images/assetsimg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Services from "../components/Home/Services"
import Bestsellers from "../components/Home/Bestsellers"
import { useEffect, useState } from "react"
import { fetchproducts } from "../Axios"
import { Link } from "react-router-dom"
import ShopingCards from "../components/Home/ShopingCards"

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
                <img className="w-5/6 mx-auto pt-[67px] md:pt-[83px]" src={assetsimg.header} alt="header image" />
            </section>
            {/*simply unique /////////////////////// */}
            <section className="w-5/6 mx-auto gap-5 grid md:grid-cols-2 grid-cols-1 mt-5 ">
                <p className="md:text-7xl text-4xl font-medium ">Simply Unique/
                    Simply Better.</p>
                <p className="md:my-auto mt-3 md:text-2xl"> <span className="font-bold ">3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
            </section>
            {/* shopping cards ////////////////////// */}
            <ShopingCards/>
            {/* best seller */}
            <section className="grid md:grid-cols-2 justify-between w-5/6 mx-auto mt-5">
                <section>
                    <p className="text-3xl font-medium">New</p>
                    <p className="text-3xl font-medium">Arrivals</p>
                </section>
                <Link to='/shop' className="my-auto text-end hidden md:block"><span className="border-b-2 border-black w-1/2 pb-1 font-medium">More Products <FontAwesomeIcon icon={faArrowRight} /></span> </Link>
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
                <Services/>
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
                        <Link to='/shop'><span className="border-b-2 border-black pb-2 w-fit">Shop Now <FontAwesomeIcon icon={faArrowRight} /></span></Link>
                    </section>
                </section>
            </section>
            <Footer />
        </>
    )
}

export default Home