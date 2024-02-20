import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="h-[50vh] bg-slate-700 text-White p-5 pt-8 flex flex-col text-center">
        <h1 className="text-4xl">Luna and Associates</h1>
        <div className="flex flex-row justify-between w-full p-2 md:px-10 text-start">
            <div className="flex flex-col w-full p-3 md:ml-40">
                <h1 className="font-bold text-xl">The Luna Building :</h1>
                <a className="mt-3" href="tel:+2092040088">( 209 ) 204 - 0088</a>
                <a className="mt-3" href="mailto:susanaluna.law@gmail.com">susanaluna.law@gmail.com</a>
                <a className="mt-3 flex flex-col" href="https://www.google.com/maps/dir/?api=1&destination=Luna+and+Associates+Modesto+CA&travelmode=driving" target="_blank" >
                    <span className="mb-2">1520 H St.</span> 
                    <span>Modesto, CA 95354</span>
                </a>
            </div>
            <div className="flex flex-col w-full p-3">
                <h1 className="font-bold text-xl">Site Map:</h1>
                <Link className=" mt-3 underline" to='/'>Home</Link>
                <Link className=" mt-3 underline" to='/services'>Services</Link>
                <Link className=" mt-3 underline" to='/team'>Our Team</Link>
                <Link className=" mt-3 underline" to='/contact'>Contact</Link>
            </div>
        </div>
    </div>
  )
}
// const divStyle = " mx-20 my-5 border border-0 border-b flex flex-col items-center"
// const h1Style ='text-4xl mt-10 mb-5'
export default Footer