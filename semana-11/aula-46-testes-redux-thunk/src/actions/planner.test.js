import { setTasks, getTasks, createTaskAction } from "./planner"
import axios from "axios"

describe("Planner Actions", () => {
    let mockDispatch;
    const mockTasks = { text: "text", day: "day" }
    beforeEach(() => {
        mockDispatch = jest.fn();
    });
    const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-leonardo"
    describe("Set Tasks", () => {
        test("Set correct expected result", () => {
            const expectedResult = {
                type: "SET_TASK",
                payload: {
                    tasks: "tasks"
                }
            }
            const result = setTasks("tasks")
            expect(expectedResult).toMatchObject(result);
        })
    })
    describe("Get Tasks", () => {
        test("dispatch was called ", async () => {
            axios.get = jest.fn(() => ({
                data: mockTasks
            }));
            const expectedAction = {
                type: "SET_TASK",
                payload: {
                    tasks: mockTasks
                }
            };
            mockDispatch = jest.fn()
            await getTasks()(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(expectedAction);

        })

    })
    describe("Create Tasks", () => {
        test("dispatch was called ", async () => {
            axios.post = jest.fn(() => ({
                status: 200
            }));
            const { text, day } = mockTasks;
            await createTaskAction(text, day)(mockDispatch);
            expect(axios.post).toHaveBeenCalledWith(baseURL, mockTasks);
            expect(mockDispatch).toHaveBeenCalledTimes(1);

        })

    })
})