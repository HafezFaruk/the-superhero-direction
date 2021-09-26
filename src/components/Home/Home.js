import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../Teacher/Teacher';
import './Home.css'

const Home = () => {
    const [teachers, setTeachers] = useState([]);
    const [teacher, setTeacher] = useState([]);
    useEffect(() =>{
        fetch('/fakeData.JSON')
        .then(res => res.json())
        .then(data => setTeachers(data));
    } ,[]);
    const handleCart = (tec) =>{
        const newTec =[...teacher,tec]
        setTeacher(newTec)

    }

    return (
        <div className="d-flex">
           <div className="home-left">
                {
                    teachers.map(teacher => <Teacher 
                        key={teacher.id}
                        handleCart={handleCart}
                        teacher={teacher}
                        ></Teacher>)
                }
           </div>
           <div className="home-right pt-3">
               <Cart teacher={teacher}></Cart>
           </div>
        </div>
    );
};

export default Home;