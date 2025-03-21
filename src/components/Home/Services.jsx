import { assets } from "../../assets/icons/assets"

const services = [
    { title: 'Free Shipping', desc: 'order above $200', img: assets.delivry },
    { title: 'Money Back', desc: '30 Days gurantee', img: assets.money },
    { title: 'Secure Payment', desc: 'Secured by Stripe', img: assets.secure },
    { title: '24/7 Support', desc: 'Phone and Email support', img: assets.call }
]
function Services() {
    return (
        <>
            {
                services.map(ser => (
                    <section key={ser.title} className="xs:ps-10 xs:pt-10 ps-4 pt-5 flex flex-col gap-4 bg-slate-100 xs:h-52 h-48 ">
                        <img className="xs:w-12 w-9" src={ser.img} alt={ser.title} />
                        <div>
                            <p className="md:text-lg font-medium">{ser.title}</p>
                            <p className=" text-slate-500">{ser.desc}</p>
                        </div>
                    </section>
                ))
            }
        </>
    )
}

export default Services