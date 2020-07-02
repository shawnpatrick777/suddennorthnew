import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class PageHelmet extends Component {
	render() {
		return (
			<React.Fragment>
				<Helmet>
					<title>{this.props.pageTitle}</title>
					<meta
						name='description'
						content='Sudden North is one of the fastest growing technology and consulting companies in America. We specialize in extracting your full potential and keeping your achievments on a journey upward.'
					/>
				</Helmet>
			</React.Fragment>
		);
	}
}

export default PageHelmet;
