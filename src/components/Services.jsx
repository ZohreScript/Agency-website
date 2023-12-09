import b1 from "../assets/icons/company1.png"
import b2 from "../assets/icons/company2.png";
import b3 from "../assets/icons/company1.png";
import b4 from "../assets/icons/company4.png";
import b5 from "../assets/icons/company5.png";
import b6 from "../assets/icons/company6.png";
import b7 from "../assets/icons/company7.png";
import memberImage from '../assets/icons/membership.png';
import nationalImage from '../assets/icons/national.png';
import clubsImage from '../assets/icons/clubs.png';


const Services = () => {

    const services = [
        {
            id: 1,
            title: "Membership Organisations",
            description: "Our membership management software provides full automation of membership renewals and payments",
            image: memberImage
        },
        {
            id: 2,
            title: "National Associations",
            description: "Our membership management software provides full automation of membership renewals and payments",
            image: nationalImage
        },
        {
            id: 3,
            title: "Clubs And Groups",
            description: "Our membership management software provides full automation of membership renewals and payments",
            image: clubsImage
        }
    ];


    return (
        <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
            <div className="text-center my-8">
                <h2 className="text-4xl text-neutralDgrey font-semibold mb-2">Our Clients</h2>
                <p className="text-neutralGrey ">We have been working with some Fortune 500+ clients</p>
                {/* company logo */}
                <div className="my-12 flex flex-wrap justify-between items-center gap-8">

                    <img src={b1} alt="" />
                    <img src={b2} alt="" />
                    <img src={b3} alt="" />
                    <img src={b4} alt="" />
                    <img src={b5} alt="" />
                    <img src={b6} alt="" />
                    <img src={b7} alt="" />



                </div>
            </div>
            {/* services card */}
            <div className="mt-20 md:w-1/2 mx-auto text-center">
                <h2 className="text-4xl text-neutralDgrey font-semibold mb-2"> Manage your entire community in a single system</h2>
                <p className="text-neutralGrey "> Who is Nextcent suitable for? </p>
            </div>
            {/* cards */}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {services.map(service => (
                    <div key={service.id} className="px-4 py-8 text-center  md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer  hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700  transition-all duration-300 flex items-center justify-center h-full">
                        <div >
                            <div className="flex items-center justify-center">
                                <img src={service.image} className="-ml-5" alt="" />
                            </div>
                            <h4 className="text-2xl font-bold text-neutralDgrey my-2">{service.title}</h4>
                            <p className="text-sm text-neutralDgrey">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>);
}

export default Services;