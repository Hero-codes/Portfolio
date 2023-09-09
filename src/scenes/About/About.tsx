import { FaRegFaceSmileBeam, FaStripe } from "react-icons/fa6"
import { GrProjects } from "react-icons/gr"
import { BiSupport, BiLogoJavascript, BiLogoTypescript, BiLogoMongodb } from "react-icons/bi"
import { PiMedalLight } from "react-icons/pi"
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"
import { SiMongoose, SiFirebase, SiTailwindcss, SiChakraui, SiJsonwebtokens, SiRazorpay, SiExpress } from "react-icons/si"
import { motion } from "framer-motion"

const About = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-3" id="about">
                <div className="flex flex-col gap-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="flex flex-col space-y-3">

                        <h1 className="text-center text-3xl font-semibold text-textSecondary">ABOUT</h1>
                        <p className="max-w-5xl text-center mx-auto">As a full-stack web developer, I have a strong background in both front-end and back-end technologies.
                            I am experienced in working with frameworks like React and Qwik.js to develop linked web applications.</p>
                    </motion.div>

                    <div className="flex justify-evenly flex-col-reverse gap-5 lg:flex-row items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            className="mb-6 md:mb-0">
                            <img src="https://avatars.githubusercontent.com/u/98174971?v=4" className="h-[300px] w-[300px] rounded-full" alt="" />
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            className="flex flex-col max-w-2xl space-y-5">
                            <h1 className="text-2xl font-semibold underline">Web Developer & Mentor</h1>
                            <p className="text-lg">I’m a 15 y/o full-stack web developer building cool products and teaching others by creating content that revolves around many areas in web development.</p>

                            <div className="flex flex-col md:flex-row gap-3 justify-between">
                                <div className="flex flex-col gap-3">
                                    <span className="text-lg font-bold"><span className="font-semibold text-blue-600">Name:</span> Om Agrawal</span>
                                    <span className="text-lg font-bold"><span className="font-semibold text-blue-600">Country:</span> India</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="text-lg font-bold"><span className="font-semibold text-blue-600">Email:</span> herojod2525@gmail.com</span>
                                    <span className="text-lg font-bold"><span className="font-semibold text-blue-600">Age:</span> 15</span>
                                </div>
                            </div>

                            <p className="leading-7">I pride myself on my ability to seamlessly integrate the front-end and back-end components of a web application, ensuring a smooth user experience and efficient functionality. Additionally, I have a deep understanding of databases, graphics design, and user experience management, allowing me to excel in all aspects of web development. I believe that being a full-stack web developer requires not only technical expertise but also excellent communication and teamwork skills.</p>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            className="flex flex-col space-y-3">
                            <h1 className="text-center text-3xl font-semibold text-textSecondary">FACTS</h1>
                            <p className="max-w-5xl text-center mx-auto text-lg">Facts related to me</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex justify-center gap-6 flex-col sm:flex-row">
                            <div className="flex flex-col gap-2 text-xl items-center">
                                <div className="p-3 bg-secondaryBg rounded-full flex justify-center items-center">
                                    <FaRegFaceSmileBeam />
                                </div>
                                <span className="font-semibold">20</span>
                                <span>Happy Clients</span>
                            </div>
                            <div className="flex flex-col gap-2 text-xl items-center">
                                <div className="p-3 bg-secondaryBg rounded-full flex justify-center items-center">
                                    <GrProjects />
                                </div>
                                <span className="font-semibold">50</span>
                                <span>Projects</span>
                            </div>
                            <div className="flex flex-col gap-2 text-xl items-center">
                                <div className="p-3 bg-secondaryBg rounded-full flex justify-center items-center">
                                    <BiSupport />
                                </div>
                                <span className="font-semibold">10</span>
                                <span>Supported</span>
                                <span>People</span>
                            </div>
                            <div className="flex flex-col gap-2 text-xl items-center">
                                <div className="p-3 bg-secondaryBg rounded-full flex justify-center items-center">
                                    <PiMedalLight />
                                </div>
                                <span className="font-semibold">5</span>
                                <span>Achievements</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col space-y-3 py-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            className="mb-5">
                            <h1 className="text-center text-3xl font-semibold text-textSecondary">SKILLS</h1>
                            <p className="max-w-5xl text-center mx-auto">The skill of programming is essential for building a strong and impressive portfolio in the field of software development. Having a strong skill in programming is paramount when it comes to building an impressive portfolio in the field of software development.</p>
                        </motion.div>
                        <Marquee
                            direction="right"
                            speed={50}
                            pauseOnClick={true}
                            className="text-4xl">
                            <div className="mx-9">
                                <FaHtml5 />
                            </div>
                            <div className="mx-9">
                                <FaCss3Alt />
                            </div>
                            <div className="mx-9">
                                <BiLogoJavascript />
                            </div>
                            <div className="mx-9">
                                <BiLogoTypescript />
                            </div>
                            <div className="mx-9">
                                <FaReact />
                            </div>
                            <div className="mx-9">
                                <SiTailwindcss />
                            </div>
                            <div className="mx-9">
                                <SiChakraui />
                            </div>
                        </Marquee>

                        <div className="py-4"></div>

                        <Marquee
                            direction="left"
                            speed={50}
                            pauseOnClick={true}
                            className="text-4xl">
                            <div className="mx-9">
                                <BiLogoMongodb />
                            </div>
                            <div className="mx-9">
                                <SiExpress />
                            </div>
                            <div className="mx-9">
                                <SiMongoose />
                            </div>
                            <div className="mx-9">
                                <SiJsonwebtokens />
                            </div>
                            <div className="mx-9">
                                <SiFirebase />
                            </div>
                            <div className="mx-9">
                                <SiRazorpay />
                            </div>
                            <div className="mx-9">
                                <FaStripe />
                            </div>
                        </Marquee>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default About