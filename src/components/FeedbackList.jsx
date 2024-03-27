import FeedbackItems from './FeedbackItems'

function FeedbackList({feedback}) {
  if(!feedback || feedback.length === 0){
    return <p> No feedback yet</p>
  }
  return (
    <div className="feedback-listt">
      {feedback.map((item)=>(
        <FeedbackItems key={item.id} item ={item}/>
      ))}
    </div>
  );
}

export default FeedbackList;
