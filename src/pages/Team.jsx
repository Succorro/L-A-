import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import TeamInfo from "@/data/TeamInfo";

function Team() {
    const teamDisplay = TeamInfo.map((person, index) => {
        return (
            <Sheet key={index}>
                <SheetTrigger className="relative overflow-hidden md:my-10 mx-1 md:mx-3 mb-5"  >
                    <img className="w-[70vw] md:w-[30vw] max-h-[404px] object-cover" src={person.image} alt="team member" loading="lazy"/>
                    <div id='content' className="absolute inset-0 flex flex-col justify-center items-center opacity-100 bg-Nav bg-opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <p className=" text-3xl mt-80 text-White">{person.name}</p>
                    </div>
                </SheetTrigger>
                <SheetContent className='w-[100vw]'>
                    <SheetHeader className='mt-5'>
                        <img className="h-[35vh] object-contain" src={person.image} alt="" loading="lazy"/>
                        <SheetTitle className='text-Blue text-4xl'>
                            {person.name}
                        </SheetTitle>
                        <p className="font-bold text-slate-700">{person.title}</p>
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
    <div className=" bg-slate-200 "> 
    <section className="relative bg-Blue min-h-screen flex flex-col justify-start items-center pt-32">
            <img
                className="absolute inset-0 opacity-40 object-cover h-full lg:w-full lg:h-[100vh] z-0"
                src="/legalDoc.jpg"
                alt="books"
                loading="lazy"
            />
            <div className="relative z-10 flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl text-White">Team Luna</h1>
                <p className="text-lg pt-10 text-start text-White px-20 lg:px-96">
                Team Luna brings a wealth of knowledge and expertise, allowing us to deliver comprehensive and effective legal representation.
                </p>
            </div>
        </section>
        <div className="bg-White py-20">
            <div className="flex flex-col text-start px-10 lg:px-60">
                <h1 className="text-3xl text-Blue mb-10">Commitment to our clients</h1>
                <p className="text-slate-700 text-lg  mb-4">Our team at Susana B. Luna and Associates embodies a deep commitment to empowering individuals on their immigration journey. With a profound understanding of the complexities and nuances of immigration law, our diverse team of legal experts stands ready to navigate the legal landscape with precision and empathy.</p>
            </div>
        </div>
        <section className="flex flex-col items-center p-10 text-slate-700 lg:mx-10">
            <h1 className="text-Blue text-3xl ">Meet the Team</h1>
            <ul className="grid grid-cols-1 md:grid-cols-3">
                {teamDisplay}
            </ul>
        </section>
    </div>
  )
}

export default Team