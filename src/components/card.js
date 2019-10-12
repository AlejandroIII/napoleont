
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from 'gatsby-image'
const Card = ({ permalink,image,name,date }) => (

<div className="card-container " key={permalink}>
          <AniLink cover direction="left" bg="#161631" to={`/${permalink}`}>
          <Img className="" fluid={image}/>
          <div className="text">

          <h3 className="post-title">
           {name}
          </h3>
          <p className="date">{date}</p>
          </div>
          </AniLink>
        
        </div>

)

export default Card