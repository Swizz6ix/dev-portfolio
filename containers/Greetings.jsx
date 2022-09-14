import React, { useEffect, useState } from "react";
import { greetings } from "../portfolio";

import { Button, Container, Row, Col, Collapse } from "reactstrap";
import TextTruncate from "react-text-truncate";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
	// useEffect(() => {
	// 	document.documentElement.scrollTop = 0;
	// 	document.scrollingElement.scrollTop = 0;
	// });
	const [open, setOpen] = useState(false);
	var TextTruncate = require("react-text-truncate");
	function readMore() {
		const dots = document.getElementById("dots");
		const moreText = document.getElementById("more");
		const btn = document.getElementById("btn");

		if (dots.style.display ==="none") {
			dots.style.display= "inline";
			btn.innerHTML = "Read More";
			moreText.style.display = "none";
		} else {
			dots.style.display= "none";
			btn.innerHTML = "Read Less";
			moreText.style.display = "inline";
		}
	}
	return (
		<main>
			<div className="position-relative">
				<section className="section section-lg section-shaped pb-250">
					<div className="shape shape-style-1 bg-gradient-info">
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
					</div>
					<Container className="py-lg-md d-flex">
						<div className="col px-0">
							<Row>
								<Col lg="6">
									<h1 className="display-3 text-white">
										{greetings.title + " "}
									</h1>
									<p className="lead text-white">
										The Software Developer, experienced in HTML, CSS, Python, C#, JavaScript and its frameworks such as react.js etc., .Net framework and most recently, Microsoft Azure cloud computing. I am  <span id="dots">...</span><span id="more">a highly resourceful, flexible, innovative, and enthusiastic individual, a team player, who possesses a considerable amount of knowledge, experience, and creative skills. I am always eager to learn, be it new technologies, skills, or experiencing new cultures. I love traveling and making new connections, new food, new music. As for my journey so far? After graduated from the University with a B.sc in Industrial Physics, I have spent better part of my professional life working from one industry to another, from the Oil and gas sector, Educational sector, Banking, and finance sector to the Entertainment sector, before settling in the Tech industry as a Software Developer, a capacity I occupied after successfully obtaining crucial programming skills. My cross industry experience has given me some valuable skills, including my ability to adapt and communicate eloquently in both written and oral forms of communication, I can work both as a loner as well as a team player, critical thinking, problems solving are the kind of activities I enjoy, although I also enjoy teaching tech skills to teens in the rural areas, as a way of giving back to the community. So welcome to my portfolio, welcome to my world, I really hope you reached out because I did love to meet your acquaintance, I believe life isn’t supposed to be that hard so let’s work and have fun together. As they would say in the movies ‘Shall We Begin?’.</span>
									</p>
									<Button type="button" className="btn btn-info btn-sm btn-round mb-3 mt-0" onClick={readMore} id="btn">
										Read More
										<span><i className="fa fa-chevron-circle-down pl-1"></i></span>
									</Button>
									<SocialLinks />
									<div className="btn-wrapper my-4">
										<Button
											className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
											color="default"
											href={greetings.resumeLink}
										>
											<span className="btn-inner--icon mr-1">
												<i className="fa fa-file" />
											</span>
											<span className="btn-inner--text">
												See My Resume
											</span>
										</Button>
									</div>
								</Col>
								<Col lg="6">
									<GreetingLottie animationPath="/lottie/coding.json" />
								</Col>
							</Row>
						</div>
					</Container>
					{/* SVG separator */}
					<div className="separator separator-bottom separator-skew">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="fill-white"
								points="2560 0 2560 100 0 100"
							/>
						</svg>
					</div>
				</section>
				{/* 1st Hero Variation */}
			</div>
		</main>
	);
};

export default Greetings;
