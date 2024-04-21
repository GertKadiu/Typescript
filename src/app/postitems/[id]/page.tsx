"use client"

import React, { useState, useEffect } from 'react'
import { initialPost } from '@/sections/Posts'
import "./style.css"
import Image from 'next/image'
import Preloader from '@/components/Preloader'
import { PostProps } from '@/sections/Posts'
import SidePostItem from '@/components/SidePostItem'


export default function PostItem({ params }: { params: { id: string } }) {
    const id: string = params.id

    const [item, setItem] = useState(initialPost)
    const [items, setItems] = useState([])

    const tabsData = [
        { id: 1, name: 'Popular', active: true },
        { id: 2, name: 'Trending', active: false }
    ]

    const [tabs, setTabs] = useState(tabsData);

    const handleTabActive = (id: number): void => {
        setTabs(tabsData.map(tab => {
            tab.active = false;
            if (tab.id === id) tab.active = true
            return tab;
        }))
    };

    const getSinglePostData = () => {
        fetch(`/api/postitems/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(e => console.log(e.message))
    };

    const getItemsData = async () => {
        fetch(`/api/postitems`)
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(e => console.log(e.message))
    };

    useEffect(() => {
        getSinglePostData();
        getItemsData()
    }, [])


    return (
        <main id="main">
            <section className="single-post-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 post-content">
                            {item ? (<div className="single-post">
                                <div className="post-meta">
                                    <span className="date">{item.category}</span>
                                    <span className="mx-1">
                                        <i className="bi bi-dot"></i>
                                    </span>
                                    <span>{new Date(item.date).toLocaleDateString('en-US')}</span>
                                </div>
                                <h1 className="mb-5">{item.title}</h1>
                                <p>
                                    <span className="firstcharacter">
                                        {item.brief && item.brief.charAt(0)}
                                    </span>
                                    {item.brief && item.brief.substring(1)}
                                </p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Aspernatur non omnis eligendi est nam earum, veniam repudiandae debitis ducimus nisi repellat,
                                    recusandae assumenda,
                                    commodi necessitatibus vero facilis illo eius aperiam!</p>

                                <figure className="my-4">
                                    {/* <Image src={`/${item.img}`} className='img-fluid' alt='' width={100} height={100} layout='responsive' /> */}
                                    <img src={`/${item.img}`} className='img-fluid' alt="" />
                                    <figcaption>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque quidem voluptate cum consequatur
                                        repellat .
                                    </figcaption>
                                </figure>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Aspernatur non omnis eligendi est nam earum, veniam repudiandae debitis ducimus nisi repellat,
                                    recusandae assumenda,
                                    commodi necessitatibus vero facilis illo eius aperiam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Aspernatur non omnis eligendi est nam earum, veniam repudiandae debitis ducimus nisi repellat,
                                    recusandae assumenda,
                                    commodi necessitatibus vero facilis illo eius aperiam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Aspernatur non omnis eligendi est nam earum, veniam repudiandae debitis ducimus nisi repellat,
                                    recusandae assumenda,
                                    commodi necessitatibus vero facilis illo eius aperiam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Aspernatur non omnis eligendi est nam earum, veniam repudiandae debitis ducimus nisi repellat,
                                    recusandae assumenda,
                                    commodi necessitatibus vero facilis illo eius aperiam!</p>
                            </div>) : <Preloader />}
                        </div>
                        <div className="col-md-3">
                            <div className="aside-block">
                                <ul className="nav nav-pills custom-tab-nav mb-4">
                                    {
                                        tabs.map(tab => (
                                            <li className="nav-item" key={tab.id}>
                                                <button className={`nav-link ${tab.active ? 'active' : undefined}`} onClick={() => handleTabActive(tab.id)}>
                                                    {tab.name}
                                                </button>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="content">
                                    <div className={`tab-pane fade ${tabs[0].active ? 'show active' : ''}`}>
                                        {items.slice(0, 6)
                                            .map((item: PostProps) => (
                                                <SidePostItem key={item._id} item={item} />
                                            ))}
                                    </div>
                                    <div className={`tab-pane fade ${tabs[1].active ? 'show active' : ''}`}>
                                        {items.slice(6, 12)
                                            .map((item: PostProps) => (
                                                <SidePostItem key={item._id} item={item} />
                                            ))}
                                    </div>
                                </div>
                            </div>
                            <div className="aside-block">
                                <h3 className="aside-title">Video</h3>
                                <div className="video-post">
                                    <a href="https://ww.youtube.com/watch?v=uHNS_ZhI62c" target='_blank' className="link-vide">
                                        <span className="bi-play-fill"></span>
                                        <img src="/assets/img/post-landscape-3.jpg" alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
