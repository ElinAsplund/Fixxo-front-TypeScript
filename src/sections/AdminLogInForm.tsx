import React from 'react'

const AdminLogInForm: React.FC = () => {
  return (
    <section className='admin-log-in'>
        <div className='container'>
            <form noValidate>
                <label className='mt-5 mb-1'>User email:</label>
                <input type='text' className='form-control mb-3' placeholder='User Email'/>
                <label className='mb-1'>User password:</label>
                <input type='password' className='form-control mb-3' placeholder='User Password'/>
                <div className='btn-no-corners d-flex justify-content-center'>
                    <button className='btn-bg-theme-dark my-3'>LOGIN</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default AdminLogInForm