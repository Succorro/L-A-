import { Link } from "react-router-dom"
function Services() {

    const displayServices = servicesData.map((service, index) => {
        return (
            <div key={index}>
                {service}
            </div>
        )
    })
  return (
    <div className=" bg-White ">
        <div id='top' className="bg-Blue py-10 min-h-[100vh]">
            <h1 className="mt-20 mb-10 text-5xl text-White ">Services</h1>
            <div className="mx-5 sm:mx-10 flex flex-col sm:flex-row w-full items-center sm:justify-between tracking-wide text-start">
                <h2 className=" sm:w-[40vw] text-White text-5xl sm:text-6xl leading-normal lg:leading-relaxed">Navigating through the complexities of immigration law is our specialty.</h2>
                <Link to='/contact' className="flex  sm:w-[30vw]">
                    <button className="px-7 py-5 mr-10 mt-14 border-2 border-solid rounded-[100px] max-md:px-5 max-md:mt-10 bg-White border-Blue text-Blue transition duration-300 ease-in-out
                    hover:text-White hover:bg-Blue hover:border-White">Contact us</button>
                </Link>
            </div>
        </div>

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
            {displayServices}
        </div>
    </div>
  )
}

export default Services