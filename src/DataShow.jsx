import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataShow = () => {

// useState to show data on UI with map function to show data in table format on UI
    let [Data,setData]=useState([]) // jab input lena ho to usestate empty rakhte hai  

// GET method
    // to stop the refreshment of page after delete the data to update ui 
    let fetchdata=()=>{
      let api='http://localhost:3000/movieTicket'
      axios.get(api).then((res)=>{
        setData(res.data)
      }).catch((err)=>{
          console.log(err)  //err understand by developer if we want to show err to user to err then replace err to any msg like "page not found"
      })
    }
    useEffect(()=>{
    //    //let api = 'http://localhost:3000/movieTicket'
    //    let api = 'http://localhost:3000/movieTicket'
      
    //    //get data with error handling (.then(callBackFunction with event).catch(callBackFunction with event))
    //    axios.get(api).then((res)=>{
        
    //     // console.log(res.data)  //data is inbuilt key name
    //     setData(res.data)
      
    // }).catch((err)=>{
        
    //     console.log(err)  //err understand by developer if we want to show err to user to err then replace err to any msg like "page not found"
      
    // })

    //call the fetchdata function
    fetchdata()
     
    },[])   
//DELETE method
    //create function 'DeleteData'  (jab hum normal aise krte hai to hme page ko refresh krna pdega tb jake ui pr update hoga iske liye hum fetchdata ko useEffect k bahar likhenege)
    let DeleteData=(id)=>{
      let api=`http://localhost:3000/movieTicket/${id}`  //with id to target that obj to delete
      axios.delete(api).then((res)=>{
        alert("data deleted!")
        //call fetch data function
        fetchdata()
      }).catch((err)=>{
        alert("server break so failed to delete data")   
      })
    }

  return (
    <>
      <h1>Data Will Show Here</h1>
      {/* create table */}
      <table border={1}>
        <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Movie</th>
              <th>Date</th>
              <th>Time</th>
              {/* for delete */}
              <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {/* use {} to write js inside html in react */}
            {
            Data.map((e)=>(
             <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.movie}</td>
                <td>{e.date}</td>
                <td>{e.time}</td>
                {/* for delete */}
                <td onClick={()=>{DeleteData(e.id)}}>Delete</td>
             </tr>
            ))
        }
        </tbody>
      </table>
    </>
  )
}

export default DataShow
