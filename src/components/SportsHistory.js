import './SportsHistory.css'
import { useSelector, useDispatch } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const SportsHistory = () => {
    const history = useSelector((state) => state.history);
    const dispatch = useDispatch();
    const removeHistory = (index) => {
        dispatch({ type: 'remove', payload: { index: index } })
    }
    return (
        <div className='wrapper'>
            <h1 className="title">Challenge History</h1>
            <ListGroup style={{padding: '30px'}}>
            {history.map((count, index) => {
                return (
                    <ListGroup.Item key={index}>
                        <span>{`${count}회 실행`}</span> <Button onClick={() => removeHistory(index)}>기록삭제</Button>  <br />
                    </ListGroup.Item>
                )
            })}
            </ListGroup>
        </div>
    )
}

export default SportsHistory;
