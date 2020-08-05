import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/pageHeader';

import './style.css'

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader />
        </div>
    )
}

export default TeacherList;