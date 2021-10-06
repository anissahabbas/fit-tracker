import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const StatDisplay = ({ workoutData }) => {
    const userId = sessionStorage.getItem('userId');
    const [barData, setBarData] = React.useState({});
    const [stats, setStats] = React.useState();
    const [loaded, setIsLoaded] = React.useState(false);
    React.useEffect(() => {
        fetch(`/stats/${userId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.data) {
                    setBarData({
                        labels: Object.keys(data.data.monthData ? data.data.monthData : ''),
                        datasets: [{
                            label: 'Number of Workouts',
                            data: Object.values(data.data.monthData),
                            backgroundColor: '#D0B9E3',
                            height: 50
                        }],

                    });
                }
                setStats(data.data)
                setIsLoaded(true);
            })
    }, [])

    console.log(stats);
    /*  const dummyData = {
         labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
         datasets: [{
             label: 'Number of Workouts',
             //need workouts separated by month
             //count each occurence for each month and store in an object to send back with workout data
             //turn into 2 arrays in front end 
             data: [0, 0, 13, 10, 2, 12, 4, 5, 0, 6, 12, 7],
             backgroundColor: '#D0B9E3',
             height: 50
         }],
     } */

    return (loaded &&
        (stats ?
        <MainWrapper>
            <Bar
                data={barData}
                width={150}
                height={100}
            /*  options={{
                 maintainAspectRatio: false
             }} */
            />
            <StatsInfo>
                <Wrapper1>
                    <TotalWrapper>
                        <TotalLabel>Total Workouts Completed:</TotalLabel>
                        <TotalResult>{stats.totalWorkouts}</TotalResult>
                    </TotalWrapper>
                    <TotalWrapper>
                        <TotalLabel>Total Exercises Completed:</TotalLabel>
                        <TotalResult>{stats.totalExercises}</TotalResult>
                    </TotalWrapper>
                </Wrapper1>
                <Wrapper2>
                    <MostCommonWrapper>
                        <MostCommonLabel>Most Common Workout:</MostCommonLabel>
                        <MostCommonResult>{stats.mostCommonWorkout}</MostCommonResult>
                    </MostCommonWrapper>
                    <MostCommonWrapper>
                        <MostCommonLabel>Most Common Exercise:</MostCommonLabel>
                        <MostCommonResult>{stats.mostCommonExercise} </MostCommonResult>
                    </MostCommonWrapper>
                </Wrapper2>
            </StatsInfo>
        </MainWrapper> :
        <Message>Complete an exercise to see your data!</Message>)
    )
}

export default StatDisplay;

const Message = styled.div`
    margin-top: 100px;
    font-family: var(--primary-font);
    text-align: center;
`;

const MainWrapper = styled.div`
    margin-top: 100px;
`;

const Wrapper1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const StatsInfo = styled.div`
    font-family: var(--primary-font);
    margin: 20px 20px;
`;

const Wrapper2 = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

`;

const MostCommonWrapper = styled.div`
    max-width: 175px;
`;

const MostCommonLabel = styled.div`
    text-align: center;
    font-size: 12px;
`;

const MostCommonResult = styled.div`
    text-align: center;
    color: purple;
    font-size: 20px;
`;

const TotalLabel = styled.div`

`;

const TotalResult = styled.div`
    font-size: 30px;
    text-align: center;
    color: purple;
`;

const TotalWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    align-items: center;
`;


const Title = styled.div`
    margin-top: 100px;
`;