import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';
export default function Addmaterials() {
    let navigate=useNavigate()
    let [formValue,setFormValue]=useState(
        {
            materialName:'',
            materialOrder:''
        }
    )  //{materialName:'Welcome',materialOrder:'3' }
 
    let apiBaseUrl=import.meta.env.VITE_APIBASEURL //http://localhost:8000/admin/
    let materialSave=(event)=>{
        event.preventDefault()
        // let obj={
        //     materialName:
        //     materialOrder
        // }

        //formValue Object - >State //{materialName:'Welcome',materialOrder:'3' }
       axios.post(`${apiBaseUrl}material/insert`,formValue)
       .then((res)=>res.data)
       .then((finalRes)=>{
            if(finalRes.status){
                toast.success(finalRes.mgs)
                setFormValue({materialName:'',materialOrder:''})
                setTimeout(()=>{
                    navigate('/viewmaterial')
                },2000)
               
            }
            else{
                toast.error(finalRes.mgs)
            }
           
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
                        <input type="text"
                         value={formValue.materialName}
                         
                         onChange={
                            (e)=> {
                                let obj={...formValue} // {materialName:'',materialOrder:'' }
                                obj['materialName']=e.target.value //Welcome
                                //{materialName:'Welcome',materialOrder:'' }
                                setFormValue(obj) //{materialName:'Welcome',materialOrder:'' }
                               
                             }  
                        }
                        
                        placeholder='Enter Color Name' name="materialName" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                        <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                        <input
                         onChange={
                            (e)=> {
                                let obj={...formValue} // {materialName:'',materialOrder:'' }
                                obj['materialOrder']=e.target.value //3
                                //{materialName:'Welcome',materialOrder:'3' }
                                setFormValue(obj) //{materialName:'Welcome',materialOrder:'3' }
                               
                             }  
                        }
                        type="number"
                        
                        value={formValue.materialOrder} placeholder='Enter Order' name="materialOrder" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />

                        <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Material</button>
                    </form>

                </div>
            </section>
        </>
    )
}
