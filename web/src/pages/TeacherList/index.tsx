import React from 'react';

import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import './style.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" />
                    <Input name="week day" label="Dia da semana" />
                    <Input name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div >
    )
}

export default TeacherList;