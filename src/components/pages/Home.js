import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';


const Home = () => {
    return (
        <Fragment>
            <section className="hero is-white is-fullheight">
            <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    Search for GitHub users...
                </h1>
                <Search/>
                <Users/>
            
            </div>
            </div>
            </section>
        </Fragment>
    )}

export default Home