import { useState } from "react";
import { useWorkoutsContext } from '../hook/useWorkoutsContext'

const WorkoutForm = () => {
  const {dispatch} = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  //Handle the input
  const handleSubmit = async (e) => {
    e.preventDefault();
    //workout object
    const workout = { title, load, reps };

    //use fetch API(requist)
    const response = await fetch("/api/workout", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //Store what the backend api returns
    const json = await response.json();

    if (!response.ok) {
      //Update error
      setError(json.error);
    }

    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');
      setError(null);
      dispatch({type: 'CREATE_WORKOUT', payload: json});
      console.log('new workout added', json);
    }
  };

  return (
    //Create form
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title: </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Load (in kg): </label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <label>Reps: </label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button>Submit</button>
      {error && <div className="error">{ error }</div>}
    </form>
  );
};

export default WorkoutForm;
