import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const StatDisplay = ({workoutData}) => {
    const data = {
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
    }

    //should we be able to see by week and by year too?
    return (
        <>
        <Title></Title>
        <Bar 
        data={data}
        width={150}
        height={100}
       /*  options={{
            maintainAspectRatio: false
        }} */
        />
        </>
    )
}

export default StatDisplay;

const Title = styled.div`
    margin-top: 100px;
`;