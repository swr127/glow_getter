# Glow Getter Overview 

## Project Description

The **Glow Getter** web application is an ecommerce website for 'mock' makeup and skincare products. I am building this application for the purpose of presenting a simple and intuitive ecomm website that could be used by real beauty companies.  

Link: TBC

### Permissions

The digital assets used to create this project have full licensing and permission from [Shutterstock](https://www.shutterstock.com/home). All of the digital assets are stored locally and on [Imgur](https://imgur.com/).

## Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views

## MVP

- A full-stack application with React on the front-end and Rails on the back-end
	- React app with a minimum of 8 components
	- React app using React Router 
	- Rails server with RESTful JSON endpoints
	- Rails server with a minimum of a user table and two additional tables 
- A user authentication that permits a user to sign up and login
	- When the user is logged in, they will be able to perform the following CRUD actions on their shopping cart
		- Create = add products to cart
		- Read = view products in cart
		- Update = update quantity of products in cart
		- Delete = delete products from cart 
	- When the user is not logged in, they won't be able to perform the above CRUD actions on their shopping cart 
- A responsvie design with a minimum of 2 views (desktop & mobile)

### MVP Client

- React on front-end

### MVP Server

- Rails on back-end

### MVP Libraries

`react-router-dom`, `reacts-slideshow`, `react-hamburger-menu`, `axios`, `nodemon`, `morgan`, `pg`, `cors`, `rails`

## React Component Hierarchy

![Dummy Link](url)

### Component Breakdown

|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
|    Header    |   n   | _The header will contain the navigation and logo._               |
|  Navigation  |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   y   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card |   n   | _The cards will render the post info via props._                 |
|    Footer    |   n   | _The footer will show info about me and a link to my portfolio._ |

## ERD Model

> Use this section to display an image of a computer generated ERD model.

### Endpoints

- GET `/api/users`
	- Index route returning an array of all Users and nested 'Likes'
- GET `/api/users/:id`
	- Show route for a user requested by ID
- POST `/api/users`
	- Create route for a new user
- PUT `/api/users/:id/nominate
  - Update a user by id to create an association to the ballots table

## Planning

### Schedule

|  Day   | Deliverables                                   |
| ------ | ---------------------------------------------- |
|Mar 5th | Create project pitch for approval              |
|Mar 6th | Build database and endpoints on Rails          |
|Mar 9th | Build components and routes on React           |
|Mar 10th| Build full CRUD and user auth                  |
|Mar 11th| CSS styling and responsive design              |
|Mar 12th| MVP, begin post-MVP                            |
|Mar 13th| Final presentation                             | 

### Timeframes

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     TBD     |
| TOTAL               |          |     6 hrs      |     TBD     |

## Post-MVP

- Create admin access in user auth 
- Add a customer service contact form 
- Use SCSS for styling 

## Project Change Log

> This section should be expanded and revised as you work on your project.

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
