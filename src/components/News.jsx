import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
    return (
      <>
        <div className='news-container'>
            <div className='news-title'>
                <h1>News And Stories</h1>
                <div className='news-cards'>
                    <NewsCard/>
                </div>
            </div>
        </div>
      </>
    )
}

export default News
