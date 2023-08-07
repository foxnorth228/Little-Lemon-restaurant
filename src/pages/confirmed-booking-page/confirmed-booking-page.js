import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './confirmed-booking-page.css';

const ConfirmedBooking = () => {
  return (
    <div className="page_bookingConfirmed">
      <FontAwesomeIcon icon={faCircleCheck} size="5x" />
      <h2>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
    </div>
  );
};

export default ConfirmedBooking;