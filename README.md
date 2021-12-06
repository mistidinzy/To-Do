# React &middot; ToDo

## About this App

### This is a To-Do List management app, built with

* React
* React-Bootstrap
* Netlify

The home page will feature a Login/Register/User section.

Once a user is registered and logged in, they will be able to see a list of items in their to-do list.

From here, they can:

* Add, edit and remove list items
* Add and edit difficulty levels for tasks
* Assign tasks to certain people
* And more!

---

The following user/developer stories detail the major functionality for each phase of the project:

### Phase 1 & 2

> As a user, I would like...
>
> * An easy way to add a new to do item using an online interface
>
> * My to do items to have an assignee, due date, difficulty meter, status and the task itself
>
> * To delete to do items that are no longer needed
>
> * To easily mark to do items as completed
>
> * To edit an existing to do item

---

### Phase 3

> As a user, I would like...
>
> * A way for all users to login to their account
>
> * To make sure that my To Do items are only viewable to users that have logged in with a valid account.
>
> * To ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items
>
> * To ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete
>
> * To ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items

---

## Example User Flow

![Example User Flow GIF](/assets/todo.gif)

---

### Development Stages

1. **Routing & Components**

      [X] Set up Router

      [X] Render To Do List and Form

2. **Forms & State**

      [X] Basic ToDo Management with useState

3. **Context & Auth**

      [_] Require a login to access the list

      [_] Restrict access to adding, editing, deleting to certain user types

4. **Persistence**

      [_] Connect to a live API for storing To Do Items

---
