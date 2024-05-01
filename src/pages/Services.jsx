import { Link } from "react-router-dom"
function Services() {
//md:w-[40vw] mx-auto my-5 md:mx-16
  return (
    <div className=" bg-White ">
        <div id='top' className="bg-Blue py-10 min-h-[100vh]">
            <h1 className="mt-20 mb-10 text-5xl text-White ">Services</h1>
            <div className="mx-5 flex flex-col sm:flex-row w-full items-center justify-between tracking-wide text-start">
                <h2 className=" sm:w-[40vw] text-White text-5xl sm:text-6xl leading-normal lg:leading-relaxed">Navigating through the complexities of legal immigration is our specialty.</h2>
                <Link to='/contact' className="sm:w-[30vw]">
                    <button className="px-7 py-5  mt-14 leading-6 border-2 border-solid rounded-[100px] max-md:px-5 max-md:mt-10 bg-White border-Blue text-Blue transition duration-300 ease-in-out
                    hover:text-White hover:bg-Blue hover:border-White">Contact us</button>
                </Link>
            </div>
        </div>

        <div id='info' className="flex flex-col text-start mx-5 mt-5">
            <h2 className="text-4xl text-slate-900 font-bold mt-5">Expertise</h2>
            <p className="text-slate-700 text-lg my-5"> At Susana B. Luna and Associates, we navigate the ever-evolving terrain of immigration law with unparalleled agility and foresight. Rooted in first-hand understanding of the immigration journey, our mission extends beyond current legal landscapes to anticipate future reforms.</p>
            <h2 className="text-4xl text-slate-900 font-bold">Approach</h2>
            <p className="text-slate-700 text-lg my-5"> We dedicate ourselves to providing not just service but stewardship—offering clarity, expertise, and unwavering support as we guide each client towards their American dream. Stay ahead with us, where insight meets action, and your path to residency or citizenship is secured by those who not only know the way but foresee the future twists and turns.</p>
        </div>
        <div id='services' className="flex justify-center w-full items-center px-20 py-10">
            <div>
                <h2>What We Offer</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">

            </div>
        </div>
    </div>
  )
}

export default Services