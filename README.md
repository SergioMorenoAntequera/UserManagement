# Proportunity code challenge

## Setup
1) Make sure Docker is installed in your computer.
2) After downloading the code challenge and going to the directory, you should be able to run `docker-compose up` to start two containers: 
- `api`: API with Express.js running on port 8080.
- `react`: React development server running on port 3000 (it may take 1-2 minutes the first time since it will install all dependencies).

## Instructions
1) Create an endpoint in the API that would return a list of users. It should allow clients to filter out users that don't have an application and limit the results to whatever value is provided.
2) Create a table in the React app listing the first 20 users that were created who applied for a loan (i.e. the `application` field is not null). The table should only include the first name and the last name of every user.
3) When clicking on a row, a container should appear next to the list with the following information about the selected user: first name, last name, email and created date.

## Notes
- The list of users can be found in `api/data/users.json`.
- The endpoint to fetch users should be `http://localhost:8080/users`.
- We will take into consideration how the UI was built.
- You can use a CSS framework to build a pretty UI.

## Bonus points
The following is a list of additional requirements that aren't needed but would make for an even better solution:
- Moving the list of users to a database instead of reading it from a file.
- Writing tests for the most important pieces of functionality.
- Using Typescript.