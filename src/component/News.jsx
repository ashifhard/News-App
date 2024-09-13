import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

const apiKey = import.meta.env.VITE_API_KEY;

function News(props) {
    const { category } = props;
    console.log(category);

    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&apiKey=${apiKey}`;
        setPage(prevPage => prevPage + 1); // Update page number safely
        try {
            let response = await fetch(url);
            let parsedData = await response.json();
            setArticles(prevArticles => [...prevArticles, ...parsedData.articles]); // Update articles state
            setTotalResults(parsedData.totalResults);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Add dependencies

    return (
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchData}
            hasMore={articles.length < totalResults}
            loader={<h4 className="text-center">Loading...</h4>}
            endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className="container my-3">
                <div className="row">
                    {articles.length > 0 && articles.map((element) => {
                        console.log({ element });
                        return (
                            <div className="col-md-4" key={element?.url}>
                                <NewsItem
                                    sourceName={element?.source.name}
                                    title={element?.title}
                                    desc={element?.description}
                                    imageURL={element?.urlToImage || ''}
                                    newsUrl={element?.url}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </InfiniteScroll>
    );
}

// Define PropTypes for the component
News.propTypes = {
    category: PropTypes.string.isRequired,
};

export default News;
