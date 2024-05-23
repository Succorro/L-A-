
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
        <div className="bg-White flex flex-col justify-center items-center text-center my-32 mx-10">
            <h1 className="text-Blue text-5xl font-bold">The Luna Building</h1>
        </div>
        <section className="bg-White flex flex-col md:flex-row justify-center items-center text-start  px-20 mb-10">
            <div className="relative rounded-xl bg-Blue text-White py-32 px-32 lg:px-20 w-[450px] h-[400px] flex flex-col mb-20 lg:mx-10">
                <img className="absolute -top-10 rounded-xl left-40 lg:left-32 w-32 h-32 bg-White shadow-md shadow-slate-900 z-0 p-7" src="/email.svg" alt="" loading="lazy"/>
                <h4 className="font-bold text-3xl mb-5">Contact Info</h4>
                <p className="mb-2 text-lg font-bold">Susana Luna:</p>
                <a className=" mb-2 hover:underline" href="tel:+12092040088">(209) 204 - 0088</a>
                <a className="mb-2 hover:underline" href="mailto:susanaluna.law@gmail.com">susanaluna.law@gmail.com</a>
                <p className="mb-2 text-lg font-bold">Office Phone:</p>
                <a className="hover:underline" href="tel:+12094098879">(209) 409 - 8879</a>
            </div>
            <div className="relative rounded-xl bg-Blue text-White py-32 px-32 w-[450px] h-[400px] flex flex-col mb-20 lg:mx-10">
                <img className="absolute -top-10 rounded-xl left-40 lg:left-32 w-32 h-32 bg-White shadow-md shadow-slate-900 z-0 p-3" src="/location.svg" alt="" loading="lazy"/>
                <h4 className="font-bold text-3xl">Location</h4>
                <a className="text-lg  my-3 px-4 hover:underline" href="https://www.google.com/maps/dir/?api=1&destination=Luna+and+Associates+Modesto+CA&travelmode=driving" target="_blank" >1520 H St. Modesto, CA 95354</a>
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
  )
}
export default Contact