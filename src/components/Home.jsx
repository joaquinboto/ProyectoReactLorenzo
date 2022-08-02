import React from 'react';
import './css/home.css';
import img1 from './assets/img-home.gif';
import {motion} from 'framer-motion'

const Home = () => {

	const variants = {
		initial: {
			opacity: 0,
			x: "-100vw",
			scale: 0.8
		},
		in: {
			opacity: 1,
			x: 0,
			scale: 1,
		},
		out: {
			opacity: 0,
			x: "-100vw",
			scale: 1.2,
		}
	}

	const pageTransition = {
		duration: 0.5,
	}
	return (
		<motion.div variants={variants} initial="initial" animate="in" exit="out" transition={pageTransition}
		className="docs">
			<div className="contenedorHome">
				<h1 className="h1Docs h1Home">
					&lt;LORENZO REYES.DEV/&gt;.<span>&#160;</span>
				</h1>
				<p className="pDocs">&#160;&#160;&#160;A system to control and execute market ideas in a single tool.</p>
			</div>
			<div className="contenedorImgHome">
				<img src={img1} alt="gif animado" />
			</div>
		</motion.div>
	);
};

export default Home;
