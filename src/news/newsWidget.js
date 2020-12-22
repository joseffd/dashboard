import React, {useEffect, useState} from "react";
let Parser = require('rss-parser');

let parser = new Parser();

export default function NewsWidget() {
    let feed = getNews();

    console.log(feed.title);

    return(
        <>
            <h1>News</h1>
            <h2> degrees</h2>

        </>
    )
}

async function getNews(){
    let feed = await parser.parseURL('https://www.reddit.com/.rss');
    return feed;
}