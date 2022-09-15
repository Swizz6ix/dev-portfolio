import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import Link from "next/link";
import {
	UncontrolledCollapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
} from "reactstrap";

const Navigation = (args) => {
	const [collapseClasses, setCollapseClasses] = useState("");
	const onExiting = () => setCollapseClasses("collapsing-out");

	const onExited = () => setCollapseClasses("");

	useEffect(() => {
		let headroom = new Headroom(document.getElementById("navbar-main"));
		// initialise
		headroom.init();
	});

	return (
		<>
			<header className="header-global">
				<Navbar
					className="navbar-main navbar-transparent navbar-light headroom"
					expand="lg"
					id="navbar-main"
				>
					<Container>
						<NavbarBrand className="mr-lg-5">
							<h2 className="text-white" id="nav-title">
								{greetings.name}
							</h2>
						</NavbarBrand>
						<button
							className="navbar-toggler"
							aria-label="navbar_toggle"
							id="navbar_global"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<UncontrolledCollapse
							toggler="#navbar_global"
							navbar
							className={collapseClasses}
							onExiting={onExiting}
							onExited={onExited}
						>
							<div className="navbar-collapse-header">
								<Row>
									<Col className="collapse-brand" xs="6">
										<h3
											className="text-black"
											id="nav-title"
										>
											{greetings.name}
										</h3>
									</Col>
									<Col className="collapse-close" xs="6">
										<button
											className="navbar-toggler"
											id="navbar_global"
										>
											<span />
											<span />
										</button>
									</Col>
								</Row>
							</div>
							<Nav
								className="align-items-lg-center ml-lg-auto"
								navbar
							>
								<Scrollspy
									className="align-items-lg-center ml-lg-auto navbar-nav"
									items={[
										"home",
										"about",
										"services",
										"projects",
										"blog",
										"contact"
									]}
									currentClassName = "is-current"
									offset={-200}
								>
									<NavItem>
										<NavLink
											aria-label="About"
											className="nav-link-icon"
											href="#home"
											>
												{/* <i className="fa fa-facebook-square" /> */}
												<span className="nav-link-inner--text  ml-2">
													Home
												</span>
										</NavLink>
									</NavItem>
							
							
									<NavItem>
										<NavLink
												rel="noopener"
												aria-label="Resume"
												className="nav-link-icon"
												href="#about"
											>
												{/* <i className="fa fa-instagram" /> */}
												<span className="nav-link-inner--text ml-2">
													About
												</span>
										</NavLink>
									</NavItem>
									
									
									<NavItem>
										<NavLink
												rel="noopener"
												aria-label="Skills"
												className="nav-link-icon"
												href="#services"
											>
												<span className="nav-link-inner--text ml-2">
													Services
												</span>
										</NavLink>
									</NavItem>
									
									
									<NavItem>
										<NavLink
												rel="noopener"
												aria-label="Projects"
												className="nav-link-icon"
												href="#projects"
											>
												<span className="nav-link-inner--text ml-2">
													Projects
												</span>
										</NavLink>
									</NavItem>
									
									<NavItem>
										<NavLink
												rel="noopener"
												aria-label="Blog"
												className="nav-link-icon"
												href="#blog"
											>
												<span className="nav-link-inner--text ml-2">
													Blog
												</span>
										</NavLink>
									</NavItem>
									
								</Scrollspy>
									
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Contact"
											className="nav-link-icon"
											href='#'
												// target="_blank"
											onClick={args.toggle}
											>
												{/* <i className="fa fa-twitter-square" /> */}
												<span className="nav-link-inner--text ml-2">
													Contact
												</span>
										</NavLink>
									</NavItem>
								
							</Nav>
						</UncontrolledCollapse>
					</Container>
				</Navbar>
			</header>
		</>
	);
};

export default Navigation;
