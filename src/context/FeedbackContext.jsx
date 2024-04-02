import { createContext, useState } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([
        {
            id :1,
            text:'This item is form context',
            rating:5
        }
    ])
    return (
    <FeedbackContext.Provider value={{
        feedback
    }}>
    </FeedbackContext.Provider>)
}

export default FeedbackContext;