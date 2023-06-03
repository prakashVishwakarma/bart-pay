import React, { Fragment } from 'react'
import { BsShieldExclamation, BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdFamilyRestroom } from "react-icons/md";
import './SideBarCuntent.css'

const SideBarCuntent = ({ profileText }) => {
    return (
        <div className='acc_right_window'>
            <div className='acc_right_container'>
                <div className='acc_right_container_cart'>
                    <div className='acc_cuntent'>
                        <p><BsShieldExclamation /> Verify your KYC </p>
                        <p> <AiOutlineMail />pk0777131@gmail.com</p>
                        <p> <BsPhone /> Phone number + Add</p>
                        <p> <MdFamilyRestroom /> nominee</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarCuntent
