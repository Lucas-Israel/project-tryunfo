import React from 'react';
import PropTypes from 'prop-types';

class Name extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div
        data-testid="name-card"
        className="name p"
      >
        {name}
      </div>
    );
  }
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
