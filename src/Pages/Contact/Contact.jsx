import { useRef } from "react";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_04d6gpn', 'template_flnapqh', form.current, {
            publicKey: '6J6MtBIi4FHcqXp-T',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    swal("Email successfully sent!", "You clicked the button!", "success");
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <form ref={form} className="card bg-base-100 shadow-xl" onSubmit={sendEmail}>
                            <div className="card-body">
                                <h2 className="text-center font-semibold text-3xl">Contact Me</h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <label className="input-group">
                                        <span>Name</span>
                                        <input type="text" placeholder="Your name" className='input w-full' name="from_name" required />
                                    </label>
                                    <label className="input-group">
                                        <span>Email</span>
                                        <input type="text" placeholder="Your Email" className='input w-full' name="user_email" required/>
                                    </label>
                                </div>
                                <textarea className="textarea textarea-ghost border-inherit" placeholder="message" name="message"></textarea>
                                <div className="card-actions justify-end">
                                    <input type="submit" placeholder="Send" className='btn btn-primary' required/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;