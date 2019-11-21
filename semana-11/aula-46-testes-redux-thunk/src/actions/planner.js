import axios from "axios";

export const createTaskAction = (text, day) => async (dispatch) => {
    const task = {
        text,
        day
    }
    const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/generic/planner-leonardo", task)
    dispatch(getTasks())
};
  
export const getTasks = () => async (dispatch) => {
   const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/generic/planner-leonardo")
   const tasks = response.data
   console.log(tasks)
   dispatch(setTasks(tasks))
}

export const setTasks = (tasks) => {
    return {
        type: "SET_TASK",
        payload: {
            tasks
        }
    }
}