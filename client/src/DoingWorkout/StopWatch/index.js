import React from 'react';
import styled from 'styled-components';

const StopWatch = () => {
    //shown at top of doing workout page
    const [time, setTime] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false);

    React.useEffect(() => {
        let interval = null;

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval)
        }
    }, [time, isActive, isPaused])

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    }

    const handleStart = () => {
        setIsActive(true);
        isActive ? setIsPaused(false) : setIsPaused(true);
    }

    const handleStop = () => {
        setIsPaused(true);
    }
    return (
        <Wrapper>
            <TimerWrapper>
                <Time>
                    <span>{('0' + Math.floor(time / 60000) % 60).slice(-2)}:</span>
                    <span>{('0' + Math.floor(time / 1000) % 60).slice(-2)}</span>
                </Time>
                <ButtonWrapper>
                    <Button onClick={handleReset}>Reset</Button>
                    {(isPaused || !isActive) ?
                        <Button onClick={handleStart}>Start</Button> :
                        <Button onClick={handleStop}>Pause</Button>}
                </ButtonWrapper>
            </TimerWrapper>
        </Wrapper>
    )
}

export default StopWatch;

const Time = styled.div`
    font-size: 30px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 5px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: var(--primary-font)
`;

const TimerWrapper = styled.div`
    width: 125px;
    height: 125px;
    border-radius: 67.5px;
    background-color: var(--tag-color-1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const Input = styled.input`
    height: 50px;
    width: 30px;
`;

const Button = styled.button`
    border: none;
    background-color: white;
    border-radius: 2px;
    height: 20px;
`;