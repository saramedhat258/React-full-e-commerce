import { assetsimg } from "../assets/images/assetsimg"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { assets } from "../assets/icons/assets"
import { useState } from "react"
import ProductCard from "../components/ProductCard"
import MobileFilter from "../components/MobileFilter"

function Shop() {
    const [activeIndex, setActiveIndex] = useState(null)
    const texts = ["tabels", "Living Room", "Bedroom", "lamps"]
    return (
        <>
            <section>
                <Header />
                <section className="lg:pt-20 md:pt-16 pt-14 h-full">
                    <section className="h-[65vh] w-5/6 mx-auto" style={{ backgroundImage: `url(${assetsimg.shop})`, backgroundSize: 'cover' }}>
                        <section className="lg:pt-32 sm:pt-20 pt-14 w-1/2 mx-auto text-center">
                            <p className="font-medium">Home  <span><FontAwesomeIcon icon={faChevronRight} /></span>  shop</p>
                            <p className="my-5 text-5xl font-medium">Shop page</p>
                            <p className="text-xl">Let’s design the place you always imagined.</p>
                        </section>
                    </section>
                </section>
            </section>

            {/* filter and products/////////////// */}

            <section className="lg:mt-16 w-5/6 mx-auto grid md:grid-cols-4 grid-cols-1 md:gap-20 ">
                {/* filter ////////////////////// */}
                <section className="col-span-1">
                    <div className="lg:flex hidden gap-2">
                        <img src={assets.filter} alt="filter" /><p className="text-lg">Filter</p>
                    </div>
                    <section className="mt-5 lg:block hidden">
                        <p className="font-medium text-2xl">Categories</p>
                        <section className="mt-5 flex flex-col gap-2 text-gray-500">
                            {texts.map((text, index) => (
                                <p
                                    key={index}
                                    className={`cursor-pointer ${activeIndex === index ? "font-medium underline text-black" : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {text}
                                </p>
                            ))
                            }
                        </section>
                    </section>
                    {/* price filter */}
                    <section className="mt-5 lg:block hidden">
                        <p className="font-medium text-2xl mb-5">Price</p>
                        <form className="flex flex-col gap-2 text-gray-500">
                            <div className="flex justify-between">
                                <label >All prices</label>
                                <input type="checkbox" />
                            </div>
                            <div className="flex justify-between">
                                <label>50-200</label>
                                <input type="checkbox" />
                            </div>
                            <div className="flex justify-between">
                                <label>All prices</label>
                                <input type="checkbox" />
                            </div>
                            <div className="flex justify-between">
                                <label>All prices</label>
                                <input type="checkbox" />
                            </div>
                            <div className="flex justify-between">
                                <label>All prices</label>
                                <input type="checkbox" />
                            </div>
                        </form>
                    </section>
                </section>
                {/* products */}
                <section className="lg:col-span-3 col-span-4">
                    <MobileFilter />
                    <p className="mb-5 font-medium text-2xl">living room</p>
                    <section className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 sm:justify-between">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </section>
                </section>

            </section>

            <Footer />
        </>
    )
}

export default Shop