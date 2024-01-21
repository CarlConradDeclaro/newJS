import { useState } from 'react'
import './index.css'


const house = [
  {
    id:1,
    address: "289 Granada St",
    country: "Philippines",
    price: 109000
  },
  {
    id:2,
    address: "987 Brgy 03",
    country: "Philippines",
    price: 99999
  }
]

const HouseList =() =>{ 
  return(
    <>
        <div>
          <h1>Houses currrently on the market</h1>
        </div>
        <table>
            <thead>
                  <tr>
                    <th>Adress</th>
                    <th>Country</th>
                    <th>Price</th>
                  </tr>
            </thead>
            <tbody>
            {house.map(h => (
              <tr key={h.key}>
                 <td>{h.address}</td>
                 <td>{h.country}</td>
                 <td>{h.price}</td>
              </tr>
            ))}
            </tbody>
        </table>
    </>
  )

 }

export default HouseList
