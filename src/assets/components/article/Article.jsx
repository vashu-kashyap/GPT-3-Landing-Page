
import React from 'react';
import './article.css';

export default function Article({imageUrl, article_alt_text,date,title}) {
  return (
    <div className='article_container'>
      <div className="article_img">
        <img src={imageUrl} alt={article_alt_text} />
      </div>

      <div className="article_content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
      </div>

      <p> <a href="#">Reac Full Article</a></p>

    </div>
  )
}
