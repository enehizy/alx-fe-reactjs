import {fireEvent,render} from '@testing-library/react'
import TodoList from '../components/TodoList'


const todos=[
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Complete project report", completed: true },
    { id: 3, task: "Workout for 30 minutes", completed: false },]
describe(TodoList,()=>{
    it("TodoList component renders correctly.",()=>{
        const {queryByTestId} =render(<TodoList todos={todos}/>)
        expect(queryByTestId("TodoList")).toBeEmptyDOMElement();
})
})
