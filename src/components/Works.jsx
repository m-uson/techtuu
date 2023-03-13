import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

import Circle from "../assets/images/service-circle.svg";
import iconPrev from "../assets/images/icon-prev.svg";
import iconNext from "../assets/images/icon-next.svg";
import { foods } from "../constants/data";

const Works = () => {
	return (
		<section id="works" className="py-[80px]">
			<div className="container">
				<div className="flex items-center mb:justify-center mb-5 relative">
					<img
						className="food-circle blur-2xl w-[1000px] h-[1000px]"
						src={Circle}
						alt="Circle"
					/>
					<span className="w-[50px] h-[2px] bg-blue-65 mb:w-[40px]"></span>
					<h2 className="font-audiowide text-[40px] ml-[10px] mb:text-3xl">
						Works
					</h2>
				</div>
				<p className="text-[20px] text-blue-65 mb:text-center">
					Projects we’ve made
				</p>
				<div>
					<Swiper
						grabCursor={true}
						centeredSlides={true}
						loop={true}
						pagination={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
							clickable: true,
						}}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper swiper_container bg-black h-[600px] md:h-[620px] md:mt-14"
					>
						{foods.map((food, i) => (
							<SwiperSlide
								key={i}
								className="flex justify-between items-center  md:flex-col-reverse md:justify-end"
							>
								<div className="max-w-[433px] mr-5  mb:text-center md:mr-0">
									<h2 className="font-medium text-[32px] mb-8 lg:text-[28px]">
										{food.title}
									</h2>
									<p className="font-medium text-[20px] mb-[20px] xl:text-[18px] lg:text-sm">
										{food.subtitle}
									</p>
									<p className="font-medium text-[20px] xl:text-[18px] lg:text-sm">
										{food.subtitle}
									</p>
								</div>
								<img
									className="h-[435px]  xl:max-w-[600px] xl:h-[300px] lg:w-[450px] mb:h-[250px] mb:w-[360px] ms:h-[200px] ms:w-[300px] mf:w-[270px] md:mb-8"
									src={food.image}
									alt="food.subtitle"
								/>
							</SwiperSlide>
						))}

						<div className="slider-controler ">
							<div className="swiper-button-prev slider-arrow mb:cursor-default">
								<img src={iconPrev} alt="prev" />
							</div>
							<div className="swiper-button-next slider-arrow mb:cursor-default">
								<img src={iconNext} alt="next" />
							</div>
						</div>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Works;
