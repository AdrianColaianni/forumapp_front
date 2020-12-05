
import { Component } from'react';
import {convertDateTimeToString} from './ConvertDateTime'


class QuestionDetail extends Component {
    state = {
        answers: [],
        submitAnswer: '',
        email: '',
        filteredAnswers: [],
        filteredQuestion: []
    }

    componentDidMount(){
        const temp = window.location.href.split('/');
        const len = temp.length
        const pk = temp[len - 1];
        console.log(pk)
        fetch('http://127.0.0.1:8000/api/v1/answers/?format=json')
        .then(res => res.json())
        .then((data) => {
            this.setState({answers: data})
            console.log(this.state.answers)
        })
        .catch(console.log)
        fetch('http://127.0.0.1:8000/api/v1/questions/'.concat(pk))
            .then(res => res.json())
            .then((data) => {
                this.setState({ filteredQuestion: data})
                console.log(this.state.filteredQuestion)
                this.setState({filteredAnswers: this.state.answers.filter(answer => this.state.filteredQuestion.answers.includes(answer.pk))})
                console.log(this.state.filteredAnswers)
                
            })
            .catch(console.log)
    }


	render() {
		if (this.state.filteredAnswers.length === 0){
			return(
				<div>
					<h1>Question</h1>
					<p class="question">{this.state.filteredQuestion.content}</p>
					<p>Asked {this.state.filteredQuestion.created_at}</p>
					<p>By {this.state.filteredQuestion.email}</p>
					<h2>There are not yet any answers for this questions.</h2>
				</div>
			)
		}
		return(
			<div>
				<h1>Question</h1>
				<p class="question">{this.state.filteredQuestion.content}</p>
				<p>Asked {this.state.filteredQuestion.created_at}</p>
				<p>By {this.state.filteredQuestion.email}</p>
				<h2>Answers:</h2>
				
				{this.state.filteredAnswers.map(answer => (<ul>
					<li>
						<div>{answer.content}</div>
						<div>Answered At: {answer.created_at}</div>
					</li>
				</ul>))}
			</div>
		)
	}
}
export default QuestionDetail;