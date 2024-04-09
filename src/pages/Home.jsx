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
      <section id='' className="w-full h-[100vh] flex flex-col md:flex-row md:items-center md:text-center mb-10">
        <div id='' className="md:-mt-16 md:w-[33%] ">
          <img className="md:h-[90vh] object-cover" src="/Statue.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0 md:w-[33%]">
          <h1 className="text-4xl text-Blue font-bold ">Susana B. Luna and Associates</h1>
          <h2 className="text-3xl text-Blue font-bold ">Immigration Law</h2>
        </div>
        <div className="flex justify-center md:w-[33%]">
          <img className="h-72" src="/Logo.png" alt="Logo" />
        </div>
      </section>
      <div className="h-[50vh] mt-10 md:mt-0 flex flex-wrap justify-start items-center mx-10">
        <h1 className="text-3xl font-bold text-start text-slate-700 md:-mb-10">Our Experience</h1>
        <p className="text-md font-bold text-slate-800 text-start">Susana B. Luna is an experienced immigration attorney dedicated to serving clients with integrity and compassion. With a commitment to excellence, Susana brings a wealth of knowledge and expertise to her practice. Susana is fluent in Spanish, ensuring effective communication with Spanish-speaking clients.</p>
        <Link className=" w-32 px-4 py-2 mx-auto text-White rounded-3xl text-xl font-bold bg-Blue" to='/services'><button>Services</button></Link>
      </div>
      <img className="mt-10" src="/lawconvo.jpg" alt="" />

      <div className="h-[70vh] mt-20 md:mt-0 flex flex-row justify-between items-center ">
        <div className="flex flex-col m-10">
          <h1 className="text-3xl font-bold text-start text-slate-700 mb-10">Our Team</h1>
          <p className="text-md font-bold text-slate-800 text-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ea esse obcaecati. Ipsum inventore rerum fugiat reprehenderit sapiente quisquam non. Architecto illum aut deserunt cupiditate laborum molestiae, dolorem quam maxime.</p>
        </div>
        <img className="w-[40vh] m-5" src="/lawconvo.jpg" alt="" />
      </div>

      <section id="valuesSection" className=" bg-White w-full mb-20">
        <div id="text" className="flex flex-col items-center ">
          <span className="mt-10 mb-10 text-5xl font-bold text-Blue">Our Values</span>
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