"use client"

import Preloader from '@/components/Preloader'
import React, {useEffect, useState} from 'react'
import { PostProps } from '@/sections/Posts'
import PostItemOne from '@/components/PostItemOne'
import PageTitle from '@/components/PageTitle'

export default function PostItems() {

    const [items, setItems] = useState([])

    const getItemsData = () => {
        fetch(`/api/postitems`)
        .then(res=> res.json())
        .then(data=> setItems(data))
        .catch(e=> console.log(e.message))
    }

    useEffect(() => {
        getItemsData()
    }
    ,[items])

  return (
    <main id="main">
        <section id="posts" className='posts'>
            <div className="container">
                <div className="row">
                    <PageTitle title='Post Items List'/>
                   { items && 
                      items.length > 0 ?(
                   items.map((item: PostProps) => (
                    <div className="col-lg-3 col-md-6" key={item._id}>
                        <PostItemOne large={false} item={item}/>
                    </div>
                    )
                   )) : <Preloader/> }
                </div>
            </div>
        </section>
    </main>
  )
}
