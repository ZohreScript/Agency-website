import { Carousel } from 'flowbite-react';
import banner from "../assets/banner.png"
const Home = () => {
    return (
        <div className="bg-neutralSilver" id='home'>
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">

                <Carousel className='w-full mx-auto' >
                    <div className="my-28 md:my-8 py-12 flex  flex-col md:flex-row-reverse items-center justify-between gap-12 ">
                        <div>
                            <img src={banner} alt='' />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDgrey md:w-3/4 leading-snug'>Lessons and
                             insights<br /> <span className='text-brandPrimary leading-snug'>from 8 years</span></h1>
                            <p className='text-neutralDgrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary' >Register</button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex  flex-col md:flex-row-reverse items-center justify-between gap-12 ">
                        <div>
                            <img src={banner} alt='' />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDgrey md:w-3/4 leading-snug'>Learn and
                             Earn <br /><span className='text-brandPrimary leading-snug'>in 4 mounths</span>
                            </h1>
                            <p className='text-neutralDgrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary' >Register</button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex  flex-col md:flex-row-reverse items-center justify-between gap-12 ">
                        <div>
                            <img src={banner} alt='' />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDgrey md:w-3/4 leading-snug'>Lets 
                            Earn money<br /> <span className='text-brandPrimary leading-snug'>for 6 years</span></h1>
                            <p className='text-neutralDgrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary' >Register</button>
                        </div>
                    </div>
                    {/* <div className="flex h-full items-center justify-center ">
                            Slide 2
                        </div>
                     */}
                </Carousel>

            </div>
        </div>);
}

export default Home;