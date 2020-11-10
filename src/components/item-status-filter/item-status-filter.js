import React, {Component} from 'react'

import "./item-status-filter.css"


export default class ItemStatusFilter extends Component {

    state = {
        all: true,
        active: false,
        done: false
    }

    onToggleFilter = (e) => {
        const newArr = {} 
        for(let key in this.state){
            if (e.target.value === key) {
                newArr[key] = true
            } else {
                newArr[key] = false
            }
        }
        this.setState({
            ...newArr
        })
        this.props.onToggleFilter(e.target.value)
    };

    render() {

        const elements = () => {
            const elm = []
            for(let key in this.state){
                elm.push(
                    <button 
                        key={key}
                        type="button"
                        value={key}
                        className={this.state[key]? "btn btn-info" : "btn btn-outline-secondary" } 
                        onClick={this.onToggleFilter}>
                            {key}
                    </button>
                )
            }
            return elm
        }

        return (
            <div className="pull-right btn-group">
                {elements()}
            </div>
        );

        // return (
        //     <div className="pull-right btn-group">
        //         <button 
        //             type="button"
        //             value='all' 
        //             className={this.state.all ? "btn btn-info" : "btn btn-outline-secondary" } 
        //             onClick={this.onToggleFilter}>
        //                 All
        //         </button>
        //         <button 
        //             type="button"
        //             value='active' 
        //             className={this.state.active ? "btn btn-info" : "btn btn-outline-secondary" }
        //             onClick={this.onToggleFilter}>
        //                 Active
        //         </button>
        //         <button 
        //             type="button"
        //             value='done' 
        //             className={this.state.done ? "btn btn-info" : "btn btn-outline-secondary" }
        //             onClick={this.onToggleFilter}>
        //                 Done
        //         </button>
        //     </div>
        // );
    };
}
