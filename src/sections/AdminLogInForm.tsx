import React from 'react'

const AdminLogInForm: React.FC = () => {

    const handleLogIn = async (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
        e.preventDefault()

        const user = {
            email: (e.target[0] as HTMLInputElement).value,
            password: (e.target[1] as HTMLInputElement).value
        }

        console.log(JSON.stringify(user));

        const result = await fetch('http://localhost:5000/api/authentication/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = await result.json()
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken)
    }


  return (
    <section className='admin-log-in'>
        <div className='container'>
            <form onSubmit={handleLogIn} noValidate>
                <label className='mt-5 mb-1'>User email:</label>
                <input type='text' className='form-control mb-3' placeholder='User Email'/>
                <label className='mb-1'>User password:</label>
                <input type='password' className='form-control mb-3' placeholder='User Password'/>
                <div className='btn-no-corners d-flex justify-content-center'>
                    <button type='submit' className='btn-bg-theme-dark my-3'>LOGIN</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default AdminLogInForm