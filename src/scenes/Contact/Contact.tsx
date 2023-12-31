import { testimonials } from "../../info";
import { GrLocation } from "react-icons/gr"
import { MdOutlineMailOutline } from "react-icons/md"
import { BsTwitter } from "react-icons/bs"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { motion } from "framer-motion";

import 'swiper/css';
import 'swiper/css/pagination';

const Contact = () => {
    return (
        <div>
            <div className="mx-auto container px-4 py-2">
                <div className="flex flex-col gap-5">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="my-6">

                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }} className="text-center text-3xl mb-4 font-semibold text-textSecondary">TESTIMONIALS</motion.h1>


                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                        >
                            {
                                testimonials.map(({ message, avatar, writer }: ITestimonials) => (
                                    <SwiperSlide key={writer} className="bg-[#0e152b] shadow-2xl">
                                        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                                            <figure className="max-w-screen-md mx-auto">
                                                <svg className="h-12 mx-auto mb-3" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                                </svg>
                                                <blockquote>
                                                    <p className="text-2xl font-medium">"{message}"</p>
                                                </blockquote>
                                                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                                    <img className="w-6 h-6 rounded-full" src={`${avatar}`} />
                                                    <div className="flex items-center divide-x-2">
                                                        <div className="pr-3 font-medium">{writer}</div>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <h1 className="text-3xl font-semibold text-center text-textSecondary" id="contact">CONTACT</h1>
                    </motion.div>

                    <div className="flex flex-col md:flex-row justify-around items-center">
                        {/* LEFT */}

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-secondaryBg p-3 rounded-full">
                                    <GrLocation />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold">Location:</h3>
                                    <span>India</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-secondaryBg p-3 rounded-full">
                                    <MdOutlineMailOutline />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold">Email:</h3>
                                    <span>herojod2525@gmail.com</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-secondaryBg p-3 rounded-full">
                                    <BsTwitter />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold">Twitter</h3>
                                    <span>@HeroCodes404</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT */}

                        <motion.form
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            action="https://formspree.io/f/mjvqrvgb" method="POST" className="flex flex-col w-full md:w-1/2 gap-3">
                            <div className="flex gap-3 flex-col mt-7 md:mt-0 md:flex-row">
                                <input className="bg-transparent w-full px-4 py-3 rounded-md focus:border-[#5918df] border outline-none" type="email" name="email" placeholder="Your Email" />
                            </div>

                            <div>
                                <textarea className="bg-transparent w-full px-4 py-3 rounded-md focus:border-[#5918df] border outline-none" name="message" placeholder="Message" />
                            </div>

                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-semibold p-3 w-fit mx-auto rounded-lg">Send Message</button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact