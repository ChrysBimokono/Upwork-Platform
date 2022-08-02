import "./styles.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import JobBoard from "./JobBoard";
import JobDetail from "./JobDetail";
import { LoadingButtons } from "./Loading";
import axios from "axios";

export default function App() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [allJob, setAllJob] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const url = "https://remotive.com/api/remote-jobs?category=software-dev";
  useEffect(() => {
    const loadJob = async () => {
      //we will show the loading symbol
      //until our data is fetched
      setLoading(true);

      const response = await axios.get(url);
      //after getting data store it
      setAllJob(response.data.jobs);
      // console.log(setAllJob(response.data));
      //close the loading;
      setLoading(false);

      console.log(response.data.jobs);
    };
    //call function
    loadJob();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      navigate("/jobs");
    }
  }, [loggedIn]);

  return (
    <div className="App">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <Routes>
          <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/jobs" element={<JobBoard />} />
          <Route path="/job/:id" element={<JobDetail />} />
        </Routes>
      )}
    </div>
  );
}
