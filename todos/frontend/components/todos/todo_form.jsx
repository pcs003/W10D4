import React from 'react'
import {uniqueId} from '../../util/utils'


export default class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: uniqueId(),
            title: "",
            body: "",
            done: false,
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateDone = this.updateDone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }

    updateBody(e) {
        this.setState({
            body: e.target.value,
        });
    }

    updateDone(e) {
        this.setState({
            done: e.target.checked,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState({
            id: uniqueId(),
            title: "",
            body: "",
            done: false,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add Todo</h1>
                <label>
                    Title:
                    <input type="text" value={this.state.title} onChange={this.updateTitle} />
                </label>
                <label>
                    Body:
                    <textarea cols="30" rows="10" value={this.state.body} onChange={this.updateBody} ></textarea>
                </label>
                <label>
                    Done:
                    <input type="checkbox" checked={this.state.done} onChange={this.updateDone}/>
                </label>
                <button>Add Todo</button>
            </form>
        )
    }
}