import React from 'react';
import classNames from 'classnames';
import iconcomplete from '../img/icon.svg';
import icon from '../img/iconcomplete.svg';
import destroy from '../img/destroy.svg';
class List extends React.Component 
{   
    render() {
        const {item, TurnClick, DestroyClick} = this.props;
        let urlCheck = icon;
        let urlDestroy = destroy;
        if(item.isComplete) {
            urlCheck = iconcomplete;
        }

        // console.log(item.todo);
        return(
            
            <div    
                className= {classNames('Todo', {' Todo-completed' : item.isComplete})} 
            >  
                <img onClick={TurnClick} className="Check" src={urlCheck} alt="Check "></img>
                <h>{item.todo}</h> 
                <img className="Destroy" onClick={DestroyClick} src={urlDestroy} alt="Destroy" ></img>  
            </div>
        );
    };
}

export default List;
