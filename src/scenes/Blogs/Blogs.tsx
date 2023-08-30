import { blogs } from "../../info"
import { FiLink } from "react-icons/fi"

const Blogs = () => {
    return (
        <div className="container mx-auto" id="blogs">
            <h1 className="text-center text-3xl font-semibold text-textSecondary">BLOGS</h1>
            <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {
                    blogs.map(({ coverImg, reading_time, title, url }: IBlogs) => (
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <img className="w-full" src={coverImg} alt="Mountain" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{title}</div>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <div className="flex items-center justify-around">
                                    <div className="flex items-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                        <a target="_blank" href={`${url}`}>See Blog</a>
                                        <FiLink />
                                    </div>
                                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{reading_time} mins</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blogs