// import { Link } from "react-router-dom"

// function Footer() {
//   return (
//     <div className="h-[50vh] bg-slate-700 text-White p-5 pt-8 flex flex-col text-center">
//         <h1 className="text-4xl">Luna and Associates</h1>
//         <div className="flex flex-row justify-between w-full p-2 md:px-10 text-start">
//             <div className="flex flex-col w-full p-3 md:ml-40">
//                 <h1 className="font-bold text-xl">The Luna Building :</h1>
//                 <a className="mt-3" href="tel:+2092040088">( 209 ) 204 - 0088</a>
//                 <a className="mt-3" href="mailto:susanaluna.law@gmail.com">susanaluna.law@gmail.com</a>
//                 <a className="mt-3 flex flex-col" href="https://www.google.com/maps/dir/?api=1&destination=Luna+and+Associates+Modesto+CA&travelmode=driving" target="_blank" >
//                     <span className="mb-2">1520 H St.</span> 
//                     <span>Modesto, CA 95354</span>
//                 </a>
//             </div>
//             <div className="flex flex-col w-full p-3">
//                 <h1 className="font-bold text-xl">Site Map:</h1>
//                 <Link className=" mt-3 underline" to='/'>Home</Link>
//                 <Link className=" mt-3 underline" to='/services'>Services</Link>
//                 <Link className=" mt-3 underline" to='/team'>Team Luna</Link>
//                 <Link className=" mt-3 underline" to='/contact'>Contact</Link>
//             </div>
//         </div>
//     </div>
//   )
// }

// eslint-disable-next-line react/prop-types
    const NavLink = ({ children }) => (
        <div className="text-violet-950 max-md:basis-full hover:cursor-pointer hover:underline hover:underline-offset-1 hover:decoration-Blue">{children}</div>
    );
  
    const navLinks = [
        { label: "Home" },
        { label: "Services" },
        { label: "Team Luna" },
        { label: "Contacts" },
    ];
    function Footer() {
        const currentYear = new Date().getFullYear();
      
        return (
        <footer className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
            <div className="mt-6 w-full max-w-[969px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <section className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full ">
                        <div className="flex flex-col text-violet-950 max-md:mt-10">
                            <h2 className="text-4xl font-bold tracking-tight text-center">
                            Susana B Luna and Associates
                            </h2>
                            <p className="mt-10 text-base leading-7 text-slate-900 text-opacity-40">
                            Insert slogan here
                            </p>
                            <div className="flex gap-5 justify-between mt-11 text-lg mx-auto whitespace-nowrap max-md:mt-10">
                                <a className="w-16" href=""><img src="/instagram.png" alt="" /></a>
                                <a className="w-16" href=""><img src="/facebook.png" alt="" /></a>
                                <a className="w-16" href=""><img src="/tik-tok.png" alt="" /></a>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                        <div className="grow max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex justify-center items-center px-16 py-20 text-base leading-7 bg-white max-md:px-5">
                                    <div className="flex flex-col mt-1 max-w-full w-[502px]">
                                    <nav className="flex gap-5 max-md:flex-wrap max-md:max-w-full mx-auto">
                                        {navLinks.map((link) => (
                                        <NavLink key={link.label} className="group">
                                            {link.label}
                                        </NavLink>
                                        ))}
                                    </nav>
                                    <div className="self-center mt-9 text-center text-slate-900 text-opacity-40 max-md:max-w-full">
                                        <div className="bg-white py-4 text-center">
                                        <p className="text-sm relative">
                                            &copy; {currentYear} Susana B Luna and Associates. All rights reserved.
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </footer>
        );
      }
// const divStyle = " mx-20 my-5 border border-0 border-b flex flex-col items-center"
// const h1Style ='text-4xl mt-10 mb-5'
export default Footer