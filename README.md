[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/wbHlJyPI)

# WWE Final Reflections

<!-- TODO: Go through the code and heavily comment it to show your understanding. -->
<!-- TODO: Reflect on your experience parsing this code. Give your unique perspective on this code. What makes sense? What doesn't? Overall, how did this code connect back to JS concepts that you have learned throughout the course? Add anything interesting or relevant that you would like including any other analogies, connections, thoughts or reflections. Be unique/creative! 🧚🏾‍♂️ :)-->

## State (Managed in a Separate Class)

The `State` class encapsulates the application's state management logic. By separating state management into a dedicated class, the code adheres to the principle of separation of concerns, keeping data manipulation and UI rendering distinct. This approach allows for cleaner, more maintainable code by isolating state-related logic from the presentation layer.

The `State` class maintains private properties for storing data and search queries. It provides getter and setter methods for accessing and updating the state, ensuring encapsulation and controlling access to internal data. This encapsulation promotes data integrity and reduces the risk of unintended side effects.

## Props (Function Component Parameters)

Props are utilized to pass data and configuration to function components. In the provided code, props are used to customize the behavior and appearance of the `Search` and `Table` components. For example, the `Search` component accepts a `searchValue` prop to initialize the input field with a search query, while the `Table` component receives props for column headers and data.

By accepting props as parameters, function components become more flexible and reusable. Props allow components to be configured dynamically based on external data or user input, enabling the creation of versatile UI components that can adapt to different contexts.

## Render Function

Although not explicitly named as such, the `return` statement within each function component serves as the equivalent of a render function in frameworks like React. This is where JSX templates are defined, specifying the structure and appearance of the rendered UI components.

The render function (return statement) is responsible for generating the UI based on the current state and props. It dynamically constructs the UI hierarchy, incorporating data from props and internal state as needed. By separating rendering logic into individual components, the code promotes reusability and maintainability, making it easier to reason about and modify the UI structure.

## Summary

In the big picture, what we're doing here is pretty much like building with those LEGO blocks. We've got these components and a place to keep our stuff organized, kind of like a toy chest. And then there's this function that makes sure everything looks right when we change things up, like when we swap out different LEGO pieces.

So, in `search.js`, we're talking about that little search box you see on websites. We're making it its own thing so it's easy to use everywhere, just like having a favorite toy you can take anywhere. And by using props, it's like giving that toy a cool feature that can change depending on what you want it to do. It's all about making things easy and fun to play with!

Now, `table.js` is all about making our data look nice and tidy, like organizing your toys neatly on a shelf. It can handle different kinds of data and show them in a table format, so you can compare them easily. And the best part is, it's like a magic trick – it can make as many rows as we need, just by waving its wand (or in this case, using array mapping).

Then there's our `State` class, which is like the boss of keeping track of stuff. It's like having a super organized friend who knows where everything is in their room. By putting all our data in there, it keeps everything neat and tidy, and only lets us change things in the right way. It's like having a secret password to get in and move things around safely.

So, by doing all this, we're basically making our website-building experience as easy as playing with toys, and that's something anyone can understand and have fun with!

(<https://gist.github.com/Victor-t814/5e9c9879ce3217cc87c0ab8ad62dae96>)
