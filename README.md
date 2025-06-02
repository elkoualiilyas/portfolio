# Personal Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Smooth scrolling and animations
- Project showcase section
- Contact form
- Modern and clean UI
- Built with React and Tailwind CSS

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Customization

### Personal Information
- Update your name, title, and description in `src/components/Hero.jsx`
- Modify the projects in `src/components/Projects.jsx`
- Update contact information in `src/components/Contact.jsx`

### Styling
- Colors can be customized in `tailwind.config.js`
- Additional styles can be added in `src/index.css`

### Adding Projects
To add a new project, add an object to the `projects` array in `src/components/Projects.jsx`:

```javascript
{
  title: "Project Title",
  description: "Project description",
  technologies: ["React", "Node.js", "MongoDB"],
  image: "/path-to-image.jpg",
  link: "https://project-url.com"
}
```

## Technologies Used

- React
- Tailwind CSS
- Framer Motion
- Heroicons
- React Intersection Observer

## License

MIT License - feel free to use this template for your own portfolio!
