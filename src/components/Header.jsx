import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import { navLinks } from "../constants/data";
import MenuIcon from ".././assets/burger.png";
import { ReactComponent as CloseIcon } from ".././assets/close.svg";
import { Link } from "react-scroll";

export const Header = () => {
	const [isActive, setIsActive] = useState(0);
	const [isActiveMenu, setIsActiveMenu] = useState(false);

	const onClickIsActive = (i) => {
		setIsActive(i);
	};

	const contact = { tag: "Contacts us", id: "contacts" };

	const mobileMenu = navLinks.concat(contact);

	const handleMenuIsActive = () => setIsActiveMenu(!isActiveMenu);

	return (
		<div className="sticky w-[100%] top-0 h-[120px] bg-[#000000] z-50 flex  items-center mb:h-[90px] mf:h-[80px]">
			<div className="container  flex justify-between items-center">
				<a onClick={() => setIsActiveMenu(false)} href="#">
					<img
						className="w-[111px] h-[94.07px] lg:w-[90px] lg:h[80px] sm:w-[70px] sm:h-[60px] object-contain relative z-50 mb:w-[40px] mb:h-[40px] sm:cursor-default"
						src={Logo}
						alt="Logo"
					/>
				</a>
				<nav className="flex items-center md:hidden">
					<ul className="flex">
						{navLinks.map((navLink, i) => (
							<li key={i} className="mr-[25px] last:pr-0 cursor-pointer">
								<Link
									activeClass="active"
									to={navLink.id}
									spy={true}
									smooth={true}
									offset={50}
									duration={500}
									onClick={() => onClickIsActive(i)}
									className={isActive === i ? "is-active" : ""}
								>
									{navLink.tag}
								</Link>
							</li>
						))}
					</ul>
					<Link
						activeClass="active"
						to="contacts"
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						className="cursor-pointer font-audiowide text-[20px] ml-[80px] border-2 rounded-[10px] border-gray-65 px-[30px]  py-[10px] "
					>
						Contact us
					</Link>
				</nav>
				<div
					onClick={handleMenuIsActive}
					className="hidden md:block  relative cursor-pointer sm:cursor-default"
				>
					<div className="flex items-center justify-center">
						{isActiveMenu ? (
							<CloseIcon className="relative z-50 " />
						) : (
							<img className="relative z-50  " src={MenuIcon} alt="MenuIcon" />
						)}
					</div>
				</div>
				{isActiveMenu ? (
					<nav
						className={`hidden  md:block absolute right-0 top-0 bg-black  w-full  pb-11	 ${
							isActiveMenu ? "translateO" : "transslate"
						}`}
					>
						<ul className="flex flex-col items-center">
							{mobileMenu.map((navLink, i) => (
								<li
									key={i}
									className="mb-[30px] font-audiowide cursor-pointer sm:cursor-default"
								>
									<Link
										activeClass="active"
										to={navLink.id}
										spy={true}
										smooth={true}
										offset={50}
										duration={500}
										onClick={() => {
											onClickIsActive(i);
											setIsActiveMenu(false);
										}}
										className={isActive === i ? "is-active" : ""}
									>
										{navLink.tag}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				) : null}
			</div>
		</div>
	);
};
