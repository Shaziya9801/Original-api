import React from 'react'
import JsonData from './ItemData.json'
import { Link } from 'react-router-dom'

const AllItem = () => {
    // JsonData.gadgets.map(data=>console.log(data))
  return (
    <div>
        <h2>All Items</h2>
        <ul>
            {
                JsonData.gadgets.map(data=>(
                    <li key={data.id}>
                        <h3>{data.gadget_name}</h3>
                        <p>{data.description}</p>
                        <Link to={`sub-item/${data.gadget_name}`}>View Type</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default AllItem