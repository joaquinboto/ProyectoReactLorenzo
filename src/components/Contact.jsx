import React from "react";
import { useState } from "react";
import "nes.css/css/nes.min.css";
import "./css/contact.css";
import iconEmail from './assets/ico-email1.svg';
import logoContact from './assets/logoContacto.png';
import { motion } from "framer-motion";
// import  emailjs  from "emailjs-com";


const Contact = () => {
    const [input , setInput] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // emailjs.send("gmail", "template_a8c1x09", input, "XzvdABOYaDdqQLt9Yk_OK")
        // .then(res => {
        //     console.log(res);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
        // e.target.reset();
    }

    const variants = {
		initial: {
			opacity: 0,
			x: "-100vw",
			scale: 0.8,
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
		duration: 0.5
	}

    return (
        <motion.div
        
        variants={variants} initial="initial" animate="in" exit="out" transition={pageTransition} className="divPrincipalContact">
            <div className="divIzq">
                <div className="divEncabezado">
                    <h1 className="h1Title">Contact</h1>
                    <p className="h6Sub">Box to leave a message, requesting a demo of a specific software or a more personal enquiry.</p>
                </div>
                <form className="formulario" onClick={handleSubmit} action="">
                    <div>
                        <input type="text" name="name" onChange={handleChange} placeholder="Text" className="nes-input" />
                    </div>
                    <div>
                        <input type="text" name="email" onChange={handleChange} placeholder="E-mail" className="nes-input" />
                    </div>
                    <div>
                        <textarea  id="textarea_field" name="message" placeholder="Message" onChange={handleChange} className="nes-textarea" style={{maxheight: "250px" , height: "250px"}} ></textarea>
                    </div>
                    <div>
                        <span><button className="btnForm">Consult</button></span>
                    </div>
                </form>
                <div className="formFooter">
                    <p className="h4footer">Consult here or you can send me an email</p>
                    <div style={{display: "flex"}}>
                        <img src={iconEmail} alt="" />
                        <p className="pFooter" >lreyes@udesa.edu.ar</p>
                    </div>
                </div>
            </div>
            <div className="footerContact">
                <img width={"400px"} src={logoContact} alt="" />
            </div>
        </motion.div>
    )
}

export default Contact;