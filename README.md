Challenge for Fullstack Developer
===============================

To better assess a candidate's development skills, we would like to provide the following challenge. This is intended to be developed in a remote asyncronously way with continues communication.

It's allowed to use documentation and online resources.

Progress
-------------
- [Live demo](https://fralleee.github.io/diwala-frontend-challenge/)
- [Detailed progress](https://github.com/Fralleee/diwala-frontend-challenge/issues)
- [CI/CD](https://github.com/Fralleee/diwala-frontend-challenge/actions)

Screenshot
-------------
![full-page-1366](https://user-images.githubusercontent.com/6375613/145613883-29de107b-7ef0-4c59-9a88-a21853966eea.png)

Prerequisites
-------------

* [Git](https://git-scm.com/)
* A frontend framework of choice, we are open to whatever, we use React, Typescript in Diwala
* Some storage of choice LocalStorage, [IndexDB](https://developers.google.com/web/ilt/pwa/lab-indexeddb), [SQLLite](https://www.sqlite.org/index.html), [Firebase](https://firebase.google.com/), [MongoDB](https://www.mongodb.com/), [MySQL](https://www.mysql.com/), [PostgresSQL](https://www.postgresql.org/) or any other suiting storage you find.

Installation
------------

Start a new repo with this README in it.
We are note merging back to this repo because this repo shall stay clean of solutions

Generate a project. You can add libraries of your choice, but be ready to describe them.

**We will not count any time spent until you have a working environment and made your choice of libs and stack**

Project description
-------------------
# Intro
You are free to solve this in any storage/backend form you like, take what is easiest for you. Remember to read the whole text and evaluation before you start any coding. It is important information there.

The main goal of this task is to see your frontend code structure, not look at your data model backend API or how things are stored, but to be able to build any logic in the frontend, you need some storage or mock. Just make sure to explain what choices you have done.

It does not have to be pixel perfect, but it helps that you have some nice structure and flow that makse sense, because the frontend developer is translating designes into usable view.

**Pizzeria**

The application serves the purpose of ordering pizza online.

The following should be possible:

* I can order a pizza of type X and price (e.g. Margherita $5, Pepperoni $6, ...)
* I have an order of items
* This item in an order has pizza type and the number of pizzaes of that type

The "Create Order" function should allow the user to select pizza types and amounts, add to the order, see current total, and place (save) the order.

Additionally, the following functions should be considered:

* List the different orders
* Details of an individual order.
* I can test the code somewhere easily accessible



Optional features:

* meaningful model validations (e.g. item amount > 0)
* order bonuses (e.g. 5% cheaper when total over $50, 10% cheaper when total over ...)
* tests
* authentication
* whatever interesting you'd like to do

Evaluation
----------

Our goal is to find answers to those questions:

* Do you understand the chosen stack, framework and any patterns used in general?
* Can you setup components that are clear and easy to use?
* Is your frontend code efficient
* Do you master your working environment?

To set a scope of the task, so we dont take too much of your time, consider the following:

* It is not important to have a fully production ready application at the end, we find our way and scope along the way. 
* Take the shortcuts that feels fine to explain away.
* The goals might shift during the progress as we discuss during the work flow

We just want to see at what level of engangement and knowledge you put yourself.
If you decide to do a simple implementation and explain the rest of future work in words and clear detail, that is also an option.

Levels of functionality:

* **basic** - items mentioned in description work
* **above average** - some optional features
* **exceptional** - getting the app to continuously build, deploy to the cloud, give a url to work with, etc.
