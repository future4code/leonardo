import { setTasks, initialState } from "../actions/planner";
import planner from "./planner";

describe("Reducer Planner", () => {
    test("Set Task", () => {
        const expectedResult = {
            type: "SET_TASK",
            payload: {
                tasks: "tasks"
            }
        }
        const result = setTasks("tasks")
        expect(expectedResult).toMatchObject(result);
    })

    test("Case default", () => {
        const expectedAction = {
            type: "ERROR"
          };
        
        const expectedResult ={
            tasks: []
        };
        const result = planner(initialState, expectedAction)
        expect(expectedResult).toEqual(result);
    })
})