import React, { Component } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

let TeamContent = [
	{
		images: 'DomHead',
		title: 'Dominique Wright',
		designation: 'President and Co-Founder',
		blurb:
			'Bachelor of Science in Mathmatics from the United States Naval Academy, Juris Doctor from American University, and Navy Veteran',
		socialNetwork: [
			{
				icon: <FaLinkedinIn />,
				url: 'https://www.linkedin.com/in/dominique-wright-3a5397a4/',
			},
		],
	},
	{
		images: 'sutton',
		title: 'Sean Sutton',
		designation: 'CTO and Mobile Developer',
		blurb:
			'Bachelor of Science in Economics with a minor in Mathmatical Decision Science from the University of North Carolina at Chapel Hill, Software Enineer from Flatiron School, with years of experience in mobile and full-stack development.',
		socialNetwork: [
			{
				icon: <FaLinkedinIn />,
				url: 'https://www.linkedin.com/in/seansuttonjr/',
			},
		],
	},
	{
		images: 'ChrisHead',
		title: 'Christopher Simmons',
		designation: 'COO and Co-Founder',
		blurb:
			'Bachelor of Science in Physics from the United States Naval Academy, Masters in Engineering from Old Dominion University, Nuclear Engineer, and Navy Veteran',
		socialNetwork: [
			// {
			// 	icon: <FaLinkedinIn />,
			// 	url: '#',
			// },
		],
	},
];

class Team extends Component {
	render() {
		return (
			<React.Fragment>
				{TeamContent.map((value, i) => (
					<div className='col-lg-4 col-md-6 col-sm-6 col-12' key={i}>
						<div className='team'>
							<div className='thumbnail'>
								<img
									src={`/assets/images/head-shots/${value.images}.png`}
									alt='Head Shot Images'
								/>
							</div>
							<div className='content'>
								<h4 className='title'>{value.title}</h4>
								<p className='designation'>{value.designation}</p>
								<p className='designation blurbProfile'>{value.blurb}</p>
							</div>
							<ul className='social-icon'>
								{value.socialNetwork.map((social, index) => (
									<li key={index}>
										<a href={`${social.url}`}>{social.icon}</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</React.Fragment>
		);
	}
}
export default Team;
