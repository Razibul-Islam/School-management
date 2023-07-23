import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';


const Addnotice = () => {


    const [modal, setModal] = useState('hidden');
    const [notice, setNotice] = useState([]);


    const handleAddStudent = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const prahgraph = e.target.prahgraph.value;
        const time = Date.now();
        const data = { title, prahgraph, time }

        const url = `http://localhost:5000/add-notice`;

        fetch(url, {
            method: "Post",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data => {
            if(data){
                e.target.reset();
                setModal('hidden');
                toast.success('সম্পূর্ণ হয়েছে')
            }
        })
    }

    console.log(notice);


    const handleDeleteNotice  = (_id)=>{
        const url = `http://localhost:5000/delete-notice?_id=${_id}`;
        fetch(url, {
            method : "DELETE"
        })
        .then(res=> res.json())
        .then(data => console.log(data))
    }


    useEffect(()=>{
        const url = 'http://localhost:5000/get-notice'
        fetch(url)
        .then(res=> res.json())
        .then(data=> setNotice(data))
    }, [handleDeleteNotice])


    function convertTimestampToDate(time) {
        // Get the current timestamp in milliseconds using Date.now()
        const timestamp = time;
      
        // Create a new Date object using the timestamp
        const currentDate = new Date(timestamp);
      
        // Get the day, month, date, and year from the Date object
        const dayOfWeek = currentDate.toLocaleString('en', { weekday: 'short' });
        const month = currentDate.toLocaleString('en', { month: 'short' });
        const date = currentDate.getDate();
        const year = currentDate.getFullYear();
      
        // Concatenate the parts to form the desired date string
        const dateString = `${dayOfWeek} /${month}/ ${date} /${year}`;
      
        return dateString;
      }


    return (
        <div className='p-5'>
            <h1 className='text-center text-xl my-5'>বিজ্ঞপ্তি সমূহ</h1>

            <button onClick={() => setModal('')} className='px-5 py-2 bg-teal-500 text-white rounded-3xl'>নতুন বিজ্ঞপ্তি যোগ করুণ</button>
            <hr className='my-5' />

            <div>
                {
                    notice.map(notices =>{
                        // console.log()
                        return(
                            <div className='p-3 bg-slate-100 my-2'>
                                <h3 className='my-2 text-teal-600'>{notices.title}</h3>
                                <h3>{notices.prahgraph}</h3>
                                <div className='flex justify-between items-center my-3'>
                                    <p className='text-sm text-teal-500'>{convertTimestampToDate(notices.time)}</p>
                                    <button onClick={()=> handleDeleteNotice(notices._id)} className='text-red-500 bg-white p-2 rounded-full'><DeleteIcon/></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* modal */}
            <div class={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <form onSubmit={handleAddStudent} class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <input required name='title' className='block my-3 focus:outline-none border w-full p-2' type="text" placeholder='টাইটেল প্রবেশ করান' />
                                <textarea required name="prahgraph" className='block my-3 focus:outline-none border w-full p-2 h-60' placeholder='বর্ণনা লিখুন'></textarea>
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

export default Addnotice;