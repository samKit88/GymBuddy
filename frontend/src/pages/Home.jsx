import { useEffect } from "react";
import { useWorkoutsContext } from '../hook/useWorkoutsContext'

// components 
import WorkoutDetail from "../components/WorkoutDetail";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  // //state hook
  // const [workouts, setWorkouts] = useState(null);

  const {workouts, dispatch} = useWorkoutsContext();

  //fetch from the backend
  useEffect(() => {
    const fetchWorkouts = async () => {
      //get the response
      const response = await fetch("/api/workout");
      //parse the json
      const json = await response.json();

      //if the response is ok we can set the workouts in the home page
      //To do we need a state hook
      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json});
      }
    };
    //the useEffect return the function
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          //The workoutDetails function accept the workout
          <WorkoutDetail key={workout._id} workout={workout}/> 
        ))}
      </div>
      <WorkoutForm/>
    </div>
  );
};

export default Home;
