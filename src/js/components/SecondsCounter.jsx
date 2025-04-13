import React, { useState, useEffect } from 'react';

function Counter() {
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const [targetTime, setTargetTime] = useState(null);


    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTimeInSeconds(prev => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    useEffect(() => {
        if (targetTime !== null && timeInSeconds === parseInt(targetTime)) {
            alert("¡Has llegado al tiempo que ingresaste! 🎉");
            setTargetTime(null); // opcional: desactiva la alerta luego
        }
    }, [timeInSeconds, targetTime]);

    const seconds = timeInSeconds % 60;
    const minutes = Math.floor(timeInSeconds / 60) % 60;
    const hours = Math.floor(timeInSeconds / 3600) % 24;

    const format = (n) => n.toString().padStart(2, '0');

    return (
        <div className="d-flex justify-content-center m-5">
            <div className="card text-center border border-info-subtle rounded" style={{width:'25rem'}}>
            <div className="fs-1 bg-dark text-white d-inline-block px-5 py-3 rounded ">
                <span>{format(hours)}:</span>
                <span>{format(minutes)}:</span>
                <span>{format(seconds)}</span>
                
            </div>

            {/* 🎛 BOTONES */}
            <div className="mt-4">
                <button
                    className="btn btn-warning mx-2"
                    onClick={() => setIsRunning(false)}
                >
                    Pause
                </button>

                <button
                    className="btn btn-success mx-2"
                    onClick={() => setIsRunning(true)}
                >
                    Play
                </button>

                <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                        setTimeInSeconds(0);
                        setIsRunning(false); // opcional: pausa después de reiniciar
                    }}
                >
                    Stop
                </button>
                <div className="mt-4">
                    <label className="form-label">Alerta al llegar a:</label>
                    <input
                        type="number"
                        className="form-control w-25 mx-auto"
                        placeholder="Ej: 10s"
                        onChange={(e) => setTargetTime(e.target.value)}
                    />
                  </div>

             </div>
            </div>
        </div>
    );
}

export default Counter;
