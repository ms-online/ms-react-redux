import React, { Component } from 'react';

class Contact extends Component {
    render() {
        // console.log(this.props)
        const { name, age, sex} = this.props
        return (
            <div className="ContactFrom">
                <div>{ name }</div>
                <div>{ age }</div>
                <div>{ sex }</div>
            </div>
        )
    }
}

export default Contact