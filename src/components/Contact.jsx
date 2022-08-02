import React from "react";
import { useState } from "react";
import "nes.css/css/nes.min.css";
import "./css/contact.css";
import iconEmail from './assets/ico-email1.svg';
import logoContact from './assets/logoContacto.png';


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
    }

    return (
        <div className="divPrincipalContact">
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
                        <p className="pFooter" >dr.reyeslorenzo@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="footerContact">
                <img width={"400px"} src={logoContact} alt="" />
            </div>
        </div>
    )
}

export default Contact;