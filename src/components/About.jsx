import club from "../assets/icons/club.png"
import booking from "../assets/icons/booking.png"
import payment from "../assets/icons/psyment.png"
import members from "../assets/icons/members.png"
import aboutImg from "../assets/icons/about us.png"
const About = () => {
    return (
        <div>
            {/* about text */}
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
                <div className=" md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <h2 className="text-4xl text-neutralDgrey font-semibold mb-4 md:w-4/5">
                            The unseen of spending three years at Pixelgrade
                        </h2>
                        <p className="md:w-3/4 text-sm text-neutralDgrey mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                        </p>
                        <button className="btn-primary">Show more</button>

                    </div>
                </div>
            </div>

            {/* company states */}
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl text-neutralDgrey font-semibold mb-4 md:w-2/3">Helping a local
                            <br />
                            <span className="text-brandPrimary">
                                business reinvent itself
                            </span>
                        </h2>
                        <p >We reached here with our hard work and dedication</p>

                    </div>

                    {/* states */}
              <div className="md:w-1/2  mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12 ">
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <img src={members} alt=""/>
                        <div>
                            <h4 className="text-2xl text-neutralDgrey font-semibold">
                            2,245,341
                            </h4>
                            <p>Members</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={booking} alt=""/>
                        <div>
                            <h4 className="text-2xl text-neutralDgrey font-semibold">
                            828,867
                            </h4>
                            <p>Event Bookings</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
   
                    <div className="flex items-center gap-4">
                        <img src={club} alt=""/>
                        <div>
                            <h4 className="text-2xl text-neutralDgrey font-semibold">
                            46,328
                            </h4>
                            <p>Clubs </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={payment} alt=""/>
                        <div>
                            <h4 className="text-2xl text-neutralDgrey font-semibold">
                            21,926,436
                            </h4>
                            <p>Payments</p>
                        </div>
                    </div>
                </div>
              </div>
                </div>
            </div>
        </div>
    );
}

export default About;