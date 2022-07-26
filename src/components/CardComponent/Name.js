import React from 'react';
import PropTypes from 'prop-types';

class Name extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <p
        data-testid="name-card"
        className="name"
      >
        {name}
      </p>
    );
  }
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
