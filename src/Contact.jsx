
function Contact() {
  return (
    <div className="bg-White w-[100vw] flex flex-col items-center font-libre font-extrabold">
        <section id="image">
            <img src="/lawconvo.jpg" alt="meeting" />
        </section>

        <h1 className={h1Style}>GET IN TOUCH</h1>
        <section className={sectionStyle} id='contact-info'>
            <img className="w-20 mt-8 rounded-xl" src="/email.png" alt="office" />
            <h1 className={innerh1}>Susana B. Luna</h1>
            <p className="font-bold p-3 ">Phone: <a className="text-Blue font-semibold text-lg" href="tel:+2092040088">(209) 204 - 0088</a></p>     
            <p className="font-bold p-3">Email: <a className="text-Blue font-semibold text-lg" href="mailto:susanaluna.law@gmail.com">susanaluna.law@gmail.com</a></p>           
        </section>
        <section className={sectionStyle} id='contact-info'>
            <img className="w-20 mt-8 rounded-xl" src="/phone.png" alt="office" />
            <h1 className={innerh1}>Office Contact</h1>
            <p className="font-bold p-3 ">Phone: <a className="text-Blue font-semibold text-lg" href="tel:+2094098879">(209) 409 - 8879</a></p>               
        </section>

        <h1 className={h1Style}>WHERE TO FIND US</h1>
        <section className={sectionStyle} id='location-hours'>
            <img className="w-20 mt-5 rounded-xl" src="/pin.png" alt="office" />
            <h1 className={innerh1}>The Luna Building</h1>
            <div className="flex flex-col text-start">
                <p className="font-bold">Address:</p>
                <a className="font-bold text-Blue" href="https://www.google.com/maps/dir/?api=1&destination=Luna+and+Associates+Modesto+CA&travelmode=driving" target="_blank" >1520 H St. Modesto, CA 95354</a>
            </div>
            <div className="flex flex-col text-start w-[37vw] ">
                <p className="font-bold">Hours: </p> 
                <p className="font-bold font-libre text-Blue">
                    Monday - Friday: 9AM - 5PM
                </p>
                <p className="font-bold text-Blue">Saturday: Closed</p>
                <p className="font-bold text-Blue">Sunday: Closed</p>
            </div>
        </section>

        <h1 className={h1Style}>SOCIAL</h1>
        <section className={sectionStyle} id='socials'>
            <p>facebook</p>
            <p>instagram</p>
            <p>youtube?</p>
        </section>
    </div>
  )
}
const h1Style='text-3xl text-Blue m-10'
const innerh1='text-2xl text-Blue m-10 my-5 font-semibold'
const sectionStyle='text-lg bg-white w-[70vw] h-[50vh] mb-10 shadow-lg flex flex-col items-center'
export default Contact