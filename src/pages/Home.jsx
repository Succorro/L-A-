import { Link } from "react-router-dom"
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
    <div className="my-16 text-lg flex flex-col items-center bg-White">
      
      <section id='' className="w-full min-h-[90vh] flex flex-col md:flex-row md:items-center md:text-center mb-10 bg-Blue">
        <div className="flex justify-center md:w-[33%]">
          <img className="h-70" src="/Logo.png" alt="Logo" />
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0 md:w-[33%]">
          <h1 className="text-4xl lg:text-6xl  mb-3 lg:mb-10 text-White font-bold ">Susana B. Luna and Associates</h1>
          <h2 className="text-2xl text-White font-bold ">Immigration Law</h2>
        </div>
        <div id='' className="md:-mt-16 md:w-[34%] ">
          <img className="h-[43vh] md:h-[100vh] object-cover w-full md:-mt-0 " src="/Statue.jpg" alt="" />
        </div>
      </section>

      <section className=" mt-10 md:mt-0 flex flex-col justify-start items-center mx-10">
        <h1 className="text-5xl mb-10 font-bold text-start text-Blue ">Our Experience</h1>
        <p className="text-md font-bold text-slate-800 text-start">
        At Susana B. Luna and Associates, we are committed to transforming the complexity of immigration into a clear path toward the American dream. As a firm founded by an immigrant for immigrants, we intimately understand the challenges and intricacies of this journey. Our mission is to ease your way through this process with our extensive expertise and years of experience, ensuring that your journey to achieving the American dream is not just a possibility but a reality. Let us guide you home.
        </p>
        <Link className="mx-auto" to='/services'>
          <button className="justify-center self-start px-7 py-5 mt-14 leading-6 text-center border-2 border-solid rounded-[100px] max-md:px-5 max-md:mt-10
              bg-Blue border-White text-White
              hover:text-Blue hover:bg-White hover:border-Blue
              transition ease-in-out delay-100">Services</button>
        </Link>
      </section>

      <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-20 text-xl text-center text-white whitespace-nowrap min-h-[594px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="lawconvo.jpg"
                className="object-cover absolute w-full"
                alt="law convo"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto font-medium text-Blue max-md:mt-10 max-md:max-w-full">
              <h2 className="text-5xl font-bold tracking-tight leading-[52px] max-md:max-w-full">
                Team Luna
              </h2>
              <p className="mt-9 text-2xl leading-8 text-slate-900 text-opacity-80 max-md:max-w-full">
                Team Luna is committed and dedicated to helping you with your immigration needs.
              </p>
              <div className="flex flex-row justify-center gap-5">
              <button className="justify-center self-start px-7 py-5 mt-14 leading-6 text-center border-2 border-solid rounded-[100px] max-md:px-5 max-md:mt-10
              bg-Blue border-White text-White
              hover:text-Blue hover:bg-White hover:border-Blue
              transition ease-in-out delay-100">
                Our Team
              </button>
              <button className="justify-center self-start px-7 py-5 mt-14 text-Blue leading-6 text-center border-2 border-Blue border-solid rounded-[100px] max-md:px-5 max-md:mt-10
              hover:bg-Blue hover:border-White hover:text-White
              transition ease-in-out delay-100">
                Contact Us
              </button>

              </div>
            </div>
          </div>
      </section>
      <section id="valuesSection" className="mt-10  bg-White w-full mb-20">
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