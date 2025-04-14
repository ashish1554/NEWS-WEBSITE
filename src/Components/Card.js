import React from 'react';

const Card = ({data}) => {
  const moreinfo = (url) => {
    return () => {
      window.open(url); // open new window with default settings
    }
  }
  return (
    <div className='cardContainer'>
      {data.map((item,index)=>{
        return(
          <div className='card'>
            <img src={item.urlToImage}></img>
            <div className='content'>
              <a href='' className='tag' onClick={()=>window.open(item.url)}>
              {item.title}
              </a>
              <p>
              {item.description}
              </p>
              <button onClick={()=>window.open(item.url)}>
                Read More
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card