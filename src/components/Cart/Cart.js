import React from 'react'


const Cart = (props) => {
  const {teacher}=props
  const total = teacher.reduce((prevSalary, currentSalary) => prevSalary + currentSalary.salary, 0)
    return (
        <div>
         <h5>Total Teacher: <i class="fas fa-user"></i>{props.teacher.length}</h5>
         <h5>Total Salary: {total}</h5>
         {
             teacher.map(tec =><p>{tec.name}</p> )
         }
        </div>
    );
};

export default Cart;