import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const AddTeacher = () => {


    const [modal, setModal] = useState('hidden');
    const [teacher, setTeacher] = useState([]);



    const handleAddTeacher = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const post = e.target.post.value;
        const img = e.target.img.files[0];
        const address = e.target.address.value;
        const email = e.target.email.value;
        const mother_name = e.target.mother_name.value;
        const father_name = e.target.father_name.value;

        var formData = new FormData();
        formData.append("file", img);

        fetch("https://upload.rainbosoft.com/", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                const teacherImg = data.url;
                if (data) {
                    const data = { name, post, phone, teacherImg, address , email, mother_name , };
                    const url = `https://school-server-razibul-islam.vercel.app/add-teacher`;
                    fetch(url, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('যোগ সম্পূর্ণ হয়েছে');
                                setModal('hidden');
                                e.target.reset();
                            }
                        })

                }
            })
    }

    const handledeleteTeacher = (_id) => {
        const url = `https://school-server-razibul-islam.vercel.app/delete-teacher?_id=${_id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('মুছে ফেলা হয়েছে')
                }
            })
    }

    useEffect(() => {
        fetch('https://school-server-razibul-islam.vercel.app/get-teacher')
            .then(res => res.json())
            .then(data => setTeacher(data))
    }, [handleAddTeacher, handledeleteTeacher])



    return (
        <div className='p-5 w-full relative'>
            <h2 className='text-xl text-center my-5'>শিক্ষক তালিকা</h2>
            <button onClick={() => setModal('')} className='px-5 py-2 bg-teal-500 text-white rounded-3xl'>নতুন শিক্ষক যোগ করুন</button>
            <div className='my-5 grid grid-cols-4 gap-10'>
                {
                    teacher.map(teachers => {
                        return (
                            <div className='bg-slate-100 rounded-sm overflow-hidden relative '>
                                <img className='h-40' src={'https://' + teachers.teacherImg} alt="" />
                                <div className='text-center my-4'>
                                    <h4>{teachers.post}</h4>
                                    <h4>{teachers.name}</h4>
                                    <h4 className='my-2'><LocalPhoneIcon className='text-teal-500 p-1' /> {teachers.phone}</h4>
                                </div>
                                <button onClick={() => handledeleteTeacher(teachers._id)} className='bg-white  rounded-3xl absolute top-2 right-2 text-red-500'><DeleteIcon className='p-1' /></button>
                            </div>
                        )
                    })
                }
            </div>

            <div class={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <form onSubmit={handleAddTeacher} class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className='grid grid-cols-2 gap-2'>
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" name='name' placeholder='নাম প্রবেশ করান' />
                                    <select className='block my-3 focus:outline-none border w-full p-2' name="post">
                                        <option value="null">--পদবী নির্বাচন করুন--</option>
                                        <option value="প্রধান শিক্ষক">প্রধান শিক্ষক</option>
                                        <option value="সহকারি প্রধান শিক্ষক">সহকারি প্রধান শিক্ষক</option>
                                        <option value="ভারপ্রাপ্ত প্রধান শিক্ষক">ভারপ্রাপ্ত প্রধান শিক্ষক</option>
                                        <option value="সহকারি শিক্ষক">সহকারি শিক্ষক</option>
                                    </select>

                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" name='father_name' placeholder='পিতার নাম' />
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" name='mother_name' placeholder='মাতার নাম' />
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" name='phone' placeholder='ফোন নাম্বার প্রবেশ করান' />
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" name='email' placeholder='ইমেইল আইডি প্রবেশ করান' />
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" name='address' placeholder='ঠিকানা প্রবেশ করান' />
                                    <input name='img' className='block my-3 focus:outline-none border w-full p-2' type="file" />
                                </div>

                                
                            </div>
                            <div className='flex justify-end gap-5 p-5'>
                                <label onClick={() => setModal('hidden')} className='px-5 cursor-pointer bg-red-500 rounded-sm py-1 text-white'>বাতিল করুন</label>
                                <button className='px-5 bg-teal-500 rounded-sm py-1 text-white'>সাবমিট</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTeacher;