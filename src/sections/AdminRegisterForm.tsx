import React, { useState } from 'react'

const AdminRegisterForm: React.FC = () => {
    const [errorSubmit, setErrorSubmit] = useState<string>('')
    const [errorDB, setErrorDB] = useState<string>('')
    const [errorFirstName, setErrorFirstName] = useState<string>('')
    const [errorLastName, setErrorLastName] = useState<string>('')
    const [errorEmail, setErrorEmail] = useState<string>('')
    const [errorPassword, setErrorPassword] = useState<string>('')

    // ------------------------------------------------------------------------------
    // VALIDATE FIRST NAME
    const validateFirstName = ( e: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement } ) => {
        const { target } = e
        let error = ''
        const regex_name = /^[a-zA-Z\u0080-\uFFFF]*$/;
        
        if (!target.value)
            error = "You must enter a first name"
        else if (!regex_name.test(target.value))
            error = "Your first name can only contain letters"     
        else if (target.value.length < 2)
            error = "Your first name must contain at least two letters"
        
        setErrorFirstName(error)
        
        return error === "" ? true : false;
    }

    // ------------------------------------------------------------------------------
    // VALIDATE LAST NAME
    const validateLastName = ( e: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement } ) => {
        const { target } = e
        let error = ''
        const regex_name = /^[a-zA-Z\u0080-\uFFFF]*$/;
        
        if (!target.value)
            error = "You must enter a last name"
        else if (!regex_name.test(target.value))
            error = "Your last name can only contain letters"     
        else if (target.value.length < 2)
            error = "Your last name must contain at least two letters"
        
        setErrorLastName(error)
        
        return error === "" ? true : false;
    }

    // ------------------------------------------------------------------------------
    // VALIDATE EMAIL
    const validateEmail = ( e: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement } ) => {
        const { target } = e        
        let error = ''
        const regex_email = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!target.value)
            error = "You must enter an email"
        else if (!regex_email.test(target.value))
            error = "You must enter a valid email"

        setErrorEmail(error)

        return error === "" ? true : false;
    }

    // ------------------------------------------------------------------------------
    // VALIDATE PASSWORD
    const validatePassword = ( e: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement } ) => {
        const { target } = e
        let error = ''
        
        if (!target.value)
            error = "You must enter a password"
        else if (target.value.length < 6)
            error = "Your password must contain at least 6 characters"
        
        setErrorPassword(error)
        
        return error === "" ? true : false;
    }

    // ------------------------------------------------------------------------------
    // HANDLE REGISTRATION AND VALIDATION
    const handleRegistration = async ( e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement } ) => {
        e.preventDefault()

        let firstNameOK = errorFirstName
        let lastNameOK = errorLastName
        let emailOK = errorEmail
        let passwordOK = errorPassword
    
        let allOK = false
    
        if (firstNameOK === "" && lastNameOK === "" && emailOK === "" && passwordOK === "" )
            allOK = true
        else
            allOK = false
    

        if (allOK === true) {
            setErrorFirstName('')
            setErrorLastName('')
            setErrorEmail('')
            setErrorPassword('')
            setErrorSubmit('')
        
        const user = {
            firstName: (e.target[0] as HTMLInputElement).value,
            lastName: (e.target[1] as HTMLInputElement).value,
            email: (e.target[2] as HTMLInputElement).value,
            password: (e.target[3] as HTMLInputElement).value
        }

        const result = await fetch('http://localhost:5000/api/authentication/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = await result.json()

        setErrorDB(data.text.charAt(0).toUpperCase() + data.text.slice(1))
        } else {
            setErrorDB('')
            setErrorSubmit('Please fill in the required information!')
        }
    }

    // ------------------------------------------------------------------------------

    return (
        <section className='admin-register'>
            <div className='form-holder'>
                <form onSubmit={handleRegistration} className='grey-focus' noValidate>
                    <h3 className='mt-5 mb-3 small-h3'>Register a User - admin</h3>
                    <label className='mb-1'>First name:</label>
                    <input type='text' className='form-control mb-3' placeholder='Your first name...' onChange={validateFirstName} />
                    <div className="error-text">{errorFirstName}</div>
                    <label className='mb-1'>Last name:</label>
                    <input type='text' className='form-control mb-3' placeholder='Your last name...' onChange={validateLastName} />
                    <div className="error-text">{errorLastName}</div>
                    <label className='mb-1'>Your email:</label>
                    <input type='text' className='form-control mb-3' placeholder='Your email...' onChange={validateEmail} />
                    <div className="error-text">{errorEmail}</div>
                    <label className='mb-1'>Password:</label>
                    <input type='password' className='form-control mb-3' placeholder='Password...' onChange={validatePassword}/>
                    <div className="error-text">{errorPassword}</div>
                    <div className='btn-no-corners d-flex justify-content-center'>
                        <button type='submit' className='btn-bg-theme-dark my-3'>REGISTER</button>
                    </div>
                    <div className='error-text text-center'>{errorSubmit}</div>
                    <div className='error-text-db text-center mt-0'>{errorDB}</div>
                </form>
            </div>
        </section>
    )
}

export default AdminRegisterForm