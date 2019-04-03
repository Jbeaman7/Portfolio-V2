import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <Card>
                  <a href={`${item.link}`}>
                  <Image src={`${item.imgurl}`}/>
                  </a>
                  <Card.Content>
                    <Card.Header>{`${item.name}`}</Card.Header>
                    <Card.Meta>
                      <span className='date'>{`${item.date}`}</span>
                    </Card.Meta>
                    <Card.Description>{`${item.description}`}</Card.Description>
                  </Card.Content>
                </Card>
                
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}