import { Link } from "react-router-dom"
import servicesData from '../data/servicesData'
import Service from "@/components/Service"
function Services() {

    const displayServices = servicesData.map((service, index) => {
        return (<Service serviceData={service} key={index}/>)
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
                    <button className="px-7 py-5 border-2 border-solid rounded-[100px] max-md:px-5  bg-Blue border-Blue text-White transition duration-300 delay-100 ease-in-out
                     hover:border-slate-200 hover:bg-slate-200 hover:text-Blue text-lg">Contact us</button>
                </Link>
            </div>
        </section>

        <div id='info' className="my-10 sm:mb-20 md:mt-0 flex flex-col justify-start items-start mx-10">
            <h2 className="text-4xl mb-1 mx-10 font-bold text-Blue mt-20">Expertise</h2>
            <div className="h-0.5 mx-10 w-[40vw] sm:w-[35vw] md:w-[30vw] lg:w-[20vw] bg-Blue opacity-60 "></div>
            <p className="text-xl text-slate-700 text-start m-10 max-sm:mx-3"> 
                <span className="font-bold text-slate-800">
                    At Susana B. Luna and Associates, we navigate the ever-evolving terrain of immigration law with unparalleled agility and foresight. 
                </span>  Rooted in first-hand understanding of the immigration journey, our mission extends beyond current legal landscapes to anticipate future reforms.
            </p>

            <h2 className="text-4xl mb-1 mx-10 font-bold text-Blue md:mt-3">Approach</h2>
            <div className="h-0.5 mx-10 w-[40vw] sm:w-[35vw] md:w-[30vw] lg:w-[20vw] bg-Blue opacity-60 mb-10 "></div>
            <p className="text-xl text-slate-700 text-start mx-10 max-sm:mx-3">
                <span className="font-bold text-slate-800">
                     We dedicate ourselves to providing not just service but stewardship—offering clarity, expertise, and unwavering support as we guide each client towards their American dream. 
                </span> Stay ahead with us, where insight meets action, and your path to residency or citizenship is secured by those who not only know the way but foresee the future twists and turns.
            </p>
        </div>

        <div id='services' className="flex flex-col justify-center w-full items-center px-20 py-10">
            <div className=" p-10 w-full bg-Blue bg-opacity-100">
                <h2 className="text-4xl sm:text-5xl text-start text-slate-100">Our Legal Services</h2>
            </div>
            <p className="mb-10 text-slate-300">Click on an image for more information</p>
        </div>
        <div id='services list' className="flex flex-col md:grid md:grid-cols-3 md:gap-1">
            {displayServices}
        </div>
    </div>
  )
}

export default Services