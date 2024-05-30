import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import TeamInfo from "@/data/TeamInfo";

function Team() {
    const teamDisplay = TeamInfo.map((person, index) => {
        return (
            <Sheet key={index}>
                <SheetTrigger className="relative overflow-hidden mx-1 lg:mx-10 lg:my-5 mb-5"  >
                    <div id='testingcard' className=" flex flex-col p-10 justify-center items-center rounded-xl ">
                        <img className="w-80 h-80 object-cover rounded-full" src={person.image} alt="" />
                        <h4 className="text-White text-xl font-semibold mt-5">{person.name}</h4>
                        <p className="text-slate-300 mt-5">{person.title}</p>
                    </div>
                </SheetTrigger>
                <SheetContent className='w-[100vw]'>
                    <SheetHeader className='mt-5'>
                        <img className="h-[35vh] object-contain" src={person.image2} alt="" loading="lazy"/>
                        <SheetTitle className='text-slate-900 text-4xl'>
                            {person.name}
                        </SheetTitle>
                        <p className="font-bold text-blue-900">{person.title}</p>
                        <div className=' max-h-full overflow-y-auto whitespace-normal'>
                            <SheetDescription >
                                {person.bio}
                            </SheetDescription>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        )
    })
  return (
    <div className=" bg-Blue "> 
        <section className="relative bg-Blue min-h-screen flex flex-col justify-start items-center pt-32">
            <img
                className="absolute inset-0 opacity-40 object-cover h-full lg:w-full lg:h-[100vh] pt-16 z-0"
                src="/Luna and Associates Photos copy/DSC_9931.jpeg"
                alt="Team header"
                loading="lazy"
            />
            <div className="relative z-10 flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl text-White">Team Luna</h1>
                <p className="text-lg pt-10 text-start text-White px-20 lg:px-96">
                Team Luna brings a wealth of knowledge and expertise, allowing us to deliver comprehensive and effective legal representation.
                </p>
                <a href="#teamSection" className=" px-7 py-5 border-2 border-solid rounded-[100px] max-md:px-5  bg-Blue border-Blue text-White transition duration-300 delay-100 ease-in-out
                     hover:border-slate-200 hover:bg-slate-200 hover:text-Blue text-lg">Meet the Team</a>
            </div>
        </section>
        <div className="bg-White py-20">
            <div className="flex flex-col text-start px-10 lg:px-60">
                <h1 className="text-3xl text-Blue mb-10">Commitment to our clients</h1>
                <p className="text-slate-700 text-lg  mb-4">Our team at Susana B. Luna and Associates embodies a deep commitment to empowering individuals on their immigration journey. With a profound understanding of the complexities and nuances of immigration law, our diverse team of legal experts stands ready to navigate the legal landscape with precision and empathy.</p>
            </div>
        </div>
        <section id="teamSection" className="flex flex-col items-center p-10 text-slate-700 lg:mx-10">
            <h1 className="text-White text-6xl my-5">Team Luna</h1>
            <p className="mb-10 text-slate-300">Click on an image for more information</p>
            <ul className="grid grid-cols-1 lg:grid-cols-2">
                {teamDisplay}
            </ul>
        </section>
    </div>
  )
}

export default Team