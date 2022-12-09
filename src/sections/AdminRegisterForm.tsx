import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const AdminRegisterForm: React.FC = () => {
    const [errorSubmit, setErrorSubmit] = useState<string>('')

    const handleRegistration = async (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
        e.preventDefault()

        const user = {
            firstName: (e.target[0] as HTMLInputElement).value,
            lastName: (e.target[1] as HTMLInputElement).value,
            email: (e.target[2] as HTMLInputElement).value,
            password: (e.target[3] as HTMLInputElement).value
        }

        console.log(JSON.stringify(user));

        const result = await fetch('http://localhost:5000/api/authentication/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = await result.json()
        console.log('data: ', await data);

        setErrorSubmit(data.text.charAt(0).toUpperCase() + data.text.slice(1))
    }

  return (
    <section className='admin-register'>
        <div className='container'>
            <div className='form-holder'>
                <form onSubmit={handleRegistration} className='pink-focus' noValidate>
                    <h3 className='mt-5 mb-3 small-h3'>Register a User - admin</h3>
                    <label className='mb-1'>First name:</label>
                    <input type='text' className='form-control mb-3' placeholder='Your first name...'/>
                    <label className='mb-1'>Last name:</label>
                    <input type='text' className='form-control mb-3' placeholder='Your last name...'/>
                    <label className='mb-1'>Your email:</label>
                    <input type='text' className='form-control mb-3' placeholder='Your email...'/>
                    <label className='mb-1'>Password:</label>
                    <input type='password' className='form-control mb-3' placeholder='Password...'/>
                    <div className='btn-no-corners d-flex justify-content-center'>
                        <button type='submit' className='btn-bg-theme-dark my-3'>REGISTER</button>
                    </div>
                    <div className='error-text text-center'>{errorSubmit}</div>
                </form>
            </div>
            <NavLink to="/manage_products" style={{ color : "white" }} end>Manage Products</NavLink>
        </div>
    </section>
  )
}

export default AdminRegisterForm