import React, {useEffect, useState} from "react";

let Parser = require('rss-parser');

let parser = new Parser();


export default function NewsWidget() {
    const [newsData, setNewsData] = useState({loading: true, data: [],});

    useEffect(() => {
        setNewsData({loading: true});
        getNews().then((data) => {
            setNewsData({loading:false, data})
        });
    }, [setNewsData]);
    return(
        <>
            <div className={"title"}><h1>News</h1></div>
            <div className={"body"}>
                <h2> {newsData.loading ? "-" : newsData.data[0].title}</h2>
                <h3>{newsData.loading ? "-" : newsData.data[0].content}</h3>
            </div>


        </>
    )
}

 async function getNews(){
        let feed = await parser.parseURL('https://cors-anywhere.herokuapp.com/'+ 'http://feeds.bbci.co.uk/news/rss.xml');
        return feed.items;

 }