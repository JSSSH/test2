import { Container, Row, Col, Button } from "react-bootstrap"; 
import { useState } from "react";
import './SurveyBoard.css';
import { useNavigate } from "react-router-dom";


const SurveyBoard = () => {
  const navigate = useNavigate();

  // 카드 정보를 배열에 정의, <<<<이 부분 DB연결해서 내용보이게 하면 됨>>>>
  const [surveyList, setSurveyList] = useState([ // 설문 목록을 상태로 관리
    {
      id: 0,
      imgSrc: "../img/camping_main_01.jpg",
      title: "설문조사 title 부분 1",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
    {
      id: 24,
      imgSrc: "../img/camping_main_02.jpg",
      title: "설문조사 title 부분 2",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
    {
      id: 27,
      imgSrc: "../img/camping_main_03.jpg",
      title: "설문조사 title 부분 3",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
    {
      id: 0,
      imgSrc: "../img/camping_main_01.jpg",
      title: "설문조사 title 부분 4",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
    {
      id: 24,
      imgSrc: "../img/camping_main_02.jpg",
      title: "설문조사 title 부분 5",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
    {
      id: 27,
      imgSrc: "../img/camping_main_03.jpg",
      title: "설문조사 title 부분 6",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
    {
      id: 0,
      imgSrc: "../img/camping_main_01.jpg",
      title: "설문조사 title 부분 7",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
    {
      id: 24,
      imgSrc: "../img/camping_main_02.jpg",
      title: "설문조사 title 부분 8",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
    {
      id: 27,
      imgSrc: "../img/camping_main_03.jpg",
      title: "설문조사 title 부분 9",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
    {
      id: 0,
      imgSrc: "../img/camping_main_01.jpg",
      title: "설문조사 title 부분 10",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
    {
      id: 24,
      imgSrc: "../img/camping_main_02.jpg",
      title: "설문조사 title 부분 11",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
    {
      id: 27,
      imgSrc: "../img/camping_main_03.jpg",
      title: "설문조사 title 부분 12",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
    {
      id: 0,
      imgSrc: "../img/camping_main_01.jpg",
      title: "설문조사 title 부분 13",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
    {
      id: 24,
      imgSrc: "../img/camping_main_02.jpg",
      title: "설문조사 title 부분 14",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
    {
      id: 27,
      imgSrc: "../img/camping_main_03.jpg",
      title: "설문조사 title 부분 15",
      description: "설문조사 내용부분",
      ae: "사진은 그냥 예시로 넣어둠",
      surveyCount: "00"
    },
  ]);

  const [loadMoreCount, setLoadMoreCount] = useState(6); // 불러오는 설문 수를 관리하는 상태 ,,3으로 바꾸면 3개부터 나옴

  const handleLoadMore = () => {
    // 더보기 버튼 클릭 시 호출되는 함수
    const additionalSurveys = Math.min(3, surveyList.length - loadMoreCount); // 최대 3개 또는 남은 설문 수 중 작은 값을 계산
    const newLoadMoreCount = loadMoreCount + additionalSurveys; // 추가로 불러올 설문 수
    setLoadMoreCount(newLoadMoreCount); // 불러오는 설문 수 업데이트
  };


  //그리드 형식으로 바꾼 반복문 코드 <= 이게 맞나?
  return (
    <>
      <div className="text-center">
        <h1 className="fun-title"> Survey {loadMoreCount < surveyList.length && (
          
          <Button className="btn-more" onClick={handleLoadMore}>더 보기</Button> //더 보기 눌러서 데이터 다 불러왔으면 사라짐
       

       )} </h1>
      </div>

      <Container className="MainSurveyBox">
        <Row xs={1} md={2} lg={3} className="g-4">
          {surveyList.slice(0, loadMoreCount).map((survey) => ( // 현재 불러올 설문 수까지만 보이도록 slice를 사용
            <Col key={survey.id}>
              <div className="card">
                <img src={survey.imgSrc} className="card-img-top" alt={survey.title} />
                <p className="card-text">{survey.ae}</p>
                <h5 className="card-title">{survey.title}</h5>
                <p className="card-text">{survey.description}</p>
                <i className="fi fi-rr-stats">현재 {survey.surveyCount}명 참여 중</i>
                <div className="card-wrap">
                  <button className="btn submit-btn" onClick={() => { navigate(`/survey/${survey.id}`) }}>참여하기</button>
                  <button className="btn result-btn view_more" onClick={() => { navigate(`/result/${survey.id}`) }}>결과보기</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );

  
}

export default SurveyBoard;
