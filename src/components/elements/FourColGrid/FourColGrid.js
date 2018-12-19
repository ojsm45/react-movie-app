import React from 'react';
import  PropTypes from 'prop-types';
import './FourColGrid.css';

const FourColGrid = (props) => {

  const renderElements = () => {
    const gridElements = React.Children.map(props.children, (element, i) => {
      return (
        <div key={i} className="rmdb-grid-element">
          {element}
        </div>
      );
    }); 
    gridElements.pop();

    return gridElements;
  };

  return(
    <div className="rmdb-grid">
      { props.header && !props.loading ? <h1>{ props.header }</h1> : null }
      <div className="rmdb-grid-content">
        { renderElements() }
      </div>
    </div>
  );
};

FourColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

export default FourColGrid;