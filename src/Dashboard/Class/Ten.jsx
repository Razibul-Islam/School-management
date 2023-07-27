import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';

const Ten = () => {


    const [modal, setModal] = useState('hidden');
    const [student, setStudent] = useState([]);


    const handleAddStudent = (e) => {
        e.preventDefault();
        const data = e.target;
        const name = data.name.value;
        const role = data.role.value;
        const yourClass = data.class.value;
        const dipperment = data.dipperment.value;
        const father_name = data.father_name.value;
        const mother_name = data.mother_name.value;
        const date_of_birth = data.date_of_birth.value;
        const class_id = '10';

        const info = { name, role, yourClass, father_name, mother_name, date_of_birth, class_id , dipperment};
        console.log(info);


        const url = `http://localhost:5000/add-student`;

        fetch(url, {
            method: "Post",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('সম্পূর্ণ হয়েছে');
                    setModal('hidden');
                    e.target.reset();
                }
            })
    };


    const handleDeleteStudent = (_id) => {
        const url = `http://localhost:5000/delete-student?_id=${_id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('মুছে ফেলা হয়েছে')
                }
            })
    }



    useEffect(() => {
        const url = 'http://localhost:5000/get-student?class_id=10';
        fetch(url)
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [handleDeleteStudent, handleAddStudent])




    return (
        <div className='p-5'>
            <h1 className='text-center text-xl my-5'>দশম শ্রেণির ছাত্র-ছাত্রীদের তালিকা</h1>

            <button onClick={() => setModal('')} className='px-5 py-2 bg-teal-500 text-white rounded-3xl'>নতুন ছাত্র-ছাত্রী যোগ করুণ</button>


            <hr className='my-5' />


            <div>
                <table>
                    <tr>
                        <th>রোল</th>
                        <th>নাম</th>
                        <th>শ্রেণী</th> 
                        <th>শাখা</th> 
                        <th>পিতার নাম</th>
                        <th>মাতার নাম</th>
                        <th>জন্ম তারিখ</th>
                        <th></th>
                    </tr>
                    {
                        student.map(students => {
                            return (
                                <tr>
                                    <td>{students.role}</td>
                                    <td>{students.name}</td>
                                    <td>{students.yourClass}</td>
                                    <td>{students.dipperment}</td>
                                    <td>{students.father_name}</td>
                                    <td>{students.mother_name}</td>
                                    <td>{students.date_of_birth}</td>
                                    <td><button onClick={() => handleDeleteStudent(students._id)} className='text-red-500'><DeleteIcon></DeleteIcon></button></td>
                                </tr>
                            )
                        })
                    }

                </table>

            </div>


            {/* modal */}
            <div class={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <form onSubmit={handleAddStudent} class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <input name='name' className='block my-3 focus:outline-none border w-full p-2' type="text" placeholder='নাম প্রবেশ করান' />
                                <input name='role' className='block my-3 focus:outline-none border w-full p-2' type="text" placeholder='রোল নাম্বার প্রবেশ করান' />
                                <select name='class' className='block my-3 focus:outline-none border w-full p-2'>
                                    <option value="null">--শ্রেণি নির্বাচন করুন--</option>
                                    <option value="দশম">দশম</option>
                                </select>
                                <select name='dipperment' className='block my-3 focus:outline-none border w-full p-2'>
                                    <option value="null">--শাখা নির্বাচন করুন--</option>
                                    <option value="বিজ্ঞান">বিজ্ঞান</option>
                                    <option value="মানবিক">মানবিক</option>
                                </select>
                                <input name='father_name' className='block my-3 focus:outline-none border w-full p-2' type="text" placeholder='পিতার নাম প্রবেশ করান' />
                                <input name='mother_name' className='block my-3 focus:outline-none border w-full p-2' type="text" placeholder='মাতার নাম প্রবেশ করান' />
                                <input name='date_of_birth' className='block my-3 focus:outline-none border w-full p-2' type="date" placeholder='জন্ম তারিখ প্রবেশ করান' />
                            </div>
                            <div className='flex justify-end gap-5 p-5'>
                                <label onClick={() => setModal('hidden')} className='px-5 bg-red-500 rounded-sm py-1 text-white'>বাতিল করুন</label>
                                <button className='px-5 bg-teal-500 rounded-sm py-1 text-white'>সাবমিট</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};


 
export default Ten;