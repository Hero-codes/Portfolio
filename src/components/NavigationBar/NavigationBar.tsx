import { AiOutlineHome, AiOutlineUser, AiOutlineMail, AiOutlineCode } from "react-icons/ai"

const NavigationBar = () => {
    return (
        <div className="max-w-sm mx-auto p-2 nav fixed z-50 mb-3">
            <div className="flex justify-between gap-5 p-3 text-xl">
                <div className="p-2 rounded-full cursor-pointer transition bg-gradient-to-r from-blue-400 to-blue-900">
                    <AiOutlineHome />
                </div>
                <div className="p-2 rounded-full cursor-pointer transition bg-gradient-to-r from-blue-500 to-blue-900">
                    <AiOutlineUser />
                </div>
                <div className="p-2 rounded-full cursor-pointer transition bg-gradient-to-r from-blue-500 to-blue-900">
                    <AiOutlineMail />
                </div>
                <div className="p-2 rounded-full cursor-pointer transition bg-gradient-to-r from-blue-500 to-blue-900">
                    <AiOutlineCode />
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;