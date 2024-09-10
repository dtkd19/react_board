import React from 'react';
import { useParams } from 'react-router-dom';
import { boardList } from '../data/data';
import './board.css';
import { Link } from 'react-router-dom';

const BoardDetail = () => {

    const { id } = useParams();
    const boardItem = boardList.find(b => b.id === parseInt(id));

    if (!boardItem) {
        return <div>게시물이 없습니다.</div>;
    }


    return (
        <div className='boardDetail'>

            <h2> Board Detail Page </h2>
            
            <table>
                <tbody>
                    <tr>
                        <th>번호</th>
                        <td>{boardItem.id}</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>{boardItem.title}</td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td>{boardItem.writer}</td>
                    </tr>
                    <tr>
                        <th>작성일</th>
                        <td>{boardItem.reg_date}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>{boardItem.contents}</td>
                    </tr>
                </tbody>
            </table>

            <Link to={'/boardModify'}><button>수정</button></Link>
            <button>삭제</button>
        </div>
       
    );
};

export default BoardDetail;