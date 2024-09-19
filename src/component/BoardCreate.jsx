import React, { useRef, useState } from 'react';
import './board.css';
// import { Link } from 'react-router-dom';
import { boardList as nowBoardList } from '../data/data';
import { useNavigate } from 'react-router-dom';

const BoardCreate = () => {

    const today = new Date();

    const navigate = useNavigate();

    const nextId = useRef(8);

    const [form, setForm] = useState({
        title: '',
        writer: '',
        content: '',
    });


    const [boardList, setBoardList] = useState([...nowBoardList]);


    const onChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };


    const boardAdd = () => {
        const newBoard = {
            id: nextId.current,
            title: form.title,
            writer: form.writer,
            content: form.content,
            reg_date: today
        };

        setBoardList(boardList.concat(newBoard));

        setForm({
            title: '',
            writer: '',
            content: ''
        });

        nextId.current += 1;
        
        console.log(boardList);

        navigate('/boardList');

    };
    
    return (
        <div className='boardCreate'>
               <h2> Board Create Page </h2>

                <div >
                제목<input className='titleInput' type="text" name='title' placeholder='제목을 입력해주세요' onChange={onChange} value={form.title}/>
                이름<input className='nameInput' type="text" name='writer' placeholder='작성자' onChange={onChange} value={form.writer}/>
                </div>
                <textarea type="text" name='content' placeholder='내용을 입력해주세요' onChange={onChange} value={form.content}/>
                
                <button onClick={boardAdd}>등록</button>
        </div>
    );
};




export default BoardCreate;