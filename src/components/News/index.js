import React from 'react';
import './styles.css';

const News = ({ image, description, title, date }) => {

    const  formattedDate = (d = new Date()) => {
        let month = String(d.getMonth() + 1);
        let day = String(d.getDate());
        const year = String(d.getFullYear());
      
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
      
        return `${day}/${month}/${year}`;
    }

    return (
        <li>
            <div className="new--container__wrapper">
                <div className="new--title">
                    <p>{title}</p>
                </div>
                {image && (
                    <div className="new-image">
                        <img
                            src={image}
                            alt={title}
                        />
                    </div>
                )}
                <div className="new--description">
                    <p>{description}</p>
                </div>
                <div className="new--date">
                    <p>{formattedDate(new Date(date))}</p>
                </div>
            </div>
        </li>
    )
}

export default News;
