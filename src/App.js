import { useState } from "react"
import Header from "./components/Header"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"


function App(){

    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) =>{
        if (window.confirm("Do you really want to delete?")) {
            setFeedback(prev => [...prev].filter(ele => ele.id !== id));
          }
        }


    return (
        <>
        <Header  />
        <FeedbackForm feedback = {feedback} />
        <FeedbackStats feedback = {feedback} />
        <div className="container">
           <FeedbackList feedback = {feedback}
           handleDelete={deleteFeedback}/>
        </div>
        </>
    )
}

export default App