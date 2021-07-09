import React from "react";
import List from "./conpoments/List";
class Todo extends React.Component{
  constructor() {
    super();
    this.state = {
      newItem : '',
      data:[]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onKeyUp(event) {
    if(event.keyCode === 13) {
      let text = event.target.value;
      if(!text || text === '') 
        return;
      this.setState({newItem:'',data:[...this.state.data, {todo:text, isComplete:false}]})
    }
  }
  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  onItemClicked(item) {
    return (event) => {
        const isComplete = item.isComplete;
        const {data} = this.state;
        const index = data.indexOf(item);
        this.setState({
            data:[...data.slice(0, index),
                {
                    ...item,
                    isComplete:!isComplete
                },
                ...data.slice(index+1) ]
        });
    };
}
itemDestroy(item) {
  return (event) => {
    const {data} = this.state;
    const index = data.indexOf(item);

    this.setState({
        data:[...data.slice(0, index),
            ...data.slice(index+1) ]
    });
  };
}

  componentDidUpdate() {
    localStorage.setItem('dataStorage', JSON.stringify(this.state.data))
  }
  componentDidMount() {
    const dataStorage = JSON.parse(localStorage.getItem('dataStorage'));
    if(dataStorage != null) {
      this.setState({data: dataStorage})
    }
  }


  render() { 
    const {data, newItem} = this.state;
    let count = this.state.data.length;
    return(
      <div className="app">
        <input 
                type="text"
                placeholder="Add a new item"
                value = {newItem}
                onChange={this.onChange}
                onKeyUp={this.onKeyUp}
        />
            {
                data.map((item) => {
                    return <List 
                    item={item} 

                    TurnClick = {this.onItemClicked(item)}
                    DestroyClick = {this.itemDestroy(item)}
                    />
                })
            }
            {
              <h>{count} item left</h>
            }
      </div>
    );
  };
}

export default Todo;
