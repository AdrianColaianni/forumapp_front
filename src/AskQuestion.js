import React, { Component } from "react";

class AskQuestion extends Component {
    state = {
        question: null
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h2>Ask your question here!</h2>
                <QuestionForm></QuestionForm>
            </div>
        );
    }
}

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: '', email: ''};

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangeContent(event) {
        this.setState({content: event.target.value});
    }

    handleSubmit(event) {
        fetch('http://127.0.0.1:8000/api/v1/questions/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: this.state.content,
                email: this.state.email,
                has_answer: false,
            })
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Content:
                    <input type="text" value={this.state.content} onChange={this.handleChangeContent} />
                </label>
                <label>
                    Email:
                    <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
                </label>
                <input class="button" type="submit" value="Submit" />
            </form>
        );
    }
}

export default AskQuestion;