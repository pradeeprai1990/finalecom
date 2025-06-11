import React, { useContext, useState } from 'react'
import Dropify from '../Common/Dropify'
import { FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { loginContext } from '../Context/MainContext';
import axios from 'axios';
export default function Profile() {

    let [tabButton, settabButton] = useState(1)
    let [error,setError]=useState('')
    let [msg,setMsg]=useState('')
    let {adminID}=useContext(loginContext)
    let apiBaseUrl = import.meta.env.VITE_APIBASEURL
    let changePassword=(event)=>{
        event.preventDefault()
        let currentPassword=event.target.currentPassword.value;
        let newPassword=event.target.newPassword.value;
        let confirmPassword=event.target.confirmPassword.value;

        if(newPassword!=confirmPassword){
            return setError("New password or Confirm Password Not matched")
            
        }

        axios.post(`${apiBaseUrl}auth/change-password`,{
            currentPassword,
            newPassword,
            adminID
        })
        .then((res)=>res.data)
        .then((finalRes)=>{
            if(finalRes.status){ //1
                //Login
                setMsg(finalRes.msg)
                event.target.reset()
                setTimeout(()=>{
                    setMsg('')
                },2000)

                
            }
            else{

                setError(finalRes.msg)
                setTimeout(()=>{
                    setError('')
                },2000)
               
            }
        })
    }
    return (
        <>
            <section className='mt-5 max-w-full h-full rounded-md  ' id='profile'>

                <div className='max-w-full grid grid-cols-[30%_auto] gap-3' id='profile-mid'>
                    
                    <div className='w-full bg-white shadow-lg h-fit rounded-lg' >
                        <div className='flex items-center mt-12 justify-center flex-col '>
                            <figure>
                                <img src="/Images/59c32aee-61e4-4868-b27c-e9339ab54e9a-1670132624.jpg" className='w-[80px] h-80px mx-auto rounded-[50%] ' alt="" />
                            </figure>
                            <p>Admin</p>
                        </div>

                        <div className='bg-[#F6F9FD] mt-10 rounded-lg p-3 '>
                            <p className='font-bold'>Contact Information</p>
                           
                                <ul className='my-3'>
                                    <li className='flex items-center gap-2 py-2'>
                                        <FaMobile />
                                        <p>70963 98253</p>
                                    </li>
                                      <li className='flex items-center gap-2 py-2'>
                                        <MdEmail />
                                        <p>nishantsanghani09@gmail.com</p>
                                    </li>
                                </ul>
                            
                        </div>
                    </div>


                    <div className='shadow-xl p-5 border-0 bg-white  rounded-sm  w-full'>
                        <div className='flex gap-2' id='EditProfile'>
                            <button className={`px-6 py-2 text-lg font-medium ${tabButton == 1 && 'border-b-4 border-purple-700 text-purple-700 cursor-pointer'} cursor-pointer`} onClick={() => settabButton(1)} >Edit Profile</button>
                            <button className={`px-6 py-2 text-lg font-medium  cursor-pointer ${tabButton == 2 && 'border-b-4 border-purple-700 text-purple-700 '} cursor-pointer`} onClick={() => settabButton(2)}>Change Profile</button>
                        </div>

                        <div className={` mx-6 mt-5 ${tabButton == 1 ? 'block' : 'hidden'}`} >
                            <form action="" >
                                <div className='max-w-full grid grid-cols-[33%_auto] gap-5'>
                                    <div>
                                        <Dropify />
                                        <button className='my-5 text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg px-5 py-2.5 cursor-pointer'>Update Profile</button>
                                    </div>
                                    <div>
                                        <label htmlFor="" className='text-[16px] font-semibold'>Name</label>
                                        <input type="text" placeholder='Name' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[50px] p-2 rounded-sm mb-5' />

                                        <label htmlFor="" className='text-[16px] font-semibold'>Email</label>
                                        <input type="email" placeholder='Email' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[50px] p-2 rounded-sm mb-5' />

                                        <label htmlFor="" className='text-[16px] font-semibold'>Mobile Number</label>
                                        <input type="tel" placeholder='Number' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[50px] p-2 rounded-sm mt-1' />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={` mx-6 mt-5 ${tabButton == 2 ? 'block' : 'hidden'}`} >
                            <form action="" onSubmit={changePassword}>

                                { error!='' && <p className='text-red-500'> {error} </p> }

                                { msg!='' && <p className='text-red-500'> {msg} </p> }

                                <label htmlFor="" className='text-[16px] font-semibold'>Current Password</label>
                                <input type="password" placeholder='Current Password' name="currentPassword" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[50px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>New Password</label>
                                <input type="password" placeholder='New Password' name="newPassword" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[50px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Confirm Password</label>
                                <input type="password" placeholder='Confirm Password' name="confirmPassword" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[50px] p-2 rounded-sm mt-1' />

                                <button type='submit' className='my-5 text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg px-5 py-2.5 cursor-pointer'>Change Password</button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
