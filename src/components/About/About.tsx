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
                        <h1 className="text-center text-3xl font-semibold">ABOUT</h1>
                        <p className="max-w-5xl text-center mx-auto">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="flex justify-evenly flex-col gap-5 lg:flex-row items-center">
                        <div className="mb-6 md:mb-0">
                            <img src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/profile-img.jpg" className="h-[300px] w-[300px]" alt="" />
                        </div>

                        <div className="flex flex-col max-w-2xl space-y-3">
                            <h1 className="text-2xl font-semibold underline">UI/UX Designer & Web Developer.</h1>
                            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <span>Birthday: 1 May 1995</span>
                                    <span>Website: www.example.com</span>
                                    <span>City: New York, USA</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>Email</span>
                                    <span>Age</span>
                                    <span>Freelance</span>
                                </div>
                            </div>

                            <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col space-y-3">
                            <h1 className="text-center text-3xl font-semibold">FACTS</h1>
                            <p className="max-w-5xl text-center mx-auto">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="flex justify-center gap-6 flex-col sm:flex-row">
                            <div className="flex flex-col gap-2 text-xl items-center">
                                <div className="p-3 bg-red-300 rounded-full flex justify-center items-center">
                                    <FaRegFaceSmileBeam />
                                </div>
                                <span className="font-semibold">232</span>
                                <span>Happy Clients</span>
                            </div>
                            <div className="flex flex-col gap-2 text-xl items-center">
                                <div className="p-3 bg-red-300 rounded-full flex justify-center items-center">
                                    <GrProjects />
                                </div>
                                <span className="font-semibold">100</span>
                                <span>Projects</span>
                            </div>
                            <div className="flex flex-col gap-2 text-xl items-center">
                                <div className="p-3 bg-red-300 rounded-full flex justify-center items-center">
                                    <BiSupport />
                                </div>
                                <span className="font-semibold">100</span>
                                <span>Supported</span>
                                <span>People</span>
                            </div>
                            <div className="flex flex-col gap-2 text-xl items-center">
                                <div className="p-3 bg-red-300 rounded-full flex justify-center items-center">
                                    <PiMedalLight />
                                </div>
                                <span className="font-semibold">20</span>
                                <span>Achievements</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3 py-10">
                        <h1 className="text-center text-3xl font-semibold">SKILLS</h1>
                        <p className="max-w-5xl text-center mx-auto">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

                        <div className="flex justify-evenly md:flex-row gap-3">
                            <div className="flex gap-9 flex-wrap justify-center">
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