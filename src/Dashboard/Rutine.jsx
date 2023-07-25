import React from 'react';

const Rutine = () => {


    const handleAddRutine = (e) =>{
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
            .then(data => console.log(data))
        
    }

    return (
        <div className='p-5'>
            <h1 className='text-center text-xl  my-5'>রুটিন যোগ করুণ</h1>

        <div className='flex'>
            <div className='w-2/3'>

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
                        <p  className='p-5 bg-slate-200  text-slate-500 text-xl font-bold text-center w-full'>Select PDF or Image File</p>
                </label>
                <button className='mt-5 bg-white px-5 py-2 text-teal-500'>আপলোড করুণ</button>
            </form>
        </div>
            
        </div>
    );
};

export default Rutine;