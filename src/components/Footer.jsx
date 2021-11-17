import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import openSea from '../images/openSea.png'

function Footer() {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="gap-5 mt-12 inline-flex">
      	<div className="h-14 w-14 text-discord bg-bg0 shadow-md bg-opacity-80 rounded-lg flex items-center" icon={faDiscord}>
        	<a href="" className="h-full w-full p-2"><FontAwesomeIcon icon={faDiscord} className="text-4xl "/></a>
      	</div>
      	<div className="h-14 w-14 text-twitter bg-bg0 shadow-md bg-opacity-80 rounded-lg flex items-center" icon={faTwitter}>
        	<a href="" className="h-full w-full p-2"><FontAwesomeIcon icon={faTwitter} className="text-4xl "/></a> 
      	</div>
      	<div className="h-14 w-14 bg-bg0 bg-opacity-80 shadow-md rounded-lg flex items-center">
        	<a href=""><img src={openSea} alt=""/></a>
      	</div>
			</div>
			
			<a href="" className="mt-6 text-2xl font-Lato">View Contract Here</a>
			<h5 className="mt-2 mb-5">@ShibaDays</h5>
		</div>
	)
}

export default Footer;