import React from 'react'

export default function User(props) {
  return (
    <div className="box">
      <img src={props.el.avatar} alt="404" />
      <div className="writeup">
        <h3> User Id : {props.el.id}</h3>
        <h3> Name : {props.el.first_name} {props.el.last_name}</h3>
        <h3> Email : {props.el.email}</h3>
      </div>

    </div>
  )
}
