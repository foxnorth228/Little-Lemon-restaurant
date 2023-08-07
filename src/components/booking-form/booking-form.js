import { useState } from 'react';
import './booking-form.css';
import FormField from '../form-field/form-field';

const BookingForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData
}) => {
  const minDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minNumberOfGuests = 1;
  const maxNumberOfGuests = 10;
  const occasions = ['Birthday', 'Anniversary'];

  const [date, setDate] = useState(minDate);
  const [time, setTime] = useState(defaultTime);
  const [numberOfGuests, setNumberGuests] = useState(minNumberOfGuests);
  const [occasion, setOccasion] = useState(occasions[0]);

  const isValid = (el, cond = '') => el !== cond;
  const areAllFieldsValid = () => isValid(date) && isValid(time) && isValid(numberOfGuests) && isValid(occasion);
  
  const handleFormSubmit = e => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, occasion, });
  };

  return (
    <form 
      className='bookingForm'
      onSubmit={handleFormSubmit}
    >
      <FormField 
        label="Date" 
        htmlFor="booking-date" 
        hasError={!isValid(date)} 
        errorMessage={'Please choose a valid date'}
      >
        <input 
          type="date" 
          id="booking-date" 
          name="booking-date" 
          min={minDate} 
          value={date} 
          required={true} 
          onChange={e => {
            setDate(e.target.value);
            dispatchOnDateChange(e.target.value);
          }}
        />
      </FormField>
      <FormField 
        label="Time" 
        htmlFor="booking-time" 
        hasError={!isValid(time)} 
        errorMessage={'Please choose a valid time'}
      >
        <select 
          id="booking-time" 
          name="booking-time" 
          value={time} 
          required={true} 
          onChange={e => setTime(e.target.value)}
        >
          {availableTimes.map(times => 
            <option data-testid="booking-time-option" key={times}>
              {times}
            </option>
          )}
        </select>
      </FormField>
      <FormField 
        label="Number of guests" 
        htmlFor="booking-number-guests" 
        hasError={!isValid(numberOfGuests)} 
        errorMessage={'Please enter a number between 1 and 10'}
      >
        <input 
          type="number" 
          id="booking-number-guests" 
          name="booking-number-guests" 
          value={numberOfGuests} 
          min={minNumberOfGuests} 
          max={maxNumberOfGuests} 
          required={true} 
          onChange={e => setNumberGuests(e.target.value)}
        />
      </FormField>
      <FormField 
        label="Occasion" 
        htmlFor="booking-occasion" 
        hasError={!isValid(occasion)} 
        errorMessage={"Please choose a valid occasion"}
      >
        <select 
          id="booking-occasion" 
          name="booking-occasion" 
          value={occasion} 
          required={true} 
          onChange={e => setOccasion(e.target.value)}
        >
          {occasions.map(occasion => 
            <option data-testid="booking-occasion-option" key={occasion}>
              {occasion}
            </option>
          )}
        </select>
      </FormField>
      <button 
        type="submit" 
        disabled={!areAllFieldsValid()}
      >
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;