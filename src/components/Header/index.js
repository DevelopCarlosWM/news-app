import React from 'react';
import './styles.css';
import { categories } from '../constants';

const Header = ({ onChangeFilter }) => {
    return (
        <div className="header">
            <div className="header--items__container">
                <select onChange={e => onChangeFilter(e.target.value)}>
                    {categories.map(item => (
                        <option value={item}>{item}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Header;
