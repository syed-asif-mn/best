import React from 'react';
import Cards from './Cards.js';
import Search from './Hamburger/Search.js';
import './Home.css'

const searchEnabled = (updateText) => {
  window.scrollTo(0,0);
  return <Search updateText={updateText} />
}
const Home = ({posts, showSearchBar, showFavoriteCards, searchText, updateText}) => {
 
  return (
      <div>
      <div className="header" onClick = {()=>window.location.reload()}>best.</div>
        {showSearchBar ? searchEnabled(updateText): null}
        <Cards lyricData={posts} searchText={searchText} showFavs={showFavoriteCards} />
      </div>
  );
};

export default Home;
