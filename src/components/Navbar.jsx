import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { FaXmark, FaBars } from "react-icons/fa6"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false)
            }
            //   setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Nav items array
    const navItems = [
        { link: "Home", path: "/home" },
        { link: "Service", path: "/service" },
        { link: "About", path: "/about" },
        { link: "Product", path: "/product" },
        { link: "Testimonial", path: "/testimonial" },
        { link: "FAQ", path: "/faq" },
      ];

    return (
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
            <nav className={`py-4 lg:px-14 px-4  ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`} >
                <div className="flex justify-between items-center text-base gap-8 ">
                    <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
                        <img src={logo} className="w-10 inline-block items-center" alt="" />
                        <span className="text-[#263238]">GREENWAY</span>
                    </a>
                    {/* Nav items for large screens */}
                    <ul className="md:flex space-x-12 hidden">
                        {navItems.map(({ link, path }) =>
                            <Link key={path} to={path} spy="true" smooth="true" offset={-100} className="block text-base text-gray-900 hover:text-brandPrimary"  >{link}</Link>
                        )}
                    </ul>

                    {/* btn for large device */}
                    <div className="space-x-12 hidden lg:flex items-center">
                        <a href="" className="hidden lg:flex items-center text-brandPrimary hover:text-gray-900">Login</a>
                        <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-200 rounded hover:bg-neutralGrey">signUp</button>
                    </div>
                    {/* menu btn only for mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none focus:text-gray-500">
                            {
                                isMenuOpen ? (<FaXmark className="h-6 w-6 text-neutralDgrey" />) : (<FaBars className="h-6 w-6 text-neutralDgrey" />)
                            }
                        </button>
                    </div>
                </div>
            </nav>
            {/* nav items for mobile device */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0  right-0 left-0" : "hidden"}`}>
                {navItems.map(({ link, path }) =>
                    <Link key={path} to={path} spy="true" smooth="true" offset={-100} className="block text-base text-white hover:text-brandPrimary first:font-medium"  >{link}</Link>
                )}
            </div>
        </header>
    );
};

export default Navbar;