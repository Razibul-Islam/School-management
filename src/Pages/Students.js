import React from "react";
import image1 from "../assets/t-1.jpg";
import image2 from "../assets/t-2.jpg";

const Students = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-center text-xl mb-5">আমাদের ছাত্র ছাত্রী</h1>
      <div className="grid grid-cols-3 gap-10">
        <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img alt="Office" src={image2} class="h-56 w-full object-cover" />

          <div class="p-4 sm:p-6">
            <h3 class="text-lg font-medium text-gray-900">নাম : আলী হোসেন</h3>
            <h3 class="text-lg font-medium text-gray-900">
              শ্রেণী : নবম শ্রেণী
            </h3>
            <h3 class="text-lg font-medium text-gray-900">রোল নাম্বার : ৯</h3>
          </div>
        </article>
        <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img alt="Office" src={image1} class="h-56 w-full object-cover" />

          <div class="p-4 sm:p-6">
            <h3 class="text-lg font-medium text-gray-900">নাম : আলী হোসেন</h3>
            <h3 class="text-lg font-medium text-gray-900">
              শ্রেণী : নবম শ্রেণী
            </h3>
            <h3 class="text-lg font-medium text-gray-900">রোল নাম্বার : ৯</h3>
          </div>
        </article>

        <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img alt="Office" src={image2} class="h-56 w-full object-cover" />

          <div class="p-4 sm:p-6">
            <h3 class="text-lg font-medium text-gray-900">নাম : আলী হোসেন</h3>
            <h3 class="text-lg font-medium text-gray-900">
              শ্রেণী : নবম শ্রেণী
            </h3>
            <h3 class="text-lg font-medium text-gray-900">রোল নাম্বার : ৯</h3>
          </div>
        </article>
        <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img alt="Office" src={image1} class="h-56 w-full object-cover" />

          <div class="p-4 sm:p-6">
            <h3 class="text-lg font-medium text-gray-900">নাম : আলী হোসেন</h3>
            <h3 class="text-lg font-medium text-gray-900">
              শ্রেণী : নবম শ্রেণী
            </h3>
            <h3 class="text-lg font-medium text-gray-900">রোল নাম্বার : ৯</h3>
          </div>
        </article>

        <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img alt="Office" src={image2} class="h-56 w-full object-cover" />

          <div class="p-4 sm:p-6">
            <h3 class="text-lg font-medium text-gray-900">নাম : আলী হোসেন</h3>
            <h3 class="text-lg font-medium text-gray-900">
              শ্রেণী : নবম শ্রেণী
            </h3>
            <h3 class="text-lg font-medium text-gray-900">রোল নাম্বার : ৯</h3>
          </div>
        </article>
        <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img alt="Office" src={image1} class="h-56 w-full object-cover" />

          <div class="p-4 sm:p-6">
            <h3 class="text-lg font-medium text-gray-900">নাম : আলী হোসেন</h3>
            <h3 class="text-lg font-medium text-gray-900">
              শ্রেণী : নবম শ্রেণী
            </h3>
            <h3 class="text-lg font-medium text-gray-900">রোল নাম্বার : ৯</h3>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Students;
