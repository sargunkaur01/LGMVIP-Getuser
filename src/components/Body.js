import React from 'react'
import User from './User'
export default function Body(props) {
  return (
    <div className="body">
      {props.loading ? <div className="load"></div> :
        props.user.map((el) => {
          return <User key={el.id} el={el} />
        })}

    </div>
  )
}
