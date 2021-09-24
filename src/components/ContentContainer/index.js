import React from 'react';
import './styles.css';

const ContentContainer = props => {
    return (
        <div className="content--container">
            <div className="content--wrapper">
                {props.children}
            </div>
        </div>
    )
}

export default ContentContainer;
