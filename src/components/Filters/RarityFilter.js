import React from 'react';
import PropTypes from 'prop-types';

class RarityFilter extends React.Component {
  render() {
    const { nFilter } = this.props;
    return (
      <label htmlFor="rarefilter">
        Raridade:
        <select
          id="rarefilter"
          onChange={ ({ target }) => nFilter('cardRare', target) }
          data-testid="rare-filter"
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
    );
  }
}

RarityFilter.propTypes = {
  nFilter: PropTypes.func.isRequired,
};

export default RarityFilter;
