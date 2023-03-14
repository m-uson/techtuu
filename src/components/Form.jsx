import React, { useState } from "react";
import { db } from "../firebase/config";
import { collection, doc, setDoc } from "firebase/firestore";
import SuccesIcon from "../assets/succes-icon.svg";
import ErrorIcon from "../assets/error-icon.svg";

const Form = () => {
	const [contact, setContact] = useState({ name: "", email: "", comment: "" });
	const [isloading, setIsloding] = useState(true);
	const [succes, setSucces] = useState(true);
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		event.preventDefault();

		const { name, value } = event.target;

		setContact((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const addDoc = async (event) => {
		const newComment = {
			name: contact.name,
			email: contact.email,
			comment: contact.comment,
		};

		try {
			setIsloding(false);
			event.preventDefault();

			const addCollection = doc(collection(db, "contacts"));
			await setDoc(addCollection, newComment);

			setSucces(true);
			setIsloding(true);
			setContact({ name: "", email: "", comment: "" });
		} catch (error) {
			setIsloding(false);
			setError(true);
			console.log("error", error.message);
		}
	};

	return (
		<form
			onSubmit={addDoc}
			className="flex flex-col w-[470px] sm:w-[420px] mb:w-[300px] ms:w-[270px] relative"
		>
			{succes ? (
				<div className="w-full bg-black rounded-xl flex flex-col items-center justify-center  p-[50px] mb:px-[20px] absolute left-0 top-[100px] z-20 border-2 border-blue-65 ">
					<div className="succes w-[50px] h-[50px] bg-black flex items-center justify-center overflow-hidden rounded-[50%]">
						<img
							className="w-[40px] h-[40px]"
							src={SuccesIcon}
							alt="succes-icon"
						/>
					</div>
					<p className="text-green-600">Woohoo, Success!</p>
					<p className="text-[#828282] font-medium text-center text-[18px] my-[30px] mb:text-[14px]">
						Your order has successfully been submitted.
					</p>
					<p className="text-[#828282] font-medium text-center text-[18px] mb-[50px] mb:text-[14px]">
						We will contact you as soon as possible.
					</p>
					<span
						onClick={() => setSucces(!succes)}
						className="w-[100px] h-[30px] flex items-center justify-center bg-blue-65 rounded-[4px] text-black font-medium cursor-pointer mb:cursor-default"
					>
						Close
					</span>
				</div>
			) : null}

			{error ? (
				<div className="w-full bg-black rounded-xl flex flex-col items-center justify-center  p-[50px] mb:px-[20px] absolute left-0 top-[100px] z-20 border-2 border-red-500 ">
					<div className="succes w-[50px] h-[50px] bg-black flex items-center justify-center overflow-hidden rounded-[50%]">
						<img
							className="w-[40px] h-[40px]"
							src={ErrorIcon}
							alt="succes-icon"
						/>
					</div>
					<p className="text-red-600">Uh oh!</p>
					<p className="text-[#828282] font-medium text-center text-[18px] my-[30px] mb:text-[14px]">
						We apologize, something went wrong with your order. Please try
						again.
					</p>
					<span
						onClick={() => setError(!error)}
						className="w-[100px] h-[30px] flex items-center justify-center bg-blue-65 rounded-[4px] text-black font-medium cursor-pointer mb:cursor-default"
					>
						Retry
					</span>
				</div>
			) : null}

			<input
				onChange={handleChange}
				value={contact.name}
				type="text"
				name="name"
				className="rounded-[15px] h-[60px] bg-[#131313] px-[14px] text-xl focus:outline-none"
				placeholder="Name"
			/>
			<input
				onChange={handleChange}
				value={contact.email}
				type="email"
				name="email"
				className="mt-[25px] mb-[40px] rounded-[15px] h-[60px] bg-[#131313] px-[14px] text-xl focus:outline-none"
				placeholder="Email"
			/>
			<textarea
				onChange={handleChange}
				value={contact.comment}
				type="text"
				name="comment"
				className="relative grow rounded-[15px] h-[300px] bg-[#131313] mb-5 px-[22px] py-[14px] text-xl focus:outline-none "
				placeholder="Write your message here"
			></textarea>
			{isloading ? (
				<button
					type="submit"
					className="grow bg-blue-65 rounded-[15px] max-w-full h-[60px] text-black text-[24px]"
				>
					SEND
				</button>
			) : (
				<div className="flex items-center justify-center">
					<div className="lds-dual-ring"></div>
				</div>
			)}
		</form>
	);
};

export default Form;
