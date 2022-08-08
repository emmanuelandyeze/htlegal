import React from 'react'
import { Link } from "react-router-dom";
import "./Style.css";

const UserDashboard = () => {
	return (
		<div>
			<div className="services">
				<div className="about-heading">
					<h3>What we do.</h3>
					<h1>Our Services</h1>
				</div>
				<div className="cards">
					<div className="card employment">
						<div className="service-header">
							<h1>EMPLOYMENT & LABOUR RELATIONS</h1>
						</div>
						<hr />
						<div className="service-text">
							<p>
								We offer services to clients on a wide range
								of employment related matters. You can reach
								out to us on matters relating to Employment
								Onboarding; Confidentiality Agreements;
								Constructive Dismissal; Employment
								Contracts; Non-compete Agreements.
							</p>
						</div>
					</div>
					<div className="card business">
						<div className="service-header">
							<h1>CORPORATE & BUSINESS ADVISORY</h1>
						</div>
						<hr />
						<div className="service-text">
							<p>
								HT Legal is equipped to render comprehensive
								business advisory services for clients in
								all aspects of corporate and commercial
								matters, including corporate governance,
								formation of companies, legal audit,
								taxation,contract drafting and review, real
								estate advisory and general commercial
								advisory
							</p>
						</div>
					</div>
				</div>
				<div className="cards">
					<div className="card estate">
						<div className="service-header">
							<h1>ESTATE ADMINISTRATION</h1>
						</div>
						<hr />
						<div className="service-text">
							<p>
								Have you been appointed as a trust or will
								beneficiary? Have you lost a loved one who
								died without a will and need assistance
								finding out what to do next? We will assist
								you. We also offer services related to:
								Obtaining Probate Letters of Administration
								Drafting of Wills/Codicil
							</p>
						</div>
					</div>
					<div className="card technology">
						<div className="service-header">
							<h1>TECHNOLOGY</h1>
						</div>
						<hr />
						<div className="service-text">
							<p>
								Are you a software developer? Does your work
								entail the development of mobile
								applications? We offer legal advisory and
								contract drafting services for software
								licensing, software maintenance and mobile
								app development.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="choose">
				<div className="about-heading">
					<h1>Why Choose Us?</h1>
					<p>
						Professional excellence is the hallmark of our
						practice. With HT Legal, you can expect timely
						resolution, excellent delivery and value for
						money spent.
					</p>
					<p>
						We believe ourselves to be properly positioned
						in a challenging and constantly changing market,
						where we help our clients overcome their most
						complex legal issues. By working with HT Legal,
						you get more than professional legal
						representation, you get premium value for
						expended resources and solutions delivered
						seamlessly.
					</p>
					<p>
						We are consistent, patient and professional,
						giving each new case our undivided attention
						whilst walking you through each step of the
						process.
					</p>
				</div>
				<div style={{ marginTop: '2rem' }}>
					<a
						href="https://wa.me/2348161353700"
						className="appointBtn"
					>
						Book an appointment
					</a>
				</div>
			</div>
			<footer>
				<p>Copyright &copy; HT Legal 2022</p>
				<ul>
					<li>
						<a href="https://mobile.twitter.com/HTLegal_S">
							<i class="fa fa-twitter-square fa-2x"></i>
						</a>
					</li>
					<li>
						<a href="https://facebook.com/htlegaladvisory">
							<i class="fa fa-facebook-square fa-2x"></i>
						</a>
					</li>
					<li>
						<a href="https://wa.me/2348161353700">
							<i class="fa fa-whatsapp fa-2x"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/htlegal/">
							<i class="fa fa-instagram fa-2x"></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/company/h-t-legal/">
							<i class="fa fa-linkedin-square fa-2x"></i>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default UserDashboard
