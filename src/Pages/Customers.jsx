import React from 'react'
import Multi from '../Customers/Multi'
import Cost from '../Customers/Cost'
import Cloud from '../Customers/Cloud'
import Card from '../Customers/Card'
import Builds from '../Customers/Builds'
const Customers = () => {
  return (
    <div>
      <Multi/>
      <Cost/>
      <Cloud/>
      <Card/>
      <Builds/>
    </div>
  )
}

export default Customers