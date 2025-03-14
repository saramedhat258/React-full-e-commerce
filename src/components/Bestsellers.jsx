
import { assets } from "../assets/icons/assets"
import { assetsimg } from "../assets/images/assetsimg"
function Bestsellers() {
    return (
        <>
            <div className="relative snap-center mb-5 group/item">
                <div className="absolute left-8 top-5">
                    <img className='mb-2' src={assets.newpro} alt="new arrival product1" />
                    <img src={assets.fiften} alt="50% dicound" />
                </div>
                <img className="h-80 min-w-[250px]" src={assetsimg.test} />
                <button className="bg-black w-5/6 text-white py-2 absolute bottom-8 left-5 rounded invisible group-hover/item:visible">Add To Cart</button>
            </div>
        </>
    )
}

export default Bestsellers