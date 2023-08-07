import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../../utils/fakeAPI';
import BookingForm from '../../components/booking-form/booking-form';
import './booking-page.css';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes; 
};

const initializeTimes = initialAvailableTimes => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const BookingPage = () => {
  const [
    availableTimes, 
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);

  const navigate = useNavigate();
  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate('/confirmed');
  }; 

  return (
    <div className="page_booking">
      <h2>Table reservation</h2>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    </div>
  );
};

export default BookingPage;