import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardList from './BoardList';
import BoardDetail from './BoardDetail';
import BoardCreate from './BoardCreate';
import './board.css';
import BoardModify from './BoardModify';

const BoardHome = () => {
    return (
        <div className='boardHome'>
            <h1>MY First Recat Board Page!!!</h1>
            <hr />
            <BrowserRouter>
            <Routes>
            <Route path="/" element= {<BoardList/>} />
            <Route path="/boardList" element= {<BoardList/>} />
            <Route path="/boardDetail/:id" element= {<BoardDetail/>} />
            <Route path="/boardCreate/" element= {<BoardCreate/>} />
            <Route path="/boardModify/:id" element= {<BoardModify/>} />
            
            </Routes>
            </BrowserRouter>

        </div>
    );
};

export default BoardHome;