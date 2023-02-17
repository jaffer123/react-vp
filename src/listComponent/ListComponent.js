import React from 'react'
import Axios from "axios";
import { useState,useEffect } from "react";
import PlayComponent from '../playComponent/PlayComponent';
import '../listComponent/list.css';
const {API} = require('../vp.json');


function ListComponent() {
  const [mediaList, setMediaList] = useState([]);
  const fetchMediaList = async () => {
    let url = API.URL+'/media/all';
    const { data } = await Axios.get(url);
    const mediaList = data.data.mediaAll;
    setMediaList(mediaList);
    console.log(mediaList);
  };
  useEffect(() => {
    fetchMediaList();
  }, []);
  return (
    <div>
    <h1>List Component</h1>
      { mediaList.map((dt)=>(
        <div key = {dt.id} className='row' style={{paddingBottom: 30}}>
            <PlayComponent data={dt} / >
          <div className='col-sm-8'>
            <h4>{dt.title}</h4>
            <p>{dt.description}</p>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default ListComponent