import React from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

const Navigator = () => {
    return(
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/introduce">소개</Link></li>
            <li><Link to="/project">프로젝트</Link></li>
        </ul>
    );
};

export default Navigator;