import React from "react";
import {
	AboutUs,
	Hero,
	Services,
	Testimonials,
	Contacts,
	Works,
} from "../components";

const Home = () => {
	return (
		<div id="home">
			<Hero />
			<Services />
			<Works />
			<AboutUs />
			<Testimonials />
			<Contacts />
		</div>
	);
};

export default Home;
