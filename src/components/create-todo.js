import React from "react";

class CreateToDo extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
        
    }
    
    handleCreate(event) {
        event.preventDefault();
        //get component value
        
        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);
        
        if (validateInput) {
            return this.setState({
                error: validateInput
            });
        }
        this.setState({error: null});
        this.props.createTaskS(task);
        this.refs.createInput.value = '';
    }
    
    render() {
        return (
            <form action="" onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do ?" ref="createInput"/>
                <button>Create</button>
                {this.renderError()}
            </form>
        )
    }
    
    
    validateInput(task) {
        if (!task) {
            return 'please write task';
        } else if (_.find(this.props.todos, todo=>todo.task === task)) {
            return 'Task already exists';
        } else {
            return null;
        }
    }
    
    renderError() {
        if (!this.state.error) {
            return null;
        }
        return (
            <div style={{color:'red'}}>
                {this.state.error}
            </div>
        )
    }
}

export default CreateToDo;