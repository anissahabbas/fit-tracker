const sendResponse = ({ res, status, message, data, ...rest }) => {
    res.status(status).json({ status, message, data, ...rest });
  };

const compareDates = () => {

}

const workoutDate = new Date(2020, 09, 09);
const anotherDate = new Date(2019, 09, 09);

console.log(workoutDate.getTime() > anotherDate.getTime());

module.exports = { sendResponse, compareDates }