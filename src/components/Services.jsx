import React from "react";
import { ourServices } from "../constants/data";
import Circle from "../assets/images/service-circle.svg";

const Services = () => {
	return (
		<section id="services" className="bg-black-0b pt-[80px] pb-[120px]">
			<div className="block relative">
				<img
					className="position-circle w-[700px] h-[700px]"
					src={Circle}
					alt="Circle"
				/>
				<div className="container">
					<div>
						<div className="flex items-center mb:justify-center mb-5">
							<span className="w-[50px] h-[2px] bg-blue-65 ms:w-[40px]"></span>
							<h2 className="font-audiowide text-[40px] ml-[10px] mb:text-[35px] mf:text-[30px] mb:text-center">
								What we do
							</h2>
						</div>
						<p className="text-[20px] text-blue-65 mb-[50px] mb:text-center">
							Our services for clients
						</p>
						<div className="ml-[50px] flex flex-wrap justify-between xl:ml-0 lg:justify-around">
							{ourServices.map((service, i) => (
								<div
									key={i}
									className="nth-child service-hover cursor-pointer w-[350px] bg-black p-[45px] relative ms:w-[310px] ms:px-[20px]"
								>
									{<service.Icon className="svg-hover" />}
									<p className="font-bold text-2xl my-[50px]">
										{service.title}
									</p>
									<p className="text-[16px] mb-[30px]">{service.subtitle}</p>
									<span className="block h-[4px] bg-white w-full absolute left-0 bottom-0"></span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
