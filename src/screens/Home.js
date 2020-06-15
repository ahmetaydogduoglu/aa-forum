import React, { useEffect, useState } from 'react'
import "./Home.css"
import Navbar from "../components/Navbar"
import CategoriesList from "../components/categories/CategoriesList"
import HomeCard from '../components/cards/HomeCard'
import { connect, useSelector } from "react-redux"
import { getPost } from "../redux/posts/actions"




function Home({ getPost }) {
    const post = useSelector(state => state.posts.posts)
    useEffect(() => {
        getPost();
        return () => 0
    }, [])
    return (
        <div className="container">
            <Navbar />
            <CategoriesList />
            <div className="card-list-container">
                {
                    post.map(item => (
                        <HomeCard content={item} key={item.id} />
                    ))
                }


            </div>
        </div>
    )
}

export default connect(null, { getPost })(Home)

