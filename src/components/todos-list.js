import _ from "lodash";
import React from "react";
import ToDosListItem from "./todos-list-item";
import ToDosListHeader from "./todos-list-header";

class TodosList extends React.Component {
    
    render() {
        window.console.log(this.renderItems());
        return (
            <table>
                <ToDosListHeader/>
                <tbody>
                {this.renderItems()}
                </tbody>
            </table>
        )
    }
    
    renderItems() {
        // window.console.log(this.props);
        const props = _.omit(this.props, 'todos');
        
        return _.map(this.props.todos, (todo, index)=><ToDosListItem key={index} {...todo} {...props}/>)
        
    }
}

export  default TodosList;