import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
  cons[(text, setText)] = useState('');
  cons[(rating, setRating)] = useState(10);
  cons[(btnDisabled, setBtnDisabled)] = useState(true);
  cons[(message, setMessage)] = useState('');

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage('Please enter a feedback');
    } else if (text !== '' && text.trim.length <= 10) {
      setMessage('Please enter a longer feedback');
      setBtnDisabled(true);
    } else {
      setMessage('');
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  return (
    <Card>
      <form action="">
        <h2>How would you rate your service with us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
