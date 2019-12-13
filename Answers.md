1. What problem does the context API help solve?

- Context API helps in transfering state or props without passing down one step at a time from parent to child


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions: Payloads of information that send data to the store
- Reducers: They specify how state changes in response to an action
- Store: Store holds application state and allows state to get updated


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is state needed all over an application. Multiple components would need to have access to the state while component state is state needed only by a particular component.



4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- redux-thunk is a middleware that allows us write asynchronous logic 



5. What is your favorite state management system you've learned and this sprint? Please explain why!

- Context API because it is simpler to use on simple projects
