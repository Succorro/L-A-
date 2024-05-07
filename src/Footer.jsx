import { Link } from "react-router-dom"
import { animateScroll as scroll } from 'react-scroll'

// eslint-disable-next-line react/prop-types
const navLinks = [
    { label: "Home" },
    { label: "Services" },
    { label: "Team Luna" },
    { label: "Contact" },
];

function Footer() {
    const currentYear = new Date().getFullYear();

    function handleLinks(label){
        if(label === 'Home') return '/'
        else if(label === 'Team Luna') return '/team'
        else return label
    }
    
    return (
        <footer className="flex justify-center items-center px-16 py-20 bg-Blue text-White max-md:px-5">
        <div className="mt-6 w-full max-w-[969px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <section className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full ">
                    <div className="flex flex-col text-White max-md:mt-10">
                        <h2 className="text-4xl font-bold tracking-tight text-center">
                            Susana B. Luna and Associates
                        </h2>
                        <p className="mt-10 text-base leading-7 text-opacity-70">
                        &quot;Ayudando a nuestra gente a realizar el Sueño Americano&quot;
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
                            <div className="flex justify-center items-center px-16 py-20 text-base leading-7 bg-Blue max-md:px-5">
                                <div className="flex flex-col mt-1 max-w-full w-[502px]">
                                    <nav className="flex gap-5 max-md:flex-wrap max-md:max-w-full mx-auto">
                                        {navLinks.map((link, index) => (
                                            <Link key={index} to={handleLinks(link.label)} onClick={() => scroll.scrollToTop()} className="text-White text-xl max-md:basis-full hover:cursor-pointer hover:underline hover:underline-offset-1 hover:decoration-White">{link.label}</Link>
                                        ))}
                                    </nav>
                                    <div className="self-center mt-9 text-center text-opacity-70 max-md:max-w-full">
                                        <div className="bg-Blue py-4 text-center">
                                            <p className="text-sm relative">
                                                &copy; {currentYear} Susana B. Luna and Associates. All rights reserved.
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
export default Footer