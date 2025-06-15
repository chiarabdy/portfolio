import kanbanImage from '../assets/images/kanban-project.png';
import brickBreakerImage from '../assets/images/brick-breaker-project.png';
import weatherAppImage from '../assets/images/weather-app-project.png';

export const projectsData = [
  {
    id: 'kanban-tracker',
    title: 'Interactive Kanban Task Tracker',
    description: 'A task management app with drag-and-drop functionality, dynamic task creation/deletion, and a celebratory confetti effect.',
    image: kanbanImage,
    tags: ['React', 'Styled-Components', '@hello-pangea/dnd'],
    liveUrl: '/projects/kanban-tracker',
    repoUrl: 'https://github.com/chiarabdy/portfolio/tree/main/src/components/projects/KanbanApp.jsx',
  },
  {
    id: 'weather-dashboard',
    title: 'Modern Weather Dashboard',
    description: 'A responsive weather app built with React that fetches and displays live data from the OpenWeatherMap API for any city.',
    image: weatherAppImage,
    tags: ['React', 'Axios', 'Styled-Components'],
    liveUrl: '/projects/weather-dashboard',
    repoUrl: 'https://github.com/chiarabdy/portfolio/tree/main/src/components/projects/WeatherApp.jsx',
  },
  {
    id: 'brick-breaker',
    title: 'Retro Brick Breaker Game',
    description: 'A classic arcade game built with vanilla JavaScript and HTML5 Canvas to practice core game development concepts.',
    image: brickBreakerImage,
    tags: ['JavaScript', 'HTML5 Canvas', 'CSS'],
    liveUrl: '/projects/brick-breaker',
    repoUrl: 'https://github.com/chiarabdy/portfolio/tree/main/src/components/projects/BrickBreaker.jsx',
  },
];