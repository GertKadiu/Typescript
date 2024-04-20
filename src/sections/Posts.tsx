"use client"

import React, { useEffect, useState } from 'react'
import PostItemOne from '@/components/PostItemOne';
import TrendingPost from '@/components/TrendingPost';
import Preloader from '@/components/Preloader';
// import { useRouter } from 'next/router'

export default function Posts() {

  // const router = useRouter()
  const [items, setItems] = useState<any | []>([])
  const [item, setItem] = useState<any>({})

  const getSinglePostData = (id: string) => {
    fetch(`/api.postitems/${id}`)
      .then(res => {
        if (res.status === 404) {
          // router.push('/not-found')
        }
        return res.json()
      })
      .then(data => setItem(data))
      .catch(e => console.log(e.message))
  }

  const getItemsData = async () => {
    fetch(`/api/postitems`)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(e => console.log(e.message))
  };

  useEffect(() => {
    getItemsData();
    getSinglePostData('6623a76e347de96c9d4a5e58');
  }, [])

  return (
    <section id='posts' className='posts'>
      <div className="container" data-aos='fade-up'>
        <div className="row g-5">
          <div className='col-lg-4'>
            <PostItemOne large={true} item={item} />
          </div>
          <div className='col-lg-8'>
            <div className="row g-5">
              <div className='col-lg-4 border-start custom-border'>
                {items &&
                  items.length > 0 ? items
                    .filter(
                      (item: { trending: boolean; top: boolean }) =>
                        !item.trending && !item.top
                    )
                    .slice(0, 3)
                    .map(
                      (item: {
                        _id: string;
                        img: string;
                        category: string;
                        date: string;
                        title: string;
                        avatar: string;
                        author: string;
                        brief: string;
                      }) => <PostItemOne key={item._id} item={item} large={false} />
                    ) : <Preloader />
                }
              </div>
              <div className='col-lg-4 border-start custom-border'>
                {items &&
                  items.length > 0 ? items.filter(
                    (item: { trending: boolean; top: boolean }) =>
                      !item.trending && !item.top)
                    .slice(3, 6)
                    .map((
                      item: {
                        _id: string;
                        img: string;
                        category: string;
                        date: string;
                        title: string;
                        avatar: string;
                        author: string;
                        brief: string;
                      }) => <PostItemOne key={item._id} item={item} large={false} />
                    ) : <Preloader />
                }

              </div>
              <div className='col-lg-4'>
                <div className="trending">
                  <h3>Trending</h3>
                  <ul className="trending-post">
                    {
                      items &&
                        items.length > 0 ? items.filter((item: { trending: boolean }) => item.trending)
                          .map(
                            (
                              item: {
                                _id: string;
                                img: string;
                                category: string;
                                date: string;
                                title: string;
                                avatar: string;
                                brief: string;
                                author: string;
                              },
                              index: number
                            ) => (
                              <TrendingPost
                                key={item._id}
                                index={index}
                                item={item}
                              />
                            )
                          ) : (<Preloader />)
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
