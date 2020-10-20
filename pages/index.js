import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from 'react'
import {Button, Col, Row, Space} from 'antd'
import InputOne from './inputOne'
import InputTwo from './inputTwo'


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ""}
    this.textInput1 = React.createRef()
    this.textInput2 = React.createRef()
  }

  onHit1 = (value) => {
    this.setState((state)=> ({
      value: state.value + value
    }))

    this.textInput2.current.focus()

  }

  onHit2 = (value) => {
    this.setState((state)=> ({
      value: state.value + value
    }))

    this.textInput1.current.focus()

  }

  reset = () => {
    this.setState({
      value: ""
    })
  }

  render() {
    const value  =  this.state.value
    return (
      <div className="container">
      
      <Space direction="vertical">
      <Row>
        <div className="flex-box">
          <div className="box">
            <Col span={12}><InputOne value={value} handleChange={this.handleChange} onHit={this.onHit1} inputRef={this.textInput1}/></Col>
          </div>
          <div className="box">
            <Col span={12}><InputTwo value={value} handleChange={this.handleChange} onHit={this.onHit2} inputRef={this.textInput2}/></Col>
          </div>
        </div>
      </Row>

      <div className="button">
      <Button type="primary" onClick={this.reset}>RESET</Button>
      </div>
      
    </Space>
      <style global jsx>{`
        .container {
          padding: 20px;
          margin: auto 0
        }

        .value {
          color: green
        }

        .button {
          margin-top: 1.5rem;
          text-align: center
        }

        .box {
          border : 1px solid green;
          padding : 2rem;
          width: 670px
        }
        .flex-box {
          display: flex;
          justify-content: space-around
        }

        
      `}

      </style>
    
    </div>
    )
   

  }
}
