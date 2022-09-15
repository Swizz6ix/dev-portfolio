import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";

import { Fade } from "react-reveal";

import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {
	return SkillBars && (
		<Container id="proficiency" className="section section-lg">
			<Fade bottom duration={2000} >
				<Row>
					<Col lg="6">
						<div className="d-flex p-4">
							<div>
								<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
									<i className="fa fa-keyboard-o" aria-hidden = "true"></i>
								</div>
							</div>
							<div className="pl-4">
								<h4 className=" display-3 text-info">Proficiency</h4>
							</div>
						</div>
						{SkillBars.map((skill) => {
							return (
								<div
									className="progress-info"
									key={skill.Stack}
								>
									<div className="progress-label">
										<span>{skill.Stack}</span>
									</div>
									<div className="progress-percentage">
										<span>{skill.progressPercentage}%</span>
									</div>
									<Progress
										max="100"
										value={skill.progressPercentage}
										color="info"
										role="progressbar"
										aria-label={skill.Stack}
									/>
								</div>
							);
						})}
					</Col>
					<Col lg="6">
						<GreetingLottie animationPath="/lottie/build.json" />
					</Col>
				</Row>
			</Fade>
		</Container>
	);
};

export default Proficiency;
