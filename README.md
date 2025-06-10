<a name="readme-top"></a>
<div align="center">
  
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- ![IsologotipoPlax](https://github.com/user-attachments/assets/51626830-aebf-4062-a50f-060beaf6218b) -->
  
## SOCIAL DEATH STAR
Social Death Start: A Twitter clone for minimalist, chaotic microblogging

[Report error](https://github.com/MaxiCarrillo/plax-professional-developer/issues) · [Suggest something](https://github.com/MaxiCarrillo/plax-professional-developer/issues)
</div>

## Key Features  

- **Galactic Posts**: Share short messages (like holocrons) with the Star Wars universe.  
- **Force Connections**: Follow users, track followers, and join faction-specific trends.  
- **Auth**: Create an account and log in to engage.

![home-shots](https://github.com/user-attachments/assets/4c033e92-93f9-49cc-88e1-a7ecadaeee29)

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## Prerequisites

- Install [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- Install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)

## Next.js Project Installation

1. Clone the project repository:
   ```sh
   git clone https://github.com/MaxiCarrillo/social-death-star
   cd social-death-star
   ```

2. Install project dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the project's root directory if it does not exist and configure the necessary variables.

4. Start the Next.js development server:
   ```sh
   npm run dev
   ```
   - The project will run on `http://localhost:3000`

## Initializing Containers (Backend and Database)

1. Start the containers with Docker Compose:
   ```sh
   docker-compose up -d
   ```
   - This will start the backend and database on the ports configured in `docker-compose.yml`.

2. The backend documentation is available at:
   ```
   http://localhost:8080/static/docs/index.html
   ```
   - All test users have the password: `Test123`

## CMS Used

This project uses a CMS available in the following repository:
[GitHub - social-death-star-cms](https://github.com/MaxiCarrillo/social-death-star-cms)

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## Contributing  

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contribution you make is **greatly appreciated**!  

If you have a suggestion to improve the project, please:  
1. [_Fork_](https://github.com/MaxiCarrillo/social-death-star/fork) the repo  
2. Create a [_Pull Request_](https://github.com/MaxiCarrillo/social-death-star/pulls)  
3. Or open an [_Issue_](https://github.com/MaxiCarrillo/social-death-star/issues) with the "enhancement" tag.  

### Quick Guide:  
1. [_Fork_](https://github.com/MaxiCarrillo/social-death-star/fork) the Project  
2. Clone your fork (`git clone <your-fork-url>`)  
3. Add upstream (`git remote add upstream https://github.com/MaxiCarrillo/social-death-star.git`)  
4. Create a Feature Branch (`git switch -c feature/AmazingFeature`)  
5. Commit Changes (`git commit -m 'Add: AmazingFeature'`)  
6. Push to Branch (`git push origin feature/AmazingFeature`)  
7. Open a [_Pull Request_](https://github.com/MaxiCarrillo/social-death-star/pulls)  

**Thank you to all contributors who made this project possible!**  

[![Contributors](https://contrib.rocks/image?repo=MaxiCarrillo/social-death-star&max=500&columns=20)](https://github.com/MaxiCarrillo/social-death-star/graphs/contributors)  

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## 🛠️ Stack

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=next,react,typescript,docker,nodejs,git,css" />
  </a>
</p>

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/MaxiCarrillo/social-death-star.svg?style=for-the-badge
[contributors-url]: https://github.com/MaxiCarrillo/social-death-star/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/MaxiCarrillo/social-death-star.svg?style=for-the-badge
[forks-url]: https://github.com/MaxiCarrillo/social-death-star/network/members
[stars-shield]: https://img.shields.io/github/stars/MaxiCarrillo/social-death-star.svg?style=for-the-badge
[stars-url]: https://github.com/MaxiCarrillo/social-death-star/stargazers
[issues-shield]: https://img.shields.io/github/issues/MaxiCarrillo/social-death-star.svg?style=for-the-badge
[issues-url]: https://github.com/MaxiCarrillo/social-death-star/issues
