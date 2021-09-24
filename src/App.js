import React from 'react';
import './App.css';
import ContentContainer from './components/ContentContainer';
import Header from './components/Header';
import NewsList from './components/NewsList';

const App = React.memo(() => {

  const [news, setNews] = React.useState([]);
  const [filter, setFilter] = React.useState('Business');

  const requestNews = async () => {
    const url = `https://bing-news-search1.p.rapidapi.com/news?textFormat=Raw&safeSearch=Off&cc=mx&category=${filter}`;
    try {
      const request = await fetch(url, {
        headers: {
          "x-bingapis-sdk": "true",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key": "a9cc856590msh5738b80a39a7992p1ce0e0jsn917a00ab0bde"
        },
      })
      const response = await request.json()
      setNews(response.value);
    } catch (error) {
      console.error(error);
    }
  }

  const onChangeFilter = value => {
    const payload = value.replace(/\s/g,'');
    setFilter(payload)
  }

  React.useEffect(() => {
    requestNews();
  }, [filter])

  return (
    <div className="App">
      <Header onChangeFilter={onChangeFilter} />
      <ContentContainer>
        {news.length && (
          <NewsList news={news} />
        )}
      </ContentContainer>
    </div>
  );
})

export default App;
