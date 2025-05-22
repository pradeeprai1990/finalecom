import React from 'react'
import Dropify from '../Common/Dropify'

export default function AddSubSubCategory() {
    return (
        <>
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addsubsubCategory'>
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
                    <h3 className='text-[26px] font-semibold'>Add Sub Category</h3>
                </div>
                <div>
                    <form action="" className='p-2'>
                        <div className='grid grid-cols-[35%_auto] gap-5'>
                            <div className=''>
                                <label htmlFor="" className='text-[16px] font-semibold'>Category Image</label>
                                <Dropify/>
                            </div>
                            <div>
                                <label htmlFor="" className='text-[16px] font-semibold'>Parent Category Name</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Select Category</option>
                                    <option value="">Men's</option>
                                    <option value="">Women</option>
                                    <option value="">Sales</option>
                                </select>
                                <label htmlFor="" className='text-[16px] font-semibold'>Sub Category Name</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Select Category</option>
                                    <option value="">Men's</option>
                                    <option value="">Women</option>
                                    <option value="">Sales</option>
                                </select>
                                <label htmlFor="" className='text-[16px] font-semibold'>Category Name</label>
                                <input type="text" placeholder='Enter Category Name' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                                <input type="number" placeholder='Category Order' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                            </div>
                        </div>


                        <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Category</button>
                    </form>

                </div>
            </section>
        </>
    )
}
