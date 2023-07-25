import React, { useEffect, useState } from 'react';
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';

const Rutine = () => {


    const [routines, setRoutines] = useState([]);

    const handleAddRutine = (e) => {
        e.preventDefault();

        const rutin = e.target.rutin.files[0];
        const classes = e.target.class.value;

        var formData = new FormData();
        formData.append("file", rutin);

        fetch("https://upload.rainbosoft.com/", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                const pdfRutine = 'https://' + data.url
                if (data) {
                    const info = { classes, pdfRutine };
                    fetch('http://localhost:5000/add-rutine', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(info)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if(data){
                                toast.success('সম্পূর্ণ হয়েছে')
                            }
                        })
                }
            })

    }



    const handleDeleteRutin = (_id)=>{
        const url = `http://localhost:5000/delete-rutin?_id=${_id}`
        fetch(url, {
            method: 'DELETE',
        })
        .then(res=> res.json())
        .then(data => {
            if(data){
                toast.success('মুছে ফেলা হয়েছে')
            }
        })

    }


    useEffect(() => {
        fetch("http://localhost:5000/rutin")
            .then((res) => res.json())
            .then((data) => setRoutines(data));
    }, [handleAddRutine , handleDeleteRutin]);




    return (
        <div className='p-5'>
            <h1 className='text-center text-xl  my-5'>রুটিন যোগ করুণ</h1>

            <div className='flex'>
                <div className='w-2/3'>

                    <div className="grid grid-cols-3 gap-5 px-5">
                        
                        {routines.map((routine, i) => (
                            <div
                                key={i}
                                className="bg-gradient-to-bl relative  py-5 from-teal-500 to-green-300 text-center text-xl font-medium text-white rounded flex flex-col items-center"
                            >
                                <button onClick={()=>handleDeleteRutin(routine._id)} className='absolute to-2 right-2 bg-white h-8 w-8  text-teal-500 rounded-full'><DeleteIcon/></button>
                                {routine.classes}
                                <a
                                    href={routine.pdfRutine}
                                    target="_blank"
                                    download={true}
                                    className=""
                                >
                                    <DownloadIcon />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <form onSubmit={handleAddRutine} className='w-1/3 text-center bg-gradient-to-t from-teal-500 bg-green-400 p-5'>
                    <select name="class" className='block my-3 focus:outline-none border w-full p-2' >
                        <option value="">--শ্রেণি নির্বাচন করুণ--</option>
                        <option value="ষষ্ঠ শ্রেণি">ষষ্ঠ শ্রেণি</option>
                        <option value="সপ্তম শ্রেণী">সপ্তম শ্রেণী</option>
                        <option value="অষ্টম শ্রেণি">অষ্টম শ্রেণি</option>
                        <option value="নবম শ্রেণী">নবম শ্রেণী</option>
                        <option value="দশম শ্রেণী">দশম শ্রেণী</option>
                    </select>
                    <input type="file" id='file' name="rutin" className='hidden' />
                    <label htmlFor="file">
                        <p className='p-5 bg-slate-200  text-slate-500 text-xl font-bold text-center w-full'>Select PDF or Image File</p>
                    </label>
                    <button className='mt-5 bg-white px-5 py-2 text-teal-500'>আপলোড করুণ</button>
                </form>
            </div>

        </div>
    );
};

export default Rutine;