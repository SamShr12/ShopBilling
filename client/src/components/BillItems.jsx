import React from 'react'
import { useState } from 'react'

const BillItems = ({items}) => {
    const [opval, setOpval] = useState(items.priceperbox)
    const [quan, setQuan] = useState(1)
    const s = parseInt(opval)
    const sum = quan * s
    const options =[
        {
            label:"Per Box",
            value:"priceperbox",
            price: items.priceperbox
        },

        {
            label:"Per Dozen",
            value:"priceperdozen",
            price: items.priceperdozen
        },

        {
            label:"Per Packet",
            value:"priceperpacket",
            price: items.priceperpacket
        },
    ]

  return (
    <div>
           <div className="datainfohere d1">
                                <div>{items.name}</div>
                                <div>
                                    <input type="number" onChange={(e)=>setQuan(e.target.value)} placeholder="1"  />
                                </div>
                                <div>
                                <select name="" id="" className="px-4 py-2" onChange={(e)=>setOpval(e.target.value)} value={opval}>
                                      {options.map((options)=>(
                                        <option value={options.price} key={options.value}>{options.label}</option>
                                      ))}
                                    </select>
                                </div>
                                <div>
                                    {sum}
                                </div>
                                <div style={{width:"10px"}}>
                                        <button className='p-1 px-2 bg-[#ed1c1c] text-white font-semibold'>Remove</button>
                                </div>
                            </div>
                        
                          
    </div>
  )
}

export default BillItems