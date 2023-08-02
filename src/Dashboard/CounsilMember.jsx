import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';

const CounsilMember = () => {

    const { counsil_id } = useParams();
    const [members, setMembers] = useState([]);
    const [data, setData] = useState({});
    const [modal, SetModal] = useState('hidden')


    const id = data._id

    const handleDeleteMember = (_id) => {
        const url = `http://localhost:5000/delete-smc-member?_id=${_id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


     const handleEditMember = (e) => {
        e.preventDefault();
        const member_name = e.target.member_name.value;
        const gender = e.target.gender.value;
        const phone = e.target.phone.value;
        const member_post = e.target.member_post.value;
        const education = e.target.education.value;
        const occupation = e.target.occupation.value;

     
        const data = { member_name, gender, phone, member_post, education, counsil_id, occupation}
            fetch(`http://localhost:5000/edit-commete-member?_id=${id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('সম্পূর্ণ হয়েছে');
                    e.target.reset();
                    SetModal('hidden')
                }
            })
        console.log(data._id);
    };





    useEffect(() => {
        const url = `http://localhost:5000/get-smc-member?counsil_id=${counsil_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    return (
        <div className='p-5'>
            <h1 className='text-xl text-center my-5'>কমিটির সদস্য তালিকা</h1>

            <div>
                <table>
                    <tr>
                        <th>ছবি</th>
                        <th>নাম</th>
                        <th>লিঙ্গ</th>
                        <th>ফোন নাম্বার</th>
                        <th>শিক্ষাগত যোগ্যতা</th>
                        <th>কমিটিতে অবস্থান</th>
                        <th>পেশা</th>
                        <th>Action</th>
                    </tr>

                    {
                        members.map(member => {
                            return (
                                <tr>
                                    <td><img className='h-12 w-12 rounded-full' src={'https://' + member.photo} alt="" /></td>
                                    <td>{member.member_name}</td>
                                    <td>{member.gender}</td>
                                    <td>{member.phone}</td>
                                    <td>{member.education}</td>
                                    <td>{member.member_post}</td>
                                    <td>{member.occupation}</td>
                                    <td>
                                        <div className='flex gap-3 items-center'>
                                            <DeleteIcon onClick={() => handleDeleteMember(member._id)} className='text-red-500 cursor-pointer' />
                                            <button onClick={() => SetModal('')}>
                                                <svg onClick={() => setData(member)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-green-500 h-6 cursor-pointer">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>

            <div class={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <form  onSubmit={handleEditMember} class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-lg">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <h3 className='my-2'>সদস্য তথ্য সংশোধন করুণ</h3>
                                <div className='grid grid-cols-2 gap-2'>
                                    <input type="text" className='block  focus:outline-none border w-full p-2' defaultValue={data.member_name} name='member_name' placeholder='সদস্যের নাম' />
                                    <select name="gender" className='block focus:outline-none border w-full p-2'>
                                        <option value="মহিলা">--লিঙ্গ নির্বাচন করুণ--</option>
                                        <option value="মহিলা">মহিলা</option>
                                        <option value="পুরুষ">পুরুষ</option>
                                    </select>
                                    <input type="text" name='phone' className='block focus:outline-none border w-full p-2' defaultValue={data.phone} placeholder='ফোন নাম্বার' />
                                    <select name="education" className='block focus:outline-none border w-full p-2'>
                                        <option value="null">---শিক্ষাগত যোগ্যতা---</option>
                                        <option value="Class Five Passed- ৫ম শ্রেণী পাশ">Class Five Passed- ৫ম শ্রেণী পাশ</option>
                                        <option value=" Graduate/Equivalent - স্নাতক/সমমান"> Graduate/Equivalent - স্নাতক/সমমান</option>
                                        <option value="HSC / Equivalent">HSC / Equivalent</option>
                                        <option value="Illtiterate - নিরক্ষর">Illtiterate - নিরক্ষর</option>
                                        <option value="এইচ.এস.সি/সমমান">এইচ.এস.সি/সমমান</option>
                                        <option value="MA/Equivalent - স্নাতকোত্তর/সমমান ">MA/Equivalent - স্নাতকোত্তর/সমমান </option>
                                        <option value="SSC/ Equivalent - এস.এস.সি/সমমান">SSC/ Equivalent - এস.এস.সি/সমমান</option>
                                        <option value="Under Class Five - ৫ম শ্রেণীর নীচে">Under Class Five - ৫ম শ্রেণীর নীচে</option>
                                        <option value="Under SSC - এস.এস.সি 'র নীচে">Under SSC - এস.এস.সি 'র নীচে</option>
                                    </select>

                                    <select name="member_post" className='block focus:outline-none border w-full p-2'>
                                        <option value="null">--- কমিটিতে অবস্থান ---</option>
                                        <option value="Member Secretary - সদস্য-সচিব">Member Secretary - সদস্য-সচিব</option>
                                        <option value="Parents - অভিভাবক সদস্য">Parents - অভিভাবক সদস্য</option>
                                        <option value="President - সভাপতি">President - সভাপতি</option>
                                        <option value="Reserved female guardian member - সংরক্ষিত">Reserved female guardian member - সংরক্ষিত</option>
                                        <option value="মহিলা অভিভাবক সদস্য">মহিলা অভিভাবক সদস্য</option>
                                        <option value="সংরক্ষিত মহিলা শিক্ষক সদস্য">সংরক্ষিত মহিলা শিক্ষক সদস্য</option>
                                        <option value="শিক্ষক প্রতিনিধি"> শিক্ষক প্রতিনিধি</option>
                                        <option value="সহ-সভাপতি">সহ-সভাপতি</option>
                                    </select>
                                    <input type="text" defaultValue={data.occupation} name='occupation' className='block focus:outline-none border w-full p-2' placeholder='পেশা' />
                                </div>
                            </div>
                            <div className='flex justify-end gap-5 p-5'>
                                <label onClick={() => SetModal('hidden')} className='px-5 cursor-pointer bg-red-500 rounded-sm py-1 text-white'>বাতিল করুন</label>
                                <button className='px-5 bg-teal-500 rounded-sm py-1 text-white'>সাবমিট</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CounsilMember;