import { BsTwitter, BsDiscord, BsMedium, BsGithub } from "react-icons/bs"
import { BiLogoGmail } from "react-icons/bi"
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col h-screen justify-center">
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
                    <div className="text-xl cursor-pointer hover:text-blue-800 transition">
                        <BsTwitter />
                    </div>
                    <div className="text-xl cursor-pointer hover:text-blue-800 transition">
                        <BsDiscord />
                    </div>
                    <div className="text-xl cursor-pointer hover:text-blue-800 transition">
                        <BsGithub />
                    </div>
                    <div className="text-xl cursor-pointer hover:text-blue-800 transition">
                        <BsMedium />
                    </div>
                    <div className="text-xl cursor-pointer hover:text-blue-800 transition">
                        <BiLogoGmail />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero