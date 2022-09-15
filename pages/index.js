import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const FrontPage = dynamic(() => import("../containers/FrontPage"));
const Blog = dynamic(() => import("../containers/Blog"));
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { useState } from "react";
import ScrollTop from "../components/ScrollTop";


export default function Home({ githubProfileData }) {
	const [modalShow, setModalShow] = useState(false);
	const toggle = () => setModalShow(!modalShow);
	return (
		<div>
			<SEO />
			<Navigation toggle = {toggle} />
			<FrontPage toggle = {toggle} modalShow = {modalShow} setModalShow = {setModalShow} />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			<Feedbacks />
			<Projects />
			<Blog />
			<GithubProfileCard prof={githubProfileData} toggle = {toggle} />
			<ScrollTop />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
