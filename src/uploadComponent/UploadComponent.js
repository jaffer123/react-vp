import React from 'react';
import {Form,Button} from 'react-bootstrap';
import { useState } from "react";
import axios from 'axios';  
const {API} = require('../vp.json');

function UploadComponent() {
    const [user_id, setUser_id] = useState("");
    const [category, setCategory] = useState("");
    const [title ,setTitle] = useState("");
    const [thumbnail,setThumbnail] = useState("");
    const [media_path,setMedia_path] = useState("");
    const [media_type,setMedia_type] = useState("");
    const [description,setDescription] = useState("");
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let url = API.URL+'/media';
            let apiInput = {
                user_id:user_id,
                category:[category],
                title:title,
                thumbnail:thumbnail,
                media_path:media_path,
                media_type:media_type,
                description:description,
            }
            
          let saveMedia = await axios({  
                method: 'post',
                url: url,
                data: apiInput
              }); 
              window.location.reload(true);
        } catch (err) {
            console.log(err);
          }
        };
  return (
    <>
    <h1>Upload Component</h1>
     <div style={{ display: 'block', 
                  width: 500, 
                  padding: 30 }}>
     <Form onSubmit={handleSubmit} action="/">
      <Form.Group>
          <Form.Label>User ID</Form.Label>
          <Form.Control name="user_id" type="text" value={user_id} onChange={(e) => setUser_id(e.target.value)} placeholder="Enter User Id" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control name="category" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Thumbnail Link</Form.Label>
          <Form.Control name="thumbnail" type="text" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} placeholder="Enter Thumbnail Link" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Media Link</Form.Label>
          <Form.Control name="media_path" type="text" value={media_path} onChange={(e) => setMedia_path(e.target.value)} placeholder="Enter Media Link" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Media Type</Form.Label>
          <Form.Control name="media_type" type="text" value={media_type} onChange={(e) => setMedia_type(e.target.value)} placeholder="Enter Media Type" />
        </Form.Group>
        <br></br>
        <Button variant="warning" type="submit">
           Upload
        </Button>
      </Form>
      </div>
    </>
  )
}

export default UploadComponent