import React, {useState, useEffect } from 'react';
import info from './img/info.svg';
import mail from './img/mail.svg';
import phone from './img/phone.svg';
import web from './img/web.svg';
import './infouser.css';
import './font/Mulish-VariableFont_wght.ttf'

function Item({match}){
    let urlinfo = info;
    let urlmail = mail;
    let urlphone = phone;
    let urlweb = web;

    useEffect(() => {
      fetchItems();
      console.log(match.params.id);
    }, []);
    
    const [item, setItem] = useState({});
    const [company, setcompany] = useState({});
    const [address, setaddress] = useState({});
    const fetchItems = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
        const item = await data.json();
        console.log(item.company);
        setaddress(item.address);
        setcompany(item.company);
        setItem(item);
    };
  return (
    <body className="bgr"> 
        <div className="main">
            <div className="text">
                <p className="name">{item.name}</p>
                <p className="username">{item.username}</p>
                <p className="companyname"> {company.name} </p>
                <li>
                    <img src={urlmail} ></img>
                    
                    {item.email}
                </li>
                <li>
                    <img src={urlinfo} ></img>
                    {address.street}, {address.suite}, {address.city}, {address.zipcode}
                </li>
                <li>
                    <img src={urlphone} ></img>
                    {item.phone}
                </li>
                <li>
                    <img src={urlweb} ></img>
                    {item.website}
                </li>
            </div>
        </div>
    </body>
  );
}

export default Item;