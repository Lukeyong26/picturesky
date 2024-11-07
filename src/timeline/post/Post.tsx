import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Post.css'
import React from 'react'

function Post({postImg} : {postImg:string}) {
  return (
    <div className='post'>
      <div className="post__image">
          <img 
              src={postImg}
              alt=''
          />
      </div>
      <div className="post__like">
          <button className='post__button'><FontAwesomeIcon icon={faHeart} /></button>
      </div>
    </div>
  )
}

export default Post