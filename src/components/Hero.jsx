import { motion } from 'framer-motion';
import avatar from '../assets/avatar.png';
import { Typewriter } from 'react-simple-typewriter';

// SVG icons for dev tools (added CSS3, TypeScript, SQL, Git, Linux)
const icons = [
  {
    name: 'React',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-cyan-400">
        <circle cx="20" cy="20" r="3" fill="#61DAFB" />
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="2" />
        <ellipse cx="20" cy="20" rx="7" ry="18" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="7" ry="18" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 20 20)" />
      </svg>
    ),
    style: { top: '10%', left: '8%' },
  },
  {
    name: 'VSCode',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500">
        <rect width="40" height="40" rx="8" fill="#007ACC" />
        <path d="M12 28L28 12M12 12l8 8-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    style: { top: '20%', left: '80%' },
  },
  {
    name: 'GitHub',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-800">
        <circle cx="20" cy="20" r="20" fill="#181717" />
        <path d="M26 32v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0030.5 13a5.07 5.07 0 00-.09-3.64s-1.18-.38-3.87 1.48a13.38 13.38 0 00-7 0C16.82 9 15.64 9.36 15.64 9.36A5.07 5.07 0 0015.5 13a5.44 5.44 0 00-1.5 3.77c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.61V32" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    style: { top: '70%', left: '15%' },
  },
  {
    name: 'JavaScript',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-yellow-400">
        <rect width="40" height="40" rx="8" fill="#F7DF1E" />
        <text x="10" y="28" fontSize="18" fill="#222" fontFamily="monospace">JS</text>
      </svg>
    ),
    style: { top: '60%', left: '70%' },
  },
  {
    name: 'Bootstrap',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-purple-600">
        <rect width="40" height="40" rx="8" fill="#7952B3" />
        <text x="7" y="28" fontSize="18" fill="#fff" fontFamily="monospace" fontWeight="bold">B</text>
      </svg>
    ),
    style: { top: '80%', left: '60%' },
  },
  {
    name: 'HTML5',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-orange-500">
        <rect width="40" height="40" rx="8" fill="#E44D26" />
        <text x="5" y="28" fontSize="18" fill="#fff" fontFamily="monospace" fontWeight="bold">HTML</text>
      </svg>
    ),
    style: { top: '35%', left: '50%' },
  },
  {
    name: 'Node.js',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-500">
        <rect width="40" height="40" rx="8" fill="#339933" />
        <path d="M20 8.5C14.14 8.5 9.37 13.26 9.37 19.13C9.37 24.15 13.06 28.37 17.76 29.02V23.97H14.38V21.22H17.76V18.47H14.38V15.72H17.76V12.97H14.38V10.22H20C25.86 10.22 30.63 15.08 30.63 21C30.63 25.61 27.63 29.54 23.63 30.56V33.31H20.88V30.56C16.88 29.54 13.88 25.61 13.88 21C13.88 15.08 18.64 10.22 24.5 10.22H30.63V12.97H24.5C21.65 12.97 19.38 15.24 19.38 18.09C19.38 20.94 21.65 23.21 24.5 23.21C26.88 23.21 28.88 21.41 28.88 19.13C28.88 16.85 26.88 15.05 24.5 15.05H21.75V17.8H24.5C25.94 17.8 27.03 18.89 27.03 20.33C27.03 21.77 25.94 22.86 24.5 22.86H21.75V25.61H24.5C26.88 25.61 28.88 23.81 28.88 21.53C28.88 19.25 26.88 17.45 24.5 17.45H21.75V20.2H24.5C25.94 20.2 27.03 21.29 27.03 22.73C27.03 24.17 25.94 25.26 24.5 25.26H21.75V28.01H24.5C26.88 28.01 28.88 26.21 28.88 23.93C28.88 21.65 26.88 19.85 24.5 19.85H21.75V22.6H24.5C25.94 22.6 27.03 23.69 27.03 25.13C27.03 26.57 25.94 27.66 24.5 27.66H21.75V30.41H24.5C26.88 30.41 28.88 28.61 28.88 26.33C28.88 24.05 26.88 22.25 24.5 22.25H21.75V25H24.5C25.94 25 27.03 26.09 27.03 27.53C27.03 28.97 25.94 30.06 24.5 30.06H21.75V32.81H20C14.14 32.81 9.37 28.05 9.37 22.18C9.37 17.16 13.06 12.94 17.76 12.29V17.34H14.38V20.09H17.76V22.84H14.38V25.59H17.76V28.34H14.38V31.09H20C25.86 31.09 30.63 26.23 30.63 20.36C30.63 15.75 27.63 11.82 23.63 10.8V8.05H20.88V10.8C16.88 11.82 13.88 15.75 13.88 20.36C13.88 26.23 18.64 31.09 24.5 31.09H30.63V28.34H24.5C21.65 28.34 19.38 26.07 19.38 23.22C19.38 20.37 21.65 18.1 24.5 18.1C26.88 18.1 28.88 19.9 28.88 22.18C28.88 24.46 26.88 26.26 24.5 26.26H21.75V23.51H24.5C25.94 23.51 27.03 22.42 27.03 20.98C27.03 19.54 25.94 18.45 24.5 18.45H21.75V15.7H24.5C26.88 15.7 28.88 17.5 28.88 19.78C28.88 22.06 26.88 23.86 24.5 23.86H21.75V26.61H24.5C25.94 26.61 27.03 25.52 27.03 24.08C27.03 22.64 25.94 21.55 24.5 21.55H21.75V24.3H24.5C25.94 24.3 27.03 25.39 27.03 26.83C27.03 28.27 25.94 29.36 24.5 29.36H21.75V32.11H20" fill="#fff" />
      </svg>
    ),
    style: { top: '45%', left: '5%' },
  },
  {
    name: 'Python',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-700">
        <rect width="40" height="40" rx="8" fill="#3776AB" />
        <path d="M20 5c-8.28 0-15 6.72-15 15s6.72 15 15 15 15-6.72 15-15S28.28 5 20 5zm-4 5h-4v4h4v-4zm8 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm8 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm8 0h-4v4h4v-4z" fill="#fff" />
      </svg>
    ),
    style: { top: '25%', left: '30%' },
  },
  {
    name: 'Docker',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400">
        <rect width="40" height="40" rx="8" fill="#2496ED" />
        <path d="M20 10c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-4 4h4v4h-4v-4zm8 0h4v4h-4v-4zm-8 8h4v4h-4v-4zm8 0h4v4h-4v-4z" fill="#fff" />
      </svg>
    ),
    style: { top: '85%', left: '85%' },
  },
  {
    name: 'CSS3',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500">
        <rect width="40" height="40" rx="8" fill="#1572B6" />
        <text x="4" y="28" fontSize="18" fill="#fff" fontFamily="monospace" fontWeight="bold">CSS3</text>
      </svg>
    ),
    style: { top: '5%', left: '45%' },
  },
  {
    name: 'TypeScript',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600">
        <rect width="40" height="40" rx="8" fill="#3178C6" />
        <text x="4" y="28" fontSize="18" fill="#fff" fontFamily="monospace" fontWeight="bold">TS</text>
      </svg>
    ),
    style: { top: '30%', left: '90%' },
  },
  {
    name: 'SQL',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-600">
        <rect width="40" height="40" rx="8" fill="#FFFFFF" />
        <path fillRule="evenodd" clipRule="evenodd" d="M20 5c8.28 0 15 6.72 15 15s-6.72 15-15 15S5 28.28 5 20 11.72 5 20 5zM9.5 15c0-1.1.9-2 2-2h17a2 2 0 012 2v2a2 2 0 01-2 2h-17a2 2 0 01-2-2v-2zm0 6c0-1.1.9-2 2-2h17a2 2 0 012 2v2a2 2 0 01-2 2h-17a2 2 0 01-2-2v-2z" fill="#000000"/>
      </svg>
    ),
    style: { top: '50%', left: '25%' },
  },
  {
    name: 'Git',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-orange-600">
        <rect width="40" height="40" rx="8" fill="#F05033" />
         <path d="M20 5c8.28 0 15 6.72 15 15s-6.72 15-15 15S5 28.28 5 20 11.72 5 20 5zm-2.8 8.4l-3.8 3.8 3.8 3.8v-2.8h5.6v-2h-5.6v-2.8zm5.6 10.4v2.8l3.8-3.8-3.8-3.8v2.8h-5.6v2h5.6z" fill="#fff"/>
      </svg>
    ),
    style: { top: '75%', left: '40%' },
  },
  {
    name: 'Linux',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-yellow-500">
        <rect width="40" height="40" rx="8" fill="#FCC624" />
        <path d="M20 5c-8.28 0-15 6.72-15 15s6.72 15 15 15 15-6.72 15-15S28.28 5 20 5zM15 12l-2 2v4l2 2v4l-2 2v4h4v-4l2-2v-4l-2-2v-4l2-2v-4h-4zm10 0h-4v4l2 2v4l-2 2v4h4v-4l2-2v-4l-2-2v-4l2-2v-4h-4z" fill="#000000"/>
      </svg>
    ),
    style: { top: '15%', left: '60%' },
  },
];

const codeLines = [
  'function present(name) {  print("hi !, im elkouali ilyas ")}'
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Scattered and floating dev tool icons */}
      {icons.map((icon, idx) => (
        <motion.div
          key={icon.name}
          className="absolute z-0 opacity-20"
          style={icon.style}
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 3 + idx,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          {icon.svg}
        </motion.div>
      ))}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10">
        <motion.img
          src={avatar}
          alt="Avatar"
          className="w-60 h-auto"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="bg-[#181c24] rounded-xl shadow-lg p-6 font-mono text-lg md:text-xl lg:text-2xl text-left border border-secondary/30 relative overflow-hidden max-w-xl">
            <span className="block text-green-400">$&nbsp;</span>
            <span className="text-secondary">
              <Typewriter
                words={codeLines}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={40}
                deleteSpeed={30}
                delaySpeed={1200}
              />
            </span>
          </div>
          <p className="mt-6 text-tertiary text-lg md:text-xl max-w-xl">
            I am a student at <span className="text-secondary font-semibold">EMSI Casablanca</span>, a future engineer in my 3rd year. I am passionate about <span className="text-secondary font-semibold">AI</span> and intelligent applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 