const exercisesCompleted = [
    {
        _id: 'E1111111',
        user_id: '9999',
        exercise_id: 1234,
        date: '2021-10-01',
        sets: [
            {
                reps: 10,
                weight: '50lbs'
            },
            {
                reps: 10,
                weight: '50lbs'
            },
            {
                reps: 10,
                weight: '50lbs'
            }
        ],
        notes: 'go heavier next time'
    }
]

const workoutsCompleted = [
    {
        _id: 'W000000',
        user_id: '9999',
        name: 'Push Workout August',
        tags: ['upper', 'shoulders'],
        date: '2021-09-09',
    }
]

module.exports = { workoutsCompleted, exercisesCompleted };