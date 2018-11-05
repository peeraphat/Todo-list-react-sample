import React, { Component } from 'react';
import { Layout, Button, Input, message, } from 'antd'
import './App.css'
const {Content } = Layout

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  handleAddTodo(e) {
    console.log(e.target.value)
    let list = this.state.list
    list.push({
      name: e.target.value,
      status: false
    })
    this.setState({
      ...list
    })
    message.success('Add success', 0.5)
  }
  
  handleDelete(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      ...list
    })
    message.success('Delete success', 0.5)
  }
  handleFinishJob(index) {
    console.log('index', index)
    let list = this.state.list
    list[index].status = true
    this.setState({
      ...list
    })
    message.success('Congratulation !', 0.5)
  }
  handleEdit(index) {
    let list = this.state.list
    let text = window.prompt('What do you want to change?', list[index].name)
    if(text) {
      list[index].name = text
      this.setState({
        ...list
      })
      message.success('Edite success.', 0.5)
    }
  }
  countDone() {
    return this.state.list.filter(data => data.status === true).length
  }
  countActive() {
    return this.state.list.filter(data => data.status === false).length
  }

  render() {
    return (
      <div>
        <Layout>
          <h1>My TODO-List.</h1>
          <Content className="content">
            <Input size="large" placeholder="Enter Todo-list" onPressEnter={(e) => {
              this.handleAddTodo(e)
              e.target.value = ""
            }}/>
            {this.countActive()!==0?<h2>Active {this.countActive()}</h2>:null}
            {this.state.list.map((data, index) => {
                return (
                  data.status===false?
                  <div key={index}>
                    <Button size="small" icon="check" type="ghost" onClick={() => this.handleFinishJob(index)} />
                    <Button size="small" icon="edit" type="ghost" onClick={() => this.handleEdit(index) } />
                    <Button size="small" icon="delete" type="danger" onClick={() => this.handleDelete(index)} />
                    {` `}
                    {data.name}
                  </div>:null
                )
            })}
            {this.countDone()!==0?<h2>Finish job.</h2>:null}
            {this.state.list
              .filter(data => data.status === true)
              .map((data, index) => {
                return (
                  <div key={index}>
                    {data.name}
                  </div>
                )
              })
            }
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
