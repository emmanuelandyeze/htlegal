import React from 'react';
import './about.css';

const About = () => {
	return (
		<div>
			<div className="aboutHeading">
				<div className="aboutHeading-text">
					<h1>ABOUT US</h1>
				</div>
			</div>
			<div className="aboutSection">
				<div className="aboutSectionText">
					<div className="aboutSectionTextHeading">
						<h1>
							Cost effective legal solutions with
							professionalism.
						</h1>
					</div>
					<div className="aboutSectionTextBody">
						<p>
							At HT Legal, we are dedicated to understanding
							the uniqueness of existing as well as
							potential clients and this helps us to tailor
							our work to their distictive needs. We place
							great emphasis on professionalism, competence,
							and respectability and we strive to build the
							feeling of confidence and trust together with
							our clients so that they can contact us
							anytime and anywhere. Over many years, our
							team has gained the experience and expertise
							necessary to make your journey with us as
							seamless as possible. We offer cost effective
							legal solutions to micro, small and medium
							enterprises as well as cater to individual
							legal needs. Our services are in four (4) core
							areas: Corporate and Business Advisory
							Employment and Labour Relations Land and
							Estate Admnistration Software and Web
							Technology In addition to the above
							highlighted services, we offer general legal
							advisory with respect to civil and criminal
							matters.
						</p>
					</div>
				</div>
				<div className="aboutSectionImage">
					<img src="/hilda.jpg" alt="" />
					<div className="aboutHilda">
						<h1>HILDA OBASANYA (LL.B, B.L, LL.M)</h1>
						<h3>Founder/Lead Consultant</h3>
					</div>
				</div>
			</div>
			<div className="appointmentHeading">
				<div className="appointmentHeading-text">
					<h1>Book A Free Consultation</h1>
					<h3>
						Need legal advice on any aspect of your business
						entity, a prospective business opportunity or an
						ongoing transaction? Take advantage of our Free
						Consultation. Click “Book Today” below to
						reserve your slot. Free consultations are on
						Saturdays and Sundays. Appointments must be
						booked AT LEAST 24 hours in advance.
					</h3>
					<div>
						<a
							href="https://wa.me/2348161353700"
							className="appointBtn"
						>
							Book Now
						</a>
					</div>
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
export default About;
