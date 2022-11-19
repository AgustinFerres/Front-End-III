import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Loading } from './style'

const CardComponent = ({song}) => {


  const [data, setData] = useState(song)

  const likeAPost = (post) => {
    const updateData = {
      ...post,
      isLiked: !post.isLiked
    }
    axios.put(`http://localhost:3020/playlist/${post.id}`, updateData)
    .then(res => setData(res.data.data))
    .catch(err => console.log(err))
  }

  const memo = useMemo(() => {
    return (
      <Card>
        <CardHeader>
          <Avatar src={data.imageCover}/>
          <div>
            <h2>{data.label}</h2>
            <p>{data.title}</p>
          </div>
        </CardHeader>
        <CardMedia src='' title={data.label}/>
        <CardContent>
          {data.comment}
        </CardContent>
        <CardActions liked={data.isLiked}>
          <button onClick={() => likeAPost(data)}></button>
        </CardActions>
      </Card>
    )
      
  },[data])

  
  return memo
}

export default CardComponent