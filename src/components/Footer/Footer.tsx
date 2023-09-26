import { BsTwitter, BsDiscord, BsMedium, BsGithub } from "react-icons/bs"
import { BiLogoGmail } from "react-icons/bi";
import toast from "react-hot-toast";

const Footer = () => {

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
        <footer className="w-full py-5 mb-20">
            <hr className="py-4" />
            <div className="flex flex-col gap-5 items-center">
                <h1 className="text-4xl font-semibold text-textSecondary">Om Agrawal</h1>
                <p>Thank you for visiting my website ;)</p>

                <div className="flex gap-3">
                    <a href="https://twitter.com/@HeroCodes404" target="_blank" className="p-3 rounded-full bg-secondaryBg">
                        <BsTwitter />
                    </a>
                    <span onClick={copyDiscordUsername} className="p-3 cursor-pointer rounded-full bg-secondaryBg">
                        <BsDiscord />
                    </span>
                    <a href="https://github.com/Hero-Codes" target="_blank" className="p-3 rounded-full bg-secondaryBg">
                        <BsGithub />
                    </a>
                    <a href="https://medium.com/@herocodes" target="_blank" className="p-3 rounded-full bg-secondaryBg">
                        <BsMedium />
                    </a>
                    <a href="mailto:herojod2525@gmail.com" target="_blank" className="p-3 rounded-full bg-secondaryBg">
                        <BiLogoGmail />
                    </a>
                </div>

                <span>Made with ♥ | Om Agrawal</span>
            </div>
        </footer>
    )
}

export default Footer