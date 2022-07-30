import React, { useState } from 'react';
import logo from './logo.svg';
import { GoGrabber } from "react-icons/go";
import './App.css';

function List(props) {
  return <div className='list'>
    <h3> { props.title } <span className='icon' onClick={()=>{props.action[1](props.action[0]+1)}}>  👍</span>{props.action[0]}</h3>
    <p> { props.body } </p>
    <hr/>
  </div>
}

function App() {

  const [title, titlechange] = useState('React')
  const [p1, p1change] = useState(['1. JSX', 'react에서는 html과 조금 다른 jsx라는 언어를 사용한다. \n\n jsx와 html이 다른 문법들에 대해서 알아보고 이해할 필요가 있다.'])
  const [p2, p2change] = useState(['2. Data Binding', 'react에서는 기존 js보다 훨씬 쉽고 빠르게 데이터 바인딩을 할 수 있다. \n\n 그냥 변수에 데이터를 넣고 html에 {}로 그대로 전달하면 된다.'])
  const [p3, p3change] = useState(['3. State', 'useState 함수를 활용하여 사용한다. \n\n useState() 사용법을 익히자.\n\n useState()의 장점 \n - 데이터가 바뀔 때마다 자동으로 새로고침 없이 재랜더링을 해준다. \n - state를 deep copy하여 사용할 수 있다.'])
  const [p4, p4change] = useState(['4. Component', 'react에서는 html 태그를 사용자 정의로 만들어서 활용할 수 있다. \n\n 함수형식으로 정의하여 프로퍼티로 전달해준 내용을 해당 태그에서 표현할 수 있다.'])

  const [따봉1, 따봉변경1] = useState(0)
  const [따봉2, 따봉변경2] = useState(0)
  const [따봉3, 따봉변경3] = useState(0)
  const [따봉4, 따봉변경4] = useState(0)

  return (
    <div className='App'>
      <nav className='black-nav'>
        <div className='nav-title'><span onClick={() => {window.location.href = '/';}} style={{cursor: 'pointer'}}>개발 Blog</span></div>
        <div className='nav-icon'>
          <GoGrabber style={{width: '100%', height: '100%', cursor: 'pointer'}}/>
        </div>
      </nav>

      <div className='list'>
        <h1> { title } </h1>
      </div>
      <List title = {p1[0]} body = {p1[1]} action = {[따봉1, 따봉변경1]}></List>
      <List title = {p2[0]} body = {p2[1]} action = {[따봉2, 따봉변경2]}></List>
      <List title = {p3[0]} body = {p3[1]} action = {[따봉3, 따봉변경3]}></List>
      <List title = {p4[0]} body = {p4[1]} action = {[따봉4, 따봉변경4]}></List>
    </div>
  );
}

export default App;