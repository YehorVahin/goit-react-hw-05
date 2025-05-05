import './App.css'
import FeedBackForm from './components/FeedBackForm/FeedBackForm'
import { useState } from 'react'
import ArticleList from './components/ArticleList/ArticleList'
import { fetchArticlesWithTopics } from './articles-api'
import { SearchForm } from './components/SearchForm/SearchForm'


function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopics(topic);
      setArticles(data);
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <SearchForm onSearch={handleSearch}/>
      <FeedBackForm></FeedBackForm>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  )
}

export default App
