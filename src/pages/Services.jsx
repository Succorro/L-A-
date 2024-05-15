import { Link } from "react-router-dom"
import servicesData from '../data/servicesData'
function Services() {

    const displayServices = servicesData.map((service, index) => {
        const {name} = service
        return (
            <div key={index}>
                {name}
            </div>
        )
    })
  return (
    <div className=" bg-White ">
        <section className="relative bg-Blue min-h-screen flex flex-col justify-start items-center pt-32">
            <img
                className="absolute inset-0 opacity-40 object-cover h-full lg:w-full lg:h-[100vh] z-0"
                src="/books.jpg"
                alt="books"
                loading="lazy"
            />
            <div className="relative z-10 flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl text-White">Services</h1>
                <p className="text-lg pt-10 text-start text-White px-20">
                Navigating through the complexities of immigration law is our specialty.
                </p>
                <p className="text-lg pt-10 text-start text-White px-20 mb-5">
                Have any questions?
                </p>
                <Link to='/contact' className="flex justify-center sm:w-[30vw]">
                    <button className="px-7 py-5 border-2 border-solid rounded-[100px] max-md:px-5  bg-Blue border-Blue text-White transition duration-300 ease-in-out
                     hover:underline hover:border-White">Contact us</button>
                </Link>
            </div>
        </section>

        <div id='info' className="flex flex-col text-start mx-5 my-20">
            <h2 className="text-4xl text-slate-900 font-bold mt-5">Expertise</h2>
            <p className="text-slate-700 text-lg my-10"> <span className="font-bold text-slate-800">At Susana B. Luna and Associates, we navigate the ever-evolving terrain of immigration law with unparalleled agility and foresight. </span>  Rooted in first-hand understanding of the immigration journey, our mission extends beyond current legal landscapes to anticipate future reforms.</p>
            <h2 className="text-4xl text-slate-900 font-bold">Approach</h2>
            <p className="text-slate-700 text-lg my-10"> <span className="font-bold text-slate-800"> We dedicate ourselves to providing not just service but stewardship—offering clarity, expertise, and unwavering support as we guide each client towards their American dream. </span>Stay ahead with us, where insight meets action, and your path to residency or citizenship is secured by those who not only know the way but foresee the future twists and turns.</p>
        </div>
        <div id='services' className="flex justify-center w-full items-center px-20 py-10">
            <div className="border border-Blue border-l-5 border-0 p-10 w-full bg-Blue bg-opacity-20">
                <h2 className="text-4xl sm:text-5xl text-start text-slate-800">What We Offer</h2>
            </div>
        </div>
        <div id='services list'>
            <div>Family-Based Immigration</div>
            {displayServices}
        </div>
    </div>
  )
}

export default Services