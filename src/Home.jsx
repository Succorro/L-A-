import { Link } from "react-router-dom"
function Home() {
  const servicesArray = [
    {
      title: 'title', 
      image: 'img'
    },
    {
      title: 'title', 
      image: 'img'
    },
    {
      title: 'title', 
      image: 'img'
    },
    {
      title: 'title', 
      image: 'img'
    },
    {
      title: 'title', 
      image: 'img'
    },
    {
      title: 'title', 
      image: 'img'
    },
  ]
  return (
    <div className="text-lg flex flex-col items-center">

      <section id='cool' className="w-full h-[100vh]">
        <div id='nav' className="">
          <img className="absolute h-[100vh] object-cover" src="/Statue.jpg" alt="" />
          {/* <Navigation/> */}
        </div>
        <h1 className="absolute text-5xl text-White font-dark ml-[16vw] sm:ml-[20vw] my-56">Luna and Associates</h1>
        <h2 className="absolute text-3xl text-White font-dark ml-[32vw] my-72">Immigration Law</h2>
      </section>

      <section id="aboutSection" className="pt-20 pb-10 bg-White flex flex-col items-center">
        <img className="w-[50vh] mb-10" src="/lawconvo.jpg" alt="" />
        <h1 className="text-5xl font-bold text-Blue">Susana B. Luna</h1>
        <p className="m-10">Susana B. Luna is an experienced immigration attorney dedicated to serving clients with integrity and compassion. With an active license and a commitment to excellence, Susana brings a wealth of knowledge and expertise to her practice. Susana is fluent in Spanish, ensuring effective communication with Spanish-speaking clients.</p>
        <img className="w-[50vh] mb-10" src="/lawconvo.jpg" alt="" />
        <Link className="bg-Blue text-white font-semibold text-lg px-6 py-2 rounded-3xl hover:bg-blue-900 hover:text-white transition ease-in-out duration-50 delay-100" to='/team'>
          <button >
            Get to know the team
          </button>
        </Link>
      </section>

      <section id="servicesSection" className=" bg-white w-full">
        <div id="text" className="flex flex-col items-center ">
          <span className="mt-10 mb-10 text-5xl font-bold text-Blue">Our Services</span>
        </div>
        <ul id="group" className="flex flex-col md:grid md:grid-cols-3 mx-10">
            {servicesArray.map((obj, index) => {
              const {title} = obj
              return <li key={index} className="flex flex-col m-2  sm:p-5 items-center p-2">
                      <picture className="justify-center">
                          <img src='/Gavel.png' style={{width: "60px"}} alt="pic" />
                      </picture>
                      <div>
                          <h3 className="font-bold text-xl text-Blue">{title}</h3>
                      </div>
                    </li>
            })}
        </ul>
      </section>
    </div>
  )
}

export default Home