import React from 'react';
import { useDispatch } from "react-redux";


import style from './StatusFilter.module.css';
import { setStatusFilter } from 'redux/filterSlice';


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


 
export default StatusFilter;