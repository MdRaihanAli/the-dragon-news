import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function LeftNave() {
  const [catagori, setCatagori] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => setCatagori(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h4>All Catagori</h4>
      <div>
        {
          catagori.map((x) => <p key={x.id}><Link  to={`/categories/${x.id}`} >{x.name}</Link></p> )
        }
      </div>
    </div>
  )
}

export default LeftNave