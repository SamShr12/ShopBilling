import React, { useEffect, useState } from "react";
import axios from '../api/axios'
import swal from 'sweetalert'
import BillItems from "./BillItems";
const Bill = () => {
    const [getItems, setgetItems] = useState([])

    useEffect(() => {
      const fetchPosts = async () => {
        try {
            const response = await axios.get('/posts')
            console.log(response.data)
            setgetItems(response.data)
        } catch (err) {
            swal(`Error: ${err.message}`)
        }
      }
      fetchPosts();
    }, [])
    
    return(
        <section>
            <div>
                <div className="w-10/12 m-auto mt-20">
                    <h2 className="text-3xl font-semibold leading-6">Billing</h2>
                    <div className="my-5">
                        <input type="text" name="search" id="" placeholder="Search Items..." />
                    </div>

                    <section className="datasdasfg">
                        <div className="databillforgd">
                            {/* contextdata */}
                            <div className="datainfohere d1">
                                <div>Name</div>
                                <div>
                                    Quantity
                                </div>
                                <div>
                                    Select
                                </div>
                                <div>
                                    Price:
                                </div>
                                <div>
                                    Options
                                </div>
                            </div>
                            {/* contextend */}

                            {/* itemstarthere */}
                         {getItems.map((items)=>(
                            <div key={items.id}><BillItems items={items} /></div>
                         ))}
                            {/* itemendhere */}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Bill;