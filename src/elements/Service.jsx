import React, { Component } from 'react';
import PageHelmet from '../component/common/Helmet';
import Breadcrumb from '../elements/common/Breadcrumb';
import { FiChevronUp } from 'react-icons/fi';
import ScrollToTop from 'react-scroll-up';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

class Service extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHelmet pageTitle='Services | Sudden North' />
				<Header
					headertransparent='header--transparent'
					colorblack='color--black'
					logoname='logo.png'
				/>

				{/* Start Breadcrump Area */}
				<Breadcrumb title={'Service'} />
				{/* End Breadcrump Area */}

				{/* Start Service Area */}
				<div id='development' className='service-area ptb--120 bg_color--5'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='section-title text-center mb--30'>
									<h2> Software Development</h2>
								</div>
								<div className='servicesBlurb row'>
									<div className='col-md-6 heightDiv'>
										<p>
											Whether you are in Tech or the restaurant business; your
											presence on the web can make or break your company. We
											provide services to fit every situation:
										</p>
										<ul>
											<li>Full-Stack Web Applications</li>
											<li>RESTful APIs</li>
											<li>Robust Backends</li>
											<li>Mobile Applications</li>
											<li>
												WordPress, Wix, and many other "off the shelf"
												frameworks
											</li>
										</ul>
										<p>
											We want to be the one company that you look to for almost
											all of your technology leads. We do not outsource our
											work; all code will be written and tested by Sudden North.
										</p>
										<p>
											We guarantee that we will be the most fair, responsive,
											and reasonbly-priced technology service that you have
											encountered.
										</p>
									</div>
									<div
										style={{ textAlign: 'center' }}
										className='col-md-6 heightDiv'
									>
										<img
											style={{ borderRadius: '5px' }}
											src={`/assets/images/service/software.jpg`}
											alt=''
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Service Area */}

				{/* Start Service Area */}
				<div id='marketing' className='service-area ptb--120 bg_color--1'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='section-title text-center mb--30'>
									<h2>Marketing and Research</h2>
								</div>
								<div className='servicesBlurb row'>
									<div
										style={{ textAlign: 'center' }}
										className='col-md-6 heightDiv'
									>
										<img
											style={{ borderRadius: '5px' }}
											src={`/assets/images/service/research.jpg`}
											alt=''
										/>
									</div>
									<div className='col-md-6 heightDiv'>
										<p>
											Not only can we assist with engaging customers, we can
											tell you what customers to engage. Knowing your market is
											key for any business and has been studied for as long as
											there have been markets.
										</p>
										<p>What we can answer:</p>
										<ul>
											<li>How do you stack up against the competition?</li>
											<li>
												What are your competitors doing right, and how can you
												do it better?
											</li>
											<li>What are your goals and KPIs?</li>
											<li>
												What is your social media doing and how can you make it
												better?
											</li>
											<li>
												Do you have the right product, at the right price, in
												the right place?
											</li>
										</ul>

										<p>
											Marketing is a must-have for any and every buisness out
											there. Real marketing has a huge return on investment that
											you cannot aford to pass up.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Service Area */}

				{/* Start Service Area */}
				<div
					id='branding'
					className='service-area creative-service-wrapper pt--90 pb--120 bg_color--5'
				>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='section-title text-center mb--30'>
									<h2>Branding & Design</h2>
								</div>
								<div
									style={{ maxHeight: '700px' }}
									className='servicesBlurb row'
								>
									<div className='col-md-6 heightDiv'>
										<p>
											Does your business flow? Does your purpose match your
											product, and does your product represent passion? Branding
											is the way you convey everything your business stands for,
											so that your customers get a clear and consistant message.
										</p>
										<ul>
											<li>Logo Design.</li>
											<li>Match the right color pallet for your brand.</li>
											<li>Website Design.</li>
											<li>Social Media AD development that generates leads.</li>
										</ul>
										<p>
											We can create a beautiful look that flows through all
											channels representing your Brand.
										</p>
									</div>
									<div
										style={{ textAlign: 'center' }}
										className='col-md-6 heightDiv'
									>
										<img
											style={{ borderRadius: '5px' }}
											src={`/assets/images/service/branding.jpg`}
											alt=''
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Service Area */}
				{/* Start Service Area */}
				<div
					id='aws'
					className='service-area creative-service-wrapper pt--90 pb--120 bg_color--5'
				>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='section-title text-center mb--30'>
									<h2>AWS Management</h2>
								</div>
								<div className='servicesBlurb row'>
									<div
										style={{ textAlign: 'center' }}
										className='col-md-6 heightDiv'
									>
										<img
											style={{ borderRadius: '5px' }}
											src={`/assets/images/service/cloud.jpg`}
											alt=''
										/>
									</div>
									<div className='col-md-6 heightDiv'>
										<p>
											Many businesses are in the cloud, do not get left on the
											ground. Your database, CRM. and applications are more
											effecient on a cloud server. Storage, APIs, database
											creation can all happen virually. Amazon Web Services is
											one of the most reliable and cost-friendly platforms for
											your business to expand as needed.
										</p>
										<ul>
											<li>S3 Buckets for storage.</li>
											<li>RESTful APIs with API Gateway.</li>
											<li>Serverless frameworks with Lambda.</li>
											<li>Databases with DynomoDB.</li>
											<li>and so much more.....</li>
										</ul>
										<p>
											A scompared to a hosting company like Godaddy, AWS can be
											1/10 of the cost.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Service Area */}

				{/* Start Service Area */}
				<div
					id='consulting'
					className='service-area creative-service-wrapper pt--90 pb--120 bg_color--1'
				>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='section-title text-center mb--30'>
									<h2>Strategy & Consulting</h2>
								</div>
								<div className='servicesBlurb row'>
									<div className='col-md-6 heightDiv'>
										<p>
											Imagine the possibilities of your potential if you had the
											right tools and knowledge at your finger tips. With a few
											consulting visits, you will have the recources you need to
											help break the barriers to entry, get back on the path to
											success, or continue in the direction you are meant to go.
										</p>
										<ul>
											<li>Strategic Pricing</li>
											<li>Business Modeling</li>
											<li>Expansions and Mergers</li>
											<li>Risk Analysis</li>
											<li>Legal Consulting</li>
										</ul>
										<p>
											Your business is our business! We do not stop until you
											are where we promised you would be. We have many years of
											military service, leading in very stressful situations,
											and years of increasing company's profitability in their
											communities.
										</p>
									</div>
									<div
										style={{ textAlign: 'center' }}
										className='col-md-6 heightDiv'
									>
										<img
											style={{ borderRadius: '5px' }}
											src={`/assets/images/service/strategy.jpg`}
											alt=''
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Service Area */}

				{/* Start Back To Top */}
				<div className='backto-top'>
					<ScrollToTop showUnder={160}>
						<FiChevronUp />
					</ScrollToTop>
				</div>
				{/* End Back To Top */}

				<Footer />
			</React.Fragment>
		);
	}
}
export default Service;
