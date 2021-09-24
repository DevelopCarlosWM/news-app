import React from 'react';
import './App.css';
import ContentContainer from './components/ContentContainer';
import NewsList from './components/NewsList';

const App = React.memo(() => {

  const [news, setNews] = React.useState([]);
  const [sortedNews, setSortedNews] = React.useState([]);

  const requestNews = async () => {
    const url = 'https://bing-news-search1.p.rapidapi.com/news/search?q=ALL&safeSearch=Off&textFormat=Raw&freshness=Day&cc=mx&count=100';
    try {
      const request = await fetch(url, {
        headers: {
          'x-bingapis-sdk': 'true',
          'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
          'x-rapidapi-key': 'a9cc856590msh5738b80a39a7992p1ce0e0jsn917a00ab0bde',
        },
      })
      const response = await request.json()
      console.log(response.value);
      setNews(response.value);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    requestNews();
  }, [])

  return (
    <div className="App">
      <ContentContainer>
        {news.length && (
          <NewsList news={news} />
        )}
      </ContentContainer>
    </div>
  );
})

export default App;
