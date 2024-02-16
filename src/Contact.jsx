
function Contact() {
  return (
    <div className="bg-White w-[100vw] flex flex-col items-center">
        <section id="image">
            <img src="/lawconvo.jpg" alt="meeting" />
        </section>

        <h1 className={h1Style}>GET IN TOUCH</h1>
        <section className={sectionStyle} id='contact-info'>
            <img className="w-20 mt-5 rounded-xl" src="/phone.png" alt="office" />
            <h1 className={innerh1}>Office Contact</h1>
            <p>Phone</p>            
        </section>
        <section className={sectionStyle} id='contact-info'>
            <img className="w-20 mt-5 rounded-xl" src="/email.png" alt="office" />
            <h1 className={innerh1}>Susana B. Luna</h1>
            <p>Phone</p>            
            <p>Email</p>            
        </section>

        <h1 className={h1Style}>WHERE TO FIND US</h1>
        <section className={sectionStyle} id='location-hours'>
            <img className="w-20 mt-5 rounded-xl" src="/pin.png" alt="office" />
            <h1 className={innerh1}>The Luna Building</h1>
            <p>address</p>
            <p>google maps link</p>
            <p>location hours</p>
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
const h1Style='text-3xl text-Blue m-10 font-semibold'
const innerh1='text-2xl text-Blue m-10 mt-5 font-semibold'
const sectionStyle='bg-white w-[70vw] h-[40vh] mb-10 shadow-lg flex flex-col items-center'
export default Contact