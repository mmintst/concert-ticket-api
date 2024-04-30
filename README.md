<a name="readme-top"></a>

<!-- HEADER -->
<br />
<div align="center">

<h1 align="center">concert-ticket-api</h1>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#bonus-track">Bonus Task</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a website for concerts' tickets reservation with both admin and user role. For back-end, the website provides a RESTful API with CRUD operations created with NestJS framework. For front-end, please visit: [concert-ticket-frontend](https://github.com/mmintst/concert-ticket-frontend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mmintst/concert-ticket-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run project
   ```sh
   npm run start:dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

For the usage of API, it can be seperated into two parts. The first part is APIs for admin which can create and delete concerts on the list and can also view all of the concerts' information and user's reservation and cancellation history. The second part is APIs for user which can view, reserve and cancel the concerts.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Salisa Techasiripaiboon - salisa.t.mint@gmail.com

Project Link: [https://github.com/mmintst/concert-ticket-api](https://github.com/mmintst/concert-ticket-api)

As an assignment, I was unable to complete all of the requirements within the suggested time limit. Therefore, I decided to break down the requirements into small tasks and categorize them to prioritize the most important functions of the website. This is why I decided to leave out Unit Tests and Responsive UI as the last parts to do.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- BONUS TASK -->

## Bonus Task

- How to handle when many users want to reserve the ticket at the same time?

When many users want to reserve the ticket, try to access the website and do the same action at the same time, it can cause an incorrect result which is a problem from race condition. To avoid race codition, we can use mutual exclusion to ensure that only one process can access data at a time. For example, when too many people are trying to reserve the ticket for the same concert on the website at the same time, we can make a condition of locking the data and block the accessing of data while the one who come first is making reservation as in action to data. When the first reservation is finished, the lock will be released and the next reservation can be made.
