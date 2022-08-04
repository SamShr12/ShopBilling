import React, { useEffect, useState } from "react";
import $ from 'jquery'
import { itemdetailquery } from "../utils/data";
import axios from "../api/axios";
import swal from 'sweetalert'

const DashItems = ({item}) => {
    const [percase, setPerCase] = useState(0);
    const [perpacket, setPerPacket] = useState(0);
    const [perpiece, setPerPiece] = useState(0);
    const handleDelete = async (id) => {
        const query = itemdetailquery(id);

        if (query){
            try {
                await axios.delete(`/posts/${item.id}`);
                window.location.reload(false)
            } catch (err) {
                swal(`Error: ${err.message}`)
            }
        }
    }
     

    useEffect(()=>{

        $('.addtothecartbtn').on("click", ()=>{
            $('.poppforcart').css("display","block");
        })

        $('.thecancelbuttonofhere').on('click', ()=>{
            $('.poppforcart').css("display","none");
        })
    })

    return(
        <section>
            <div className="dash-forgd border border-solid h-20">
                    <div className="w-96 ml-16 mt-5">
                        Name
                    </div>
                    <div className="mt-5">
                         Per Box
                    </div>
                    <div className="mt-5">
                         Per Packet
                    </div>
                    <div className="mt-5">
                         Per Dozen
                    </div>
                    
                    <div className="ml-8 mt-5 w-60">
                        Options
                    </div>
                </div>
          {/* itesmstarthere */}
                <div className="dash-forgd border border-solid h-20">
                    <div className="w-96 ml-16 mt-5">
                        {item.name}
                    </div>
                    <div className="mt-5">
                        {item.priceperbox}
                    </div>
                    <div className="mt-5">
                        {item.priceperpacket}
                    </div>
                    <div className="mt-5">
                        {item.priceperdozen}
                    </div>
                    
                    <div className=" mt-5 w-60">
                        {/* <button className="bg-[#47baef] px-2 py-2  text-white font-semibold capitalize addtothecartbtn">Add to Cart</button> */}
                        <button className="bg-[#ED3434] ml-2 px-2 py-2  text-white font-semibold capitalize" onClick={()=>handleDelete(item.id)}>Delete</button>
                        <button className="bg-[#ccc] ml-2 px-2 py-2  text-white font-semibold capitalize">Edit</button>
                    </div>
                </div>
{/* itemendhere */}
                
            {/* <section className="poppforcart">
                <div className="popupforthecartiwthin">
                    <div className="itemswithinin flex gap-10">
                        <div className="">
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold text-[#277889]">
                                    For Per Case
                                </h2>
                                    <div className="flex gap-20">
                                        <input type="number" name="" id="" onChange={(e)=>setPerCase(e.target.value)} />
                                        <h2 className="text-xl font-semibold text-[#277889]  w-10">Price: {percase * item.priceperbox}</h2>
                                    </div>
                                    
                            </div>
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold text-[#277889]">For Per Packet</h2>
                                <div className="flex gap-20">
                                        <input type="number" name="" id="" onChange={(e)=>setPerPacket(e.target.value)} />
                                        <h2 className="text-xl font-semibold text-[#277889] w-10">Price: {perpacket* item.priceperpacket}</h2>
                                    </div>
                                    
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-[#277889]">For Per Piece</h2>
                                <div className="flex gap-20">
                                        <input type="number" name="" id="" onChange={(e)=>setPerPiece(e.target.value)}/>
                                        <h2 className="text-xl font-semibold text-[#277889] w-10">Price:{perpiece * item.priceperpiece}</h2>
                                    </div>
                                </div>
                            
                        </div>

                        <div className="m-10 ml-16">
                            <h2 className="text-xl font-semibold text-[#277889] text-center">Total :</h2>
                            <h2 className="text-xl font-semibold text-[#277889] border border-solid px-10 py-2">
                            {
                                perpiece * item.priceperpiece + perpacket* item.priceperpacket + percase * item.priceperbox
                            }
                            </h2>
                                <div className="m-5 ml-8">
                                <button className="border border-solid border-[#47baef] bg-[#47baef] px-4 py-2 font-semibold text-[#ffffff]">Submit</button>
                                <button className="ml-2 border border-solid border-[#47baef] bg-[#47baef] px-4 py-2 font-semibold text-[#ffffff] thecancelbuttonofhere">Cancel</button>
                                </div>
                                
                        </div>
                    </div>
                </div>
            </section> */}
                

        </section>
    )
}

export default DashItems