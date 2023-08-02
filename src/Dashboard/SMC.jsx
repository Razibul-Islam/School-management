import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AddIcon from '@mui/icons-material/Add';


const SMC = () => {
    const [modalTwo, setModalTwo] = useState('hidden');
    const [modal, setModal] = useState('hidden');
    const [council, setCouncil] = useState([]);
    const [counsil_id, setCounsil_id] = useState('');



    // const handleSMC = (e) => {
    //     e.preventDefault();

    //     const name = e.target.name.value;
    //     const phone = e.target.phone.value;
    //     const post = e.target.post.value;
    //     const img = e.target.img.files[0];
    //     const address = e.target.address.value;
    //     const email = e.target.email.value;
    //     var formData = new FormData();
    //     formData.append("file", img);

    //     fetch("https://upload.rainbosoft.com/", {
    //         method: "POST",
    //         body: formData
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             const memberImg = data.url;
    //             if (data) {
    //                 const data = { name, post, phone, memberImg, address, email };
    //                 const url = `http://localhost:5000/add-smc`;
    //                 fetch(url, {
    //                     method: "POST",
    //                     headers: {
    //                         'content-type': 'application/json'
    //                     },
    //                     body: JSON.stringify(data)
    //                 })
    //                     .then(res => res.json())
    //                     .then(data => {
    //                         if (data.acknowledged) {
    //                             toast.success('যোগ সম্পূর্ণ হয়েছে');
    //                             setModal('hidden');
    //                             e.target.reset();
    //                         }
    //                     })

    //             }
    //         })
    // }

    // const handledeleteSMC = (_id) => {
    //     const url = `hhttp://localhost:5000/delete-smc?_id=${_id}`;
    //     fetch(url, {
    //         method: "DELETE"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data) {
    //                 toast.success('মুছে ফেলা হয়েছে')
    //             }
    //         })
    // }

    // useEffect(() => {
    //     fetch('http://localhost:5000/get-smc')
    //         .then(res => res.json())
    //         .then(data => setTeacher(data))
    // }, [])

    // handleSMC, handledeleteSMC


    const handleAddCommetee = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const EIIN = e.target.EIIN.value;
        const year = e.target.year.value;
        const startYear = e.target.startYear.value;
        const endYear = e.target.endYear.value;
        const councilDate = e.target.councilDate.value;
        const type = e.target.type.value;
        const data = { name, EIIN, year, startYear, endYear, councilDate, type };

        fetch('http://localhost:5000/add-smc-counsil', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('সম্পূর্ণ হয়েছে')
                }
            })
    };



    const handleAddMember = (_id) => {
        console.log(_id);
    }

    console.log(counsil_id);



    useEffect(() => {
        const url = `http://localhost:5000/get-smc-counsil`
        fetch(url)
            .then(res => res.json())
            .then(data => setCouncil(data))
    }, [])


    return (
        <div className='p-5 w-full relative'>
            <h2 className='text-xl text-center my-5'>শিক্ষক তালিকা</h2>
            <button onClick={() => setModal('')} className='px-5 py-2 bg-teal-500 text-white rounded-3xl mb-5'>এসএমসি তথ্য যোগ করুন</button>
            {/* <div className='my-5 grid grid-cols-4 gap-10'>
                {
                    teacher.map(teachers => {
                        return (
                            <div className='bg-slate-100 rounded-sm overflow-hidden relative '>
                                <img className='h-40' src={'https://' + teachers.memberImg} alt="" />
                                <div className='text-center my-4'>
                                    <h4>{teachers.post}</h4>
                                    <h4>{teachers.name}</h4>
                                    <h4 className='my-2'><LocalPhoneIcon className='text-teal-500 p-1' /> {teachers.phone}</h4>
                                </div>
                                <button onClick={() => handledeleteSMC(teachers._id)} className='bg-white  rounded-3xl absolute top-2 right-2 text-red-500'><DeleteIcon className='p-1' /></button>
                            </div>
                        )
                    })
                }
            </div> */}

            {/*       */}
            <div>
                <table>
                    <tr>
                        <th>প্রতিষ্ঠান</th>
                        <th>ইআইআইএন</th>
                        <th>বছর</th>
                        <th>অনুমোদন তারিখ</th>
                        <th>মেয়াদ শেষের তারিখ</th>
                        <th>নির্বাচনের তারিখ</th>
                        <th>কমিটির প্রকার</th>
                        <th>Action</th>
                        <th>সদস্য</th>
                    </tr>
                    {
                        council.map(data => {
                            return (
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.EIIN}</td>
                                    <td>{data.year}</td>
                                    <td>{data.startYear}</td>
                                    <td>{data.endYear}</td>
                                    <td>{data.councilDate}</td>
                                    <td>{data.type}</td>
                                    <td className='flex gap-4 items-center'>
                                        <button className='text-red-600'><DeleteIcon></DeleteIcon></button>
                                        <button className='text-yellow-600'><RemoveRedEyeIcon></RemoveRedEyeIcon></button>
                                        <button className='text-green-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                        </button>
                                    </td>
                                    <td onClick={()=>setCounsil_id(data._id)}>
                                        <button onClick={()=> setModalTwo('')} className='bg-teal-500 text-white h-full w-full rounded-sm'> <AddIcon/></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>

            <div className={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <form onSubmit={handleAddCommetee} className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className='grid grid-cols-2 gap-2'>
                                    <select className='block my-3 focus:outline-none border w-full p-2' name="name">
                                        <option value="null">--প্রতিষ্ঠান নির্বাচন করুন--</option>
                                        <option value="কে এইচ স্কুল ও কলেজ">কে এইচ স্কুল ও কলেজ</option>
                                    </select>
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" required name='EIIN' placeholder='ইআইআইএন' />
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" required name='year' placeholder='বছর' />
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" required name='startYear' placeholder='অনুমদনের তারিখ' />
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" required name='endYear' placeholder='মেয়াদের শেষ তারিখ' />
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" required name='councilDate' placeholder='নির্বাচন এর তারিখ' />
                                    <select className='block my-3 focus:outline-none border w-full p-2' required name="type">
                                        <option value="null">--ধরন নির্বাচন করুন--</option>
                                        <option value="গভর্নিং বডি">গভর্নিং বডি</option>
                                        <option value="এডহক">এডহক</option>
                                        <option value="ম্যানেজিং">ম্যানেজিং</option>
                                        <option value="বর্তমানে নেই">বর্তমানে নেই</option>
                                        <option value="বিশেষ">বিশেষ</option>
                                    </select>
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



            {/* modal 2  */}
            <div className={`relative z-10 ${modalTwo}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <form onSubmit={handleAddCommetee} className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className='grid grid-cols-2 gap-2'>
                                    <select className='block my-3 focus:outline-none border w-full p-2' name="name">
                                        <option value="null">--প্রতিষ্ঠান নির্বাচন করুন--</option>
                                        <option value="কে এইচ স্কুল ও কলেজ">কে এইচ স্কুল ও কলেজ</option>
                                    </select>
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" required name='EIIN' placeholder='ইআইআইএন' />
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" required name='year' placeholder='বছর' />
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" required name='startYear' placeholder='অনুমদনের তারিখ' />
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" required name='endYear' placeholder='মেয়াদের শেষ তারিখ' />
                                    <input className='block my-3 focus:outline-none border w-full p-2' type="text" required name='councilDate' placeholder='নির্বাচন এর তারিখ' />
                                    <select className='block my-3 focus:outline-none border w-full p-2' required name="type">
                                        <option value="null">--ধরন নির্বাচন করুন--</option>
                                        <option value="গভর্নিং বডি">গভর্নিং বডি</option>
                                        <option value="এডহক">এডহক</option>
                                        <option value="ম্যানেজিং">ম্যানেজিং</option>
                                        <option value="বর্তমানে নেই">বর্তমানে নেই</option>
                                        <option value="বিশেষ">বিশেষ</option>
                                    </select>
                                </div>


                            </div>
                            <div className='flex justify-end gap-5 p-5'>
                                <label onClick={() => setModalTwo('hidden')} className='px-5 cursor-pointer bg-red-500 rounded-sm py-1 text-white'>বাতিল করুন</label>
                                <button className='px-5 bg-teal-500 rounded-sm py-1 text-white'>সাবমিট</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SMC;