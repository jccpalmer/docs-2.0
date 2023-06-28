---
title: Poke-Dex
description: A breakdown of how I built the poke-dex website and what I learned in the process.
---

# Poke-Dex

*TODO: Screenshot of Site*

*TODO: Link to github and site*

As a fan of Pokemon, I wanted to use my developer skills to create a web application that would display information about the pokemon in the franchise. I chose to use the free Poke API for its reliable information about Pokemon. Additionally, I used React due to its popularity and with it being an easy to use and learn JavaScript library. 

This application is a single page application that uses React Router to display different components based on the URL. Design was primarily Material UI, a popular React UI framework, with inspiration from what a Poke Dex would look like in the Pokemon universe.

## I. Getting started

### Prerequisites

The following must be installed on your machine:

* NodeJS

### Installation

How to install and run the application.

1. Clone the repository from GitHub.

        git clone https://github.com/LadyBluenotes/the-poke-dex

2. Install NPM packages

        npm install

3. Start the application

        npm run dev

## II. About

### Built with

* [Axios](https://axios-http.com/docs/intro)
* [Material UI](https://mui.com/)
* [PokeAPI](https://pokeapi.co/)
* [React](https://react.dev/)
* [React Router](https://reactrouter.com/)

The Poke-Dex web application created using React, a versatile JavaScript library that helps with the creation of a seamless and responsive user experience. Using React's component-based approach, I developed a modular and reusable codebase, resulting in a, what my goal was, of an efficient application. Additionally, React allowed me to create a single-page application that would dynamically update the page without having to refresh the page.

To handle routing within the application, I employed React Router. This powerful library enabled me to map specific components to different URLs, ensuring the appropriate content was rendered based on the user's navigation. React Router's flexibility also allowed me to pass relevant props to components, seamlessly integrating Pokemon data into the application.

For a visually pleasing and user-friendly design, I turned to Material UI, a comprehensive React component library. By utilizing Material UI's pre-built components and customization options, I achieved an elegant and intuitive interface, enabling users to navigate effortlessly.

To access Pokemon data, I utilized the PokeAPI in conjunction with Axios, a JavaScript library for making HTTP requests. With Axios, I could efficiently retrieve the necessary data from the PokeAPI. Using asynchronous requests, the application loaded data as it became available, resulting in a fast and optimized experience.

## III. Motivation

This project presented an exciting opportunity for me to delve deeper into the world of React and expand my front-end development skills. Serving as a more of an undertaking, it enabled me to gain valuable hands-on experience and a good understanding of React's capabilities and best practices.

My goal was to create a captivating single-page application that would dynamically update in response to user interactions while ensuring smooth navigation across different sections. To accomplish this, I carefully designed the application's architecture to leverage React's component-based approach, enabling seamless updates and a fluid user experience.

For data integration, I sought out an API that would provide rich and diverse information, leading me to select the Poke API. Leveraging the comprehensive data available, I aimed present the Pokemon data in an appealing and user-friendly manner.

In parallel, I seized the opportunity to enhance my design skills. With a focus on simplicity and coherence, I crafted a clean and visually pleasing UI that adhered to a distinct theme. Furthermore, I ensured that the design was responsive and optimized for seamless usage across various devices, including desktop and mobile platforms.

## IV. Key takeaways

### Discoveries and reflections

During the development of the Poke Dex web application, I gained valuable insights and made notable discoveries that contributed to its success. From handling data retrieval and pagination to implementing design choices, these reflections provided essential lessons for future projects. Key discoveries and reflections include:
1. **Effective data retrieval and management:** Working with the extensive dataset provided by the Poke API required efficient data handling. Through the use of Axios, I could make asynchronous requests and seamlessly retrieve the necessary Pokemon information. This approach helped smooth data retrieval and management and therefore making performance and responsiveness better.
2. **Streamlined pagination implementation:** To enhance the user experience and manage the display of large amounts of data, implementing pagination was crucial. By breaking down the data into manageable chunks, users could navigate through different pages and explore the Pokemon collection easily. This implementation optimized load times and allowed users to navigate the Poke Dex easier.
3. **React's versatility and scalability**: Developing the Poke Dex web application using React showcased the library's versatility and scalability. The modular component-based architecture facilitated code organization and reusability, making it easier to maintain and extend the application in the future. React's capabilities, including state management with hooks and smooth routing with React Router, contributed to a robust and efficient user experience.
4. **Using a component library:** Choosing Material UI as the component library for the Poke Dex web application proved to be a wise decision. Its collection of pre-built components, along with customization options, allowed for quick development and consistent design. The library's documentation and active community provided valuable support and resources during the implementation of the application's visual elements.

### Technical growth

#### React hooks and functional components

During this project, I focused on honing my skills in utilizing React Hooks to create functional components and manage state. This approach allowed me to build a more modular and reusable codebase, making it easier to maintain and enhance the application. Embracing the principle of keeping things simple and straightforward (KISS), React Hooks empowered me to write cleaner and more concise code.

#### Component-based architecture

To ensure a well-structured single-page application, I adopted a component-based architecture. By breaking down pages into smaller, manageable components, I achieved better code organization and improved maintainability. This approach aligned with React best practices and enabled me to reuse components across different sections of the application. It also facilitated a clearer separation of concerns and enhanced the overall development workflow.

#### React router

The implementation of React Router was a significant milestone in this project. By using this library, I gained precise control over application routing. Mapping specific URLs to corresponding components allowed for dynamic rendering based on user navigation. React Router provided a seamless and intuitive way to handle different routes within the single-page application, enhancing the user experience and ensuring smooth transitions between different sections.

## V. Acknowledgements

This project was inspired by a tutorial done by Anthony Sistilli, with design inspired by the Pokemon color palette. You can find both [part one](https://www.youtube.com/watch?v=gGcLQ2sZFeg) and [part two](https://www.youtube.com/watch?v=XmTCeWbVjpM) on Youtube.

## VI. Additional Information

While this project is mostly complete, there are still some known issues that I will work to resolve in the future. I have also added some features I'd like to implement when I come back to this.

### Known Issues

Can be found [here](https://github.com/LadyBluenotes/the-poke-dex/issues).

### Feature Improvements

- [ ] Migrate React Router to newest version.
- [ ] Render Pokemon on card components.
- [ ] Display a page number.
- [ ] Edit the size of the search button in the upper right corner.
- [ ] Link user to Pokemon website.
- [ ] Add a favorites feature.
