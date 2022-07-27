import React from 'react';
import PropTypes from 'prop-types';

class TrunfoFilter extends React.Component {
  render() {
    const { hndlIsTrunfo } = this.props;
    return (
      <label htmlFor="trunfofilter">
        Trunfo:
        <input
          type="checkbox"
          id="trunfofilter"
          onChange={ hndlIsTrunfo }
          data-testid="trunfo-filter"
        />
      </label>
    );
  }
}

TrunfoFilter.propTypes = {
  hndlIsTrunfo: PropTypes.func.isRequired,
};

export default TrunfoFilter;
