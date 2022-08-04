import React, {useState, useEffect} from "react";
import $ from 'jquery'
import axios from "../api/axios";
import DashItems from "./DashItems";
const Dashboard = () => {
    const [items, setItems] = useState([])
   

    useEffect(()=>{
        const fetchPosts = async () => {
            try{
                const response = await axios.get('/posts');
                setItems(response.data);
                console.log(response.data)
            } catch (err){
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else{
                    console.log(`Error:${err.message}`)
                }
                
            }
        }
        fetchPosts();
    },[])
    return(
        <section>
        <section className="dash my-20">
            <div className="dash-forgd-here">
            <div style={{width:"80%", margin:"0 auto"}}>
                    <h2 className="text-2xl font-bold leading-6 mb-5">
                        Shop Items
                    </h2>
                </div>
               {items.map((item)=>(
                <div key={item.id}><DashItems item={item} /></div>
               ))}
            </div>
            
        </section>

        </section>
    )
}

export default Dashboard