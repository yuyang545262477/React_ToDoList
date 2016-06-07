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
    
    renderTaskSection() {
        const {task, isCompleted} = this.props;
        const styleObj = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };
        
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
                    <button>Save</button>
                    <button onClick={this.onCancelEdit.bind(this)}>Cancel</button>
                </td>
            )
        }
        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button>Delete</button>
            </td>
        )
        
    }
    
}

export default ToDosListItem;
