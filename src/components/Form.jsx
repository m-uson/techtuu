import React from "react";

const Form = () => {
	return (
		<form className="flex flex-col w-[470px] sm:w-[420px] mb:w-[300px] ms:w-[270px]">
			<input
				type="text"
				className="grow rounded-[15px] h-[60px] bg-[#131313] px-[14px] text-xl"
				placeholder="Name"
			/>
			<input
				type="email"
				className="grow mt-[25px] mb-[40px] rounded-[15px] h-[60px] bg-[#131313] px-[14px] text-xl"
				placeholder="Email"
			/>
			<textarea
				className="grow rounded-[15px] h-[300px] bg-[#131313] mb-5 px-[22px] py-[14px] text-xl"
				placeholder="Write your message here"
			></textarea>
			<button
				type="submit"
				className="grow bg-blue-65 rounded-[15px] max-w-full h-[60px] text-black text-[24px]"
			>
				SEND
			</button>
		</form>
	);
};

export default Form;
