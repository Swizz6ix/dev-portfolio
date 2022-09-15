import React from 'react';
import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

function BlogCard({data}) {
  return (
    <Col lg="6">
			<Fade bottom duration={2000} >
				<Card className="shadow-lg--hover shadow mt-4" color="warning" outline data-header="skew" >
					<img alt="sample" src="\img\icons\common\Ferdinand Charles - Google Chrome 8_28_2022 5_38_46 PM.png" width="100%" />
					<CardBody>
						<div className="d-flex px-3">
							<div className="pl-1">
								<h3>{data.name}</h3>
								<p className="description mt-3">{data.desc}</p>
                                <h2 className='text-center text-info'>Coming Soon...</h2>
								{data.github ? (
									<Button
										className="btn-icon"
										color="github"
										href={data.github}
										target="_blank"
										rel="noopener"
										aria-label="Github"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-github" />
										</span>
									</Button>
								) : null}
								{data.link ? (
									<Button
										className="btn-icon"
										color="success"
										href={data.link}
										target="_blank"
										rel="noopener" aria-label="Twitter"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-arrow-right mr-2" />
										</span>
										<span className="nav-link-inner--text ml-1">
											Demo
										</span>
									</Button>
								) : null}
							</div>
						</div>
					</CardBody>
				</Card>
			</Fade>
		</Col>
  )
}

export default BlogCard
