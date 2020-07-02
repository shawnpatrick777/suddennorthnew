import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='row'>
					<div className='col-lg-12'>
						<Tabs>
							<TabPanel>
								<div className='rn-testimonial-content text-center'>
									<div className='inner'>
										<p>
											Sudden North has taken us to new heights. Our Social
											Media, Website, and Strategy are nothing short of amazing.
											Awesome Team!!.
										</p>
									</div>
									<div className='author-info'>
										<h6>
											<span>Scott </span> - CEO, Accolade Technologies, LLC.
										</h6>
									</div>
								</div>
							</TabPanel>

							<TabList className='testimonial-thumb-wrapper'>
								<Tab>
									<div className='testimonial-thumbnai'>
										<div className='thumb'>
											<img
												src='/assets/images/client/scott-2.jpg'
												alt='Testimonial Images'
											/>
										</div>
									</div>
								</Tab>
							</TabList>
						</Tabs>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default Testimonial;
