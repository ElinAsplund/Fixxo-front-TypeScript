import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogInForm: React.FC = () => {
    const [errorSubmit, setErrorSubmit] = useState<string>('')
    const navigate = useNavigate()

    const handleLogIn = async (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
        e.preventDefault()

        try{
            const user = {
                email: (e.target[0] as HTMLInputElement).value,
                password: (e.target[1] as HTMLInputElement).value
            }
        
            const result = await fetch('http://localhost:5000/api/authentication/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            const data = await result.json()

            if( result.status !== 200 ){
                setErrorSubmit(data.text.charAt(0).toUpperCase() + data.text.slice(1))
                throw new Error(result.statusText)
            }
            
            localStorage.setItem('accessToken', data.accessToken)
            setErrorSubmit('')
            navigate("/manage_products")
        } catch(error) {
            console.log(error);
        }
                
    }


  return (
    <section className='admin-log-in'>
        <div className='container'>
            <div className='form-holder'>
                <form onSubmit={handleLogIn} className='pink-focus' noValidate>
                    <h3 className='mt-5 mb-3 small-h3'>Log In - admin</h3>
                    <label className='mb-1'>User email:</label>
                    <input type='text' className='form-control mb-3' placeholder='User Email'/>
                    <label className='mb-1'>User password:</label>
                    <input type='password' className='form-control mb-3' placeholder='User Password'/>
                    <div className='btn-no-corners d-flex justify-content-center'>
                        <button type='submit' className='btn-bg-theme my-3'>LOGIN</button>
                    </div>
                    <div className='error-text text-center'>{errorSubmit}</div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default AdminLogInForm