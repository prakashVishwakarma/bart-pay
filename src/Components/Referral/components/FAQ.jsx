import React, { useState } from 'react'
import './FAQ.css'

const FAQ = () => {

  const [index, setIndex] = useState(0)
  const [AccordianText, setAccordianText] = useState([
    ['How much can I earn in this referral program ?', 'You can earn unlimited rewards! Every time your friend trades, you get 50% of their trading fees as reward in WRX. The more your friend trades, the more you earn.'],
    ['How much can I earn in this referral program ?', 'You can earn unlimited rewards! Every time your friend trades, you get 50% of their trading fees as reward in WRX. The more your friend trades, the more you earn.'],
    ['How much can I earn in this referral program ?', 'You can earn unlimited rewards! Every time your friend trades, you get 50% of their trading fees as reward in WRX. The more your friend trades, the more you earn.'],
    ['How much can I earn in this referral program ?', 'You can earn unlimited rewards! Every time your friend trades, you get 50% of their trading fees as reward in WRX. The more your friend trades, the more you earn.'],
    ['How much can I earn in this referral program ?', 'You can earn unlimited rewards! Every time your friend trades, you get 50% of their trading fees as reward in WRX. The more your friend trades, the more you earn.'],
    ['How much can I earn in this referral program ?', 'You can earn unlimited rewards! Every time your friend trades, you get 50% of their trading fees as reward in WRX. The more your friend trades, the more you earn.'],
    ['How much can I earn in this referral program ?', 'You can earn unlimited rewards! Every time your friend trades, you get 50% of their trading fees as reward in WRX. The more your friend trades, the more you earn.'],
  ])

  const handleClickShowText = (index) => {
    setIndex(index)
  }

  return (
    <div className='FAQ_container'>
      <div className="FAQ_container_fluid">
        <div className="FAQ_heading">
          <h6>Frequently Asked Questions</h6>
        </div>
        {
          AccordianText.map((textArray, i) => {
            return (<div className="FAQ_accordian_card">
              <h6 onClick={() => handleClickShowText(i)}>{textArray[0]}</h6>
              {index === i && <p>{textArray[1]}</p>}
            </div>)
          })
        }
      </div>

    </div>
  )
}

export default FAQ
