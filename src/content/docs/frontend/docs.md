---
title: Documentation site
description: A breakdown of how I built this website and what I learned in the process.
---

*TODO: Screenshot of Documentation Site*

*TODO: Link to github and site*

Motivated by the significance of documentation in project success, I created this site to offer comprehensive analyses of my projects. On this site, it was intended to show detailed insights into the motivation behind each project, my development journey, contributions made, lessons learned, and technical breakdowns, providing a valuable resource for understanding and appreciating my work.

## I. Getting started

### Prerequisites

Other than an internet browser and IDE, there are no other requirements to run this application.

### Installation

How to install and run the application.

1. Clone the repository from GitHub.

        git clone https://github.com/LadyBluenotes/wiki-doc

2. Start the application

        npm run dev

## II. About

### Built with
* [Starlight](https://starlight.astro.build/) template from [Astro](https://astro.build/)
* [TypeScript](https://www.typescriptlang.org/) & [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript)

This site was built using Astro. In an effort to avoid complexity, Astro provided a static site generator that allowed me to use languages like TypeScript and JavaScript. It helped to simplify the development process by enabling me to use familiar tools and frameworks, but in optimizing the static files so that they can be served quickly.

By using Astro, I was able to leverage the power of static site generation to create a fast and efficient website. Specifically, I utlized their Starlight template which is dedicated to housing documentation, providing many built-in features such as site navigation, SEO, easy-to-read typography and more.

## III. Motivation

The original thought with making this site, was to practice the type of documentation for myself that I had been working on with the open source contributions I had been working on with the open-source contributions I had been involved in. By creating a website that reflects my documentation practices, I can refine and enhance my skills in presenting technical information effectively. 

To learn more about my motivation behind this site, you can go [here](/site/).

## IV. Key takeaways

### Discoveries and reflections

Upon first glance, I always assumed that writing documentation was fairly straighforward but upon closer examination, it becomes evident that it encompases various crucial components. One fundamental aspect to consider when embarking on the documentation journey was figuring out *what to write*. Things I had to consider when writing this included:
1. **Scope and purpose of the content:** I had to determine the scope of the projects that I wanted to document, such as identify the key features, motivation, and what I learned during the build or, in the case of my open source contributions, highlighting the specific contributions I made and the roles I had in projects.
2. **Organizing and structuring information:** I needed to consider how to organize and structure the information effectively. This involved creating clear sections and headings for different topics, projects, and contributions. I also had to ensure logical flow within each section, arranging the content in a way that is easy for readers to follow and understand.
3. **Visual elements:** To enhance the readability and comprehension of my documentation, I incorporated visual elements. This included using screenshots, images, or code snippets to illustrate the style of the site, or steps in each project.
4. **Writing style and tone:**  I recognized the importance of adopting an appropriate writing style and tone in my documentation. I aimed for clarity and simplicity, using clear and concise language to explain concepts and instructions. I avoided excessive technical jargon or terminology, ensuring that the content remained accessible to a broad audience. Additionally, I strived to maintain consistency in my writing style, grammar, and formatting throughout the documentation. This ended up leading into me creating my own [style guide](/style-guide/).

### Technical growth

#### Astro

Working with Astro introduced me to the concept of static site generation and its advantages. I learned how to leverage the benefits of static sites, including improved performance, scalability, and easier deployment. Understanding this approach expanded my toolkit for building fast and efficient websites.

#### Documentation best practices

By creating comprehensive documentation for my projects, I delved into the world of documentation best practices. I aimed to hone my skills in presenting technical information in a clear and concise manner, focusing on providing valuable insights. This experience deepened my understanding of effective documentation techniques, allowing me to communicate complex concepts effectively.

#### Web Development Skills

Building the site using Astro allowed me to strengthen my web development skills, particularly in working with modern front-end technologies such as TypeScript and JavaScript. I gained a deeper understanding of how to structure and organize code effectively, leveraging the power of these languages to create dynamic and interactive components. 

While I have previous experience with all of these tools, Astro utilizes a lot of Markdown and Multidementional Expressions (MDX). MDX, which is a powerful tool that allows me to write JavaScript XML (JSX) within Markdown files, showed me how to combine the simplicity and readability of Markdown with the ability to incorporate interactive and dynamic components using JSX syntax.

## V. Acknowledgements

Outside of the Starlight and Astro documentation, the Astro Discord was an invaluable resource in troubleshooting for this. In addition, I was able to utilize a lot of the information [Sarah Rainsberger](https://twitter.com/sarah11918), the phenomenal docs lead at Astro and outstanding documentarian, had given me during a few chats about what good documentation looks like.

## VI. Additional Information

This site will continue to be a work in progress as information will continue to be included, features implemented, and issues present.

### Known Issues

Can be found [here](https://github.com/LadyBluenotes/docs-2.0/issues).

### Feature Improvements

☐ Add personalized touches to site.
☐ Add screenshots to each individual page.
☐ Add links to each section, where relevant.