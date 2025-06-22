import kanbanImage from '../assets/images/kanban-project.png';
import brickBreakerImage from '../assets/images/brick-breaker-project.png';
import weatherAppImage from '../assets/images/weather-app-project.png';

export const projectsData = [
  {
    id: 'kanban-tracker',
    title: 'Interactive Kanban Task Tracker',
    description: 'A task management app with drag-and-drop, dynamic task creation/deletion, and a celebratory confetti effect.',
    image: kanbanImage,
    tags: ['React', 'Styled-Components', '@hello-pangea/dnd'],
    liveUrl: 'https://kanban-task-app-blond.vercel.app/',
    repoUrl: 'https://github.com/chiarabdy/kanban-task-app',
  },
  {
    id: 'weather-dashboard',
    title: 'Modern Weather Dashboard',
    description: 'A responsive weather app built with React that fetches and displays live data from the OpenWeatherMap API for any city.',
    image: weatherAppImage,
    tags: ['React', 'Vite', 'Axios', 'Styled-Components'],
    liveUrl: 'https://your-weather-app.vercel.app', 
    repoUrl: 'https://github.com/chiarabdy/react-weather-app',
  },
  {
    id: 'brick-breaker',
    title: 'Retro Brick Breaker Game',
    description: 'A classic arcade game built with vanilla JavaScript and HTML5 Canvas to practice core game development concepts.',
    image: brickBreakerImage,
    tags: ['JavaScript', 'HTML5 Canvas', 'CSS'],
    liveUrl: 'https://brick-breaker-game-bay.vercel.app/',
    repoUrl: 'https://github.com/chiarabdy/brick-breaker-game',
  },
];