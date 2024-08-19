import React from 'react'
import { Link,useParams } from 'react-router-dom'
import JsonData from '../ItemData.json'

const SubItem = () => {
    let {subname}=useParams()
    // console.log("Params Value:",subname);
    let subData=JsonData.gadgets.find(data=>data.gadget_name===subname)
    // console.log("SubData",subData);

        return(
    <div>
      <h3>{subData.gadget_name}</h3>
      {
        subData.sub_part.map(sub=>(
          <div key={sub.sub_id}>
            <h4>{sub.sub_name}</h4>
            <Link to={`details/${sub.sub_name}`}>Details</Link>
            {/* <Link>Details</Link> */}
          </div>
        ))
      }
    </div>
  )
}

export default SubItem