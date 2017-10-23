import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import LeadParagraph from "./LeadParagraph";

class ContactForm extends React.Component {
  constructor(props){
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      name: '',
      message: '',
      email: '',
      thankyou: ''
    };
  }

  onChange(e){ 
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state.name)
  }

  // TODO: Post Form to Google Sheets to track messages
  handleSubmit(event){ 
    event.preventDefault();
    //name=calls%20you2&message=Tell%20us%20whats%20on%20your%20mind...&email=your.name%40email.com&color=%23000000&formDataNameOrder=%5B%22name%22%2C%22message%22%2C%22email%22%2C%22color%22%5D&formGoogleSheetName=responses&formGoogleSendEmail=example%40email.net
    var eName = encodeURIComponent('name') + '=' + encodeURIComponent(this.state.name)
    var eEmail = encodeURIComponent('email') + '=' +  encodeURIComponent(this.state.email)
    var mMessage = encodeURIComponent('message') + '=' + encodeURIComponent(this.state.message)
    const querystring = eName + '&' + eEmail + '&' + mMessage + '&' + 'formGoogleSheetName=responses'
    console.log(querystring)

    fetch('https://script.google.com/macros/s/AKfycbzSb7Dwtttgx_H6g7OtZgR2bSObstCnzZuQn1Oh4mvgoVjjCgye/exec?' + querystring, {
      method: 'post',
      headers: {'Content-Type':'application/x-www-form-urlencoded'}
    }).then(response => {
      if(!response.ok){
          throw Error("Network request failed")
      }
      console.log(response)
      return response
    }), () => {
      this.setState({
          requestFailed: true
      })
    };

    if(!this.state.requestFailed){
      this.setState({thankyou:(<div>
                                <h2><em>Thanks</em> for filling out our test form!
                                  We will get back to you soon!</h2>
                              </div>)})
      this.setState({
        name: '',
        message: '',
        email: ''
      })
      
    }
  }

  render() {
    if(this.state.requestFailed) return <p>Failed!</p>
    const { name, message, email } = this.state;
    console.log(this.message);

    return (
    <Form id="gform" onSubmit={this.handleSubmit}>
      <LeadParagraph title="Contact Us" details="Send us a message." />
      <FormGroup>
        <Label for="name">Full Name</Label>
        <Input type="text" name="name" id="name" value={name} placeholder="John Doe" onChange={this.onChange} />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="john.doe@email.com"
          onChange={this.onChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="message">Message</Label>
        <Input
          type="textarea"
          name="message"
          id="message"
          placeholder="message here"
          value={message}
          onChange={this.onChange}
        />
      </FormGroup>

      { this.state.thankyou }
      <Button>Submit</Button>
      <label id="thanks"></label>
    </Form>
    )
  }
}

export default ContactForm;