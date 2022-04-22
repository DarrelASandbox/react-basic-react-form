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
