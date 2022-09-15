import React from "react";
import Scrollspy from "react-scrollspy";
import { Card, Col, Row, Container, NavbarBrand, NavItem, NavLink } from "reactstrap";
import { greetings } from "../portfolio";
import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const GithubProfileCard = (args,{ prof }) => {
	return (
		<Card className="section-lg bg-gradient-primary shadow-lg border-0">
			<Container className="h-100 w-100">
				<div className="p-2 w-100 h-100 ">
					<Row className="justify-content-center text-center w-100 align-items-center">
						{/* <Col className="order-lg-2" lg="4">
							<img
								src={prof.avatar_url}
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</Col> */}
						<Col lg="8" className="d-flex flex-column justify-content-center text-center w-100">
							<div className="display-1">
								<h2 className="text-light display-1">Send me a mail now!</h2>
								<p className="text-white display-4 mt-3 shadow-lg">
									<a href="mailto:ferdinandcharles6@gmail.com " className="text-light">ferdinandcharles6@gmail.com</a>
								</p>

							</div>
							{/* <p className="text-white mt-3">{prof.bio}</p> */}
							{/* <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								{prof.location}
							</div> */}
							<ul className="d-flex flex-wrap w-100 justify-content-center mt-4">
								<Scrollspy
									className="d-flex flex-wrap w-100 justify-content-center"
									items={[
										"home",
										"about",
										"services",
										"Proficiency",
										"Education",
										"Experience",
										"Feedback",
										"projects",
										"blog",
										"contact"
									]}
									currentClassName = "is-current"
									offset={-200}
								>
								<NavItem className="list-unstyled h4 text-shadow shadow-sm transform">
									<NavLink 
										rel="noopener" className="text-light nav-link-icon"
										href="#home"
									>
										Home
									</NavLink>
								</NavItem>
								
								<NavItem className="list-unstyled h4 text-shadow shadow-sm">
									<NavLink 
										className="text-light"
										href="#about"
										>
										About
									</NavLink>
								</NavItem>

								<NavItem className="list-unstyled h4 text-shadow shadow-sm">
									<NavLink 
										className="text-light"
										href="#services"
										>
										Services
									</NavLink>
								</NavItem>
								<NavItem className="list-unstyled h4 text-shadow shadow-sm">
									<NavLink 
										className="text-light"
										href="#proficiency"
										>
										Proficiency
									</NavLink>
								</NavItem>
								<NavItem className="list-unstyled h4 text-shadow shadow-sm">
									<NavLink 
										className="text-light"
										href="#education"
										>
										Education
									</NavLink>
								</NavItem>
								<NavItem className="list-unstyled h4 text-shadow shadow-sm">
									<NavLink 
										className="text-light"
										href="#experience"
										>
										Experience
									</NavLink>
								</NavItem>
								<NavItem className="list-unstyled h4 text-shadow shadow-sm">
									<NavLink 
										className="text-light"
										href="#feedback"
										>
										Feedback
									</NavLink>
								</NavItem>

								<NavItem className="list-unstyled h4 text-shadow shadow-sm">
									<NavLink 
										className="text-light"
										href="#projects"
										>
										Projects
									</NavLink>
								</NavItem>

								<NavItem className="list-unstyled h4 text-shadow shadow-sm">
									<NavLink 
										className="text-light"
										href="#blog"
									>
										Blog
									</NavLink>
								</NavItem>
								</Scrollspy>

								<NavItem className="list-unstyled h4 text-shadow shadow-sm">
									<NavLink className="text-light" 
										href='#'
										onClick={args.toggle} 
									>
											Contact
									</NavLink>
								</NavItem>
							</ul>
							<SocialLinks />
						</Col>
					</Row>
					<Row className="border-bottom  border-info mt-5 mb-0"></Row>
					<Row className="position-absolute bottom-0 right-0">
						<Col>
							<NavbarBrand>
								<h2 className="text-light" id="nav-title">
									{greetings.name}
								</h2>
							</NavbarBrand>
						</Col>
					</Row>
					
				</div>
			</Container>
			<Container>
				
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
