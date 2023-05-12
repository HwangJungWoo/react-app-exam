import useFetch from '../hooks/useFetch';
import { useRef } from 'react';

export default function CreateWord() {
    const days = useFetch(`http://localhost:3001/days`);

    function onSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3001/words/`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    day: dayRef.current.value,
                    eng: engRef.current.value,
                    kor: korRef.current.value,
                    isDone: false
                }),
            }
        ).then(res => {
            if (res.ok) {
                alert('생성이 완료 되었습니다.')
            }
        })
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);


    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label htmlFor="">Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label htmlFor="">Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label htmlFor="">Day</label>
                <select name="" id="">
                    {days.map(day => (
                        <option key={day.id} value={day.day} ref={dayRef}>
                            {day.day}
                        </option>
                    ))}

                </select>
            </div>
            <button>저장</button>
        </form>
    );
}