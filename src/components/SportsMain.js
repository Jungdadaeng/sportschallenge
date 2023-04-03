import Link from 'next/link';
import { useSelector } from 'react-redux'
import './SportsMain.css'
export default function SportsMain(){
    const goalCount = useSelector((state) => state.goalcount);
    const doneCount = useSelector((state) => state.donecount);
    const restCount = goalCount - doneCount;

    return(
        <div>
            <h2 className="title">Sports Challenge</h2>
            <div>
                <span> 스쿼트 누적 개수</span>
                <br />
                <div>남은횟수 : {restCount}회</div>
                <div>수행횟수 : {doneCount}회</div>
                <br />
                <Link href="/challenge">스쿼트 실행</Link>
            </div>
        </div>
    )
}