import React from 'react';
import Header from '../Header';
import StatDisplay from './StatDisplay';
import WorkoutCompletedDisplay from './WorkoutCompletedDisplay';

const Stats = () => {
    const [workoutData, setWorkoutData] = React.useState();
    const [loaded, setLoaded] = React.useState(false);
    const userId = sessionStorage.getItem('userId');

    React.useEffect(() => {
        fetch(`/workoutsCompleted/${userId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setWorkoutData(data.data)
                setLoaded(true);
            })
    }, [])

    const today = new Date();
    console.log(today.getMonth());

   /*  const thisWeek = workoutData.filter((workout) =>{
        workout.date.getTime() > 
    }) */
    

    return (
        <>
            <Header title={'Your Stats'} />
            <StatDisplay workoutData={workoutData}/>
            <WorkoutCompletedDisplay 
            workoutData={workoutData}
            loaded={loaded}/>
        </>
    )
};

export default Stats;