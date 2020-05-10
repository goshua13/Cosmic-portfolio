import React from 'react'
import {withRouteData} from 'react-static'
import Markdown from "react-markdown";
import { Link } from 'components/Router'
 
export default withRouteData(({post}, props) => (
  <React.Fragment>
    <div className="content">
      <Link to="/">{'<'} Back bro</Link>  
    </div>
    <article>
      <h1>{post.metadata.title}</h1>
      {/* <div>
        <img
          alt={post.metadata.title}
          src={post.metadata.image.url}
        />
      </div> */}
      <Markdown className='text-bounce' source={post.metadata.content} />
  </article>
  </React.Fragment>
))
