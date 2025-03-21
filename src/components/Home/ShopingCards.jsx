import { Link } from "react-router-dom"
import { assetsimg } from "../../assets/images/assetsimg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

function ShopingCards() {
    return (
        <div>
            <section className="relative mt-10 gap-5 w-5/6 mx-auto grid md:grid-cols-2 grid-cols-1 ">
                <section className="bg-slate-100">
                    <section className="absolute lg:top-14 lg:left-14 md:top-5 sm:top-16:md xs:top-10 xs:left-10 top-3 left-5">
                        <p className="lg:text-4xl md:text-3xl sm:text-4xl xs:text-2xl text-lg font-bold" >Living Room</p>
                        <Link to='/shop' className="inline-block mt-2 sm:mt-5 border-b-2 border-black w-5/6 sm:w-1/2 text-sm pb-2 font-medium">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </section>
                    <img src={assetsimg.living} className="w-full" alt="living room section" />
                </section>
                <section className="grid grid-rows-2 gap-5">
                    <section className="relative bg-slate-100">
                        <section className="absolute text-sm xs:bottom-8 lg:left-10 lg:bottom-14 md:left-3  xs:left-8 bottom-5 left-5">
                            <p className="lg:text-4xl md:text-3xl sm:text-4xl text-lg xs:text-2xl font-bold">Bedroom</p>
                            <Link to='/shop' className="inline-block mt-2 sm:mt-5 border-b-2 border-black lg:w-8/12 pb-2 sm:w-3/4 font-medium">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </section>
                        <section>
                            <img src={assetsimg.bedroom} alt="bedroom section" />
                        </section>
                    </section>
                    <section className="relative bg-slate-100">
                        <section className="absolute text-sm xs:bottom-8 lg:left-10 lg:bottom-14 md:left-3  xs:left-8 bottom-5 left-5">
                            <p className="lg:text-4xl md:text-3xl sm:text-4xl text-lg xs:text-2xl font-bold">Kitchen</p>
                            <Link to='/shop' className="inline-block mt-2 sm:mt-5 border-b-2 border-black pb-2 md:w-5/6 sm:w-3/4 font-medium">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </section>
                        <section>
                            <img src={assetsimg.kitchen} alt="kitchen section" />
                        </section>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default ShopingCards