import React, { Component } from 'react';

const PortfolioListContent = [
	{
		image: 'image-1',
		category: 'Development and Marketing',
		title: 'Accolade Technologies, LLC',
	},
	{
		image: 'image-2',
		category: 'Mobile Application',
		title: 'PUDO - Parent/Child Tracking App',
	},
	{
		image: 'image-3',
		category: 'Social Media Platform',
		title: 'Stoke, LLC Category-Based Chat App',
	},
];

class PortfolioList extends Component {
	render() {
		const { column, styevariation } = this.props;
		const list = PortfolioListContent.slice(0, this.props.item);
		return (
			<React.Fragment>
				{list.map((value, index) => (
					<div className={`${column}`} key={index}>
						<div className={`portfolio ${styevariation}`}>
							<div className='thumbnail-inner'>
								<div className={`thumbnail ${value.image}`}></div>
								<div className={`bg-blr-image ${value.image}`}></div>
							</div>
							<div className='content'>
								<div className='inner'>
									<p>{value.category}</p>
									<h4>
										<a href='/portfolio-details'>{value.title}</a>
									</h4>
									<div className='portfolio-button'>
										<a className='rn-btn' href='/contact'>
											Get Started
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</React.Fragment>
		);
	}
}
export default PortfolioList;
