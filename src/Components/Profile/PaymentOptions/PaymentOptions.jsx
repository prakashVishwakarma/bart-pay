import React, { Fragment } from 'react'
import { BsShieldExclamation, BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdFamilyRestroom } from "react-icons/md";
import './PaymentOptions.css'

const PaymentOptions = ({ profileText }) => {
    return (
        <div className='acc_right_window'>
            <div className='acc_right_container'>
                <div className='acc_right_container_cart'>
                    <div className='acc_cuntent'>
                        <div className='profile_time_line'>
                            <div ><BsShieldExclamation className='icon' /> <p>Submit</p></div>
                            <div className='line'></div>
                            <div ><AiOutlineMail className='icon side' /> <p>Review</p></div>
                            <div className='line'></div>
                            <div ><BsPhone className='icon' />  <p>Done</p></div>

                        </div>
                        <div>
                            <h3>PLEASE COMPLETE YOUR KYC</h3>
                            <p>You haven't completed your KYC. Your KYC will be approved instantly if your documents are clearly visible, and your information is correct.</p>
                            <button>SUBMIT KYC</button>
                        </div>
                        {/* <p><BsShieldExclamation /> Verify your KYC </p>
                        <p> <AiOutlineMail />pk0777131@gmail.com</p>
                        <p> <BsPhone /> Phone number + Add</p>
                        <p> <MdFamilyRestroom /> nominee</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentOptions
