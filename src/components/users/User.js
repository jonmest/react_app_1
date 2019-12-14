import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, [])

    const { getUser, loading, user, repos, getUserRepos } = githubContext;

 
        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;


        if (loading) return <Spinner></Spinner>;


        
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>
                    Back To Search
                </Link>
                Hirable: {' '}
                {hireable ? (
                    <i className="fas fa-check text-success"/>
                ) : (
                    <i className="fas fa-times-circle text-danger"/>
                )}
                <card className="card grid-2">
                    <div className="all-center">
                    <figure className="image is-128x128 box is-paddingless has-shadow">
                    <img src={avatar_url}  className="has-shadow" style={{width: '128px'}}/>
                    </figure>
                        <h1 className="title">
                    { name }
                </h1>
                <p>
                    <strong>Location:</strong> { location }
                </p>
                    </div>
                    <div>
                        { bio && <Fragment>
                            <h3 className="subtitle">
                               <strong>Bio</strong> </h3>
                        <p>
                            { bio }</p></Fragment>}
                            <hr/>
                    <a href={html_url} className="button is-dark">Visit GitHub Profile</a>
                    <hr/>
                    <ul>
                        <li>
                            { login && <Fragment>
                                <strong>
                                    Username:</strong> {login}
                                    </Fragment>}
                        </li>

                        <li>
                            { company && <Fragment>
                                <strong>
                                    Company:</strong> {company}
                                    </Fragment>}
                        </li>

                        <li>
                            { blog && <Fragment>
                                <strong>
                                    Website:</strong> {blog}
                                    </Fragment>}
                        </li>
                    </ul>
                    </div>
                </card>
                                <div className="card">
                                <div className="tags">
                                    <span className="tag is-primary">
                                        Followers: { followers }
                                    </span>
                                    <span className="tag is-success">
                                        Following: { following }
                                    </span>
                                    <span className="tag is-danger">
                                        Public Repos: { public_repos }
                                    </span>
                                    <span className="tag is-dark">
                                        Public Gists: { public_gists }
                                    </span>
                                    </div>
                                </div>

            <Repos repos={repos}>

            </Repos>
            </Fragment>
        )

}


export default User
