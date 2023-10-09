import React from "react";
import "./newsArticles.css"

export default function NewsArticles({title, author, url, description, urlToImage, publishedAt}){
    return(
        <div className="news-articles-card"> 
            <img src={urlToImage} className="news-articles-image"/>
            <h2>{title}</h2>
            <div className="article-info">
                <p className="">{author}</p>
                <p>{publishedAt}</p>
            </div>
            <p>{description}</p>
            <a href={url} target="blank" className="btn-news">Read more</a>
        </div>
    )
}