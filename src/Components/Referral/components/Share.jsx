import React from 'react'
import './Share.css'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineSend } from 'react-icons/ai'
import { GiHummingbird } from 'react-icons/gi'

const Share = () => {
    return (
        <div className='Share_container'>
            <div className="Share_cart">
                <h6>Share your link & earn more!</h6>
                <div className="inputTag">
                    <input type="text" name="link" id="link" />
                    <button>Copy</button>
                </div>
                <div className="Share_buttons">
                    <div><FaFacebookF className='Share_icon'/></div>
                    <div><FaWhatsapp className='Share_icon'/></div>
                    <div><AiOutlineSend className='Share_icon'/></div>
                    <div><GiHummingbird className='Share_icon'/></div>
                </div>
            </div>

        </div>
    )
}

export default Share
