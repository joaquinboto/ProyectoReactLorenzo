import React from 'react';
import './css/home.css';
import img1 from './assets/img-home.gif';

const Home = () => {
	return (
		<div className="docs">
			<div className="contenedorHome">
				<h1 className="h1Docs h1Home">
					&lt;LORENZO REYES.DEV/&gt;.<span>&#160;</span>
				</h1>
				<p className="pDocs">&#160;&#160;&#160;A system to control and execute market ideas in a single tool.</p>
			</div>
			<div className="contenedorImgHome">
				<img src={img1} alt="gif animado" />
			</div>
		</div>
	);
};

export default Home;
