import { FaBook } from "react-icons/fa"
import { HiTerminal } from "react-icons/hi"

const Services = () => {

    return (
        <div>
            <div className="container mx-auto px-4 py-3">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col space-y-3">
                        <h1 className="text-center text-3xl font-semibold text-textSecondary">SERVICES</h1>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 justify-evenly">
                        <div className="md:w-1/2 w-full py-5 flex flex-col items-center">
                            <div className="p-3 bg-secondaryBg rounded-full text-xl">
                                <HiTerminal />
                            </div>

                            <div className="flex flex-col items-center gap-5">
                                <div className="flex flex-col mt-3 gap-3 items-center">
                                    <h1 className="font-semibold text-2xl">Full-Stack Developer</h1>
                                    <p className="text-center text-lg">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                                </div>

                                <div className=" mt-2">
                                    <p className="leading-7 tracking-wider text-center max-w-sm">Focused on building products that people love to use. I love to learn new things and share my knowledge with others. I teach others by creating content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 w-full py-5 flex flex-col items-center">
                            <div className="p-3 bg-secondaryBg rounded-full text-xl">
                                <FaBook />
                            </div>

                            <div className="flex flex-col items-center gap-5">
                                <div className="flex flex-col mt-3 gap-3 items-center">
                                    <h1 className="font-semibold text-2xl">Mentor</h1>
                                    <p className="text-center text-lg">I genuinely care about people, and love helping fellow designers work on their craft.</p>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <h1 className="text-lg">Experiences I draw from:</h1>
                                    <span>UX/UI, Freelancing</span>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <h1>Mentor Stats:</h1>
                                    <span>1 year experience</span>
                                    <span>10+ Students</span>
                                    <span>15+ Mentor Sessions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;