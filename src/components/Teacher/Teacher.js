import React from 'react';
import './Teacher.css'
const Teacher = (props) => {
    const { name, age, position, country, salary, img } = props.teacher || {};
    return (
        <div>
            <div className="card m-3 text-center teacher">
                <img src={img} className="card-img-top m-auto" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">{position}</p>
                    <p className="card-text">Salary: ${salary}</p>
                    <p className="card-text">Country: {country}</p>
                    <div className="d-flex justify-content-around fs-1">
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-github-square"></i>
                    </div>
                </div>
                
                <div onClick={()=> props.handleCart(props.teacher)} className="card-footer border border-0 bg-light">
                    <button className="btn btn-success btn-lg border border-0 px-5 py-2"><i class="fas fa-user-plus"></i>Add To Cart</button>
                </div>
            </div>
       </div>
    );
};

export default Teacher;