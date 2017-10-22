import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import LeadParagraph from "./LeadParagraph";

// TODO: Post Form to Google Sheets to track messages

const ContactForm = () => (
  <Form>
    <LeadParagraph title="Contact Us" details="Send us a message." />
    <FormGroup>
      <Label for="name">Full Name</Label>
      <Input type="text" name="name" id="name" placeholder="John Doe" />
    </FormGroup>
    <FormGroup>
      <Label for="email">Email</Label>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="john.doe@email.com"
      />
    </FormGroup>

    <FormGroup>
      <Label for="exampleText">Message</Label>
      <Input
        type="textarea"
        name="text"
        id="exampleText"
        placeholder="message"
      />
    </FormGroup>

    <Button>Submit</Button>
  </Form>
);

export default ContactForm;
