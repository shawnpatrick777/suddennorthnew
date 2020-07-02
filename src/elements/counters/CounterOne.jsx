import React, { Component, Fragment } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class CounterOne extends Component {
	state = {
		didViewCountUp: false,
	};
	onVisibilityChange = (isVisible) => {
		if (isVisible) {
			this.setState({ didViewCountUp: true });
		}
	};
	render() {
		let Data = [
			{
				countNum: 37,
				typeText: ' yrs',
				countTitle:
					'The United States Naval Academy, American University, Naval Postgraduate School, and University of North Carolina are just to name a few of our Alma Maters.',
			},
			{
				countNum: 47,
				typeText: ' mos',
				countTitle:
					'Our team member with the least amount of experience. Not to brag, but we kind of know what we are doing!',
			},
			{
				countNum: 1,
				typeText: ' day',
				countTitle:
					'This is how long it takes for us to get back to you. Your business and piece of mind is our biggest priorty. We want to help you achieve the most success possible.',
			},
		];

		return (
			<Fragment>
				<div className='row counterPlusSign'>
					{Data.map((value, index) => (
						<div
							className='counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12'
							key={index}
						>
							<h5 className='counter'>
								<VisibilitySensor
									onChange={this.onVisibilityChange}
									offset={{ top: 10 }}
									delayedCall
								>
									<CountUp
										end={this.state.didViewCountUp ? value.countNum : 0}
									/>
								</VisibilitySensor>
								{value.typeText}
							</h5>
							<p className='description'>{value.countTitle}</p>
						</div>
					))}
				</div>
			</Fragment>
		);
	}
}
export default CounterOne;
