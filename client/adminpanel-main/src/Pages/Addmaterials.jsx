import axios from 'axios'
import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
export default function Addmaterials() {
 
    let apiBaseUrl=import.meta.env.VITE_APIBASEURL //http://localhost:8000/admin/
    let materialSave=(event)=>{
        event.preventDefault()
        let obj={
            materialName:event.target.materialName.value,
            materialOrder:event.target.materialOrder.value
        }
       axios.post(`${apiBaseUrl}material/insert`,obj)
       .then((res)=>res.data)
       .then((finalRes)=>{
            if(finalRes.status){
                toast.success(finalRes.mgs)
            }
            else{
                toast.error(finalRes.mgs)
            }
            event.target.reset()
       })
    }
    return (
        <>
        <ToastContainer/>
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addMetrials'>
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading'>
                    <h3 className='text-[26px] font-semibold'>Add Material</h3>
                </div>
                <div>
                    <form onSubmit={materialSave} action="" className='p-2'>
                        <label htmlFor="" className='text-[16px] font-semibold'>Material Name</label>
                        <input type="text" placeholder='Enter Color Name' name="materialName" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                        <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                        <input type="number" placeholder='Enter Order' name="materialOrder" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />

                        <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Material</button>
                    </form>

                </div>
            </section>
        </>
    )
}
