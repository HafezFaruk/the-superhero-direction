import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import './Home.css'

const Home = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() =>{
        fetch('/fakeData.JSON')
        .then(res => res.json())
        .then(data => setTeachers(data));
    } ,[]);
    return (
        <div className="d-flex">
           <div className="home-left">
                {
                    teachers.map(teacher => <Teacher 
                        key={teacher.id}
                        teacher={teacher}
                        ></Teacher>)
                }
           </div>
           <div className="home-right pt-3">
               <h4>Teacher Added: </h4>
               <h4>Total Cost: </h4>
           </div>
        </div>
    );
};

export default Home;