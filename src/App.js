import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import Aboutpage from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";



function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Do you really want to delete?")) {
      setFeedback((prev) => [...prev].filter((ele) => ele.id !== id));
    }
  };

  return (
    <>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeedbackForm feedback={feedback} handleAdd={addFeedback} />
                    <FeedbackStats feedback={feedback} />
                    <FeedbackList
                      feedback={feedback}
                      handleDelete={deleteFeedback}
                    />
                  </>
                }
              ></Route>
              <Route path="/about" element={<Aboutpage />} />
            </Routes>
            <AboutIconLink />
          </div>
        </Router>
    </>
  );
}

export default App;
