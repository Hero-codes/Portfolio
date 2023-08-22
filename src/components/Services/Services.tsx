import { FaBook } from "react-icons/fa"
import { HiTerminal } from "react-icons/hi"

const Services = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-3">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col space-y-3">
                        <h1 className="text-center text-3xl font-semibold">SERVICES</h1>
                        <p className="max-w-5xl text-center mx-auto">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 justify-evenly">
                        <div className="md:w-1/2 w-full py-5 bg-slate-50 flex flex-col items-center">
                            <div className="p-3 bg-yellow-200 rounded-full text-xl">
                                <HiTerminal />
                            </div>

                            <div className="flex flex-col items-center gap-5">
                                <div className="flex flex-col mt-3 gap-3 items-center">
                                    <h1 className="font-semibold text-2xl">Full-Stack Developer</h1>
                                    <p className="text-center text-lg">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <h1 className="text-lg">Languages I use:</h1>
                                    <span>HTML</span>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <h1>DEV Tools:</h1>
                                    <span>VSCode</span>
                                    <span>Vercel</span>
                                    <span>Figma</span>
                                    <span>Github</span>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 w-full py-5 bg-slate-100 flex flex-col items-center">
                            <div className="p-3 bg-yellow-200 rounded-full text-xl">
                                <FaBook />
                            </div>

                            <div className="flex flex-col items-center gap-5">
                                <div className="flex flex-col mt-3 gap-3 items-center">
                                    <h1 className="font-semibold text-2xl">Mentor</h1>
                                    <p className="text-center text-lg">I genuinely care about people, and love helping fellow designers work on their craft.</p>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <h1 className="text-lg">Experiences I draw from:</h1>
                                    <span>UX/UI, Product design, Freelancing</span>
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