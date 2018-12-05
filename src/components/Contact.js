import React, { Component } from 'react';

import getAccessToken from "../utils/gapiUtils"

class Contact extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      userMessage: ""
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  resetInput = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
      userMessage: ""
    })
  }

  checkIfEmptyBeforeSubmit = async e => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
      this.setState({
        userMessage: "Please check that you have completed all 3 fields before submitting"
      })
    } else {
      this.handleSubmit(e)
    }
  }

  handleSubmit = async e => {
    const date = new Date();
    const accessToken = await getAccessToken()

    await window.gapi.client.init({
      apiKey: process.env.GATSBY_API,
      discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4" ]
    })

    await window.gapi.client.setToken({access_token: accessToken})

    const response = await window.gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GATSBY_SHEET_ID,
      range: 'A1',
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [
            "",
            this.state.name,
            this.state.email,
            this.state.message,
            date
           ]
        ]
      }
    })

    if (response.status === 200) {
      this.setState({
        name: "",
        email: "",
        message: "",
        userMessage: "Your message have been logged and I will be in contact with you soon. :)"
      })
    } else {
      this.setState({
        userMessage: "Sorry your response could not be submitted through this form. Do contact me by dropping an email to chewminzhuang@hotmail.com instead."
      })
    }
  }

  render() {
    return (
      <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" value={this.state.message} onChange={this.handleChange}></textarea>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" className="special" onClick={this.checkIfEmptyBeforeSubmit} /></li>
            <li><input type="reset" value="Reset" onClick={this.resetInput}/></li>
          </ul>
        </form>
        <div>{this.state.userMessage}</div>
        <ul className="icons">
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/qwetuo" className="icon fa-github fa-2x"><span className="label">GitHub</span></a></li>
        </ul>
        {this.props.close}
      </article>
    );
  }
}

export default Contact;
