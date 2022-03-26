import React, { Component } from 'react';

class UserList extends Component {
  constructor() {
    super()
    this.state = {
      users: [
        
      ]
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({users: data}) );
  }

  render() { 
    return (
    <>
    {
      this.state.users.map((item,i)=>{
        return (
          
          <span key={i} className='li'>
            <div className='div' id='div'>
          <div  className='pic' ><img id='pic' src= {`https://robohash.org/${item.id}idJTU.png?set=set4&size=150x150`} /></div>
          <div className='text' id='name' >Name :  {item.name}</div> 
          <div  className='text' id='user'>UserName : {item.username}</div> 
          <div  className='text' id='email'>E-mail : {item.email}</div> 
          <div  className='text' id='phone'>Phone : {item.phone}</div>
          <div  className='text' id='web'> Website : {item.website}</div>
          <a href='user.html' ><img className='img' src='https://medispotmedical.com/wp-content/uploads/2018/09/read-more-icon.png'/> </a>
          </div>
          </span> 
                 
        )
      })
    }
    </>);
  }
}
 
export default UserList;