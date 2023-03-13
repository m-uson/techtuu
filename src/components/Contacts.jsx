import React from "react";
import { contacts, socialMedias } from "../constants/data";
import Form from "./Form";
import Circle from "../assets/images/service-circle.svg";

const Contacts = () => {
	return (
		<section id="contacts" className="bg-[#0B0C10] pt-20 pb-32 overflow-hidden">
			<div className="container relative">
				<div className="flex items-center mb-5 relative mb:justify-center">
					<img
						className="blur-2xl contacts-circle w-[800px] h-[800px]"
						src={Circle}
						alt="Circle"
					/>
					<span className="w-[50px] h-[2px] bg-blue-65 mf:w-[40px]"></span>
					<h2 className="font-audiowide text-[40px] ml-[10px] mb:text-[30px] mf:text-[28px]">
						Get in touch
					</h2>
				</div>
				<p className="text-[20px] text-blue-65 mb-[65px] mb:text-center">
					Leave your message here
				</p>
				<div className="flex justify-between sm:flex-col sm:items-center">
					<Form />
					<div className="max-w-[320px] ml-14 mr-56 lg:mr-0 md:max-w-[300px] sm:ml-0 sm:mt-14">
						<h3 className="text-[24px] font-medium mb-10 mb:text-center">
							Contacts us:
						</h3>
						{contacts.map((contact, i) => (
							<a href="#" key={i} className="flex items-center mb-[30px]">
								<img className="mr-[10px]" src={contact.image} alt="image" />
								<p className="text-[20px] font-medium">{contact.text}</p>
							</a>
						))}
						<h3 className="text-[24px] font-medium mt-[120px] mb-7 mb:text-center">
							Follow us:
						</h3>
						<div className="flex mb:justify-center">
							{socialMedias.map((social, i) => (
								<a key={i} href="#">
									<img
										className="mr-[13px] mf:w-[40px] mf:h-[40px]"
										src={social.img}
										alt="img"
									/>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
