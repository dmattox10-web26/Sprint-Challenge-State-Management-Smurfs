1. What problem does the context API help solve?

The need for redux! But seriously, application wide state management, without the need for third party libraries or frameworks.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: actions are the options capable of modifying state.
Reducers: actually modify state.
Store: Maintains and makes available through connect - state.
The store is the single source of truth because it is immutable, and the only place that actions and reducers put or take data to/from.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is used to store things like user credentials and settings, component state is for local things like controlled inputs.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows us to pause in the middle of an action and do extra stuff. It let's us modify action creators by having multiple possible dispatches for a single action, introducing the possibility of a finite state machine.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

That I've learned about, definitely context API, though I must admit that I understand redux a little better than context API, there's just so much boilerplate!
