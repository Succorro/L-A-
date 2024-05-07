
function Contact() {
  return (
    <div className="bg-White">
        <section className="relative bg-Blue min-h-screen flex flex-col justify-start items-center pt-32">
            <img
                className="absolute inset-0 opacity-40 object-cover h-full lg:w-full lg:h-[100vh] z-0"
                src="/Conference Room.jpg"
                alt="conference room"
                loading="lazy"
            />
            <div className="relative z-10 text-center">
                <h1 className="text-5xl text-White">Contact Us</h1>
                <p className="text-lg pt-10 text-start text-White px-20 lg:px-96">
                Reach out for personalized legal assistance and support. Team Luna is
                able and ready to help with your questions.
                </p>
            </div>
        </section>
        <div className="bg-White flex flex-col justify-center items-center text-center m-32">
            <h1 className="text-Blue text-5xl font-bold">The Luna Building</h1>
        </div>
        <section className="bg-White flex flex-col md:flex-row justify-center items-center text-start  px-20 mb-10">
            <div className="relative rounded-xl bg-Blue text-White py-32 px-32 lg:px-20 w-[450px] h-[400px] flex flex-col mb-20 lg:mx-10">
                <img className="absolute -top-10 rounded-xl left-40 lg:left-32 w-32 h-32 bg-White shadow-md shadow-slate-900 z-0 p-7" src="/email.svg" alt="" loading="lazy"/>
                <h4 className="font-bold text-3xl mb-5">Contact Info</h4>
                <p className="mb-2 text-lg font-bold">Susana Luna:</p>
                <a className=" mb-2" href="tel:+12092040088">(209) 204 - 0088</a>
                <a className="mb-2" href="mailto:susanaluna.law@gmail.com">susanaluna.law@gmail.com</a>
                <p className="mb-2 text-lg font-bold">Office Phone:</p>
                <a className="" href="tel:+12094098879">(209) 409 - 8879</a>
            </div>
            <div className="relative rounded-xl bg-Blue text-White py-32 px-32 w-[450px] h-[400px] flex flex-col mb-20 lg:mx-10">
                <img className="absolute -top-10 rounded-xl left-40 lg:left-32 w-32 h-32 bg-White shadow-md shadow-slate-900 z-0 p-3" src="/location.svg" alt="" loading="lazy"/>
                <h4 className="font-bold text-3xl">Location</h4>
                <a className="text-lg  my-3 px-4" href="https://www.google.com/maps/dir/?api=1&destination=Luna+and+Associates+Modesto+CA&travelmode=driving" target="_blank" >1520 H St. Modesto, CA 95354</a>
            </div>
            <div className="relative rounded-xl bg-Blue text-White py-32 px-32 w-[450px] h-[400px] flex flex-col mb-20 lg:mx-10">
                <img className="absolute -top-10 rounded-xl left-40 lg:left-32 w-32 h-32 bg-White shadow-md shadow-slate-900 z-0 p-6" src="/time.svg" alt="" loading="lazy"/>
                <h4 className="font-bold text-3xl mb-5">Business Hours</h4>
                <p className=" pr-2 mb-5">Mon - Fri: <span>9am-5pm</span></p>
                <p className=" ">Sat - Sun: <span>Closed</span></p>
            </div>
        </section>
        <div className="flex flex-col items-center justify-center pb-20">
            <p className="text-3xl text-slate-700 font-bold">Downtown Modesto</p>
            <a className="" href="https://www.google.com/maps/dir/?api=1&destination=Luna+and+Associates+Modesto+CA&travelmode=driving" target="_blank" >
                <img className="w-[70vw] lg:w-[40vw] mt-5 rounded-xl" src="/Luna.jpeg" alt="office" loading="lazy"/>
            </a>
        </div>
    </div>
    // <div className="bg-White flex flex-col items-center">
    //     <div className="bg-Blue h-[50vh] w-full flex justify-center pt-10">
    //         <h1 className="text-5xl mt-20 text-White">Contact Us</h1>
    //     </div>
    //     <div className="flex flex-col text-start w-full text-slate-700 ml-20 mt-12">
    //         <h1 className="text-4xl">Your immigration experts</h1>
    //         <h1 className="text-xl mt-5 max-w-[92vw]">With our experience, our team is ready and able to help with your questions.</h1>
    //     </div>
    //     <div className="flex flex-row text-start w-full text-slate-700 my-20 items-center justify-between">
    //         <div className="flex flex-col ml-10">
    //             <h1 className='text-3xl font-bold p-3'>Susana B. Luna</h1>
    //             <p className="font-bold p-3 ">Phone: <a className=" font-semibold " href="tel:+12092040088">(209) 204 - 0088</a></p>     
    //             <p className="font-bold p-3">Email: <a className=" font-semibold text-lg" href="mailto:susanaluna.law@gmail.com">susanaluna.law@gmail.com</a></p>           
    //         </div>
    //         <div className="flex flex-col mr-20">
    //             <img className="w-[45vw] mt-8 rounded-xl" src="/lawconvo.jpg" alt="office" />
    //         </div>
    //     </div>
    //     <div className="flex flex-row text-start w-full text-slate-700 my-20 items-center justify-between">
    //         <div className="flex flex-col ml-12">
    //             <img className="w-[45vw]  mt-8 rounded-xl" src="/lawconvo.jpg" alt="office" />
    //         </div>
    //         <div className="flex flex-col mr-20">
    //             <h1 className='text-3xl font-bold p-3'>Office Contact</h1>
    //             <p className="font-bold p-3 ">Phone: <a className=" font-semibold" href="tel:+12094098879">(209) 409 - 8879</a></p>               
    //         </div>
    //     </div>

    //     <div className="flex flex-col text-end w-full text-slate-700 mr-20 my-5">
    //         <h1 className="text-3xl">How to <span className="underline">Find Us</span></h1>
    //     </div>
    //     <div className="flex flex-col">
    //         <img className="w-96 mt-5 rounded-xl" src="/Luna.jpeg" alt="office" />
    //         <div className="flex flex-col text-start my-5">
    //             <p className=" text-xl font-bold">Address:</p>
    //             <a className="font-bold  my-3" href="https://www.google.com/maps/dir/?api=1&destination=Luna+and+Associates+Modesto+CA&travelmode=driving" target="_blank" >1520 H St. Modesto, CA 95354</a>
    //         </div>
    //         <div className="flex flex-col text-start ">
    //             <p className="font-bold text-xl">Hours: </p> 
    //             <p className="font-bold my-3">
    //                 Monday - Friday: <span className="text-md ml-1 font-semibold">9AM - 5PM</span>
    //             </p>
    //             <p className="font-bold  my-3">Saturday: <span className="ml-1">Closed</span></p>
    //             <p className="font-bold  my-3">Sunday: <span className="ml-1">Closed</span></p>
    //         </div>
    //     </div>
    //     <div className='flex justify-center mt-10 mb-5' id="socials">
    //         <a className="w-16" href=""><img src="/instagram.png" alt="" /></a>
    //         <a className="w-16" href=""><img src="/facebook.png" alt="" /></a>
    //         <a className="w-16" href=""><img src="/tik-tok.png" alt="" /></a>
    //     </div>
    // </div>
  )
}
export default Contact