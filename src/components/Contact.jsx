import React , { useRef } from 'react';
import 'nes.css/css/nes.min.css';
import './css/contact.css';
import iconEmail from './assets/ico-email1.svg';
import logoContact from './assets/logoContacto.png';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

	const form = useRef();

	const toastOptions = {
		position: "bottom-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored"
		};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const {user_name , user_email , message} = form.current.elements
			if(user_name.value === '' || user_email.value === '' || message.value === ''){
				toast.error('Todos los campos son obligatorios', toastOptions);
			} else {
				await emailjs.sendForm('service_zpe6wfb', 'template_a8c1x09', form.current , 'usZ_n87fJiEtlg1e1');;
				form.current.reset();
				toast.success("Successfully registered" , toastOptions);			
			}
			
		} catch (error) {
			console.log(error)
		}

	};

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
		<motion.div variants={variants} initial="initial" animate="in" exit="out" transition={pageTransition} className="divPrincipalContact">
			<div className="divIzq">
				<div className="divEncabezado">
					<h1 className="h1Title">Contact</h1>
					<p className="h6Sub">Box to leave a message, requesting a demo of a specific software or a more personal enquiry.</p>
				</div>
				<form className="formulario" ref={form} onSubmit={handleSubmit} action="">
					<div>
						<input type="text" name="user_name"  placeholder="Name" className="nes-input" />
					</div>
					<div>
						<input type="text" name="user_email"  placeholder="E-mail" className="nes-input" />
					</div>
					<div>
						<textarea id="textarea_field" name="message" placeholder="Message"  className="nes-textarea" style={{ maxheight: '250px', height: '250px' }}></textarea>
					</div>
					<div>
						<span>
							<button className="btnForm">Consult</button>
						</span>
					</div>
				</form>
				<div className="formFooter">
					<p className="h4footer">Consult here or you can send me an email</p>
					<div style={{ display: 'flex' }}>
						<img src={iconEmail} alt="" />
						<p className="pFooter">lreyes@udesa.edu.ar</p>
					</div>
				</div>
			</div>
			<div className="footerContact">
				<img width={'400px'} src={logoContact} alt="" />
			</div>
			<ToastContainer />
		</motion.div>
	);
};

export default Contact;
