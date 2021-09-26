import React from 'react';
import './Teacher.css'
const Teacher = (props) => {
    const { name, age, position, country, salary, img } = props.teacher || {};
    return (
        <div>
            <div className="card m-3 text-center teacher">
                <img src={img} className="card-img-top m-auto" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">Position: {position}</p>
                    <p className="card-text">Salary: ${salary}</p>
                    <p className="card-text">Country: {country}</p>
                </div>
                <div className="card-footer border border-0 bg-light">
                    <button className="btn-primary border border-0 px-4 py-2">Add To Cart</button>
                </div>
            </div>
       </div>
    );
};

export default Teacher;