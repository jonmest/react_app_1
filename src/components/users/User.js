import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';


export class User extends Component {
    componentDidMount () {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,
         
    }
    render() {
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
        } = this.props.user;

        const { loading, repos } = this.props;

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
                        <img src={avatar_url} className="round-img" style={{width: '150px'}}/>
                        <h1>
                    { name }
                </h1>
                <p>
                    Location: { location }
                </p>
                    </div>
                    <div>
                        { bio && <Fragment>
                            <h3>
                                Bio</h3>
                        <p>
                            { bio }</p></Fragment>}
                    <a href={html_url} className="btn btn-dark my-1">Visit GitHub Profile</a>
                    
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
                                <div classname="card text-center">
                                    <badge className="badge badge-primary">
                                        Followers: { followers }
                                    </badge>
                                    <badge className="badge badge-success">
                                        Following: { following }
                                    </badge>
                                    <badge className="badge badge-danger">
                                        Public Repos: { public_repos }
                                    </badge>
                                    <badge className="badge badge-dark">
                                        Public Gists: { public_gists }
                                    </badge>
                                </div>

            <Repos repos={repos}>

            </Repos>
            </Fragment>
        )
    }
}

export default User
