import React from 'react';
import 'nes.css/css/nes.min.css';
import './css/nav.css';
import logo from './assets/LOGO.png';
import telegram from './assets/ico-telegram2.png';
import wpp from './assets/ico-whatsapp.png';
import github from './assets/githubIcon.png';
import email from './assets/emailIcon.png';
import linkedin from './assets/ico-linkedin relleno.png';
import question from './assets/question.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
	const btn = document.getElementsByClassName('nes-btn');

	function handleClick() {
		for (let i = 0; i < btn.length; i++) {
			btn[i].addEventListener('mouseover', function () {
				this.classList.add('nes-btn', 'is-warning');
			});
			btn[i].addEventListener('mouseleave', function () {
				this.classList.remove('is-warning');
			});
		}
	}

	handleClick();

	return (
		<div className="divPrincipal">
			<div className="navLogo">
				<Link to="/home">
					<img src={logo} alt="" />
				</Link>
			</div>
			<div className="divListas">
				<ul className="ulNav">
					{/* <li onMouseOver={handleClick}>
						<Link to="/" className="nes-btn">
							Home
						</Link>
					</li> */}
					<li onMouseOver={handleClick}>
						<Link to="/whoiam" className="nes-btn">
							Who I am?
						</Link>
					</li>
					<li onMouseOver={handleClick}>
						<Link to="/functions" className="nes-btn">
							Functions
						</Link>
					</li>
					<li onMouseOver={handleClick}>
						<Link to="/docs" className="nes-btn">
							Docs
						</Link>
					</li>
					<li onMouseOver={handleClick}>
						<Link to="/contact" className="nes-btn">
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="navRedes">
				<img src={github} alt="" />
				<img src={email} alt="" />
				<img src={linkedin} alt="" />
			</div>
			<div className="navFooter">
				<img className="question" src={question} alt="" />
				<div>
					<img style={{ padding: '10px' }} src={telegram} alt="" />
					<img style={{ padding: '10px' }} src={wpp} alt="" />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
