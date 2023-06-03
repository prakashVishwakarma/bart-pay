import React from 'react'
import { BsShieldExclamation, BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdFamilyRestroom } from "react-icons/md";
import './Verification.css'

const Verification = () => {
    return (
        <div className='Verification'>
            <div className='Verification_container'>
                <div className='Verification_container1'>
                    <div className='profile_time_line1'>
                        <div ><BsShieldExclamation className='icon1' /> <p>Submit</p></div>
                        <div className='line1'></div>
                        <div ><AiOutlineMail className='icon1 side1' /> <p>Review</p></div>
                        <div className='line1'></div>
                        <div ><BsPhone className='icon1' />  <p>Done</p></div>
                    </div>

                </div>
                <div className='Verification_container2'>
                    <div>

                        <h4>SELECT YOUR COUNTRY</h4>

                        <p>COUNTRY</p>
                        <select name="COUNTRY" id="COUNTRY">
                            <option value="India">India</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                        </select>

                        <p>TYPE OF KYC</p>
                        <select name="KYC" id="KYC">
                            <option value="Personal">Personal</option>
                            <option value="Company">Company</option>
                        </select>
                    </div>
                </div>
                <div className='Verification_container3'>
                    <div>

                        <table>
                            <tr>
                                <th>WITHOUT KYC</th>
                                <th>WITH KYC</th>
                            </tr>
                            <tr>
                                <td><img src="https://icons.veryicon.com/png/o/miscellaneous/tiptap-editor/remove-30.png" alt="" /> Deposit Crypto</td>
                                <td> <img src="https://pic.onlinewebfonts.com/svg/img_150068.png" alt="img" /> Deposit Crypto</td>
                            </tr>
                            <tr>
                                <td><img src="https://icons.veryicon.com/png/o/miscellaneous/tiptap-editor/remove-30.png" alt="" /> Deposit INR</td>
                                <td><img src="https://pic.onlinewebfonts.com/svg/img_150068.png" alt="img" /> Deposit INR</td>
                            </tr>
                            <tr>
                                <td><img src="https://icons.veryicon.com/png/o/miscellaneous/tiptap-editor/remove-30.png" alt="" /> Trade</td>
                                <td><img src="https://pic.onlinewebfonts.com/svg/img_150068.png" alt="img" /> Trade</td>
                            </tr>
                            <tr>
                                <td><img src="https://icons.veryicon.com/png/o/miscellaneous/tiptap-editor/remove-30.png" alt="" /> P2P</td>
                                <td><img src="https://pic.onlinewebfonts.com/svg/img_150068.png" alt="img" /> P2P</td>
                            </tr>
                            <tr>
                                <td><img src="https://icons.veryicon.com/png/o/miscellaneous/tiptap-editor/remove-30.png" alt="" /> Withdraw</td>
                                <td><img src="https://pic.onlinewebfonts.com/svg/img_150068.png" alt="img" /> Withdraw</td>
                            </tr>
                        </table>
                        <div className='button_container'>

                            <button>SKIP FOR NOW </button>
                            <button>COMPLETE KYC</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verification
