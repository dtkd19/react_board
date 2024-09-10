import React from 'react';
import { boardList } from '../data/data';
import { Link } from 'react-router-dom';
import './board.css';


const BoardList = () => {
    return (
        <div className='boardList'>
            <h2> Board List Page </h2>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                {
                     boardList.map(b => (

                    <tr key={b.id}>
                    <td>{b.id}</td>
                    <td><Link to={`/boardDetail/${b.id}`}>{b.title}</Link></td>
                    <td>{b.writer}</td>
                    <td>{b.reg_date}</td>   
                    </tr>

                        ))
                    }
                </tbody>
            </table>
            <Link to={'/boardCreate'}><button>글쓰기</button></Link>
        </div>
    );
};

export default BoardList;