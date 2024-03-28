import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Cards from "./Shared/Cards";
import Buttons from "./Shared/Buttons";

const FeedbackForm = ({feedback}) => {
    const [text,setText] = useState('');
    const [rating,setRating] = useState('');
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [msg,setMsg] = useState('');
  

    const handleTextChange = (e) =>{
      if(text === ''){
        setBtnDisabled(true)
        setMsg(null)
      }
      else if(text !== '' && text.trim().length < 5){
        setBtnDisabled(true)
        setMsg('Text must be atleast 5 characters')
      }else{
        setBtnDisabled(false)
        setMsg(null)
        
      }
      setText(e.target.value);
    }


  return (
    <Cards>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* rating select components */}
        <RatingSelect  select = {(rating)=>{console.log(rating)}} />
        <div className="input-group">
            <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text} />
            <Buttons type='submit' isDisabled={btnDisabled}   >Send</Buttons>
        </div>

        {msg && <div className= 'message'>{msg}</div>}
      </form>
    </Cards>
  );
}

export default FeedbackForm;
