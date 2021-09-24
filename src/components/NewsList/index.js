import React from 'react';
import News from '../News';
import './styles.css';

const NewsList = ({ news }) => {
    return (
        <ul className="news-list--container">
            {news.map(item => (
                <News
                    title={item.name}
                    description={item.description}
                    date={item.datePublished}
                    image={item.image ? item.image.thumbnail.contentUrl : ''}
                />
            ))}
        </ul>
    )
}

export default NewsList;
