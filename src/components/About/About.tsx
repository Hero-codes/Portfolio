import { FaRegFaceSmileBeam } from "react-icons/fa6"
import { GrProjects } from "react-icons/gr"
import { BiSupport } from "react-icons/bi"
import { PiMedalLight } from "react-icons/pi"

const About = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-3">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col space-y-3">
                        <h1 className="text-center text-3xl font-semibold text-textSecondary">ABOUT</h1>
                        <p className="max-w-5xl text-center mx-auto">As a full-stack web developer, I have a strong background in both front-end and back-end technologies.
                            I am experienced in working with frameworks like React and Qwik.js to develop linked web applications.</p>
                    </div>

                    <div className="flex justify-evenly flex-col gap-5 lg:flex-row items-center">
                        <div className="mb-6 md:mb-0">
                            <img src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/profile-img.jpg" className="h-[300px] w-[300px]" alt="" />
                        </div>

                        <div className="flex flex-col max-w-2xl space-y-5">
                            <h1 className="text-2xl font-semibold underline">Web Developer & Mentor</h1>
                            <p className="text-lg">I’m a 15 y/o full-stack web developer building cool products and teaching others by creating content that revolves around many areas in web development.</p>

                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <span className="text-lg font-semibold">Name: Hero</span>
                                    <span className="text-lg font-semibold">Country: India</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-semibold">Email: herojod2525@gmail.com</span>
                                    <span className="text-lg font-semibold">Age: 15</span>
                                </div>
                            </div>

                            <p className="leading-7">I pride myself on my ability to seamlessly integrate the front-end and back-end components of a web application, ensuring a smooth user experience and efficient functionality. Additionally, I have a deep understanding of databases, graphics design, and user experience management, allowing me to excel in all aspects of web development. I believe that being a full-stack web developer requires not only technical expertise but also excellent communication and teamwork skills.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col space-y-3">
                            <h1 className="text-center text-3xl font-semibold text-textSecondary">FACTS</h1>
                            <p className="max-w-5xl text-center mx-auto text-lg">Facts related to me</p>
                        </div>

                        <div className="flex justify-center gap-6 flex-col sm:flex-row">
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
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3 py-10">
                        <h1 className="text-center text-3xl font-semibold text-textSecondary">SKILLS</h1>
                        <p className="max-w-5xl text-center mx-auto">The skill of programming is essential for building a strong and impressive portfolio in the field of software development. Having a strong skill in programming is paramount when it comes to building an impressive portfolio in the field of software development.</p>

                        <div className="flex justify-center gap-3 py-10">
                            <div className="grid grid-cols-3 gap-10">
                                <div className="flex flex-col">
                                    <div className="circle">
                                        <span className="text">HTML</span>
                                        <span className="num">100%</span>
                                    </div>

                                </div>
                                <div className="flex flex-col">
                                    <div className="circle">
                                        <span className="text">CSS</span>
                                        <span className="num">100%</span>
                                    </div>

                                </div>
                                <div className="flex flex-col">
                                    <div className="circle">
                                        <span className="text">JavaScript</span>
                                        <span className="num">100%</span>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="circle">
                                        <span className="text">TypeScript</span>
                                        <span className="num">100%</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="circle">
                                        <span className="text">React</span>
                                        <span className="num">100%</span>
                                    </div>

                                </div>
                                <div className="flex flex-col">
                                    <div className="circle">
                                        <span className="text">Qwik JS</span>
                                        <span className="num">100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default About