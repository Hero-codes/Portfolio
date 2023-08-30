import { BsTwitter, BsDiscord, BsMedium, BsGithub } from "react-icons/bs"
import { BiLogoGmail } from "react-icons/bi"
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <div className="container mx-auto" id="hero">
            <div className="flex items-center h-screen justify-evenly flex-col md:flex-row">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-5xl font-extrabold">Om Agrawal</h1>
                        <div className="flex text-2xl font-semibold">
                            <p className="mr-1">I'm a</p>
                            <Typewriter
                                options={{
                                    strings: ["Freelancer", "Developer", "Designer", "Student"],
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName: "texteffect",
                                }} />
                        </div>
                    </div>

                    {/* ICONS */}

                    <div className="flex gap-10 items-center mt-5">
                        <a href="https://twitter.com/@HeroCodes404" target="_blank" className="text-xl cursor-pointer hover:text-blue-800 transition">
                            <BsTwitter />
                        </a>
                        <a href="https://twitter.com/@HeroCodes40" target="_blank" className="text-xl cursor-pointer hover:text-blue-800 transition">
                            <BsDiscord />
                        </a>
                        <a href="https://github.com/Hero-Codes" target="_blank" className="text-xl cursor-pointer hover:text-blue-800 transition">
                            <BsGithub />
                        </a>
                        <a href="https://medium.com/@herocodes" target="_blank" className="text-xl cursor-pointer hover:text-blue-800 transition">
                            <BsMedium />
                        </a>
                        <a href="mailto:herojod2525@gmail.com" target="_blank" className="text-xl cursor-pointer hover:text-blue-800 transition">
                            <BiLogoGmail />
                        </a>
                    </div>
                </div>

                <div>
                    <img src="https://avatars.githubusercontent.com/u/98174971?v=4" className="h-[300px] w-[300px] rounded-full" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero