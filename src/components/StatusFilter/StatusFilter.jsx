import React from 'react';
import { useDispatch } from "react-redux";
import { setStatusFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';
import style from './StatusFilter.module.css';


const StatusFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
        dispatch(setStatusFilter(event.target.value));
    };
    return ( 
        <label className={style.label}>
        Find contacts by name
        <input
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Enter name" 
          onChange={handleFilterChange}
        />
        </label>
     );
}


StatusFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
 
export default StatusFilter;