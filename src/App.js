import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';

function App() {
  const [feedback, setFeedbacks] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedbacks(feedback.filter((feedback) => feedback.id !== id));
    }
  };

  return (
    <>
      <Header></Header>
      <div className="container">
        <FeedbackStats feedbacks={feedback}></FeedbackStats>
        <FeedbackList
          feedbacks={feedback}
          handleDelete={deleteFeedback}
        ></FeedbackList>
      </div>
    </>
  );
}

export default App;
