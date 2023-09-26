import { BsTwitter, BsDiscord, BsMedium, BsGithub } from "react-icons/bs"
import { BiLogoGmail } from "react-icons/bi"
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion"
import toast from "react-hot-toast";

const Hero = () => {

    const copyDiscordUsername = () => {
        navigator.clipboard.writeText("hero.xyz");
        toast.success("Discord Username: hero.xyz", {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff'
            },
            position: "top-right"
        });
    };

    return (
        <div className="container mx-auto" id="hero">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center h-screen justify-evenly flex-col md:flex-row">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-5xl font-extrabold">Om Agrawal</h1>
                        <div className="flex text-2xl font-semibold">
                            <p className="mr-1">I'm a</p>
                            <Typewriter
                                options={{
                                    strings: ["Freelancer", "Developer", "Content Writer", "Student"],
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName: "texteffect",
                                }} />
                        </div>
                    </div>

                    {/* ICONS */}

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex gap-10 items-center mt-5">
                        <a href="https://twitter.com/@HeroCodes404" target="_blank" className="text-xl cursor-pointer hover:text-blue-800 transition">
                            <BsTwitter />
                        </a>
                        <span onClick={copyDiscordUsername} className="text-xl cursor-pointer hover:text-blue-800 transition">
                            <BsDiscord />
                        </span>
                        <a href="https://github.com/Hero-Codes" target="_blank" className="text-xl cursor-pointer hover:text-blue-800 transition">
                            <BsGithub />
                        </a>
                        <a href="https://medium.com/@herocodes" target="_blank" className="text-xl cursor-pointer hover:text-blue-800 transition">
                            <BsMedium />
                        </a>
                        <a href="mailto:herojod2525@gmail.com" target="_blank" className="text-xl cursor-pointer hover:text-blue-800 transition">
                            <BiLogoGmail />
                        </a>
                    </motion.div>
                </div>

                <div>
                    <img src="https://avatars.githubusercontent.com/u/98174971?v=4" className="h-[300px] w-[300px] rounded-full" alt="" />
                </div>
            </motion.div>
        </div>
    )
}

export default Hero