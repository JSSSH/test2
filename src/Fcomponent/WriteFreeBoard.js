import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Fcss/WriteFreeBoard.css';

function WriteFreeBoard({ userInfo }) {

  const [board, setBoard] = useState({
    fbTitle : '',
    fbContent : '',
    fbFiles : '',
    user : userInfo
  });

  const navigate = useNavigate();

  const boardChangeHandler = (e) => {
    setBoard({
      ...board,
      [e.target.name] : e.target.value
    })
  }

  return(
    <div className="form-container">
      <h3 className="write-title">게시판 글쓰기</h3>
        <div className="input-container">
          <label className="form-label" htmlFor="title">제목</label>
          <input type="text" id="title" name="fbTitle" placeholder="제목을 입력하세요" onChange={boardChangeHandler}/>
        </div>
        <div className="input-container">
          <label className="form-label" htmlFor="content">내용</label>
          <textarea id="content" name="fbContent" placeholder="내용을 입력하세요" onChange={boardChangeHandler}></textarea>
        </div>
        <div className="input-container">
          <label className="form-label" htmlFor="file">첨부파일</label>
          <input type="file" id="file" name="fbFiles" accept=".pdf, .doc, .docx, .jpg, .png" onChange={boardChangeHandler}/>
        </div>
        <div className="button-container">
          <button className="write-cancel-btn" onClick={() => {
            navigate('/fbList');
          }}>취소</button>
          <button className="write-submit-btn" onClick={() => {
            if(board.fbTitle == '' || board.fbContent == '') {
              alert('제목과 내용을 입력하세요');
            } else {
              axios.post(`${process.env.REACT_APP_SERVER_URL}/fboard`, board)
                .then(res => {
                  alert(res.data);
                  navigate('/fbList');
                }).catch(err => {
                  console.log(err);
                })
            }
          }}>등록</button>
        </div>
    </div>
  );
}

export default WriteFreeBoard;