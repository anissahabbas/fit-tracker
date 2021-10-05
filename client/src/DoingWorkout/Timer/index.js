import React from 'react';
import styled from 'styled-components';

const Timer = () => {
    const [time, setTime] = React.useState('00:00')
    const [isActive, setIsActive] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false);

    React.useEffect(() => {
        let interval = null;

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime((time) => time - 10);
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
            <Input value={time}
            onChange={(e) => setTime(e.target.value)} />
            <ButtonWrapper>
                <Button onClick={handleReset}>Reset</Button>
                {(isPaused || !isActive) ? <Button onClick={handleStart}>Start</Button> :
                    <Button onClick={handleStop}>Pause</Button>
                }
            </ButtonWrapper>
        </Wrapper>
    )
}

export default Timer;

const Wrapper = styled.div`

    width: 125px;
    height: 125px;
    border-radius: 67.5px;
    background-color: var(--tag-color-2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    border: none;
    background-color: white;
    border-radius: 2px;
    height: 20px;
    text-align: center;
`;

const Input = styled.input`
    font-size: 30px;
    width: 90px;
    text-align: center;
    background-color: var(--tag-color-2);
    border: none;
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 5px;
`;