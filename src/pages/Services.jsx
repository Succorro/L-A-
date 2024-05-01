
function Services() {
//md:w-[40vw] mx-auto my-5 md:mx-16
  return (
    <div className=" bg-White ">
        <div className="bg-Blue h-[50vh] pt-10">
            <h1 className="mt-20 text-5xl text-White ">Our Services</h1>
            <p className="text-White text-xl m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, consequuntur quasi libero fuga dolorem, minus esse placeat atque in consequatur asperiores iure ipsam eum fugit. Incidunt enim vero tempora tempore?</p>
        </div>
        <div className="flex justify-center w-full items-center px-20 py-10">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <div className="relative overflow-hidden max-w-[35vw] max-h-[35vw] md:max-w-[40vw] md:max-h-[40vw] md:my-5">
                    <img className="w-full h-full object-cover" src="/penandpaper.jpg" alt="p" />
                    <div id='content' className="absolute inset-0 flex flex-col justify-center items-center opacity-0 bg-Blue bg-opacity-75 transition-opacity duration-300 hover:opacity-100">
                        <h1 className="text-white text-4xl">Adjustment of Status</h1>
                        <button className="bg-transparent border border-white text-white px-3 py-1 mt-2">Learn More</button>
                    </div>
                </div>
                <div className="relative overflow-hidden max-w-[35vw] max-h-[35vw] md:max-w-[40vw] md:max-h-[40vw] md:my-5">
                    <img className="w-full h-full object-cover" src="/penandpaper.jpg" alt="p" />
                    <div id='content' className="absolute inset-0 flex flex-col justify-center items-center opacity-0 bg-Blue bg-opacity-75 transition-opacity duration-300 hover:opacity-100">
                        <h1 className="text-white text-4xl">Adjustment of Status</h1>
                        <button className="bg-transparent border border-white text-white px-3 py-1 mt-2">Learn More</button>
                    </div>
                </div>
                <div className="relative overflow-hidden max-w-[35vw] max-h-[35vw] md:max-w-[40vw] md:max-h-[40vw] md:my-5">
                    <img className="w-full h-full object-cover" src="/penandpaper.jpg" alt="p" />
                    <div id='content' className="absolute inset-0 flex flex-col justify-center items-center opacity-0 bg-Blue bg-opacity-75 transition-opacity duration-300 hover:opacity-100">
                        <h1 className="text-white text-4xl">Adjustment of Status</h1>
                        <button className="bg-transparent border border-white text-white px-3 py-1 mt-2">Learn More</button>
                    </div>
                </div>
                <div className="relative overflow-hidden max-w-[35vw] max-h-[35vw] md:max-w-[40vw] md:max-h-[40vw] md:my-5">
                    <img className="w-full h-full object-cover" src="/penandpaper.jpg" alt="p" />
                    <div id='content' className="absolute inset-0 flex flex-col justify-center items-center opacity-0 bg-Blue bg-opacity-75 transition-opacity duration-300 hover:opacity-100">
                        <h1 className="text-white text-4xl">Adjustment of Status</h1>
                        <button className="bg-transparent border border-white text-white px-3 py-1 mt-2">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services