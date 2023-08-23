import { AiOutlineHome, AiOutlineUser, AiOutlineMail, AiOutlineCode } from "react-icons/ai"

const NavigationBar = () => {
    return (
        <div className="max-w-sm mx-auto p-2 test fixed z-50 mb-3">
            <div className="flex justify-between gap-5 p-3 text-xl">
                <div className="p-2 rounded-full cursor-pointer transition bg-gradient-to-r from-cyan-200 to-cyan-400">
                    <AiOutlineHome />
                </div>
                <div className="p-2 rounded-full cursor-pointer transition bg-gradient-to-r from-cyan-200 to-cyan-400">
                    <AiOutlineUser />
                </div>
                <div className="p-2 rounded-full cursor-pointer transition bg-gradient-to-r from-cyan-200 to-cyan-400">
                    <AiOutlineMail />
                </div>
                <div className="p-2 rounded-full cursor-pointer transition bg-gradient-to-r from-cyan-200 to-cyan-400">
                    <AiOutlineCode />
                </div>
            </div>
        </div>
    )
}

export default NavigationBar