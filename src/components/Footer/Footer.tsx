import { BsTwitter, BsDiscord, BsMedium, BsGithub } from "react-icons/bs"
import { BiLogoGmail } from "react-icons/bi"

const Footer = () => {
    return (
        <footer className="w-full py-5">
            <hr className="py-4" />
            <div className="flex flex-col gap-5 items-center">
                <h1 className="text-4xl font-semibold">Hero</h1>
                <p>Thank you for visiting my website ;)</p>

                <div className="flex gap-3">
                    <a href="https://twitter.com/@HeroCodes404" target="_blank" className="p-3 rounded-full bg-[#F8DE22]">
                        <BsTwitter />
                    </a>
                    <a href="https://twitter.com/@HeroCodes404" target="_blank" className="p-3 rounded-full bg-[#F8DE22]">
                        <BsDiscord />
                    </a>
                    <a href="https://github.com/Hero-Codes" target="_blank" className="p-3 rounded-full bg-[#F8DE22]">
                        <BsGithub />
                    </a>
                    <a href="https://medium.com/@herocodes" target="_blank" className="p-3 rounded-full bg-[#F8DE22]">
                        <BsMedium />
                    </a>
                    <a href="mailto:herojod2525@gmail.com" target="_blank" className="p-3 rounded-full bg-[#F8DE22]">
                        <BiLogoGmail />
                    </a>
                </div>

                <span>Made with ♥ | Hero</span>
            </div>
        </footer>
    )
}

export default Footer