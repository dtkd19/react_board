import React, { useState } from 'react';
import './board.css';
import { useParams } from 'react-router-dom';
import { boardList as nowBoardList  } from '../data/data';
import { useNavigate } from 'react-router-dom';

const BoardModify = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const boardItem = nowBoardList.find(b => b.id === parseInt(id));


    const [boardList, setBoardList] = useState([...nowBoardList]);

    const [formData, setFormData] = useState({
        title: boardItem.title,
        contents: boardItem.contents,
        writer: boardItem.writer
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onModify = () => {
        const updatedBoardList = boardList.map(board => 
            board.id === boardItem.id
                ? { ...board, ...formData } 
                : board
        );

        setBoardList(updatedBoardList);


        navigate('/boardList');

    };



    return (
        <div className='boardModify'>
              <h2> {boardItem.id} / Board Modify Page </h2>

              <div>
                제목
                    <input
                        type="text"
                        name="title"
                        placeholder="제목"
                        value={formData.title}
                        onChange={onChange}
                        className='titleInput'
                    />
                작성자
                    <input
                        type="text"
                        name="writer"
                        placeholder="작성자"
                        value={formData.writer}
                        readOnly
                        onChange={onChange}
                        className='nameInput'
                    />
                </div>
                <div>
                    <textarea
                        name="contents"
                        placeholder="내용"
                        value={formData.contents}
                        onChange={onChange}
                    />
                </div>

            <button onClick={onModify}>수정</button>
        </div>
    );
};

export default BoardModify;