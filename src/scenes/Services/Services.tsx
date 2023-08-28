import { FaBook } from "react-icons/fa"
import { HiTerminal } from "react-icons/hi"

const Services = () => {

    const frontend: string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "TailwindCSS", "Chakra UI", "ReactJS", "Qwik JS"];
    const backend: string[] = ["MongoDB", "Mongoose", "ExpressJS", "RazorPay", "Stripe", "JWT"];
    const devTools: string[] = ["VSCode", "Vercel", "Figma", "GitHub"]

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

                                <div className="flex flex-col items-center gap-2">
                                    <h1 className="text-lg mb-3">Languages I use:</h1>
                                    <div className="flex justify-evenly flex-col md:flex-row items-center py-4 gap-10">
                                        <div className="grid gap-6 place-items-center grid-cols-2">
                                            {
                                                frontend.map(value => (
                                                    <>
                                                        <span className="hover:text-blue-500 transition cursor-pointer">{value}</span>
                                                    </>
                                                ))
                                            }
                                        </div>

                                        <div className="grid gap-6 place-items-center grid-cols-2">
                                            {
                                                backend.map(value => (
                                                    <>
                                                        <span className="hover:text-blue-500 transition cursor-pointer">{value}</span>
                                                    </>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <h1 className="my-3">DEV Tools:</h1>
                                    <div className="grid gap-6 place-items-center grid-cols-2">
                                        {
                                            devTools.map(value => (
                                                <span>{value}</span>
                                            ))
                                        }
                                    </div>
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
                                    <span>15+ Students</span>
                                    <span>50+ Mentor Sessions</span>
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