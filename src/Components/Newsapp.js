import React, { useEffect, useState } from 'react'
import Card from './Card'
const Newsapp = () => {
const API_KEY="ad89097790924d1b8f1af6a3034a9873"
const [search, setSearch] = useState("india")
const [newsData, setNewsData] = useState([])
const handleinput=(e)=>{
    setSearch(e.target.value)
}
useEffect(()=>{
    getData()
},[])
const getData=async()=>{
    const response=await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
    const jsonData=await response.json()
    console.log(jsonData.articles)
    setNewsData(jsonData.articles)
}
const userInput=(e)=>{
    setSearch(e.target.value)
}
  return (
    <div>
        <nav>
            <div>
                <h1>Trending News</h1>
            </div>
            <ul>
                <a href='#'>All News</a>
                <a href='#'>Trending</a>
            </ul>
            <div className='searchBar'>
                <input onChange={handleinput} type="text" placeholder='Search News' value={search}></input>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <p className='head'>
            Stay Update with TrendY News
        </p> 
        <div className='categoryBtn'>
            <button onClick={userInput} value="sports" >Sports</button>
            <button onClick={userInput} value="politics" >Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health" >Health</button>
            <button onClick={userInput} value="fitness" >Fitness</button>
        </div>
        <div>
            
            <Card data={newsData} />
        </div>
    </div>
)
}

export default Newsapp