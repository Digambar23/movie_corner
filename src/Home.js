import React from 'react'
import Movies from './Movies';
import  Search from './Search';
// import {  useGlobalContext} from './Context';
// import { useGlobalContext } from './Context';

export const Home = () => {
  // const name=useContext(AppContext)
  // const name=useGlobalContext()
  return <>
  {/* <div>My Home Page</div> */}
  {/* <p>{name}</p> */}

  <Search />
  <Movies />
  </>
};
export default Home();