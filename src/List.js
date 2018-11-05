import React, { Component } from 'react'

class List extends Component {
    render() {
        return (
            <div>
                {this.props.list.map((data, index) => {
                    return <span>{data.name}</span>
                })}
            </div>
        )
    }
}

export default List