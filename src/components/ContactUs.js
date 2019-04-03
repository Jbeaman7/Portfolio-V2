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
              (Hey! This is broken right now. Feel free to connect with me on LinkedIn until I can get it fixed. Thanks! 😀 )
              </p>
              <form name="contact" method="POST" data-netlify="true" />     
            <input name="name" type="text"  placeholder="Name" />   
            <input name="email" type="text"  placeholder="Email" />   
            <textarea name="message" type="text"  placeholder="Message" />   
            <button type="submit">Send</button>
            <form/>
              {/* <form name="contact" method="POST" data-netlify="true">
                <p>
                  <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                  <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                  <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form> */}
            </div>
          </div>
        </section>
        </div>
        );
  }
}