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

      <section id="imageSection" className="pb-10 w-full bg-White mt-1">
        <div className="flex justify-center">
          <img className="max-h-[70vh]" src="/penandpaper.jpg" alt="bg" />
        </div>
        <h1  className="text-5xl font-bold text-Blue mt-20">Luna and Associates</h1>
        <p className="m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis labore aperiam deserunt assumenda! Aperiam ad veritatis dignissimos repellat neque nemo. Voluptate iste, odio rem velit impedit deserunt aut incidunt?</p>
        <Link className="bg-Blue text-white font-semibold text-lg px-6 py-2 rounded-3xl hover:bg-blue-900 hover:text-white transition ease-in-out duration-50 delay-100" to='/contact'>
          <button >
            Contact Us
          </button>
        </Link>
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
              const {title, image} = obj
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