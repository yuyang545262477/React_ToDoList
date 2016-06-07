import React from "react";

class CreateToDo extends React.Component {
    handleCreate(event) {
        //get component value
        this.props.createTaskS(this.refs.createInput.value);
        this.refs.createInput.value = ''; 
        event.preventDefault();
    }
    
    render() {
        return (
            <form action="" onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do ?" ref="createInput"/>
                <button>Create</button>
            </form>
        )
    }
}

export default CreateToDo;