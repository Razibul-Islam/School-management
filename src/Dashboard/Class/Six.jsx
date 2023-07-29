import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import { useReactToPrint } from 'react-to-print';

const Six = () => {


    const [modal, setModal] = useState('hidden');
    const [modalTwo, setModalTwo] = useState('hidden');
    const [student, setStudent] = useState([]);
    const [modified, setModified] = useState([]);

    const editIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>



    const handleAddStudent = (e) => {
        e.preventDefault();
        const data = e.target;
        const name = data.name.value;
        const role = data.role.value;
        const yourClass = data.class.value;
        const father_name = data.father_name.value;
        const mother_name = data.mother_name.value;
        const date_of_birth = data.date_of_birth.value;
        const dipperment = data.dipperment.value;
        const phone = data.phone.value;
        const address = data.address.value;
        const img = data.img.files[0];
        const class_id = '6';

        var formData = new FormData();
        formData.append("file", img);

        fetch("https://upload.rainbosoft.com/", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                const photo = data.url;
                const info = { name, role, yourClass, father_name, mother_name, date_of_birth, class_id, dipperment, phone, address, photo };
                console.log(info);
                if (photo) {
                    const url = `https://school-server-razibul-islam.vercel.app/add-student`;
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
                }
            })
    };


    const handleDeleteStudent = (_id) => {
        const url = `https://school-server-razibul-islam.vercel.app/delete-student?_id=${_id}`;
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

    const handleEdit = (student) => {
        console.log(student);
        setModified(student)
        setModalTwo('');
    }

    const handleSubmitEdit = (e) => {
        e.preventDefault();
        const data = e.target;
        const name = data.name.value;
        const role = data.role.value;
        const yourClass = data.class.value;
        const father_name = data.father_name.value;
        const mother_name = data.mother_name.value;
        const date_of_birth = data.date_of_birth.value;
        const dipperment = data.dipperment.value;
        const phone = data.phone.value;
        const address = data.address.value;
        const id = data.id.value;
        const class_id = '6';

        const info = { name, role, yourClass, father_name, mother_name, date_of_birth, class_id, dipperment, phone, address, id };



        const url = `https://school-server-razibul-islam.vercel.app/update-student`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('সম্পূর্ণ হয়েছে');
                    setModalTwo('hidden');
                    e.target.reset();
                }
            })
    }


    useEffect(() => {
        const url = 'https://school-server-razibul-islam.vercel.app/get-student?class_id=6';
        fetch(url)
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [handleDeleteStudent, handleAddStudent, handleSubmitEdit])

    // handleDeleteStudent, handleAddStudent




    return (
        <div className='p-5'>
            <h1 className='text-center text-xl my-5'>ষষ্ঠ শ্রেণির ছাত্র-ছাত্রীদের তালিকা</h1>
            <button onClick={() => setModal('')} className='px-5 py-2 bg-teal-500 text-white rounded-3xl'>নতুন ছাত্র-ছাত্রী যোগ করুণ</button>
            <hr className='my-5' />
            <div>
                <table id='table'>
                    <tr>
                        <th>রোল</th>
                        <th>ছবি</th>
                        <th>নাম</th>
                        <th>শ্রেণী</th>
                        <th>শাখা</th>
                        <th>ফোন</th>
                        <th>পিতার নাম</th>
                        <th>মাতার নাম</th>
                        <th>ঠিকানা</th>
                        <th>জন্ম তারিখ</th>
                        <th></th>
                    </tr>
                    {
                        student.map(students => {
                            return (
                                <tr>
                                    <td>{students.role}</td>
                                    <td><img className='h-10 w-10 rounded-full' src={students.photo ? 'https://' + students.photo : 'https://t4.ftcdn.net/jpg/02/17/34/67/360_F_217346796_TSg5VcYjsFxZtIDK6Qdctg3yqAapG7Xa.jpg'} alt="" /></td>
                                    <td>{students.name}</td>
                                    <td>{students.yourClass}</td>
                                    <td>{students.dipperment}</td>
                                    <td>{students.phone}</td>
                                    <td>{students.father_name}</td>
                                    <td>{students.mother_name}</td>
                                    <td>{students.address}</td>
                                    <td>{students.date_of_birth}</td>
                                    <td className='flex items-center gap-3'>
                                        <button onClick={() => handleDeleteStudent(students._id)} className='text-red-500'><DeleteIcon></DeleteIcon></button>
                                        <button onClick={() => handleEdit(students)} className='text-green-500'>{editIcon}</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </table>

            </div>


            {/* modal  */}
            <div class={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <form onSubmit={handleAddStudent} class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 grid grid-cols-2 gap-3">
                                <input name='name' className='block my-3 focus:outline-none border w-full p-2' type="text" placeholder='নাম প্রবেশ করান' />
                                <input name='role' className='block my-3 focus:outline-none border w-full p-2' type="text" placeholder='রোল নাম্বার প্রবেশ করান' />
                                <select name='class' className='block my-3 focus:outline-none border w-full p-2'>
                                    <option value="null">--শ্রেণি নির্বাচন করুন--</option>
                                    <option value="ষষ্ঠ">ষষ্ঠ</option>
                                </select>
                                <input name='dipperment' className='block my-3 focus:outline-none border w-full p-2' type="text" placeholder='শাখা' />
                                <input name='father_name' className='block my-3 focus:outline-none border w-full p-2' type="text" placeholder='পিতার নাম' />
                                <input name='mother_name' className='block my-3 focus:outline-none border w-full p-2' type="text" placeholder='মাতার নাম' />
                                <input name='phone' className='block my-3 focus:outline-none border w-full p-2' type="text" placeholder='অভিবাবক এর মোবাইল নাম্বার' />
                                <input name='date_of_birth' className='block my-3 focus:outline-none border w-full p-2' type="date" placeholder='জন্ম তারিখ প্রবেশ করান' />
                                <input name='address' className='block my-3 focus:outline-none border w-full p-2' type="text" placeholder='ঠিকানা' />
                                <input name='img' type="file" className='block my-3 focus:outline-none border w-full p-2' />
                            </div>
                            <div className='flex justify-end gap-5 p-5'>
                                <label onClick={() => setModal('hidden')} className='px-5 bg-red-500 rounded-sm py-1 text-white'>বাতিল করুন</label>
                                <button className='px-5 bg-teal-500 rounded-sm py-1 text-white'>সাবমিট</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>





            {/* modal 2*/}
            <div class={`relative z-10 ${modalTwo}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <form onSubmit={handleSubmitEdit} class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 grid grid-cols-2 gap-3">
                                <input name='name' className='block my-3 focus:outline-none border w-full p-2' type="text" defaultValue={modified.name} placeholder='নাম প্রবেশ করান' />
                                <input name='role' className='block my-3 focus:outline-none border w-full p-2' type="text" defaultValue={modified.role} placeholder='রোল নাম্বার প্রবেশ করান' />
                                <select name='class' className='block my-3 focus:outline-none border w-full p-2'>
                                    <option disabled value="null">--শ্রেণি নির্বাচন করুন--</option>
                                    <option selected value="ষষ্ঠ">ষষ্ঠ</option>
                                </select>
                                <input name='dipperment' className='block my-3 focus:outline-none border w-full p-2' type="text" defaultValue={modified.dipperment} placeholder='শাখা' />
                                <input name='father_name' className='block my-3 focus:outline-none border w-full p-2' type="text" defaultValue={modified.father_name} placeholder='পিতার নাম' />
                                <input name='mother_name' className='block my-3 focus:outline-none border w-full p-2' type="text" defaultValue={modified.mother_name} placeholder='মাতার নাম' />
                                <input name='phone' className='block my-3 focus:outline-none border w-full p-2' type="text" defaultValue={modified.phone} placeholder='অভিবাবক এর মোবাইল নাম্বার' />
                                <input name='date_of_birth' className='block my-3 focus:outline-none border w-full p-2' defaultValue={modified.date_of_birth} type="date" placeholder='জন্ম তারিখ প্রবেশ করান' />
                                <input name='address' className='block my-3 focus:outline-none border w-full p-2' type="text" defaultValue={modified.address} placeholder='ঠিকানা' />
                                {/* <input name='img' type="file" className='block my-3 focus:outline-none border w-full p-2' /> */}
                                <input type="hidden" name='id' value={modified._id} />
                            </div>
                            <div className='flex justify-end gap-5 p-5'>
                                <label onClick={() => setModalTwo('hidden')} className='px-5 bg-red-500 rounded-sm py-1 text-white'>বাতিল করুন</label>
                                <button className='px-5 bg-teal-500 rounded-sm py-1 text-white'>সাবমিট</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Six;