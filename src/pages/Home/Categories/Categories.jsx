import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import NewsCard from '../NewsCard/NewsCard'

function Categories() {
    const {id}=useParams()
    const categoriesNews = useLoaderData()
  return (
    <div>
      <h2>This is Catagori Nesw</h2>

       {
        categoriesNews.map(news=> <NewsCard key={news._id} news= {news}></NewsCard>)
       }
       
       </div>
  )
}

export default Categories