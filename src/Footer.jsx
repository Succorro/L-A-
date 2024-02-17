
function Footer() {
  return (
    <div id='contact-sitemap' className="bg-Blue text-start text-xl font-semibold text-White">
        <div className={divStyle} id="location">
            <h1 className={h1Style}>The Luna Building</h1>
                <div className="flex flex-col text-start">
                    <a className="my-5" href="https://www.google.com/maps/dir/?api=1&destination=Luna+and+Associates+Modesto+CA&travelmode=driving" target="_blank" >1520 H St. Modesto, CA 95354</a>
                </div>
                <div className="flex flex-col text-center">
                    <p className="my-5">
                        Monday - Friday: 9AM - 5PM
                    </p>
                    <p className="my-5">Saturday: Closed</p>
                    <p className="mt-5 mb-10">Sunday: Closed</p>
                </div>
            </div>
        <div className={divStyle} id="contact">
            <h1 className={h1Style}>Contact Us</h1>
            <p className="my-5">Cell: <a className="font-semibold" href="tel:+2092040088">(209) 204 - 0088</a></p>     
            <p className="my-5">Office: <a className="font-semibold" href="tel:+2094098879">(209) 409 - 8879</a></p>               
            <p className="mt-5 mb-10">Email: <a className="font-semibold" href="mailto:susanaluna.law@gmail.com">susanaluna.law@gmail.com</a></p>           
        </div>
        <div className='flex justify-center mt-10 mb-5' id="socials">
            <a className="w-16" href=""><img src="/instagram.png" alt="" /></a>
            <a className="w-16" href=""><img src="/facebook.png" alt="" /></a>
            <a className="w-16" href=""><img src="/tik-tok.png" alt="" /></a>
        </div>
        <h1 className="text-center py-5">&copy; {new Date().getFullYear()} Luna and Associates. All Rights Reserved</h1>
    </div>
  )
}
const divStyle = " mx-20 my-5 border border-0 border-b flex flex-col items-center"
const h1Style ='text-4xl mt-10 mb-5'
export default Footer