/* Import padrao react */
import React from 'react'

/* Import components */
import Sidebar from "./../../components/sidebar/Sidebar";
import SinglePost from "./../../components/singlePost/SinglePost";

/* Import Css */
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