import { useNavigate } from 'react-router-dom'
import { React, useState } from 'react'
import {  useDispatch,useSelector } from 'react-redux'
import confetti from 'canvas-confetti'
import './SportsChallenge.css'

export default function SportsChallenge(){
    const [recordCount, setRecordCount] = useState(0);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const myCanvas = document.querySelector("canvas");
    const myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    });

    const changeRecordCount = (addiCount) => {
        if (addiCount > 0) {
            myConfetti({
                particleCount: addiCount * 10,
                spread: 160
            });
        }

        const newRecordCount = recordCount + addiCount < 0 ? 0 : recordCount + addiCount;
        setRecordCount(newRecordCount);
    };

    const saveRecord = () => {
        console.log('????',recordCount)
        if (recordCount == 0) return;
        dispatch({ type: 'save', payload: { recordcount: recordCount } })
        setRecordCount(0);
        navigate('/');
    };

    const cancelRecord = () => {
        setRecordCount(0);
        navigate('/');
    };

    return (
        <div className='wrapper'>
            <h1 className="font-bold text-xl">기록</h1>
            <div className="flex gap-2 items-center">
                <span className='record'>{String(recordCount).padStart(2, "0")}</span>
                <canvas id="confetti-canvas"></canvas>
               
            </div>
            <div className="flex gap-2 mt-3">
                <button className="btn btn-primary" onClick={() => changeRecordCount(10)}>+ 10</button>
                <button className="btn btn-primary" onClick={() => changeRecordCount(5)}>+ 5</button>
                <button className="btn btn-primary" onClick={() => changeRecordCount(-10)}>- 10</button>
                <button className="btn btn-primary" onClick={() => changeRecordCount(-5)}>- 5</button>
            </div>
            <div className="flex gap-2 items-center">
                <button className="btn btn-primary" onClick={saveRecord}>적용</button>
                <button className="btn btn-primary" onClick={cancelRecord}>취소</button>
            </div>
        </div>
    )
}