import React, { useRef, useState } from "react";
import HeroImage from "../assets/images/hero-image.png";
import Circle from "../assets/images/hero-circle.png";
import { HeroServices } from "../constants/data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const Hero = () => {
	const [size, setSize] = useState(window.innerWidth);
	window.addEventListener("resize", function () {
		setSize(window.innerWidth);
	});

	return (
		<section className="pt-[50px]">
			<div className="container">
				<div className="ml-[60px]  relative xl:ml-0">
					<img
						className="absolute left-[-250px] top-[-70px] w-[1000px] h-[1000px] blur-2xl md:left-[-80px] sm:top-[-150px] mb: mf:w-[600px] mf:h-[500px]"
						src={Circle}
						alt="Circle"
					/>
					<div className="flex items-center justify-between mb-5 relative z-20 lg:flex-col">
						<div className="flex flex-col items-center">
							<div>
								<h2 className="font-audiowide text-[48px] mb:text-[35px] mf:text-[30px] ">
									We make
								</h2>
								<h1 className="ml-[60px] font-audiowide text-[64px] mt-[20px] xl:ml-[30px] sm:text-[50px] ms:text-[40px] mf:text-[35px]">
									IT Solutions
								</h1>
							</div>
							<a
								href="/"
								className="flex justify-center items-center h-[50px] ml-[30px] px-[40px]  bg-blue-65 text-black text-2xl font-audiowide rounded-[15px] mt-[63px]  ms:text-[20px] mf:ml-0 mf:text-[16px] "
							>
								Explore projects
							</a>
						</div>
						<img
							className="object-contain w-[600px] h-[500px] lg:mt-[50px] sm:w-[500px] sm:h-[400px] mb:w-[500px] mb:h-[400px] mb:mt-0 msh-[300px]  mf:h-[300px]"
							src={HeroImage}
							alt="hero-image"
						/>
					</div>
					<div className="flex justify-between mb-[46px] relative z-20">
						{size <= 1200 ? (
							<Swiper
								slidesPerView={size >= 1024 ? 3 : size >= 780 ? 2 : 1}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								pagination={{
									clickable: true,
								}}
								modules={[Autoplay, Pagination]}
								className="mySwiper md:flex md:justify-center h-[500px]"
							>
								{HeroServices.map((item, index) => (
									<SwiperSlide
										key={index}
										className="flex justify-center items-center"
									>
										<div className="parentContainer">
											<div className="h-[350px] w-[300px] px-10 py-6 bg-black-13 cursor-pointer ms:w-[240px] mf:w-[240px] mf:px-5">
												<img src={item.image} alt="hero-icon1" />
												<p className="line font-bold text-base mt-5 mb-[50px]">
													{item.text}
												</p>
												<p className="font-medium text-[16px] ">
													{item.description}
												</p>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						) : (
							HeroServices.map((item, index) => (
								<div key={index} className="parentContainer">
									<div className="h-[350px] w-[350px] px-10 py-6 bg-black-13 cursor-pointer">
										<img src={item.image} alt="hero-icon1" />
										<p className="line font-bold text-base mt-5 mb-[50px]">
											{item.text}
										</p>
										<p className="font-medium text-[16px] ">
											{item.description}
										</p>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
