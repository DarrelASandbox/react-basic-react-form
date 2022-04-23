## About The Project

- React - The Complete Guide (incl Hooks, React Router, Redux)
- Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!
- Tutorial for React Basic Form
- [Maximilian Schwarzmüller](https://github.com/maxschwarzmueller)
- [Academind](https://academind.com/)

&nbsp;

## Notes

- Forms and inputs can assume different states
  - One or more inputs are invalid
    - Output input-specific error messages & highlight problematic inputs
    - Ensure form can't be submitted/saved
  - All inputs are valid
    - Allow form to be submitted/saved

&nbsp;

- When to validate?
  - When form is submitted
    - Allows the user to enter a valid value before warning user
    - Avoid unnecessary warnings but may be slow at giving feedback
  - When a input is losing focus
    - Allows the user to enter a valid value before warning use
    - Very useful for untouched forms
  - On every keystroke
    - Warns user before user had a chance of entering valid values
    - If applied only on invalid inputs, has the potential of providing more direct feedback

&nbsp;

---

&nbsp;

- useState() vs useReducer()
- Generally, useReducer() is a better choice over useState() when it becomes cumbersome or you're getting a lot of bugs/ uninteded behaviors.

|                              useState()                               |                         useReducer()                          |
| :-------------------------------------------------------------------: | :-----------------------------------------------------------: |
|                   The main state management 'tool'                    |                Great if you need 'more power'                 |
|              Great for independent pieces of state/data               | Should be considered if you have related pieces of state/data |
| Great if state updates are easy and limited to a few kinds of updates |     Can be helpful if you have more complex state updates     |

&nbsp;

---

&nbsp;
