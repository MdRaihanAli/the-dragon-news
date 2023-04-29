import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NewsCard({news}) {
    const {_id, title, details, image_url}=news
    return (
        <div className='my-4'>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} />
                    <Card.Text>
                        {details.length >250 ? <>{details.slice(0,250)}.... <Link to={`/news/${_id}`}> Read More </Link></>: details}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default NewsCard