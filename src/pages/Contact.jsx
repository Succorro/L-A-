import { contactData } from "@/data/contactData"

function Contact() {
    const displayContact = contactData.map(({title, text, href, image, title2, text2, href2}, index)=>{
        const underlineConditional = (index) =>  index <= 1 ? <div className="h-0.5 w-[50vw] md:w-[30vw] bg-White opacity-20 mt-10"></div> : <></>
        const busniessHoursConditional = (index) => index === 2 ? <p>Sat - Sun: Closed</p>: <></>
        return (
            <div key={index} className="flex flex-col my-5 w-full items-center">
                <div  className="flex flex-row ">
                    <div className="bg-White rounded-full px-5 py-5 mx-5 max-h-[10vh]">
                        <img className="w-10" src={image} alt="contact" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="font-semibold text-xl tracking-wide">{title}</p>
                        <a className="hover:underline w-48 mt-1" href={href} target="_blank">{text}</a>
                        <p className="font-semibold text-xl tracking-wide mt-3">{title2}</p>
                        <a className="hover:underline w-48" href={href2} target="_blank">{text2}</a>
                        {busniessHoursConditional(index)}
                    </div>
                </div>
                {underlineConditional(index)}
            </div>
        )
    })
  return (
    <div className="bg-White">
        <section className="relative bg-Blue min-h-screen flex flex-col justify-start items-center pt-32">
            <img
                className="absolute inset-0 opacity-40 lg:object-cover w-full h-full -top-10 mt-10 lg:w-full lg:h-[100vh] z-0"
                src="/Luna and Associates Photos copy/SL2.jpeg"
                alt="luna building"
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

        <section className="flex flex-col">
            {/* <h1 className="text-White bg-Blue text-5xl font-bold py-10 ">The Luna Building</h1> */}
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col bg-Blue text-White object-center justify-center items-center text-center w-full md:min-w-[60vw] max-h-[80vh] py-10">
                    <h3 className="mb-10 font-bold text-4xl ">Contact Us</h3>
                    {displayContact}
                </div>
                <div className=" flex w-full md:min-w-[40vw] max-h-[80vh]">
                    <img className="object-cover" src="/Luna and Associates Photos copy/DSC_9806.jpeg" alt="luna building" />
                </div>
            </div>
        </section>
        <div className="flex flex-col items-center mx-auto justify-center py-20">
            <p className="text-3xl text-slate-700 font-bold mb-5">Located in Downtown Modesto</p>
            <a className="text-lg  my-3 px-4 hover:underline" href="https://www.google.com/maps/dir/?api=1&destination=Luna+and+Associates+Modesto+CA&travelmode=driving" target="_blank" >1520 H St. Modesto, CA 95354</a>
            <a className="" href="https://www.google.com/maps/dir/?api=1&destination=Luna+and+Associates+Modesto+CA&travelmode=driving" target="_blank" >
                <img className="w-[70vw] lg:w-[40vw] mt-5 rounded-xl" src="/Luna.jpeg" alt="office" loading="lazy"/>
            </a>
        </div>
    </div>
  )
}
export default Contact