import React from 'react'
import Sidebar from "./../../components/sidebar/Sidebar";
import SinglePost from "./../../components/singlePost/SinglePost";
import './single.css'

const Single = () => {
    return (
        <section className="single center">
            <>
                <SinglePost />
                <Sidebar />
            </>    
        </section>
    )
}

export default Single