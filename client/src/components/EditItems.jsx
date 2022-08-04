import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import axios from '../api/axios'
import { itemdetailquery } from '../utils/data'
import EditCourseItems from './EditCourseItems'

const EditItems =()=> {
    const [Name, setName] = useState("")
    const [PricePerBox, setPricePerBox] = useState("")
    const [PricePerPacket, setPricePerPacket] = useState("")
    const [PricePerDozen, setPricePerDozen] = useState("")
    const [AllData, setAllData] = useState([])

    let {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchPosts = async () => {
            try{
                const response = await axios.get('/posts');
                console.log(response.data)
                setAllData(response.data)
            } catch(err){
                swal(`Error: ${err.message}`)
            }
        }
       fetchPosts(); 
    })

    const handleEdit = async (e) => {
        e.preventdefault()
        const query = itemdetailquery(id)
        if(query){
            const updatedCourse = {
                id,
                name: Name,
                priceperbox: PricePerBox,
                priceperpacket: PricePerPacket,
                priceperdozen: PricePerDozen
            }

            try{
                const response = await axios.put(`/posts/${id}`, updatedCourse);
                setAllData(AllData.map(itemdata=>itemdata.id === id ?{...response.data}:itemdata))
                setName('')
                setPricePerBox('')
                setPricePerDozen('')
                setPricePerPacket('')
                navigate('/useradmin')
                swal(Name, 'has been edited')
            } catch(err) {
                swal(`Error:${err.message}`)
            }
        }
    }
  return (
    <div><EditCourseItems 
    AllData={AllData}
    handleEdit={handleEdit}
    PricePerBox={PricePerBox}
    setPricePerBox={setPricePerBox}
    PricePerPacket={PricePerPacket}
    setPricePerPacket={setPricePerPacket}
    PricePerDozen={setPricePerDozen}
    setPricePerDozen={setPricePerDozen}
    /></div>
  )
}

export default EditItems