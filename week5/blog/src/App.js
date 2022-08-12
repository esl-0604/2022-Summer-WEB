import React, { useState } from 'react';
import { GoGrabber } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import './App.css';
import Modal from "./component/modal";
import List from './component/list';
import Posting from './component/posting';




function App() {

  const [modal, setModal] = useState(false);

  const [title, titlechange] = useState([0, 'React']);
  const [post, postChange] = useState([
      {index : 0, title : 'JSX', like : 0},
      {index : 1, title : 'Data Binding', like : 0},
      {index : 2, title : 'State', like : 0},
      {index : 3, title : 'Component', like : 0}
    ]);

  const changingTitle = () => {
    const newTitle = [...title];

    if(newTitle[0] === 0){
      newTitle[1] = 'React에 대해 공부해봅시다';
      newTitle[0] = 1;
    }else{
      newTitle[1] = 'React';
      newTitle[0] = 0;
    }
  
    titlechange(newTitle);
  }

  const [postingON, setPosting] = useState(false);

  const posting = () => {
    if(postingON === false){
      setPosting(true);
      console.log('포스팅 중~~')
    }
  }

  return (
    <div className='App'>

      {/* 화면 최상단 */}
      <nav className='black-nav'>
        <div className='nav-title'><span onClick={() => {window.location.href = '/';}} style={{cursor: 'pointer'}}>개발 Blog</span></div>
        <div className='nav-icon' onClick={()=>{
          setModal(!modal);
        }}>
          <GoGrabber style={{width: '100%', height: '100%', cursor: 'pointer'}}/>
          {modal === true ? <Modal/> : null}
        </div>
      </nav>
      

      {/* 화면 본문 */}
      <div className='list-body'>
      
      {/* 화면 본문 제목 */}
        <h1 style = { {cursor: 'pointer'} } onClick={ changingTitle }> { title[1] } </h1>

      {/* 화면 본문 리스트 */}
        <List post = {post} postChange = {postChange} />

      {/* 화면 본문 리스트 추가 창 */}
        {postingON === true ? <Posting post={post} setPost={postChange} posting={setPosting}/> : null}

      {/* 화면 본문 리스트 추가 버튼 */}
        <button className='posting-button' style = { {cursor: 'pointer'} } onClick={posting} disabled = {postingON}>
          <AiOutlinePlus  style={{width: '100%', height: '100%', color: 'gray'}}/>
        </button>
        
      </div>
    </div>
  );
}

export default App;