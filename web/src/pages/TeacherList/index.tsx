import React from 'react';

import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import './style.css'
import Select from '../../components/Select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biolodia', label: 'Biolodia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Física', label: 'Física' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input type="time" name="time" label="Hora" />

                    <button type="submit">
                        Pesquisar
                    </button>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div >
    )
}

export default TeacherList;