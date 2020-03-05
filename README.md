# Glow Getter Overview 

## Project Description

The **Glow Getter** web application is an ecommerce website for 'mock' makeup and skincare products. I am building this application for the purpose of presenting a simple and intuitive ecomm website that could be used by real beauty companies.  

Link: TBC

### Permissions

The digital assets used to create this project have full licensing and permission from [Shutterstock](https://www.shutterstock.com/home). All of the digital assets are stored locally and on [Imgur](https://imgur.com/).

## Wireframes

### Homepage

|  Desktop   | Mobile |
| <a href="https://imgur.com/lIZjQvI"><img src="https://i.imgur.com/lIZjQvI.png" title="source: imgur.com" /></a> | <a href="https://imgur.com/wrx7lBz"><img src="https://i.imgur.com/wrx7lBz.png" title="source: imgur.com" /></a> |

### Sign up

### Login

### Shop

### Cart

## MVP

- A full-stack application with React on the front-end and Rails on the back-end
	- React app with the components listed in the React Component Hierarchy
	- React app using React Router 
	- Rails server with RESTful JSON endpoints
	- Rails server with a user table, product table, and a join cart table
- A user authentication that permits a user to sign up and login
- A user experience that involves full CRUD
	- When the user visits the homepage for the first time, they can sign up for an account and browse products
		- Create = create an account
		- Read = browse products 
	- When the user is logged in, they will be able to perform the following actions on their shopping cart
		- Update = add products to cart
		- Delete = delete products from cart 
	- When the user is not logged in, they won't be able to perform the above actions on their shopping cart 
- A responsvie design with a minimum of 2 views (desktop & mobile)

### MVP Client

- React on front-end

### MVP Server

- Rails on back-end

### MVP Libraries

`react-router-dom`, `reacts-slideshow`, `react-hamburger-menu`, `axios`, `nodemon`, `morgan`, `pg`, `cors`, `rails`

## React Component Hierarchy

<a href="https://imgur.com/UJqxVyA"><img src="https://i.imgur.com/UJqxVyA.png" title="source: imgur.com" /></a>

### Component Breakdown

|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
|    App       |   Y   | The App will make an Axios call and contain all the routes for the app |
|    Header    |   Y   | The Header will show the app title and contain the navigation       |
|    Nav       |   Y   | The Nav will contain the navlinks for home, login, register, and view cart  |
|    Home      |   N   | The Home will show generic stylistic images on the homepage   |
|    Login     |   Y   | The Login will enable a user to login to their account |
|    Sign Up / Register  |   Y   | The Register will enable a user to regist for an account |
|    Shop      |   Y   | The Shop will show all of the products in the database |
|    Shop Product Card    |   Y   | The Shop Product Card will show information on the product from the database, and have an add to cart button |
|    Cart    |   Y   | The Cart will show all of the products that a user has added to their cart |
|    Cart Product Card    |   Y   | The Cart Product Card will show information on the product from the database, and have a remove from cart botton |
|    Footer    |   N   | The Foote will show my name and additional copyright information  |

## ERD Model

<a href="https://imgur.com/urEWlDy"><img src="https://i.imgur.com/urEWlDy.png" title="source: imgur.com" /></a>

### Endpoints

- GET `/users`
	- Index route returning an array of all users 
- GET `/users/:id`
	- Show route for a user requested by ID
	- Show all products associated with user ID
- POST `/users`
	- Create a new user
- PUT `/users/:id/`
	- Update a user by ID
- DELETE `/users/:id/`
	- Delete a user by ID
- GET `/products`
	- Index route returning an array of all products 
- GET `/products/:id`
	- Show route for a product requested by ID
	- Show all users associated with product ID
- POST `/products`
	- Create a new product
- PUT `/products/:id/`
	- Update a user by ID
- DELETE `/products/:id/`
	- Delete a user by ID
  
## Planning

### Schedule

|  Day   | Deliverables                                   |
| ------ | ---------------------------------------------- |
|Mar 5th | Create project pitch for approval              |
|Mar 6th | Create back-end with full CRUD on Rails    |
|Mar 7th | Create user auth on Rails          |
|Mar 8th | R&R         |
|Mar 9th | Create front-end with full CRUD on React           |
|Mar 10th| Test user authentication & full CRUD functionality on Rails and React |
|Mar 11th| CSS styling and responsive design              |
|Mar 12th| MVP, begin post-MVP                            |
|Mar 13th| Final presentation                             | 

### Timeframes

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| Set Up Rails App   |    H     |     2 hrs     |    TBD    |
| Create models and migrations  |    H     |     1 hr      |     TBD     |
| Create database with mock data  |    H     |     2 hrs      |     TBD     |
| Seed database with mock data  |    H     |     1 hr     |     TBD     |
| Create controllers  |    H     |     1 hr      |     TBD     |
| Create routes  |    H     |     1 hr      |     TBD     |
| Create user auth on back-end |    H     |     6 hrs      |     TBD     |
| Test back-end CRUD functionality  |    H     |     2 hrs      |     TBD     |
| Set up React App  |    H     |     2 hrs      |     TBD     |
| Create react router  |    H     |     1 hr      |     TBD     |
| Create components  |    H     |     4 hrs      |     TBD     |
| Create Axios call to back-end  |    H     |     4 hrs      |     TBD     |
| Pass state to stateful components  |    H     |     2 hrs      |     TBD     |
| Enable user auth on front-end  |    H     |     6 hrs      |     TBD     |
| Test front-end CRUD functionality  |    H     |     2 hrs      |     TBD     |
| CSS styling and responsive design  |    H     |     12 hrs      |     TBD     |
| Deploy application on Heroku  |    M     |     2 hrs      |     TBD     |
| Make necessary post-deployment changes  |    L     |     1 hr     |     TBD     |
| TOTAL               |          |     52 hours     |     TBD     |

## Post-MVP

- Create admin access in user auth 
- Additional CSS styling (react hamburger menu, react slideshow)
- Try out some SCSS for styling 

## Project Change Log

> This section should be expanded and revised as you work on your project.

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
