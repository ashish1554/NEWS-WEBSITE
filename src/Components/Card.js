// // import React from 'react';

// // const Card = ({data}) => {
// //   const moreinfo = (url) => {
// //     return () => {
// //       window.open(url); // open new window with default settings
// //     }
// //   }
// //   return (
// //     <div className='cardContainer'>
// //       {data.map((item,index)=>{
// //         return(
// //           <div className='card'>
// //             <img src={item.urlToImage}></img>
// //             <div className='content'>
// //               <a href='' className='tag' onClick={()=>window.open(item.url)}>
// //               {item.title}
// //               </a>
// //               <p>
// //               {item.description}
// //               </p>
// //               <button onClick={()=>window.open(item.url)}>
// //                 Read More
// //               </button>
// //             </div>
// //           </div>
// //         )
// //       })}
// //     </div>
// //   )
// // }

// // export default Card

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
import React, { useCallback, useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
  const API_KEY = "ad89097790924d1b8f1af6a3034a9873";
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);  // To handle error state

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  // Debounce to limit how frequently the API is called
  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  const getData = useCallback(async () => {
    setError(null);  // Reset error before each fetch
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const jsonData = await response.json();
      setNewsData(jsonData.articles);
    } catch (error) {
      setError(error.message);  // Set error message if the fetch fails
      console.error("Error fetching news:", error);
    }
  }, [search]);

  // Memoized version of the debounced getData function
  const debouncedGetData = useCallback(debounce(getData, 500), [getData]);

  useEffect(() => {
    debouncedGetData(); // Using the debounced function to avoid rapid calls
  }, [debouncedGetData]);

  const handleCategoryClick = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Trending News</h1>
        </div>
        <ul>
          <li><button onClick={() => setSearch('all')}>All News</button></li>
          <li><button onClick={() => setSearch('trending')}>Trending</button></li>
        </ul>
        <div className='searchBar'>
          <input 
            onChange={handleInput} 
            type="text" 
            placeholder='Search News' 
            value={search} 
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <p className='head'>Stay Updated with TrendY News</p>

      {error && <p className="error-message">{error}</p>}  {/* Error message if any */}

      <div className='categoryBtn'>
        <button onClick={handleCategoryClick} value="sports">Sports</button>
        <button onClick={handleCategoryClick} value="politics">Politics</button>
        <button onClick={handleCategoryClick} value="entertainment">Entertainment</button>
        <button onClick={handleCategoryClick} value="health">Health</button>
        <button onClick={handleCategoryClick} value="fitness">Fitness</button>
      </div>

      <div>
        <Card data={newsData} />
      </div>
    </div>
  );
};

export default Newsapp;

