import React, { Component } from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const SocialShare = [
	{ Social: <FaFacebookF />, link: 'https://www.facebook.com/suddennorth/' },
	{
		Social: <FaLinkedinIn />,
		link: 'https://www.linkedin.com/company/suddennorth',
	},
];
class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<footer className='footer-area'>
					<div className='footer-wrapper'>
						<div className='row align-items-end row--0'>
							<div className='col-lg-6'>
								<div className='footer-left'>
									<div className='inner'>
										<span>Ready To Do This</span>
										<h2>
											Let's get <br /> to work
										</h2>
										<a className='rn-button-style--2' href='/contact'>
											<span>Contact Us</span>
										</a>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='footer-right' data-black-overlay='6'>
									<div className='row'>
										{/* Start Single Widget  */}
										<div className='col-lg-6 col-sm-6 col-12'>
											<div className='footer-link'>
												<h4>Quick Links</h4>
												<ul className='ft-link'>
													<li>
														<a href='/'>Home</a>
													</li>
													<li>
														<a href='/about'>About Us</a>
													</li>
													<li>
														<a href='/contact'>Let's Talk</a>
													</li>
												</ul>
											</div>
										</div>
										{/* End Single Widget  */}
										{/* Start Single Widget  */}
										<div className='col-lg-6 col-sm-6 col-12 mt_mobile--30'>
											<div className='footer-link'>
												<h4>Contact</h4>
												<ul className='ft-link'>
													<li>
														<a href='mailto:info@suddennorth.com'>Email Us</a>
													</li>
													<li>
														<a href='tel:4104492217'>(410) 449-2217</a>
													</li>
												</ul>

												<div className='social-share-inner'>
													<ul className='social-share social-style--2 d-flex justify-content-start liststyle mt--15'>
														{SocialShare.map((val, i) => (
															<li key={i}>
																<a href={`${val.link}`}>{val.Social}</a>
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>
										{/* End Single Widget  */}

										<div className='col-lg-12'>
											<div className='copyright-text'>
												<p>
													Copyright © 2020 Sudden North. All Rights Reserved.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}
export default Footer;