import React, { Component } from 'react';
import PageHelmet from '../component/common/Helmet';
import Breadcrumb from '../elements/common/Breadcrumb';
import CounterOne from '../elements/counters/CounterOne';
import Testimonial from '../elements/Testimonial';

import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import Team from '../elements/Team';

class About extends Component {
	render() {
		let title = 'Who We Are',
			description =
				'First and foremost, we are a company that helps people and businesses reach their full potential. A minority-owned consulting company, with a very diverse background of experiences. Located in Annapolis Maryland in the middle of Baltimore and D.C., with clients all over the world. We specialize in Software Development, Marketing, Analysis, and Consulting. The sky is no-longer the limit, and we want to crush your idea of what is achievable!';
		return (
			<React.Fragment>
				<PageHelmet pageTitle='About Us | Sudden North' />

				<Header
					headertransparent='header--transparent'
					colorblack='color--black'
					logoname='logo.png'
				/>
				{/* Start Breadcrump Area */}
				<Breadcrumb title={'About'} />
				{/* End Breadcrump Area */}

				{/* Start About Area  */}
				<div className='rn-about-area ptb--120 bg_color--1'>
					<div className='rn-about-wrapper'>
						<div className='container'>
							<div className='row row--35 align-items-center'>
								<div className='col-lg-5'>
									<div className='thumbnail'>
										<img
											className='w-100'
											src='/assets/images/bg/mount2.jpg'
											alt='About Images'
										/>
									</div>
								</div>
								<div className='col-lg-7'>
									<div className='about-inner inner'>
										<div className='section-title'>
											<h2 className='title'>{title}</h2>
											<p className='description'>{description}</p>
										</div>
										<div className='row mt--30'>
											<div className='col-lg-6 col-md-12 col-sm-12 col-12'>
												<div className='about-us-list'>
													<h3 className='title'>Have an Idea?</h3>
													<p>
														Many people have no idea where to start. We can
														direct you with paperwork, requirements, legal, and
														technology. We want to eliminate the stress and get
														your idea off the ground. If you want to navigate it
														yourself, please check out our startup article
														HEREXX
													</p>
												</div>
											</div>
											<div className='col-lg-6 col-md-12 col-sm-12 col-12'>
												<div className='about-us-list'>
													<h3 className='title'>Have a Business?</h3>
													<p>
														The joys of owning a business are soon met with many
														different overwhelming emotions. Did I make the
														right decision to what did I get myself into? Do not
														let yourself get weighed down with these emotions
														and allow us to rekindle the drive and love that you
														first had. We will get you back on track!
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End About Area  */}

				{/* Start CounterUp Area */}
				<div className='rn-counterup-area pb--120 bg_color--1'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='section-title text-center'>
									<h3 className='fontWeight500'>Facts</h3>
								</div>
							</div>
						</div>
						<CounterOne />
					</div>
				</div>
				{/* End CounterUp Area */}

				{/* Start Finding Us Area  */}
				<div className='rn-finding-us-area rn-finding-us bg_color--1'>
					<div className='inner'>
						<div className='content-wrapper'>
							<div className='content'>
								<h4 className='theme-gradient'>
									Ready to Partner with Sudden North?
								</h4>
								<p>
									We are always standing by to assist with the needs of your
									company. We have proven-professionals that know exactly what
									you are your brand needs to continue the journey North.
								</p>
								<a className='rn-btn btn-white' href='/about'>
									Get Started
								</a>
							</div>
						</div>
						<div className='thumbnail'>
							<div className='image'>
								<img
									src='/assets/images/bg/northern.jpg'
									alt='Finding Images'
								/>
							</div>
						</div>
					</div>
				</div>
				{/* End Finding Us Area  */}

				{/* Start Team Area  */}
				<div
					id='team'
					name='team'
					className='rn-team-area bg_color--1 ptb--120'
				>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='section-title service-style--3 text-center mb--25'>
									<h2 className='title'>Our Leadership</h2>
									<p>
										Every individual at Sudden North is an important piece to
										your company's success. Here are just a few in our
										leadership.
									</p>
								</div>
							</div>
						</div>
						<div className='row'>
							<Team />
						</div>
					</div>
				</div>
				{/* End Team Area  */}

				{/* Start Testimonial Area */}
				<div className='rn-testimonial-area bg_color--5 ptb--120'>
					<div className='container'>
						<Testimonial />
					</div>
				</div>
				{/* End Testimonial Area */}

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
export default About;
