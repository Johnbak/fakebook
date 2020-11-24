
import React,{useState} from 'react';
import './App.css';
import Navbar from './Navbar'
import Input from './Input'
import Post from './Post'

let id = 1;

function App() {
    const [posts, setPosts] = useState([]);
    
    function addPost(title){
      const newPost ={id,title};
      setPosts([newPost,...posts]); //array defacturing     
      id +=1;
    }

    function deletePost(id){
      const updatedPost = posts.filter((post)=>post.id !== id)
      setPosts(updatedPost)
    }
  return (
    <div className="App">
      <Navbar/>
      <Input addPost={addPost}/>
      {posts.map((post)=>
      <Post id={post.id} title={post.title} deletePost={deletePost} key={post.id}
       />)}  
    </div>
  );
}

export default App;
