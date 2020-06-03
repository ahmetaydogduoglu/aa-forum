import React from 'react'
import "./Home.css"
import Navbar from "../components/Navbar"
import CategoriesList from "../components/categories/CategoriesList"
import HomeCard from '../components/cards/HomeCard'
export default function Home() {
    return (
        <div className="container">
            <Navbar />
            <CategoriesList />
            <div className="card-list-container">
                <HomeCard/>
                <HomeCard/>
            </div>
        </div>
    )
}
