import React, { useEffect, useState } from 'react';

const AddInformation = () => {


    const [modal, setModal] = useState('hidden');
    const [info, setInfo] = useState({});



    const handleAddInfo = (e) => {
        e.preventDefault();
        const founded = e.target.founded.value;
        const regularStudent = e.target.regularStudent.value;
        const teacher = e.target.teacher.value;
        const totat_gpa_five = e.target.totat_gpa_five.value;


        const data = { founded, regularStudent, teacher, totat_gpa_five };
        const url = `https://school-server-razibul-islam.vercel.app/school-information`;

        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    useEffect(() => {
        fetch('https://school-server-razibul-islam.vercel.app/information')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])



    return (
        <div className='p-5 w-full relative'>
            <h2 className='text-xl text-center my-5'>স্কুল এর তথ্য</h2>
            <button onClick={() => setModal('')} className='px-5 py-2 bg-teal-500 text-white rounded-3xl'>স্কুল এর তথ্য যোগ করুন</button>


            {
                <div className='my-5 grid grid-cols-4 gap-5'>
                    <div className='bg-gradient-to-tr bg-teal-500 to-green-300 p-5 text-white text-center rounded shadow'>
                        <h5>প্রতিষ্ঠিত</h5>
                        <h5 className='text-2xl'>{info.founded}</h5>
                    </div>
                    <div className='bg-gradient-to-tr bg-teal-500 to-green-300 p-5 text-white text-center rounded shadow'>
                        <h5>নিয়িমিত ছাত্র</h5>
                        <h5 className='text-2xl'>{info.regularStudent}</h5>
                    </div>
                    <div className='bg-gradient-to-tr bg-teal-500 to-green-300 p-5 text-white text-center rounded shadow'>
                        <h5>শিক্ষক</h5>
                        <h5 className='text-2xl'>{info.teacher}</h5>
                    </div>
                    <div className='bg-gradient-to-tr bg-teal-500 to-green-300 p-5 text-white text-center rounded shadow'>
                        <h5>টোটাল জিপিএ ৫ </h5>
                        <h5 className='text-2xl'>{info.totat_gpa_five}</h5>
                    </div>
                </div>
            }


            <div class={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <form onSubmit={handleAddInfo} class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <input className='block my-3 focus:outline-none border w-full p-2' type="text" name='founded' placeholder='প্রতিষ্ঠান কাল' />
                                <input className='block my-3 focus:outline-none border w-full p-2' type="text" name='regularStudent' placeholder='নিয়মিত ছাত্রছাত্রী সংখ্যা' />
                                <input className='block my-3 focus:outline-none border w-full p-2' type="text" name='teacher' placeholder='শিক্ষকগনের সংখ্যা' />
                                <input className='block my-3 focus:outline-none border w-full p-2' type="text" name='totat_gpa_five' placeholder='টোটাল জিপিএ 5' />
                            </div>
                            <div className='flex justify-end gap-5 p-5'>
                                <label onClick={() => setModal('hidden')} className='px-5 cursor-pointer bg-red-500 rounded-sm py-1 text-white'>বাতিল করুন</label>
                                <button className='px-5 bg-teal-500 rounded-sm py-1 text-white'>সাবমিট</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddInformation;