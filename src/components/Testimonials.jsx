import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

import iconPrev from "../assets/images/icon-prev.svg";
import iconNext from "../assets/images/icon-next.svg";
import { testimonials } from "../constants/data";

const Testimonials = () => {
	return (
		<section className="pt-[80px] pb-24">
			<div className="container">
				<div className="flex items-center mb-5 mb:justify-center">
					<span className="w-[50px] h-[2px] bg-blue-65 mf:w-[40px]"></span>
					<h2 className="font-audiowide text-[40px] ml-[10px] mb:text-[30px] mf:text-[30px]">
						Testimonials
					</h2>
				</div>
				<p className="text-[20px] text-blue-65 mb-[65px] mb:text-center">
					What our clients say about us
				</p>
			</div>
			<div>
				<Swiper
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={true}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
						clickable: true,
					}}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper swiper_container bg-black h-[550px] md:h-[750px] sm:min-h-[800px] mb:min-h-[850px] ms:min-h-[900px]"
				>
					{testimonials.map((item, i) => (
						<SwiperSlide key={i}>
							<div className="bg-[#131313] ">
								<div className="container h-[450px]  flex items-center justify-between md:flex-col md:justify-center md:h-[660px] mb:h-[750px] ms:h-[800px]">
									<img
										className="min-w-[260px] max-h-[260px]  rounded-[50%] overflow-hidden mx-[23px] md:mx-0 sm:mb-7 mb:min-w-[230px] mb:max-h-[230px] ms:min-w-[170px] ms:max-h-[170px]"
										src={item.image}
										alt="textpro"
									/>
									<div className="max-w-[760px] md:text-center  md:pb-[40px]">
										<img className="mb-[40px]" src={item.dash} alt="dash" />
										<p className="text-[20px] font-medium">{item.text}</p>
										<p className="text-[20px] font-medium">{item.text}</p>
										<div className="mt-[30px] text-right">{item.name}</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}

					<div className="slider-controler controler bottom-0">
						<div className="swiper-button-prev slider-arrow mb:cursor-default">
							<img src={iconPrev} alt="next" />
						</div>
						<div className="swiper-button-next slider-arrow mb:cursor-default">
							<img src={iconNext} alt="prev" />
						</div>
					</div>
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
