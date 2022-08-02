import React from 'react';
import './css/docs.css';
import img2 from './assets/mesa.png';
import img3 from './assets/githubIcon.png';

const Docs = () => {
	return (
		<div className="docs">
			<div>
				<h1 className="h1Docs">Docs</h1>
				<p className="pDocs">Box to leave a message, requesting a demo of a specific software or a more personal enquiry</p>
			</div>
			<div>
				<a className="btnDocs" href="https://github.com/lorenzoreyes" target="_blank" rel="noopener noreferrer">
					<img className="iconDocs" src={img3} alt="" /> GitHub
				</a>
			</div>
			<div className="imgDocs">
				<img src={img2} alt="hombre estudiando en una pc" />
			</div>
		</div>
	);
};

export default Docs;
