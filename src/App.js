import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '한민우',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '이동기',
  'birthday': '890512',
  'gender': '남자',
  'job': '디자이너'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '김현우',
  'birthday': '950809',
  'gender': '남자',
  'job': '탐정'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); } ) }
      </div>
    );
  }
}

export default App;
