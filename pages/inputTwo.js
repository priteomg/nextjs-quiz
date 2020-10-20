import React, { Component } from 'react'
import {Button, Col, Row} from 'antd'
import { Input ,Space,Typography} from 'antd';

const {Title} = Typography
export default class InputTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
        

    }

    onChange = (e) => {
        this.setState({value: e.target.value})
    }

    onHit = (e) => {
        e.preventDefault(); 
        this.props.onHit(this.state.value)
        this.setState({value: ''})

      

    }

    render() {
        const value = this.props.value
        const inputValue = this.state.value
        const textInput = this.props.inputRef
        return (
            
            <Space direction="vertical">
                <Title level={4}>Current Text:</Title>
                <p className="value">{value}</p>
                <Input placeholder="Your text" value={inputValue} size="large" onChange={this.onChange} ref={textInput}/>
                <Button type="primary" onClick={this.onHit}> HIT </Button>
               
            </Space>
            
        )
    }
}
