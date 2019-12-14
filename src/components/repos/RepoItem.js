import React from 'react';
import PropTypes from 'prop-types';

export const RepoItem = ({ repo }) => {
    return (
<div className="card">
<div className="card-content">
  <p className="title">
  {repo.name}
  </p>
  <p className="subtitle">
  {repo.description}
  </p>
  <a href={repo.html_url} target="_blank"> View on GitHub</a>

</div>
</div>
    )
}


RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
};

export default RepoItem;