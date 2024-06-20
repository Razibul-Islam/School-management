import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {


    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const user_id = e.target.userId.value;
        const password = e.target.password.value;

        if (user_id === '123456' && password === 'password') {
            localStorage.setItem('user' , '6fjk36djkt4576fh4rf7tf34h47ft4rtgf643r43r6frfee3dr5def3dre53f36543frr53re623f')
            navigate('/admin')
            window.location.reload();
        }else{
            toast.error('কিছু ভুল হয়েছে')
        }
    }


    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <div className='w-96 p-5 border shadow'>
                <h1 className='text-center text-xl my-5'>কে.এইচ উচ্চ বিদ্যালয় & মহাবিদ্যালয়</h1>
                <form onSubmit={handleLogin} className='mt-5'>
                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" placeholder='ইউজার আইডি প্রবেশ করান' name='userId' />
                    <input className='block my-3 focus:outline-none border w-full p-2' type="password" placeholder='গোপন নাম্বার প্রবেশ করান' name='password' />
                    <button className='bg-gradient-to-t from-teal-500 to-green-600 text-white px-5 py-2'>লগইন করুন</button>
                </form>
            </div>
        </div>
    );
};

export default Login;