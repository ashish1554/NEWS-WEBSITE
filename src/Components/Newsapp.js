// import { useEffect, useState } from 'react'
// import Card from './Card'
// const Newsapp = () => {
// const API_KEY="pub_23c7f32f9042474e88834bf05cce9e7f"
// const [search, setSearch] = useState("india")
// const [newsData, setNewsData] = useState([])
// const handleinput=(e)=>{
//     setSearch(e.target.value)
// }



// const getData=async()=>{
//     // const response=await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
//     // const response=await fetch(`https://gnews.io/api/v4/search?q=${search}&apikey=${API_KEY}`)
//     const response = await fetch(`https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${search}&language=en`)

    

//     const jsonData=await response.json()
//     console.log(jsonData.articles)
//     setNewsData(jsonData.articles)
// }
// const userInput=(e)=>{
//     setSearch(e.target.value)
// }
// useEffect(()=>{
//   getData()
// },[])
//   return (
//     <div>
//         <nav>
//             <div>
//                 <h1>Trending News</h1>
//             </div>
//             <ul>
//                 {/* <a href='#'>All News</a>
//                 <a href='#'>Trending</a> */}
//                        <button onClick={() => setSearch("all")}>All News</button>
//                        <button onClick={() => setSearch("trending")}>Trending</button>
//             </ul>
//             <div className='searchBar'>
//                 <input onChange={handleinput} type="text" placeholder='Search News' value={search}></input>
//                 <button onClick={getData}>Search</button>
//             </div>
//         </nav>
//         <p className='head'>
//             Stay Update with TrendY News
//         </p> 
//         <div className='categoryBtn'>
//             <button onClick={userInput} value="sports" >Sports</button>
//             <button onClick={userInput} value="politics" >Politics</button>
//             <button onClick={userInput} value="entertainment">Entertainment</button>
//             <button onClick={userInput} value="health" >Health</button>
//             <button onClick={userInput} value="fitness" >Fitness</button>
//         </div>
//         <div>
            
//             <Card data={newsData} />
//         </div>
//     </div>
// )
// }

// export default Newsapp
import { useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
  const API_KEY = "pub_23c7f32f9042474e88834bf05cce9e7f"; // 🔁 Replace with your actual API key
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${search}&language=en`
      );
      const jsonData = await response.json();
      console.log(jsonData.results);
      setNewsData(jsonData.results || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleCategoryClick = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div>
      <nav>
        <div>
          <h1>Trending News</h1>
        </div>
        <ul>
          <button onClick={() => setSearch("all")}>All News</button>
          <button onClick={() => setSearch("trending")}>Trending</button>
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
