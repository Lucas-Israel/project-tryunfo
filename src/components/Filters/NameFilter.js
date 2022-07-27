import React from 'react';
import PropTypes from 'prop-types';

class NameFilter extends React.Component {
  render() {
    const { nFilter } = this.props;
    return (
      <label htmlFor="namefilter">
        Nome:
        <input
          type="text"
          id="namefilter"
          onChange={ nFilter }
          data-testid="name-filter"
        />
      </label>
    );
  }
}

NameFilter.propTypes = {
  nFilter: PropTypes.func.isRequired,
};

export default NameFilter;
