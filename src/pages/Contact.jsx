
function Contact() {
  return (
    <div className="bg-White flex flex-col items-center font-libre font-extrabold ">
        <div className="bg-Blue h-[50vh] w-full flex justify-center pt-20">
            <h1 className="text-6xl mt-28 font-bold text-White">Contact Us</h1>
        </div>
        <div className="flex flex-col text-start w-full text-slate-700 ml-20 mt-12">
            <h1 className="text-4xl">Your immigration experts</h1>
            <h1 className="text-xl mt-5 max-w-[92vw]">With our experience, our team is ready and able to help with your questions.</h1>
        </div>
        <div className="flex flex-row text-start w-full text-slate-700 my-20 items-center justify-between">
            <div className="flex flex-col ml-10">
                <h1 className='text-3xl font-bold p-3'>Susana B. Luna</h1>
                <p className="font-bold p-3 ">Phone: <a className=" font-semibold " href="tel:+2092040088">(209) 204 - 0088</a></p>     
                <p className="font-bold p-3">Email: <a className=" font-semibold text-lg" href="mailto:susanaluna.law@gmail.com">susanaluna.law@gmail.com</a></p>           
            </div>
            <div className="flex flex-col mr-20">
                <img className="w-[45vw] mt-8 rounded-xl" src="/lawconvo.jpg" alt="office" />
            </div>
        </div>
        <div className="flex flex-row text-start w-full text-slate-700 my-20 items-center justify-between">
            <div className="flex flex-col ml-12">
                <img className="w-[45vw]  mt-8 rounded-xl" src="/lawconvo.jpg" alt="office" />
            </div>
            <div className="flex flex-col mr-20">
                <h1 className='text-3xl font-bold p-3'>Office Contact</h1>
                <p className="font-bold p-3 ">Phone: <a className=" font-semibold" href="tel:+2094098879">(209) 409 - 8879</a></p>               
            </div>
        </div>

        <div className="flex flex-col text-end w-full text-slate-700 mr-20 my-5">
            <h1 className="text-3xl">How to <span className="underline">Find Us</span></h1>
        </div>
        <div className="flex flex-col">
            <img className="w-96 mt-5 rounded-xl" src="/Luna.jpeg" alt="office" />
            <div className="flex flex-col text-start my-5">
                <p className=" text-xl font-bold">Address:</p>
                <a className="font-bold  my-3" href="https://www.google.com/maps/dir/?api=1&destination=Luna+and+Associates+Modesto+CA&travelmode=driving" target="_blank" >1520 H St. Modesto, CA 95354</a>
            </div>
            <div className="flex flex-col text-start ">
                <p className="font-bold text-xl">Hours: </p> 
                <p className="font-bold my-3">
                    Monday - Friday: <span className="text-md ml-1 font-semibold">9AM - 5PM</span>
                </p>
                <p className="font-bold  my-3">Saturday: <span className="ml-1">Closed</span></p>
                <p className="font-bold  my-3">Sunday: <span className="ml-1">Closed</span></p>
            </div>
        </div>
        {/* <div className="w-full flex justify-center px-20 mt-10">
            <div className="border h-1 w-full bg-Blue"></div>
            <div className="border h-2 w-4 bg-Gold rounded-xl -my-0.5 mx-5"></div>
            <div className="border h-1 w-full bg-Blue"></div>
        </div> */}
        <div className='flex justify-center mt-10 mb-5' id="socials">
            <a className="w-16" href=""><img src="/instagram.png" alt="" /></a>
            <a className="w-16" href=""><img src="/facebook.png" alt="" /></a>
            <a className="w-16" href=""><img src="/tik-tok.png" alt="" /></a>
        </div>
    </div>
  )
}
export default Contact