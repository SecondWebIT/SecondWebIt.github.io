import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function List(){
    useEffect(() => {
      fetchItems();
    }, []);
    
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const items = await data.json();
      setItems(items);
    };
  return (
    <div>
      {
      items.map(items => (
        <h2 key={items.id}>
          <Link to={`/users/${items.id}`}> {items.name} </Link>
        </h2>
      ))
      }
    </div>
  );
}

export default List;