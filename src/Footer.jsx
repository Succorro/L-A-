
function Footer() {
  return (
    <div id='contact-sitemap' className="bg-Blue h-[50vh] text-xl text-White">
        <h1>Our Office</h1>
        <div id="location"></div>
        <div id="contact"></div>
        <div id="socials"></div>
        <h1>&copy; {new Date().getFullYear()} Luna and Associates</h1>
    </div>
  )
}

export default Footer