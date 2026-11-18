# GitHub User & Repository Explorer

**Discover developers. Explore profiles. Find repositories.**

A responsive web application that lets you search for GitHub users, explore developer profiles, and discover their public repositories using the GitHub REST API.

[**View Live Demo →**](https://github-user-repository-explorer.vercel.app/)

## Overview

GitHub User & Repository Explorer provides a simple interface for discovering developers on GitHub and exploring their public profiles and repositories without navigating through multiple GitHub pages.

## Features

- **User Search:** Search GitHub users by username.
- **Debounced Search:** Waits 500ms after typing before sending a search request.
- **Profile Details:** View user avatars, followers and public repository counts.
- **Repository Explorer:** Fetch and display a selected user's public repositories.
- **Repository Information:** Explore repository stars and programming languages.
- **Loading States:** Visual feedback while API requests are processing.
- **Error Handling:** Handles unsuccessful requests and API errors.
- **Responsive Interface:** Designed for desktop and mobile screens. 

## Screenshots

*Application screenshots will be added soon.*

## Tech Stack

| Technology      | Purpose                               |
| --------------- | ------------------------------------- |
| HTML5           | Application structure                 |
| CSS3            | Styling and responsive layout         |
| JavaScript      | Application logic and API integration |
| GitHub REST API | User and repository data              |
| Vercel          | Deployment                            |

## Getting Started

### Prerequisites

- A modern web browser
- Git
- Visual Studio Code (recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sanankooriyattil/github-user-repository-explorer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd github-user-repository-explorer
   ```

3. Open the project in Visual Studio Code:

   ```bash
   code .
   ```

4. Open `index.html` using Live Server or directly in your browser.

No additional packages or build tools are required.

## API Endpoints

This project uses the public GitHub REST API.

| Function           | Endpoint                                           |
| ------------------ | -------------------------------------------------- |
| Search users       | `https://api.github.com/search/users?q={username}` |
| Fetch user profile | `https://api.github.com/users/{username}`          |
| Fetch repositories | `https://api.github.com/users/{username}/repos`    |

The application uses public API endpoints and does not require a personal access token for its basic functionality.

## Future Improvements
- Improve responsiveness across desktop, tablet, and mobile devices.
- Repository sorting and filtering.
- Improved pagination.
- Additional developer profile information.
- Further accessibility and UI improvements.

## Author

**Sanan K.**

- GitHub: [@sanankooriyattil](https://github.com/sanankooriyattil)
- Live Demo: [GitHub User & Repository Explorer](https://github-user-repository-explorer.vercel.app/)

---

*Built with HTML, CSS and Vanilla JavaScript.*
