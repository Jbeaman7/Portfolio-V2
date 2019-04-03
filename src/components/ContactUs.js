import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
              <form action="https://formspree.io/jordanbeaman94@gmail.com" method="POST" />     
          <input name="name" type="text" class="feedback-input" placeholder="Name" />   
          <input name="email" type="text" class="feedback-input" placeholder="Email" />
          <textarea name="text" class="feedback-input" placeholder="Message"></textarea>
          <input type="submit" value="SUBMIT"/>
        <form/>
            </div>
          </div>
        </section>
        </div>
        );
  }
}