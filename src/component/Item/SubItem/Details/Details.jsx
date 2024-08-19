import React from 'react'
import { useParams } from 'react-router-dom'
import JsonData from '../../ItemData.json'

const Details = () => {
    let {subname,data}=useParams()
    console.log("Params Value:",subname,data);

    let subData=JsonData.gadgets.find(value=>value.gadget_name===subname)
    console.log("SubData:",subData);
    let singleData=subData.sub_part.find(value=>value.sub_name===data)
    console.log("Single Product:",singleData);

  return (
    <div>
        <h3>{singleData.price}</h3>
        <img src={singleData.img} alt="product" height="400" />
    </div>

  )
}

export default Details