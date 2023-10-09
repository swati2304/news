import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css"
import NewsArticles from "../../components/news/newsArticles";

export default function News(){
    const [news, setnews] = useState ([])
    const [searchquery, setsearchquery] = useState (['pune'])

    const loadNews = async() => {
        try{
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchquery}&from=2023-10-07&to=2023-10-07&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);
        
        setnews(response.data.articles);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        loadNews();
    }, []);

    useEffect(()=>{
        loadNews();
    }, [searchquery]);


    return(
        <div>
            <h1>News App</h1>

            <input type="text"
            className="search-input"
            value={searchquery} onChange={(e)=>{
                setsearchquery(e.target.value)
            }}/>
            
            <div className="news-container">
            {
                news.map((newsArticles, index)=>{
                    const {title, author, description,url, urlToImage, publishedAt}=newsArticles
                    
                    return(<NewsArticles title={title} author={author} description={description}
                         urlToImage={urlToImage} publishedAt={publishedAt} url={url} key={index} />
                    )
                })
            }
            </div>
        </div>
    )
}