const sendResponse = ({ res, status, message, data, ...rest }) => {
    res.status(status).json({ status, message, data, ...rest });
};

const getMostCommon = (workoutList) => {
    let mostCommon = workoutList[0];
    maxCount = 0;
    for (let i = 0; i < workoutList.length; i++) {
        let count = 0;
        for (let j = i + 1; j < workoutList.length; j++) {
            if (workoutList[i].name === workoutList[j].name) {
                count++;
            }
        }
        if (maxCount < count) {
            maxCount = count;
            mostCommon = workoutList[i];
        }
    }
    return mostCommon;
}


const createMonthData = (workoutList) => {
    const months = {
        jan: 0,
        feb: 0,
        mar: 0,
        apr: 0,
        jun: 0,
        jul: 0,
        aug: 0,
        sep: 0,
        oct: 0,
        nov: 0,
        dec: 0,
    }
    for (let workout of workoutList) {
        switch (workout.month) {
            case 0:
                months.jan += 1
                break;
            case 1:
                months.feb += 1
                break;
            case 2:
                months.mar += 1
                break;
            case 3:
                months.apr += 1
                break;
            case 4:
                months.may += 1
                break;
            case 5:
                months.jun += 1
                break;
            case 6:
                months.jul += 1
                break;
            case 7:
                months.aug += 1
                break;
            case 8:
                months.sep += 1
                break;
            case 9:
                months.oct += 1
                break;
            case 10:
                months.nov += 1
                break;
            case 11:
                months.dec += 1
                break;
            default:
                break;
        }
    }
    return months;
}


module.exports = { sendResponse, createMonthData, getMostCommon }