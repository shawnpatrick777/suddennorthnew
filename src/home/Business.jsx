import React, { Component, Fragment } from 'react';
import ScrollToTop from 'react-scroll-up';
import Slider from 'react-slick';
import { slideSlick } from '../pageScripts/script';
import ServiceList from '../elements/service/ServiceList';
import BlogContent from '../elements/blog/BlogContent';

import PortfolioList from '../elements/portfolio/PortfolioList';
import Header from '../component/header/Header';
import FooterTwo from '../component/footer/FooterTwo';
import CallAction from '../elements/callaction/CallAction';

import { FiChevronUp } from 'react-icons/fi';
import Helmet from '../component/common/Helmet';

const SlideList = [
	{
		textPosition: 'text-left',
		bgImage: 'bg_image--17',
		category: '',
		title: '#Move Up',
		description: 'Developing People | Generating Ideas | Growing Businesses',
		buttonText: 'Contact Us',
		buttonLink: '/contact',
	},
];

class Business extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
		};
		this.openModal = this.openModal.bind(this);
	}
	openModal() {
		this.setState({ isOpen: true });
	}
	render() {
		const PostList = BlogContent.slice(0, 1);

		return (
			<Fragment>
				<Helmet pageTitle='Sudden North | Move Up' />
				<Header />
				{/* Start Slider Area   */}
				<div className='slider-wrapper'>
					<div className='slider-activation'>
						<Slider className='rn-slick-dot dot-light' {...slideSlick}>
							{SlideList.map((value, index) => (
								<div
									className={`slide slide-style-2 d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
									key={index}
									data-black-overlay='6'
								>
									<div className='container'>
										<div className='row'>
											<div className='col-lg-12'>
												<div className={`inner ${value.textPosition}`}>
													{value.category ? <span>{value.category}</span> : ''}
													{value.title ? (
														<h1 className='title'>{value.title}</h1>
													) : (
														''
													)}
													{value.description ? (
														<p className='description'>{value.description}</p>
													) : (
														''
													)}
													{value.buttonText ? (
														<div className='slide-btn'>
															<a
																className='rn-button-style--2 btn-solid'
																href={`${value.buttonLink}`}
															>
																{value.buttonText}
															</a>
														</div>
													) : (
														''
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
				{/* End Slider Area   */}

				{/* Start Brand Area */}
				{/* <div className='rn-brand-area bg_color--5 ptb--60'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-12'>
								<BrandTwo />
							</div>
						</div>
					</div>
				</div> */}
				{/* End Brand Area */}

				{/* Start Service Area  */}
				<div className='service-area creative-service-wrapper ptb--120 bg_color--1'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='section-title service-style--3 text-center mb--30 mb_sm--0'>
									<h2 className='title'>Our Services</h2>
									<p>
										These are the skills that we nuture everyday for your
										benefit. Allow us to sit down with you and see how we can
										use the talents that we have to build your business' brand.
									</p>
								</div>
							</div>
						</div>
						<div className='row creative-service'>
							<div className='col-lg-12'>
								<ServiceList
									item='6'
									column='col-lg-4 col-md-6 col-sm-6 col-12 text-left'
								/>
							</div>
						</div>
					</div>
				</div>
				{/* End Service Area  */}

				{/* Start Portfolio Area */}
				<div className='portfolio-area ptb--120 bg_color--5'>
					<div className='portfolio-sacousel-inner'>
						<div className='container'>
							<div className='row'>
								<div className='col-lg-12'>
									<div className='section-title text-center service-style--3 mb--30 mb_sm--0'>
										<h2 className='title'>Our Recent Projects</h2>
										<p>
											Check out a few of our projects. We also work with
											government agencies and contractors that require
											clearances.
										</p>
									</div>
								</div>
							</div>
							<div className='row'>
								<PortfolioList
									styevariation='text-left mt--40'
									column='col-lg-4 col-md-6 col-sm-6 col-12'
									item='3'
								/>
							</div>
							<div className='row'>
								<div className='col-lg-12'>
									<div className='view-more-btn mt--60 text-center'>
										<a
											className='rn-button-style--2 btn-solid'
											href='/services'
										>
											<span>What Else Can We Do?</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Portfolio Area */}

				{/* Start Blog Area */}
				<div className='rn-blog-area pt--120 pb--80 bg_color--5'>
					<div className='container'>
						<div className='row align-items-end'>
							<div className='col-lg-12'>
								<div className='section-title service-style--3 text-center'>
									<h2 className='title'>Latest Articles</h2>
									<p>
										There are many variations of passages of Lorem Ipsum
										available, but the majority have suffered alteration.
									</p>
								</div>
							</div>
						</div>
						<div className='row mt--60'>
							{PostList.map((value, i) => (
								<div className='col-lg-4 col-md-6 col-sm-6 col-12' key={i}>
									<div className='blog blog-style--1'>
										<div className='thumbnail'>
											<a href='/articles/start-a-business-in-maryland'>
												<img
													className='w-100'
													src={`/assets/images/blog/${value.images}.jpg`}
													alt='Blog Images'
												/>
											</a>
										</div>
										<div className='content'>
											<p className='blogtype'>{value.category}</p>
											<h4 className='title'>
												<a href='/blog-details'>{value.title}</a>
											</h4>
											<div className='blog-btn'>
												<a
													className='rn-btn text-white'
													href='/articles/start-a-business-in-maryland'
												>
													Read More
												</a>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* End Blog Area */}

				{/* Start call To Action  */}
				<CallAction />
				{/* End call To Action  */}

				{/* Start Footer Style  */}
				<FooterTwo />
				{/* End Footer Style  */}

				{/* Start Back To Top */}
				<div className='backto-top'>
					<ScrollToTop showUnder={160}>
						<FiChevronUp />
					</ScrollToTop>
				</div>
				{/* End Back To Top */}
			</Fragment>
		);
	}
}
export default Business;
