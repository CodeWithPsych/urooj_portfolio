import React from 'react';
import './portfolio.css'
import Card from '../Card/card';
import Soon from '../../images/soon.jpg'

const Portfolio = () => {

  return (
    <div className="portfolioSection">
      <div className="portfolioHeader" >Portfolio</div>
      <div className="portfolioCardSection">
        <div> <Card img={Soon} title='waiting...' /></div>
        <div> <Card img={Soon} title='waiting...' /></div>
        <div> <Card img={Soon} title='waiting...' /></div>
        <div> <Card img={Soon} title='waiting...' /></div>
        <div> <Card img={Soon} title='waiting...' /></div>

      </div>

    </div>
  )
}

export default Portfolio;