import React from "react";

class ToDosListItem extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }
    
    
    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        )
    }
    
    
    onEditClick() {
        this.setState({
            isEditing: true
        })
    }
    
    onCancelEdit() {
        this.setState({
            isEditing: false
        })
    }
    
    onSaveClick(event) {
        event.preventDefault();
        
        //    get oldValue
        const oldTask = this.props.task;
        //    get newValue;
        const newTask = this.refs.editInput.value;
        
        this.props.saveTask(oldTask, newTask);
        this.setState({
            isEditing: false
        })
        
        
    }
    
    renderTaskSection() {
        const {task, isCompleted} = this.props;
        const styleObj = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };
        
        if (this.state.isEditing) {
            return (
                <td>
                    <form action="" onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput"/>
                    </form>
                </td>
            )
        }
        
        return (
            <td style={styleObj}
                onClick={this.props.toggleTask.bind(this,task)}>
                {task}
            </td>
        )
        
    }
    
    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelEdit.bind(this)}>Cancel</button>
                </td>
            )
        }
        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.onDeleted.bind(this)}>Delete</button>
            </td>
        )
        
    }
    
    onDeleted(event) {
        event.preventDefault();
        const deleteCask = this.props.task;
        this.props.deleteTask(deleteCask);
    }
    
    
}

export default ToDosListItem;
