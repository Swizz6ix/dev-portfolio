import React from 'react';
import { blog } from "../portfolio";
import { Container, Row } from "reactstrap";
import BlogCard from "../components/BlogCard";
import { Fade } from "react-reveal";

function Blog() {
  return (
    <div>
        <section id='blog' className="section section-lg">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="fa fa-rss text-info" />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-info">Blog</h4>
					</div>
				</div>
				<Row className="row-grid align-items-center">
					{blog.map((data, i) => {
						return <BlogCard key={i} data={data} />;
					})}
				</Row>
			</Container>
		</section>
    </div>
  )
}

export default Blog
