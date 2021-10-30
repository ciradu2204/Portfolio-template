
import { React, useEffect, useState } from "react";
import { LineSvg } from "../Services/ServicesElements";
import { Wrapper, FormWrapper, FormHeader, ElementWrapper, Label, Input, TextArea, Error, Success } from "./ContactFormElements";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Randy Sumahoro',
        message: '',
        reply_to: '',
    });

    const [error, setError] = useState({
        nameError: false,
        messageError: false,
        reply_toError: false,
        sendError: false,



    })
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const handleValidation = () => {
        let formIsValid= true;
        if (toSend.from_name.trim() === "") {
            setError(prev => ({ ...prev, nameError: !error.nameError }));
            formIsValid=false;
        } else {
            setError(prev => ({ ...prev, nameError: !error.nameError }));

        }

        if (toSend.message.trim() === "") {
            setError(prev => ({ ...prev, messageError: !error.messageError }));
            formIsValid=false;

        } else {
            setError(prev => ({ ...prev, messageError: !error.messageError }));

        }

        if (toSend.reply_to.trim() === "") {
            formIsValid=false;
            setError(prev => ({ ...prev, reply_toError: !error.reply_toError }));
        } else {
            setError(prev => ({ ...prev, reply_toError: !error.reply_toError }));

        }

        return formIsValid;

    }


    const handleSubmit = (e) => {
        e.preventDefault();
         sendEmail();
    }

    const sendEmail = () => {
        //Using EmailJs to send emails
        if (handleValidation()) {
            setLoading(true);
            emailjs.send('service_rvlsyyp', 'template_vw898gk', toSend, 'user_BdwYC7hysI1J6mDIsnKVB')
                .then((response) => {
                    setLoading(false);
                    setSuccess(true);
                    setToSend({ from_name: '', to_name: 'Randy Sumahoro', message: '', reply_to: '', })
                    setTimeout(() => {
                        setSuccess(false);
                    }, 3000);
                })
                .catch((err) => {
                    setLoading(false);
                    setTimeout(() => {
                        setError(prev => ({ ...prev, sendError: !error.sendError }));
                    }, 4000);
                    console.log('FAILED...', err);
                });

        }
    }   

    useEffect(() => {
         AOS.init({ duration: 1000 })
    }, [])



    return (
        <Wrapper>
            <FormHeader data-aos="fade-up">CONTACT ME</FormHeader>
            <LineSvg data-aos="fade-up" viewBox="0, 0, 50,50">
                <path
                    d="
                 M -70 20
                 L 10 11
                 C 10 11 30 6 30 5
                 L 55 20
                 h 70"/>
            </LineSvg>
            {success ? <Success>Your Message was successfully sent!</Success> : null}
            <FormWrapper onSubmit={handleSubmit}>
                <ElementWrapper id={1} data-aos="fade-up">
                    <Label>NAME</Label>
                    <Input type="text" name="from_name" value={toSend.from_name} onChange={handleChange} />
                </ElementWrapper>
                {error.nameError ? (
                    <Error>Your Name is Required</Error>) : null
                }
                <ElementWrapper id={2} data-aos="fade-up">
                    <Label>EMAIL</Label>
                    <Input type="email" name="reply_to" value={toSend.reply_to} onChange={handleChange} />
                </ElementWrapper>
                {error.reply_toError ?
                    (<Error>Your Email is Required</Error>) : null
                }
                <ElementWrapper id={3} data-aos="fade-up">
                    <Label>MESSAGE</Label>
                    <TextArea name="message" value={toSend.message} onChange={handleChange}></TextArea>
                </ElementWrapper>
                {error.messageError ? (<Error>
                    Your Message is Required
                </Error>) : null}
                {error.sendError ? (<Error>
                    Please try again!
                </Error>) : null}
                <Input type="submit" disabled={loading ? true : false} value={loading ? "Sending..." : "Send"} />
            </FormWrapper>
        </Wrapper>


    )


}

export default ContactForm