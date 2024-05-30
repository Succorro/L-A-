import { Link } from "react-router-dom"
import {animateScroll as scroll } from 'react-scroll'

function Home() {
  const valuesArray = [
    {
      title: 'Empathy', 
      image: '/empathy.png'
    },
    {
      title: 'Integrity', 
      image: '/handshake.png'
    },
    {
      title: 'Excellence', 
      image: '/award.png'
    },
    {
      title: 'Advocacy', 
      image: '/group.png'
    },
    {
      title: 'Responsiveness', 
      image: '/target.png'
    },
    {
      title: 'Trust', 
      image: '/shield.png'
    },
  ]

  return (
    <div className="mt-16 text-lg flex flex-col items-center bg-White">
      
      <section id='hero' className="w-full min-h-[90vh] flex flex-col md:flex-row md:items-center md:text-center mb-10 bg-Blue">
        <div className="flex flex-col items-center mb-16 md:mt-0 md:w-[66%]">
        <div className="flex justify-center w-[80%] md:w-[50%] mb-10 mx-auto">
          <img loading="lazy" className="" src="/Logo.png" alt="Logo" />
        </div>
          <h1 className="text-4xl lg:text-5xl  mb-3 lg:mb-10 text-White ">Susana B. Luna and Associates</h1>
          <h2 className="text-2xl text-White font-bold ">Immigration Law</h2>
        </div>
        <div id='' className="md:-mt-16 md:w-[34%] ">
          <img loading="lazy" className="h-[43vh] md:h-[100vh] object-cover w-full md:-mt-0 " src="/Statue.jpg" alt="" />
        </div>
      </section>

      <section id="about" className=" my-10 sm:mb-20 md:mt-0 flex flex-col justify-start items-start mx-10">
        <h1 className="text-4xl mb-1 mx-10 font-bold text-Blue md:mt-3">About Us</h1>
        <div className="h-0.5 mx-10 w-[40vw] sm:w-[35vw] md:w-[30vw] lg:w-[20vw] bg-Blue opacity-60 mb-10 "></div>
        
        <p className="text-xl text-slate-700 text-start mb-4 mx-10">
        At Susana B. Luna and Associates, we are committed to transforming the complexity of immigration into a clear path toward the American dream. As a firm founded by an immigrant for immigrants, we intimately understand the challenges and intricacies of this journey. 
        </p>
        <p className="text-xl text-slate-700 text-start mx-10">
        Our mission is to ease your way through this process with our extensive expertise and years of experience, ensuring that your journey to achieving the American dream is not just a possibility but a reality. Let us guide you home.
        </p>
        <Link className="mx-auto" to='/services' onClick={() => scroll.scrollToTop()}> 
          <button className="justify-center self-start px-7 py-5 mt-14 leading-6 text-center border-2 border-solid rounded-[100px] max-md:px-5 max-md:mt-10
            bg-Blue border-White text-White
            transition ease-in-out duration-1000 delay-300 
            hover:text-Blue hover:bg-White hover:border-Blue">Services</button>
        </Link>
      </section>

      <div className="h-0.5 w-[90vw] bg-Blue opacity-20 mb-20 "></div>

      <section id='team' className="flex w-full gap-5 max-md:flex-col max-md:gap-0 bg-slate-200 pb-32 md:pb-0 mb-20">
          <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-full mg:h-full">
            <div className="flex overflow-hidden relative flex-col grow justify-center items-center pb-20 md:pb-0 text-xl text-center text-white whitespace-nowrap  max-md:max-w-full">
              <img
                loading="lazy"
                src="/Luna and Associates Photos copy/DSC_9246.jpeg"
                className="h-[80vh] lg:h-[100vh] object-cover object-bottom w-full"
                alt="law building"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto font-medium text-Blue max-md:mt-10 max-md:max-w-full">
              <h2 className="text-5xl font-bold tracking-tight leading-[52px] max-md:max-w-full">
                Team Luna
              </h2>
              <p className="mt-9 text-xl leading-8 text-slate-700 max-md:max-w-full md:mx-0 mx-20">
                Team Luna is committed and dedicated to helping you with your immigration needs.
              </p>
              <div className="flex flex-row justify-center gap-5">
                <Link to='/team' onClick={() => scroll.scrollToTop()}>
                  <button className="justify-center self-start px-7 py-5 mt-14 leading-6 text-center border-2 border-solid rounded-[100px] max-md:px-5 max-md:mt-10
            bg-Blue border-White text-White
            transition duration-300 ease-in-out
            hover:text-Blue hover:bg-White hover:border-Blue">
                    Our Team
                  </button>
                </Link>
              <Link to='/contact' onClick={() => scroll.animateTopScroll()}>
                <button className="justify-center self-start px-7 py-5 mt-14 text-Blue leading-6 text-center text-xl underline decoration-Blue max-md:px-5 max-md:mt-10
                hover:no-underline
                transition ease-in-out delay-100 duration-300">
                  Contact Us
                </button>
              </Link>
              </div>
            </div>
          </div>
      </section>
      <section id="valuesSection" className="mb-32  bg-White w-full">
        <div id="text" className="flex flex-col items-center ">
          <span className="mt-10 mb-10 text-5xl font-bold text-Blue">
            Our Values
          </span>
        </div>
        <ul id="group" className="grid grid-cols-2 md:grid md:grid-cols-3 mx-10">
            {valuesArray.map((obj, index) => {
              const {title, image} = obj
              return <li key={index} className="flex flex-col m-2  sm:p-5 items-center p-2">
                      <picture className="justify-center">
                          <img src={image} style={{width: "100px"}} alt="pic" />
                      </picture>
                      <div>
                          <h3 className="font-bold text-xl mt-4 text-Blue">{title}</h3>
                      </div>
                    </li>
            })}
        </ul>
      </section>
    </div>
  )
}

export default Home