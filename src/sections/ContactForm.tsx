import React, { useState } from 'react'
import { submitData } from '../assets/script/ContactForm_Validation'
// Debugging:
// import { useProductContext } from '../contexts/ProductContext'

const ContactForm: React.FC = () => {
// const ContactForm: React.FC <IError> = () => {
    // ------------------------------------------------------------------------------
    // SETTING OF "GLOBAL VALUES":
    const [canSubmit, setCanSubmit] = useState<boolean>(false)
    const [failedSubmit, setFailedSubmit] = useState<boolean>(false)
    const [contactForm, setContactForm] = useState<{name?: string; email?: string; comments?: string}>({})
    const [errorName, setErrorName] = useState<{name?: string}>({})
    const [errorEmail, setErrorEmail] = useState<{email?: string}>({})
    const [errorComments, setErrorComments] = useState<{comments?: string}>({})
    const [submitMessage, setSubmitMessage] = useState<string>('')
    // Debugging:
    // const { products, fourProducts, eighthProducts, nineProducts } = useProductContext()

    // ------------------------------------------------------------------------------
    // HANDLE CHANGE:
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setContactForm({ ...contactForm, [id]: value })
    }

    // ------------------------------------------------------------------------------
    // VALIDATE ON SUBMIT:
    const validateSubmit = async () => {
        console.log("---CLICK---")

        let nameOK = validateName()
        let emailOK = validateEmail()
        let commentsOK = validateComments()
        let allOK = false

        console.log("nameOK: " + nameOK + " emailOK: " + emailOK + " commentsOK: " + commentsOK);

        if (nameOK === true && emailOK === true && commentsOK === true)
            allOK = true
        else
            allOK = false

        console.log("allOK: " + allOK)

        if (allOK === true) {
            let json = JSON.stringify(contactForm)

            setContactForm({ name: '', email: '', comments: '' })
            setErrorName({name: ''})
            setErrorEmail({email: ''})
            setErrorComments({comments: ''})
            setSubmitMessage('')

            let result = await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json,)
            console.log("await result: " + result);

            if (await result) {
                setCanSubmit(true)
                setFailedSubmit(false)
            } else {
                setCanSubmit(false)
                setFailedSubmit(true)
            }
            console.log("validateSubmit: true")
        } else {
            setSubmitMessage('Please fill in the required information!')
            console.log("validateSubmit: false")
            return false
        }
    }

    // ------------------------------------------------------------------------------
    // HANDLE SUBMIT:
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await validateSubmit()
        
        // Debugging: 
        // console.log( products );
        // console.log( fourProducts );
        // console.log( eighthProducts );
        // console.log( nineProducts );
    }

    // ------------------------------------------------------------------------------
    // VALIDATE NAME:
    const validateName = () => {
        let error = {
            name: ""
        }
        
        const regex_name = /^[a-zA-Z\u0080-\uFFFF]*$/;

        if (!contactForm.name)
            error.name = "You must enter a name"
        else if (!regex_name.test(contactForm.name))
            error.name = "Your name can only contain letters"
        else if (contactForm.name.length < 2)
            error.name = "Your name must contain at least two letters"

        setErrorName(error)

        return error.name === "" ? true : false;
    }

    // ------------------------------------------------------------------------------
    // VALIDATE EMAIL:
    const validateEmail = () => {
        let error = {
            email: ""
        }

        const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!contactForm.email)
            error.email = "You must enter an email"
        else if (!regex_email.test(contactForm.email))
            error.email = "You must enter a valid email"

        setErrorEmail(error)

        return error.email === "" ? true : false;
    }

    // ------------------------------------------------------------------------------
    // VALIDATE COMMENTS:
    const validateComments = () => {
        let error = {
            comments: ""
        }

        if (!contactForm.comments)
            error.comments = "You must enter a comment"
        else if (contactForm.comments.length < 5)
            error.comments = "Your comment must be longer than 5 characters"

        setErrorComments(error)

        return error.comments === "" ? true : false;
    }

    // ------------------------------------------------------------------------------


  return (
    <section className="contact-form">
        <div className="container">
            {
                canSubmit ? 
                (   
                    <> 
                        <div className='success-holder'>
                            <div><img src="https://img.freepik.com/free-vector/powerful-concept-illustration_114360-1212.jpg?w=826&t=st=1666815867~exp=1666816467~hmac=d05f01168c248329458f706ee0c5e1011c72af10847ec4bc34e7f5ecd98576e9"/></div>
                            <div className='alert alert-success mt-3' role="alert">
                                <h1 className='alert pb-0 pt-0'>Thank you!</h1>
                                <p className='alert pb-0 mb-0 pt-1'>Your comment has been successfully sent!</p>
                            </div>
                        </div>    
                    </>
                )
                :
                (                        
                    <>
                        {
                            failedSubmit ? (
                                <div className='alert alert-danger text-center' role="alert">
                                    <h1 className='alert pb-0 pt-0'>Something went wrong!</h1>
                                    <p className='alert pb-0 mb-0 pt-1'>We couldn't send your comment right now.</p>
                                </div>
                            ) : (<></>)
                        }
                        <h1>Come in Contact with Us</h1>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="top-form">
                                <div className="input-holder">
                                    <label htmlFor="name" id="name-label" className="d-none">Name</label>
                                    <input type="text" id="name" placeholder="Your Name" value={contactForm.name} onChange={handleChange} onKeyUp={validateName} className={`${(errorName.name) ? "error-input" : ""}`} required />
                                    <div id="name-error" className="error-text">{errorName.name}</div>
                                </div>
                                <div className="input-holder">
                                    <label htmlFor="email" id="email-label" className="d-none">Email</label>
                                    <input type="email" id="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} onKeyUp={validateEmail} className={`${(errorEmail.email) ? "error-input" : ""}`} required />
                                    <div id="email-error" className="error-text">{errorEmail.email}</div>
                                </div>
                            </div>
                            <div className="bottom-form btn-no-corners">
                                <div className="textarea-holder">
                                    <label htmlFor="comments" id="Comments-label" className="d-none">Comment</label>
                                    <textarea id="comments" placeholder="Comment" value={contactForm.comments} onChange={handleChange} onKeyUp={validateComments} className={`${(errorComments.comments) ? "error-input" : ""}`} required></textarea>
                                    <div id="comments-error" className="error-text">{errorComments.comments}</div>
                                </div>
                                <button className="btn-bg-theme" type="submit">Post Comment</button>
                                <div id="submit-message">{submitMessage}</div>
                            </div>
                        </form>
                    </>
                )
            }
        </div>
    </section>
  )
}

export default ContactForm