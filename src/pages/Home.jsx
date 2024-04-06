import { Link } from "react-router-dom"
function Home() {
  const servicesArray = [
    {
      title: 'Empathy', 
      image: '/gavel1.png'
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
    <div className=" text-lg flex flex-col items-center">
      <section id='cool' className="w-full h-[100vh]">
        <div id='nav' className="">
          <img className="absolute min-h-[100vh] lg:max-h-[30vh] lg:w-full object-cover" src="/Statue.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center lg:ml-20">
          <h1 className="absolute text-5xl text-White  font-bold my-72">Luna and Associates</h1>
          <h2 className="absolute text-4xl text-White font-bold my-96">Immigration Law</h2>
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

      <section id="valuesSection" className=" bg-white w-full mb-20">
        <div id="text" className="flex flex-col items-center ">
          <span className="mt-10 mb-10 text-5xl font-bold text-Blue">Our Values</span>
        </div>
        <ul id="group" className="grid grid-cols-2 md:grid md:grid-cols-3 mx-10">
            {servicesArray.map((obj, index) => {
              const {title, image} = obj
              return <li key={index} className="flex flex-col m-2  sm:p-5 items-center p-2">
                      <picture className="justify-center">
                          <img src={image} style={{width: "100px"}} alt="pic" />
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