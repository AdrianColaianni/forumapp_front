import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import AskQuestion from "./AskQuestion";
import QuestionList from "./QuestionList";
import QuestionDetail from "./QuestionDetail";
import UnansweredQuestions from "./UnansweredQuestions";

class App extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>EPHS TECH SUPPORT FORUM</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/ask-question">Ask a Question</NavLink></li>
                    <li><NavLink to="/unanswered">Unanswered Questions</NavLink></li>
                    <li><NavLink to="/questions">All Questions</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/questions" component={QuestionList}/>
                    <Route path="/ask-question" component={AskQuestion}/>
                    <Route path="/questions/:pk" component={QuestionDetail}/>
                    <Route path="/unanswered" component={UnansweredQuestions}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}

export default App;