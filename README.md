# E-Commerce-App

## Table of Contents

  - [Description](#description)
  - [Architecture](#architecture)
  - [Features](#features)
  - [Technologies and Tools Used](#technologies-and-tools-used)
  - [Principles](#principles)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

## Description

E-Commerce-Phase01 is a simple web app designed for managing and displaying product information. The application allows users to view product details such as name, image, prices, and descriptions. Additionally, it provides essential functionalities for managing the product catalog.

## Architecture

The E-commerce App follows the MVC (Model-View-Controller) architecture, ensuring a clear separation of concerns and facilitating maintainability and scalability of the application.

## Key Technologies

* **Backend:**
    * **Database:** MongoDB (MongoDB Atlas)
    * **Framework:** Express.js framework for building RESTful APIs,Error Handling, Router, Templating .
    * **Runtime:** Node.js
    * **ORM:** Mongoose
    * **Templating:** EJS
    * **Additional Libraries:**
        * `connect-flash`
        * `dotenv`
        * `joi` (validation)
        * `method-override`
        * `nodemon` (development)
* **Frontend:**
    * **HTML5, CSS3, JavaScript (ES6+)**
    * **Framework:**  Bootstrap 5, Starability.css (star rating)
* **Version Control:** Git
* **Payment Gateway:** Stripe
* **Authentication:** Passport.js
* **Package Management:** npm
* **Deployment:** Render(aws)

## Features

1. **View Product Details:**
   - Navigate through the product list and view specific details of each product, including name, image, prices, and descriptions.

2. **Product Details Page:**
   - Clicking on any product enables you to view detailed information about that particular product, including a comprehensive description.

3. **Add and Modify Products:**
   - Add new products to the catalog easily.
   - Make changes to existing products, such as updating prices, images, and descriptions.

4. **Delete Products:**
   - Remove any specific product from the catalog effortlessly.

5. **View Previous Changes:**
   - Keep track of changes made to products by checking the history of modifications.


## Principles

The project follows the following software development principles:

1. **DRY (Don't Repeat Yourself):**
   - The codebase adheres to the DRY principle, minimizing redundancy and promoting code reusability. Repeated logic or functionality is consolidated to avoid duplication.

2. **SOC (Separation of Concerns):**
   - The application design follows the SOC principle by dividing the code into distinct modules or components, each handling a specific concern. This separation enhances maintainability and readability.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
- Install [MongoDB](https://www.mongodb.com/try/download/community) and ensure it's running.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Masterjii/E-Commerce-Phase01.git
