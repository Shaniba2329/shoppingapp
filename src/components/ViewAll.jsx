import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchData=()=> {
      axios.get("https://fakestoreapi.com/products").then(
        (response)=>{
          changeData(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                </div>
            </div>
        </div><table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,index)=> {
        return  <tr>
        <th scope="row">1</th>
        <td>{value.name}</td>
        <td>{value.price}</td>
        <td>@mdo</td>
      </tr>
    }
   )}
  </tbody>
</table>
    </div>
  )
}

export default ViewAll