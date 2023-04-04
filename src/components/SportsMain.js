import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux'
import './SportsMain.css'
import { Link } from 'react-router-dom';
export default function SportsMain(){
    const goalCount = useSelector((state) => state.goalcount);
    const doneCount = useSelector((state) => state.donecount);
    const restCount = goalCount - doneCount;

    return(
        <Card className="text-center">
            <Card.Header>Sports Challenge</Card.Header>
            <Card.Body>
                <Card.Title>스쿼트 누적 개수</Card.Title>
                <Card.Title>
                    <div>남은횟수 : {restCount}회</div>
                    <div>수행횟수 : {doneCount}회</div>
                </Card.Title>
                <Button variant="primary"><Link className="btn" to="/challenge">스쿼트 실행</Link></Button>
            </Card.Body>
            <Card.Footer className="text-muted">오늘도 화이팅!</Card.Footer>
        </Card>
    )
}