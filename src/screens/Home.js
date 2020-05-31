import React from 'react'
import "./Home.css"
import Navbar from "../components/Navbar"
import CategoriesList from "../components/categories/CategoriesList"
export default function Home() {
    return (
        <div className="container">
            <Navbar />
            <CategoriesList />
        </div>
    )
}
