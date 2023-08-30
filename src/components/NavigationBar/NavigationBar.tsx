import { AiOutlineHome, AiOutlineUser, AiOutlineMail, AiOutlineCode } from "react-icons/ai"
import { TfiWrite } from "react-icons/tfi"
import { Link } from "react-scroll"

const NavigationBar = () => {
    return (
        <div className="container mx-auto">
            <div className="md:max-w-sm w-full mx-auto p-2 nav fixed z-50 mb-3">
                <div className="flex justify-between gap-5 p-3 text-xl">
                    <Link
                        duration={500}
                        href="hero"
                        offset={-100}
                        smooth={true}
                        spy={true}
                        to="hero" className="p-2 rounded-full cursor-pointer transition bg-gradient-to-r from-blue-400 to-blue-900">
                        <AiOutlineHome />
                    </Link>

                    <Link
                        duration={500}
                        href="about"
                        offset={-100}
                        smooth={true}
                        spy={true}
                        to="about" className="p-2 rounded-full cursor-pointer transition bg-gradient-to-r from-blue-400 to-blue-900">
                        <AiOutlineUser />
                    </Link>

                    <Link
                        duration={500}
                        href="services"
                        offset={-100}
                        smooth={true}
                        spy={true}
                        to="services" className="p-2 rounded-full cursor-pointer transition bg-gradient-to-r from-blue-400 to-blue-900">
                        <AiOutlineCode />
                    </Link>

                    <Link
                        duration={500}
                        href="blogs"
                        offset={-100}
                        smooth={true}
                        spy={true}
                        to="blogs" className="p-2 rounded-full cursor-pointer transition bg-gradient-to-r from-blue-400 to-blue-900">
                        <TfiWrite />
                    </Link>

                    <Link
                        duration={500}
                        href="contact"
                        offset={-100}
                        smooth={true}
                        spy={true}
                        to="contact" className="p-2 rounded-full cursor-pointer transition bg-gradient-to-r from-blue-400 to-blue-900">
                        <AiOutlineMail />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;