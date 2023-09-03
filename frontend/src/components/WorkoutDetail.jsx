import { useWorkoutsContext } from '../hook/useWorkoutsContext'

//we can destracture the Props we pass { workout } 
const WorkoutDetail = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch('/api/workout/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json();

    if(response.ok){
      dispatch({type: 'DELETE_WORKOUT', payload: json});
    }
  };
  
  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg)</strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        {/* The automatic time stamp  */}
        <p>{workout.createdAt}</p>
        <span onClick={handleClick}>Delete</span>
    </div>
  )
}

export default WorkoutDetail;