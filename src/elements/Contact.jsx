import React, { Component } from 'react';
import PageHelmet from '../component/common/Helmet';
import { FiHeadphones, FiMail, FiMapPin } from 'react-icons/fi';

import ContactTwo from '../elements/contact/ContactTwo';

import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

class Contact extends Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33,
		},
		zoom: 11,
	};

	render() {
		return (
			<React.Fragment>
				<PageHelmet pageTitle='Contact Us | Sudden North' />

				<Header
					headertransparent='header--transparent'
					colorblack='color--black'
					logoname='logo.png'
				/>

				{/* Start Breadcrump Area */}
				<div
					className='rn-page-title-area pt--120 pb--190 bg_image bg_image--17'
					data-black-overlay='6'
				>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='rn-page-title text-center pt--100'>
									<h2 className='title theme-gradient'>Connect With Us</h2>
									<p>
										We look forward to seeing how this partnership can benefit
										your business.{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Breadcrump Area */}

				{/* Start Contact Top Area  */}
				<div className='rn-contact-top-area ptb--120 bg_color--5'>
					<div className='container'>
						<div className='row'>
							{/* Start Single Address  */}
							<div className='col-lg-4 col-md-6 col-sm-6 col-12'>
								<div className='rn-address'>
									<div className='icon'>
										<FiHeadphones />
									</div>
									<div className='inner'>
										<h4 className='title'>Contact by Phone</h4>
										<p>
											<a href='tel:+1 410 449 2217'>(410) 449-2217</a>
										</p>
									</div>
								</div>
							</div>
							{/* End Single Address  */}

							{/* Start Single Address  */}
							<div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50'>
								<div className='rn-address'>
									<div className='icon'>
										<FiMail />
									</div>
									<div className='inner'>
										<h4 className='title'>Email Address</h4>
										<p>
											<a href='mailto:info@suddennorth.com'>
												info@suddennorth.com
											</a>
										</p>
									</div>
								</div>
							</div>
							{/* End Single Address  */}

							{/* Start Single Address  */}
							<div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50'>
								<div className='rn-address'>
									<div className='icon'>
										<FiMapPin />
									</div>
									<div className='inner'>
										<h4 className='title'>Location</h4>
										<p>Annapolis, Maryland</p>
									</div>
								</div>
							</div>
							{/* End Single Address  */}
						</div>
					</div>
				</div>
				{/* End Contact Top Area  */}

				{/* Start Contact Page Area  */}
				<div className='rn-contact-page ptb--120 bg_color--1'>
					<ContactTwo />
				</div>
				{/* End Contact Page Area  */}

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
export default Contact;