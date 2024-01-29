import axios from 'axios'
import React, { useState,useEffect } from 'react'
import Cards from './Cards'

const Details = () => {
    const [data,setData] = useState([])


    const fetchData = async() => {
        const response = await fetch("http://localhost:8000/api/hosting")
        const result = await response.json()
        setData(result)
        console.log(response)
    }

    const deleteData =async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/hosting/${id}`);
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      fetchData()
    }, [])
    


  return (
    <div>
        {
          data.map((item) => {
            return(
              <>
              <Cards details={item} demo={deleteData}   />
              </>
            )
          })
        }

        

    </div>
  )
}

export default Details