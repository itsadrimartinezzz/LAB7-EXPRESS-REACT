# LAB 7 - Express and React

## Description

In this laboratory assignment, two main parts were developed.
The first part consisted of migrating a server previously built using Node.js native `http` library to `Express`, while maintaining all the original functionality and improving the code organization. The second part consisted of developing a functional calculator using React and Vite, based on a tutorial and later customizing the interface to match a personal style.

---

# Part 1 - Express Server


## Differences Between Express and HTTP

### Native HTTP

Node.js `http` library allows developers to create web servers from scratch.
Although it works correctly, it requires writing much more manual code to handle routes, responses, content types, and errors.

### Express

Express is a framework built on top of Node.js that greatly simplifies server development.
It allows developers to create routes more easily, manage requests in a cleaner way, and maintain more organized and readable code.

## Advantages of Express

* Shorter and cleaner code
* Easier route handling
* Simpler JSON responses
* Better project organization
* Easier scalability and maintenance
* Built-in middleware support

---

## Implemented Routes

### `/`

Displays a message indicating that the server is running.

### `/info`

Returns a JSON response with course and technology information.

### `/saludo`

Displays a custom greeting in plain text.

### `/api/status`

Returns the server status in JSON format.

### `404`

Displays the route the user attempted to access but was not found.

---

## Technologies Used

* Node.js
* Express.js

---

# Part 2 - React Calculator

## Objective

Create a functional calculator using React and Vite.

## Functionalities

The calculator supports the following operations:

* Addition
* Subtraction
* Multiplication
* Division

## Changes Made

After following the base tutorial, several custom changes were implemented:

* Completely redesigned interface
* New colors and styles
* Custom buttons
* Improved visual distribution
* More modern interface

---

## Technologies Used

* React
* Vite
* JavaScript
* CSS

---

# Evidence

## Part 1 - Express

### Main Route

![Main Route](./evidencias/express/ruta-principal.png)

### Route /info

![Info Route](./evidencias/express/ruta-info.png)

### Route /saludo

![Saludo Route](./evidencias/express/ruta-saludo.png)

### Route /api/status

![Status Route](./evidencias/express/ruta-status.png)

### Nonexistent Route (404)

![404 Route](./evidencias/express/ruta-404.png)

---

## Part 2 - React

### Calculator Running

![Calculator](./evidencias/react/calculadora-main.png)

### Addition Operation

![Addition](./evidencias/react/suma.png)

### Subtraction Operation

![Subtraction](./evidencias/react/resta.png)

### Multiplication Operation

![Multiplication](./evidencias/react/multiplicacion.png)

### Division Operation

![Division](./evidencias/react/division.png)

---
# Video 


---
# Folder Structure

```bash
LAB7/
│
├── README.md
│
└── evidencias/
    ├── express/
    │   ├── ruta-principal.png
    │   ├── ruta-info.png
    │   ├── ruta-saludo.png
    │   ├── ruta-status.png
    │   └── ruta-404.png
    │
    └── react/
        ├── calculadora-main.png
        ├── suma.png
        ├── resta.png
        ├── multiplicacion.png
        └── division.png
