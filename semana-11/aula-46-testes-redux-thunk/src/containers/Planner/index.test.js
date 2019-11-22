import { shallow } from "enzyme";
import { AppWrapper, Planner, InputTask, PlannerView, Button } from "./index";
import React from 'react'


describe("Planner Component", () => {
    test("Input Task", () => {
        const getTasks = jest.fn()
        const component = shallow(
            <Planner getTasks={getTasks}/>
        );
        const inputTask = component.find(InputTask);
        expect(inputTask).toHaveLength(1);
    })

    test("PlannerView", () => {
        const getTasks = jest.fn()
        const component = shallow(
            <Planner getTasks={getTasks}/>
        );
        const plannerView = component.find(PlannerView);
        expect(plannerView).toHaveLength(1);
    })

    test("AppWrapper", () => {
        const getTasks = jest.fn()
        const component = shallow(
            <Planner getTasks={getTasks}/>
        );
        const appWrapper = component.find(AppWrapper);
        expect(appWrapper).toHaveLength(1);
    })
    test("Create task", () => {
        const getTasks = jest.fn()
        const mockCreateTask = jest.fn();
        const component = shallow(
          <Planner getTasks={getTasks} createTask={mockCreateTask} />
        );
    
        const buttonCreateTask = component.find(Button);
    
        expect(buttonCreateTask).toHaveLength(1);
    
        buttonCreateTask.simulate("click");
    
        expect(mockCreateTask).toHaveBeenCalledWith(1);
      });

})