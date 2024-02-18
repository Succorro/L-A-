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
        </div>
        <div className="flex flex-col items-center">
          <h1 className="absolute text-5xl text-White font-dark my-72">Luna and Associates</h1>
          <h2 className="absolute text-3xl text-White font-dark my-96">Immigration Law</h2>
        </div>
      </section>

      <div className="h-[70vh] mt-20 md:mt-0 flex flex-row justify-between items-center ">
        <div className="flex flex-col m-10">
          <h1 className=" mb-10 text-3xl font-bold text-start text-slate-700">Our Experience</h1>
          <p className="text-md text-start">Susana B. Luna is an experienced immigration attorney dedicated to serving clients with integrity and compassion. With a commitment to excellence, Susana brings a wealth of knowledge and expertise to her practice. Susana is fluent in Spanish, ensuring effective communication with Spanish-speaking clients.</p>
          <Link className=" w-32 px-3 mt-5 py-1 mx-auto text-White rounded-2xl font-semibold bg-Blue" to='/services'><button>Services</button></Link>
        </div>
        <img className="w-[40vh] m-5" src="/lawconvo.jpg" alt="" />
      </div>


      <section id="valuesSection" className=" bg-white w-full mb-20">
        <div id="text" className="flex flex-col items-center ">
          <span className="mt-10 mb-10 text-5xl font-bold text-slate-700">Our Values</span>
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
      <div className="w-full flex justify-end items-center mt-10 h-[40vh] bg-[url('/lawconvo.jpg')] bg-cover mb-40">
        <div className="flex flex-col items-end bg-White mr-5 py-5 px-3 opacity-90">
          <p className="w-[40vw]  text-slate-700">We are committed to protecting your rights as an immigrant and uniting your family together.</p>
          <Link className="bg-slate-900 text-white mt-5 font-semibold mx-auto text-md px-6 py-2 rounded-3xl hover:bg-blue-900 hover:text-white transition ease-in-out duration-50 delay-100" to='/team'>
            <button >
              Get to know the team
            </button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Home