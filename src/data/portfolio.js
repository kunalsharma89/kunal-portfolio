export const developer = {
  name: 'Kunal Sharma',
  title: 'Senior Backend Developer',
  subtitle: '.NET Core | Django | Microservices',
  experience: '10+ years',
  tagline: 'Building scalable backends and APIs that power enterprise systems.',
  about: `I'm a Senior Backend Developer with over a decade of experience designing and delivering high-performance, scalable systems. I specialize in .NET Core, Django, and microservices architecture, with a strong focus on REST APIs, message-driven systems, and cloud-native deployments.

I've led technical delivery for medical device platforms, industrial safety systems, treasury management, and smart workplace solutions. I enjoy turning complex business requirements into clean, maintainable code and reliable infrastructure.`,
  avatar: null, // Add your image path if needed
}

export const techStack = [
  { name: '.NET Core', category: 'backend' },
  { name: 'ASP.NET MVC', category: 'backend' },
  { name: 'C#', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'Django', category: 'backend' },
  { name: 'Django REST Framework', category: 'backend' },
  { name: 'REST APIs', category: 'api' },
  { name: 'Microservices', category: 'architecture' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'SQL Server', category: 'database' },
  { name: 'RabbitMQ / NServiceBus', category: 'messaging' },
  { name: 'Angular / AngularJS', category: 'frontend' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'CI/CD', category: 'devops' },
]

export const projects = [
  {
    id: 1,
    name: 'Medical Device Software Update Platform',
    description: 'Enterprise platform used to manage software updates for medical devices globally with device fleet management and asynchronous communication.',
    tech: ['.NET Core Microservices', 'PostgreSQL', 'MQTT', 'NServiceBus', 'Kubernetes'],
    impact: 'Enabled secure, auditable OTA updates for medical device fleets worldwide with async messaging and orchestration.',
    github: 'https://github.com',
  },
  {
    id: 2,
    name: 'Work Permit Safety System',
    description: 'Industrial safety platform that manages work permit approval workflows before tasks begin.',
    tech: ['ASP.NET MVC', 'AngularJS', 'SQL Server', 'Google Maps API'],
    impact: 'Streamlined permit workflows and improved site safety compliance with map-based permit visibility.',
    github: 'https://github.com',
  },
  {
    id: 3,
    name: 'Treasury Management Platform',
    description: 'Financial system used for cash flow forecasting, investment tracking, and debt management.',
    tech: ['ASP.NET MVC', 'Web API', 'SQL Server'],
    impact: 'Centralized treasury operations with forecasting and reporting for finance teams.',
    github: 'https://github.com',
  },
  {
    id: 4,
    name: 'Smart Room Booking Platform',
    description: 'Meeting room booking system with digital door signage and calendar integration.',
    tech: ['ASP.NET MVC', 'AngularJS', 'SQL Server', 'Google Calendar API'],
    impact: 'Reduced double-bookings and improved room utilization with calendar sync and digital signage.',
    github: 'https://github.com',
  },
]

export const services = [
  {
    title: 'Backend & API Development',
    description: 'Design and build RESTful APIs, microservices, and server-side logic using .NET Core and Django.',
  },
  {
    title: 'System Architecture',
    description: 'Microservices design, event-driven systems, and scalable cloud-native architectures.',
  },
  {
    title: 'Database & Messaging',
    description: 'PostgreSQL, SQL Server, RabbitMQ, NServiceBus—modeling, optimization, and messaging patterns.',
  },
  {
    title: 'DevOps & Delivery',
    description: 'Docker, Kubernetes, CI/CD pipelines, and deployment automation for reliable releases.',
  },
]

export const experience = [
  { year: '2014 – Present', role: 'Senior Backend Developer', company: 'Enterprise / Product Teams', summary: 'Leading backend and API development for medical, safety, treasury, and workplace platforms.' },
  { year: '2010 – 2014', role: 'Backend Developer', company: 'Software Teams', summary: 'Built and maintained ASP.NET and Django applications, REST APIs, and database layers.' },
]

export const links = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com/in',
  email: 'mailto:kunal.sharma@example.com',
}
