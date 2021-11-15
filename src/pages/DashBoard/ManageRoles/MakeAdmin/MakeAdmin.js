import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault()
        console.log('making admin', email)
        const user = { email };
        fetch('https://stark-bayou-55220.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log('fetch admin', data);
                    setSuccess(true);
                    alert('Adnin made succeessfully')
                }else{
                    toast.error(data.staus)
                }
            })
    }
    return (
        <div>
            <h2 className="mb-5">Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                className="rounded-l-full px-2 h-8"
                    type="email"
                    name="email"
                    placeholder="email"
                    onBlur={handleOnBlur}
                   />
                <input className="hover:ring-4 ring-clr-secondary ring-opacity-40 px-3 h-8 rounded-r-full bg-clr-secondary text-white" type="submit"/>
            </form>
            <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={5000} />
        </div>
    );
};

export default MakeAdmin;