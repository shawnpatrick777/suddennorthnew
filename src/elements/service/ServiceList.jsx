import React, { Component } from 'react';
import {
	FiLayout,
	FiSmartphone,
	FiPieChart,
	FiGrid,
	FiLayers,
	FiUsers,
} from 'react-icons/fi';
import { HashLink as Linked } from 'react-router-hash-link';

const ServiceList = [
	{
		icon: <FiLayout />,
		link: 'development',
		title: 'Website Development',
		description:
			'We use many languages, frameworks, and libraries such as React, NodeJs, Express, MongoDB, AWS, SQL, and Python.',
	},
	{
		icon: <FiSmartphone />,
		link: 'development',
		title: 'App Development',
		description:
			'If you are not staying ahead of your customers, then you are not staying ahead of your competition.',
	},
	{
		icon: <FiUsers />,
		link: 'marketing',
		title: 'Marketing & Research',
		description:
			'Do you even know your audience? If not, then how well are you really doing? Let us see how you can benefit from us.',
	},
	{
		icon: <FiGrid />,
		link: 'branding',
		title: 'Branding and Design',
		description:
			'Your brand is everything! Your values, your customers, and your product! How good is it?',
	},
	{
		icon: <FiLayers />,
		link: 'aws',
		title: 'AWS Management',
		description:
			"AWS provides low-cost, secure, and expandable products for any of your business' needs",
	},
	{
		icon: <FiPieChart />,
		link: 'consulting',
		title: 'Strategy & Consulting',
		description:
			"If you don't know where to go, what good is a map? Let us set up the right direction for you to move up.",
	},
];

class ServiceThree extends Component {
	render() {
		const { column } = this.props;
		const ServiceContent = ServiceList.slice(0, this.props.item);

		return (
			<React.Fragment>
				<div className='row'>
					{ServiceContent.map((val, i) => (
						<div className={`${column}`} key={i}>
							<Linked to={`/service#${val.link}`}>
								<div className='service service__style--2'>
									<div className='icon'>{val.icon}</div>
									<div className='content'>
										<h3 className='title'>{val.title}</h3>
										<p>{val.description}</p>
									</div>
								</div>
							</Linked>
						</div>
					))}
				</div>
			</React.Fragment>
		);
	}
}
export default ServiceThree;
