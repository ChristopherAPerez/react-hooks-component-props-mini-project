import React from "react";
import Article from "./Article";

function ArticleList(props){

    const posts = props.posts

    console.log(posts)

    const array = posts.map((post) => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    });

    return (
        <main>
            {array}
        </main>
    );
}

export default ArticleList;