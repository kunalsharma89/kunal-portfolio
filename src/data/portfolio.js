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
    domain: 'Medical / Device Management',
    company: 'Capgemini',
    duration: '2+ Years',
    overview: 'A large-scale platform used to manage software updates for medical devices globally. The system controls the entire update lifecycle including fleet management, software distribution, device communication, and monitoring.',
    tech: ['.NET Core Microservices', 'Angular 18', 'PostgreSQL', 'NServiceBus', 'MQTT', 'Kubernetes', 'Helm', 'GitHub CI/CD', 'MinIO', 'JFrog Artifactory'],
    keyFeatures: [
      'Device fleet inventory management',
      'Software update lifecycle automation',
      'Real-time communication with medical devices',
      'Import/export subsystem',
      'Software update validation and tracking',
    ],
    myContributions: [
      'Developed scalable .NET Core Web APIs',
      'Designed complex PostgreSQL queries handling millions of records',
      'Implemented asynchronous communication using AMQP & NServiceBus',
      'Built device communication modules via MQTT',
      'Implemented automated testing using xUnit',
    ],
    impact: 'Improved system performance by 60% in major modules. Reduced QA testing time through automation. Enabled reliable software updates across large medical device fleets.',
  },
  {
    id: 2,
    name: 'Enterprise Work Permit Safety System',
    domain: 'Industrial Safety',
    company: 'Ask EHS',
    duration: '2 Years',
    overview: 'A safety platform designed for work permit approval workflows before maintenance or operational work begins on vessels or industrial sites. The system ensures safety compliance and authorization before any work activity starts.',
    tech: ['ASP.NET MVC', 'AngularJS', 'SQL Server', 'Web API', 'Entity Framework', 'Google Maps API', 'Active Directory Authentication'],
    keyFeatures: [
      'Work permit request system',
      'Multi-level approval workflow',
      'Vessel location tracking using Google Maps',
      'Permit document generation',
      'Compliance monitoring',
    ],
    myContributions: [
      'Developed core permit workflow modules',
      'Built REST APIs for permit management',
      'Integrated Google Maps location services',
      'Optimized database queries',
      'Resolved production issues and improved workflow stability',
    ],
    impact: 'Improved safety compliance processes. Reduced manual permit processing time. Enabled real-time tracking of work permit locations.',
  },
  {
    id: 3,
    name: 'Treasury Management Platform',
    domain: 'Financial Systems',
    company: 'Ask EHS',
    duration: '1 Year',
    overview: 'A centralized treasury management system designed to manage cash flow forecasting, investment tracking, compliance, and debt management. The platform integrates with SWIFT financial messaging systems.',
    tech: ['ASP.NET MVC', 'Web API', 'SQL Server', 'C#'],
    keyFeatures: [
      'Cash flow forecasting',
      'Investment portfolio management',
      'Fund transfer monitoring',
      'Compliance reporting',
      'Debt scheduling automation',
    ],
    myContributions: [
      'Built modules for cash position monitoring and fund management',
      'Implemented complex SQL procedures for forecasting',
      'Worked with financial analysts to translate requirements into scalable features',
    ],
    impact: 'Automated previously manual treasury processes. Reduced financial reporting time. Improved financial data accuracy.',
  },
  {
    id: 4,
    name: 'Smart Room Booking Platform',
    domain: 'Smart Workplace / Meeting Rooms',
    company: 'Rife Software',
    duration: '1.4 Years',
    overview: 'A smart room booking system integrated with digital door signage that displays real-time room availability. This system integrates with Google Calendar and Outlook Calendar.',
    tech: ['ASP.NET MVC', 'AngularJS', 'SQL Server', 'Web API', 'Outlook Calendar API', 'Google Calendar API', 'Kendo UI'],
    keyFeatures: [
      'Instant room booking',
      'Digital room signage display',
      'Real-time calendar synchronization',
      'Room occupancy tracking',
    ],
    myContributions: [
      'Developed AngularJS dashboards',
      'Built APIs for booking management',
      'Integrated calendar synchronization',
      'Optimized UI for low-power Android devices',
    ],
    impact: 'Eliminated room booking conflicts. Improved meeting scheduling efficiency.',
  },
  {
    id: 5,
    name: 'Employee Performance Analytics System',
    domain: 'HR / Performance Management',
    company: 'Treta Infotech',
    duration: '6 Months',
    overview: 'A system designed to evaluate employee performance across departments, providing management with data-driven insights into employee productivity.',
    tech: ['ASP.NET MVC', 'SQL Server', 'Web API', 'Swagger', 'Slack Integration'],
    keyFeatures: [
      'Employee performance evaluation',
      'Management analytics dashboard',
      'Automated Slack notifications',
      'Digital signature report authentication',
    ],
    myContributions: [
      'Built performance tracking modules',
      'Implemented Slack notification system',
      'Optimized SQL queries for large data sets',
      'Integrated digital signatures for report authenticity',
    ],
    impact: 'Enabled data-driven performance insights for management. Streamlined evaluation and reporting workflows.',
  },
  {
    id: 6,
    name: 'Customer Complaint Management System (NCR)',
    domain: 'Quality Management',
    company: 'Treta Infotech',
    duration: '6 Months',
    overview: 'A Non-Conformance Reporting system designed to track, manage, and resolve customer complaints efficiently.',
    tech: ['ASP.NET MVC', 'SQL Server', 'Web API'],
    keyFeatures: [
      'Complaint tracking',
      'Issue categorization',
      'Manager corrective actions',
      'Customer response workflow',
    ],
    myContributions: [
      'Designed the NCR tracking system',
      'Implemented manager task workflows',
      'Built complaint categorization logic',
      'Improved complaint resolution tracking',
    ],
    impact: 'Improved complaint resolution tracking and response times. Streamlined NCR workflows for quality management.',
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
  { year: '2020 – Present', role: 'Senior Backend Developer', company: 'Enterprise / Product Teams', summary: 'Leading backend and API development for medical, safety, treasury, and workplace platforms.' },
  { year: '2015 – 2020', role: 'Backend Developer', company: 'Software Teams', summary: 'Built and maintained ASP.NET and Django applications, REST APIs, and database layers.' },
]

export const links = {
  linkedin: 'https://www.linkedin.com/in/kunal-sharma-89/',
  email: 'mailto:kunal.89.sharma@gmail.com',
}
