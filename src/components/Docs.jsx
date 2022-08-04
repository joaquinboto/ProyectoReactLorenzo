import React from 'react';
import './css/docs.css';
import img2 from './assets/mesa.png';
import LineIcon from 'react-lineicons';
import { motion } from 'framer-motion';

const Docs = () => {
	const variants = {
		initial: {
			opacity: 0,
			x: '-100vw',
			scale: 0.8,
		},
		in: {
			opacity: 1,
			x: 0,
			scale: 1,
		},
		out: {
			opacity: 0,
			x: '-100vw',
			scale: 1.2,
		},
	};

	const pageTransition = {
		duration: 0.5,
	};
	return (
		<motion.div variants={variants} initial="initial" animate="in" exit="out" transition={pageTransition} className="docs">
			<div>
				<h1 className="h1Docs">Docs</h1>
				<p className="pDocs">Box to leave a message, requesting a demo of a specific software or a more personal enquiry</p>
			</div>
			<div>
				<a className="btnDocs" href="https://github.com/lorenzoreyes" target="_blank" rel="noopener noreferrer">
					<LineIcon name="github-original" />
					GitHub
				</a>
			</div>
			<div className="imgDocs">
				<img src={img2} width="100%" alt="hombre estudiando en una pc" />
			</div>
		</motion.div>
	);
};

export default Docs;
