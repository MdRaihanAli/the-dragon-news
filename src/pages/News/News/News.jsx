import React from 'react'
import { Card } from 'react-bootstrap'
import { useLoaderData } from 'react-router-dom'

function News() {
  const news = useLoaderData()
  const {_id, title, details, image_url}=news
  return (
    <div>
      News details here
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img src={image_url} />
          <Card.Text>
            {details}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default News