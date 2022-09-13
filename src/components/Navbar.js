import React from 'react'
import logo from "./img.png"
export default function Navbar(props) {
  return (
    <div id="nav">
      <div className="logo"><img src={logo} /></div>
      <button className="button" onClick={() => {
        props.loading(true);
        fetch('https://reqres.in/api/users?page=1').then((res) => {
          return res.json();

        }).then((json) => {
          props.user(json.data);
          props.loading(false);
        })
      }}>Get Users</button>

    </div>
  )
}
