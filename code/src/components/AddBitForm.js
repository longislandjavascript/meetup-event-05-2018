// This component is not used in Part 1

import React, { Component } from 'react';
import { Col, Row, Input, InputNumber, Button, TimePicker } from 'antd';
import { addNewTimebit } from '../firebase/db';

const Column = props => (
  <Col {...props} style={{ margin: '2px' }}>
    {props.children}
  </Col>
);

class AddBitForm extends Component {
  state = {
    title: '',
    duration: '',
    durationSeconds: '',
    quantity: '',
  };

  updateTitle = e => this.setState({ title: e.target.value });

  updateDuration = (time, timeString) => {
    const durationSeconds = this.durationToSeconds(timeString);
    this.setState({ duration: time, durationSeconds });
  };

  durationToSeconds = timeString => {
    const splitArray = timeString.split(':');
    console.log('Split', splitArray);
    return splitArray
      .map((slice, i) => {
        if (i === 0) {
          return slice * 60 * 60;
        } else if (i === 1) {
          return slice * 60;
        }
      })
      .reduce((a, b) => a + b);
  };

  updateQuantity = value => this.setState({ quantity: value });

  submitForm = () => {
    console.log(this.props.uid);
    // addNewTimebit({
    //   uid: 123,
    //   title: 'Work',
    //   duration: 1234,
    //   completed: false,
    // });
  };
  render() {
    const { title, duration, quantity } = this.state;
    return (
      <Row>
        <Column xs={24} sm={4}>
          <label>Title</label>
          <Input
            value={title}
            maxLength={15}
            onChange={this.updateTitle}
            placeholder="Title"
          />
        </Column>
        <Column xs={1} sm={3}>
          <label>Duration</label>
          <TimePicker
            value={duration}
            onChange={this.updateDuration}
            placeholder="Duration"
            format="HH:mm"
          />
        </Column>
        <Column xs={8} sm={2}>
          <label>How Many?</label>
          <InputNumber
            value={quantity}
            onChange={this.updateQuantity}
            min={1}
            max={10}
            placeholder="Qty"
          />
        </Column>
        <Column xs={3} sm={2}>
          <Button onClick={this.submitForm}>Submit</Button>
        </Column>
      </Row>
    );
  }
}

export default AddBitForm;
