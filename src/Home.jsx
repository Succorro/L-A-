
function Home() {
  const beliefsArray = [
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
    <div>
      <section id="imageSection" className="h-[100vh] bg-White">
        <img src="" alt="bg" />
      </section>
      <section id="aboutSection" className="h-[100vh] bg-White">
        <h1>About us </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis labore aperiam deserunt assumenda! Aperiam ad veritatis dignissimos repellat neque nemo. Voluptate iste, odio rem velit impedit deserunt aut incidunt?</p>
      </section>
      <section id="beliefsSection" className="h-[100vh] bg-White">
        <div id="text" className="flex flex-col items-center ">
          <span className=" text-xl font-semibold mb-5 text-Blue">Our core beliefs</span>
          <h2 className="text-4xl font-bold m-2 text-center mb-5">What we stand for:</h2>
        </div>
        <ul id="group" className="flex flex-col sm:grid sm:grid-cols-3 mx-10">
            {beliefsArray.map((obj, index) => {
              const {title, image} = obj
              return <li key={index} className="flex flex-col m-2 border rounded border-zinc sm:p-5 items-center p-2">
                      <picture className="justify-center">
                          <img src={image} style={{width: "60px"}} alt="pic" />
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