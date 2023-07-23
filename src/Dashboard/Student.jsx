import React from 'react';
import { Link } from 'react-router-dom';

const Student = () => {
    return (
        <div className='p-5'>
            <h1 className='text-center'>শ্রেনি পছন্দ করুণ</h1>

            <div className='grid grid-cols-4 gap-10 my-10'>
                <Link to='/admin/student/class-six'  className='w-full py-10 block bg-gradient-to-bl from-teal-500 to-green-300 text-center text-xl font-medium text-white rounded'>ষষ্ঠ শ্রেণি</Link>
                <Link to='/admin/student/class-saven' className='w-full py-10 block bg-gradient-to-t from-teal-500 to-green-300 text-center text-xl font-medium text-white rounded'>সপ্তম শ্রেণী</Link>
                <Link to='/admin/student/class-eight' className='w-full py-10 block bg-gradient-to-t from-teal-500 to-green-300 text-center text-xl font-medium text-white rounded'>অষ্টম শ্রেণি</Link>
                <Link to='/admin/student/class-nine' className='w-full py-10 block bg-gradient-to-t from-teal-500 to-green-300 text-center text-xl font-medium text-white rounded'>নবম শ্রেণী</Link>
                <Link to='/admin/student/class-ten' className='w-full py-10 block bg-gradient-to-t from-teal-500 to-green-300 text-center text-xl font-medium text-white rounded'>দশম শ্রেণী</Link>
            </div>
        </div>
    );
};

export default Student;