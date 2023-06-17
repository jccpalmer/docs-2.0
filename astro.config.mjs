import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      social: {
        twitter: 'https://twitter.com/ladybluenotes',
        github: 'https://github.com/ladybluenotes',
      },
      sidebar: [
        {
          label: 'Overview',
          items: [
            { label: 'About Me', link: '/me/' },
            { label: 'What is this site?', link: '/site/' },
            { label: 'Style Guide', link: '/style-guide/' },
          ],
        },
        {
          label: 'Open Source Projects',
          items: [
            { label: 'Accessible for All', link: '/oss/accessible-for-all/' },
            { label: 'Astro', link: '/oss/astro/' },
            { label: 'Global Chemistry', link: '/oss/global-chem/' },
            { label: 'Material UI', link: '/oss/mui/' },
          ],
        },
        {
          label: 'Back-end Development',
          items: [
            { label: 'Budget Buddy', link: '/backend/budget-buddy/' },
            { label: 'Task It', link: '/backend/task-it/' },
          ],
        },
        {
          label: 'Front-end Development',
          items: [
            { label: 'Documentation Site', link: '/frontend/docs/' },
            { label: 'Happy Hour Guide', link: '/frontend/happy-hour/' },
            { label: 'Portfolio Site', link: '/frontend/portfolio/' },
            { label: 'Poke-Dex', link: '/frontend/poke-dex/' },
            { label: 'Welcome to Space', link: '/frontend/space/' },
          ],
        },
        {
          label: 'Full Stack Development',
          items: [
            { label: 'Track My Funds', link: '/fullstack/tmf/' },
          ],
        },
        {
          label: 'Additional Information',
          items: [
            { label: 'My Socials', link: '/socials/' },
            { label: 'My Resume', link: '/resume/' },
            { label: 'Contact Me', link: '/contact/' },
            { label: 'My Blog', link: '/blog/' },
          ],
        },
      ],
    }),
  ],
});
