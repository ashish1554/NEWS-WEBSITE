import React from 'react';

const Card = ({data}) => {
  // const moreinfo = (url) => {
  //   return () => {
  //     window.open(url); // open new window with default settings
  //   }
  // }
  return (
    <div className='cardContainer'>
      {data.map((item,index)=>{
        return(
          <div className='card'>
            {/* <img src={item.urlToImage}></img> */}
            <img src={item.urlToImage} alt={`news-${index}`} />

            <div className='content'>
              <a href='#' className='tag' onClick={()=>window.open(item.url)}>
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

// import React from 'react';

// const Card = ({ data }) => {
//   return (
//     <div className='cardContainer'>
//       {data.map((item, index) => (
//         <div className='card' key={index}>
//           {/* ✅ Added alt text to avoid linting error */}
//           <img src={item.urlToImage} alt={`news-${index}`} />
          
//           <div className='content'>
//             {/* ✅ Provided a valid href and added rel and target */}
//             <a 
//               href={item.url} 
//               className='tag' 
//               target="_blank" 
//               rel="noopener noreferrer"
//             >
//               {item.title}
//             </a>

//             <p>{item.description}</p>

//             {/* ✅ Button works fine as-is */}
//             <button onClick={() => window.open(item.url)}>
//               Read More
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;