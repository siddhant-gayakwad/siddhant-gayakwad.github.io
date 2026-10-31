import {
  PersonalInfo,
  SkillCategory,
  Project,
  Experience,
  Certification,
  BlogPost,
  LinkedInPost,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Siddhant Gayakwad',
  title: 'DevOps Engineer | AWS Solutions Architect | Cloud & Infrastructure',
  tagline: 'Building, Automating & Scaling the Infrastructure Behind Modern Applications.',
  intro:
    'I am a DevOps Engineer & AWS Certified Solutions Architect (SAA-C03) passionate about cloud infrastructure, automation, containerization, CI/CD pipelines, and modern deployment technologies. I enjoy building reliable, scalable, and efficient infrastructure while continuously exploring emerging technologies.',
  location: 'Ahmedabad, Gujarat, India',
  email: 'siddhantgayakwad@gmail.com',
  phone: '+91-9924510179',
  github: 'https://github.com/siddhant-gayakwad',
  linkedin: 'https://www.linkedin.com/in/siddhant-gayakwad-524524191/',
  resumeUrl: '/assets/resume/Resumes_Devops_2026.pdf',
  headshotUrl: '/assets/images/headshot.png',
  availability: 'Available for Opportunities',
  awsProfileUrl: 'https://skillsprofile.skillbuilder.aws/user/Sid',
};

export const heroMetrics = [
  { label: 'AWS Solutions Architect', value: 'SAA-C03' },
  { label: 'Infrastructure as Code', value: '100%' },
  { label: 'Uptime & Reliability Focus', value: '+99.9%' },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    description: 'Managed public cloud environments and core services.',
    skills: [
      { name: 'AWS (EC2, EKS, ECR, IAM, S3, VPC)' },
      { name: 'Google Cloud Platform (GCP)', isExploring: true },
      { name: 'Cloud Architecture & Cost Optimization' },
    ],
  },
  {
    id: 'containers',
    title: 'Containerization & Orchestration',
    description: 'Container packaging, clustering, service mesh, and scaling.',
    skills: [
      { name: 'Docker' },
      { name: 'Docker Swarm' },
      { name: 'Kubernetes (EKS & Self-Managed)' },
      { name: 'Red Hat OpenShift' },
      { name: 'Helm & Ingress Controllers' },
    ],
  },
  {
    id: 'cicd',
    title: 'CI/CD & Automation',
    description: 'Pipelines, automated testing stages, artifact publishing, and git flows.',
    skills: [
      { name: 'Jenkins (Groovy Pipelines & Cron Jobs)' },
      { name: 'GitHub Actions' },
      { name: 'Git & GitHub Version Control' },
      { name: 'Automated Deployment Scripts' },
    ],
  },
  {
    id: 'os',
    title: 'Operating Systems & Shell',
    description: 'Linux systems engineering, administration, and automation.',
    skills: [
      { name: 'Linux (Ubuntu, CentOS, Debian)' },
      { name: 'Bash & Shell Scripting' },
      { name: 'Python Automation' },
      { name: 'System Troubleshooting & Performance' },
    ],
  },
  {
    id: 'infra',
    title: 'Infrastructure & Networking',
    description: 'Provisioning, secure remote access, and service topology.',
    skills: [
      { name: 'Terraform (IaC)', isExploring: true },
      { name: 'SSH & Key Management' },
      { name: 'VPC, Subnets & Routing' },
      { name: 'Load Balancers & Reverse Proxies' },
    ],
  },
  {
    id: 'observability',
    title: 'Monitoring & Observability',
    description: 'Telemetry, logging, dashboarding, and cluster health monitoring.',
    skills: [
      { name: 'Grafana Dashboards' },
      { name: 'Prometheus Metrics', isExploring: true },
      { name: 'AWS CloudWatch' },
      { name: 'Container & Host Resource Monitoring' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'k8s-cloud-monitor',
    title: 'Cloud-Native Resource Monitor on AWS EKS',
    category: 'kubernetes',
    categoryLabel: 'Kubernetes & AWS',
    shortDesc:
      'Containerized application deployment using Kubernetes, managing application pods, services, networking, and scalable workloads.',
    fullDesc:
      'Engineered a lightweight real-time host and cluster telemetry service in Python/Flask with psutil to capture CPU, memory, IO, and container disk metrics. Containerized with optimized multi-stage Docker builds, pushed to Amazon ECR, and deployed across Amazon Elastic Kubernetes Service (EKS) clusters utilizing Kubernetes Ingress, resource limits, and auto-scaling pods.',
    architectureDetails: [
      'Multi-stage Dockerfile cutting image footprint by 65%',
      'Amazon ECR repository with IAM role policies and scan-on-push',
      'Kubernetes Deployment with RollingUpdate strategy and liveness/readiness probes',
      'Cluster Ingress and ClusterIP routing for reliable external access',
    ],
    technologies: ['Kubernetes', 'AWS EKS', 'Docker', 'Amazon ECR', 'Python', 'Flask'],
    metrics: '99.9% availability across cluster nodes',
    githubUrl: 'https://github.com/siddhant-gayakwad',
    featured: true,
  },
  {
    id: 'jenkins-cicd-pipeline',
    title: 'Automated CI/CD Pipeline with Dynamic Parameters',
    category: 'cicd',
    categoryLabel: 'CI/CD Automation',
    shortDesc:
      'Automating application build, testing, and deployment workflows using modern CI/CD practices and cost-effective scaling.',
    fullDesc:
      'Architected end-to-end Jenkins declarative and scripted pipelines using Groovy. Integrated Git branch triggers, automated linting, test runners, Docker container builds, dynamic parameter passing for multi-stage environments (dev/staging/production), and automated cluster rollouts with rollback mechanisms.',
    architectureDetails: [
      'Declarative Jenkinsfile pipeline with Groovy scripting',
      'Automated triggers on pull requests and semantic versioning tags',
      'Cost-efficient worker node spinning and ephemeral Docker build agents',
      'Instant failure alerting and automated rollback capabilities',
    ],
    technologies: ['Jenkins', 'Groovy', 'Docker', 'GitHub Actions', 'Bash', 'Linux'],
    metrics: 'Reduced release cycle from hours to < 10 minutes',
    githubUrl: 'https://github.com/siddhant-gayakwad',
    featured: true,
  },
  {
    id: 'energy-monitoring-infra',
    title: 'Infrastructure & Real-Time Monitoring Dashboards',
    category: 'monitoring',
    categoryLabel: 'Observability & Docker',
    shortDesc:
      'Deployed Keygen.sh licensing infrastructure with Docker and engineered Grafana dashboards giving teams real-time visibility.',
    fullDesc:
      'Provisioned and maintained containerized licensing services for Keygen.sh using Docker and Docker Compose. Executed comprehensive API testing suites to validate endpoints before production releases. Configured Grafana dashboards to visualize usage patterns, latency, container health, and energy consumption metrics.',
    architectureDetails: [
      'Isolated Docker bridge networking and volume persistence',
      'Automated API integration test runners for pre-release verification',
      'Grafana visualization panels for latency percentiles and host load',
      'System health alerts with threshold-based Slack/Email notifications',
    ],
    technologies: ['Docker', 'Grafana', 'Keygen.sh', 'API Testing', 'Linux', 'SQL'],
    metrics: 'Real-time telemetry updated every 5 seconds',
    githubUrl: 'https://github.com/siddhant-gayakwad',
    featured: true,
  },
  {
    id: 'openshift-microservices',
    title: 'Microservices → Red Hat OpenShift Migration',
    category: 'cloud',
    categoryLabel: 'OpenShift & Migration',
    shortDesc:
      'Migrating Docker-based microservices onto OpenShift, managing data migration, and building operational reporting.',
    fullDesc:
      'Led the transition of monolithic and Docker-based microservices into Red Hat OpenShift container platform. Created OpenShift deployment configs, services, and route definitions. Coordinated data migration, resolved persistent volume claims, and built centralized Grafana reporting to monitor cluster behavior during and after cutover.',
    architectureDetails: [
      'OpenShift Route configuration with TLS edge termination',
      'Stateful data migration with zero loss and minimal planned downtime',
      'OpenShift security context constraints (SCC) and RBAC adherence',
      'Grafana dashboard tracking memory limits and pod restart counts',
    ],
    technologies: ['OpenShift', 'Kubernetes', 'Docker', 'Grafana', 'YAML', 'Linux'],
    metrics: '100% zero-data-loss database migration',
    githubUrl: 'https://github.com/siddhant-gayakwad',
    featured: false,
  },
];

export const experienceData: Experience[] = [
  {
    id: 'techanek-engineer',
    organization: 'Techanek Technology',
    role: 'DevOps Engineer (Internship / Ongoing)',
    duration: 'July 2025 — Present',
    period: 'Current Role',
    location: 'Ahmedabad, Gujarat, India',
    type: 'Full-time / Onsite',
    isCurrent: true,
    responsibilities: [
      'Hands-on experience in DevOps consulting projects involving Jenkins, AWS, Docker, Kubernetes, and CI/CD automation.',
      'Built and optimized Jenkins pipelines with Groovy, dynamic parameters, cron jobs, and cost-efficient scaling logic.',
      'Deployed and managed Docker, Docker Swarm, and Kubernetes (EKS & self-managed) with Ingress, Helm, autoscaling, and monitoring.',
      'Gained real-world exposure to production troubleshooting, automation, and scalable cloud-native architectures.',
    ],
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'Helm', 'Groovy', 'Linux'],
    highlights:
      'Spearheaded pipeline optimization reducing build duration by 35% and configured multi-node Kubernetes ingress controllers.',
  },
  {
    id: 'vayak-engineer',
    organization: 'Vayak Solutions',
    role: 'Service Engineer',
    duration: 'Dec 2022 — Aug 2023',
    period: '9 Months',
    location: 'Ahmedabad, Gujarat, India',
    type: 'Engineering',
    responsibilities: [
      'Installed and set up equipment and software for business customers, ensuring uninterrupted operational uptime.',
      'Crafted complex SQL queries to extract, transform, and manipulate system data for reporting.',
      'Troubleshot network configurations, hardware issues, and optimized database query execution.',
    ],
    technologies: ['Linux', 'SQL', 'Hardware & Networking', 'Troubleshooting'],
    highlights:
      'Maintained 99%+ client satisfaction across hardware/software rollouts and refined database queries.',
  },
  {
    id: 'convasys-intern',
    organization: 'Convasys',
    role: 'DevOps System Engineer Intern',
    duration: 'Jun 2025',
    period: 'Internship',
    location: 'Ahmedabad, Gujarat, India',
    type: 'Internship',
    responsibilities: [
      'Deployed Keygen.sh licensing infrastructure with containerized Docker services.',
      'Designed and executed API testing scenarios for regression confidence.',
      'Configured Grafana dashboards for real-time energy usage and system telemetry.',
    ],
    technologies: ['Docker', 'Grafana', 'Keygen.sh', 'API Testing'],
  },
  {
    id: 'adopt-intern',
    organization: 'Adopt NetTech',
    role: 'DevOps Intern',
    duration: 'Mar 2025 — Apr 2025',
    period: 'Internship',
    location: 'Ahmedabad, Gujarat, India',
    type: 'Internship',
    responsibilities: [
      'Coordinated data migration and Docker-based microservices deployments on OpenShift.',
      'Constructed Grafana reporting dashboards for cluster health metrics.',
      'Diagnosed container failures and cluster pod scheduling constraints.',
    ],
    technologies: ['OpenShift', 'Docker', 'Grafana', 'Kubernetes'],
  },
];

export const certificationsData: Certification[] = [
  {
    id: 'aws-saa',
    title: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Completed: October 2026',
    expires: 'Expires: October 2029',
    status: 'achieved',
    badgeType: 'aws',
    category: 'certification',
    badgeImageUrl: 'https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
    verificationUrl: 'https://skillsprofile.skillbuilder.aws/user/Sid',
  },
  {
    id: 'aws-ccp',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Completed: May 2026',
    expires: 'Expires: October 2029',
    status: 'achieved',
    badgeType: 'aws',
    category: 'certification',
    badgeImageUrl: 'https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    verificationUrl: 'https://skillsprofile.skillbuilder.aws/user/Sid',
  },
  {
    id: 'aws-academy',
    title: 'AWS Academy Graduate - Cloud Foundations - Training Badge',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Completed: June 2026',
    status: 'achieved',
    badgeType: 'aws',
    category: 'badge',
    badgeImageUrl: 'https://images.credly.com/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob',
    verificationUrl: 'https://skillsprofile.skillbuilder.aws/user/Sid',
  },
  {
    id: 'aws-quest-cp',
    title: 'AWS Cloud Quest: Cloud Practitioner - Training Badge',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Completed: June 2026',
    status: 'achieved',
    badgeType: 'aws',
    category: 'quest',
    badgeImageUrl: 'https://images.credly.com/images/30816e43-2550-4e1c-be22-3f03c5573bb9/blob',
    verificationUrl: 'https://skillsprofile.skillbuilder.aws/user/Sid',
  },
  {
    id: 'aws-quest-genai',
    title: 'AWS Cloud Quest: Generative AI Practitioner - Training Badge',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Completed: June 2026',
    status: 'achieved',
    badgeType: 'aws',
    category: 'quest',
    badgeImageUrl: 'https://images.credly.com/images/15fa08e6-ca73-4fa3-94ed-c36f7f157313/blob',
    verificationUrl: 'https://skillsprofile.skillbuilder.aws/user/Sid',
  },
  {
    id: 'aws-quest-sa',
    title: 'AWS Cloud Quest: Solutions Architect',
    issuer: 'Amazon Web Services (AWS)',
    date: '44% Completed · In Progress',
    status: 'exploring',
    badgeType: 'aws',
    category: 'quest',
    verificationUrl: 'https://skillsprofile.skillbuilder.aws/user/Sid',
  },
  {
    id: 'aws-quest-serverless',
    title: 'AWS Cloud Quest: Serverless Developer',
    issuer: 'Amazon Web Services (AWS)',
    date: '33% Completed · In Progress',
    status: 'exploring',
    badgeType: 'aws',
    category: 'quest',
    verificationUrl: 'https://skillsprofile.skillbuilder.aws/user/Sid',
  },
  {
    id: 'cka-prep',
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    date: 'Hands-on Labs & Architecture',
    status: 'exploring',
    badgeType: 'k8s',
  },
];

export const linkedInPosts: LinkedInPost[] = [
  {
    id: 'post-aws-saa',
    title: 'Achieved: AWS Certified Solutions Architect — Associate (SAA-C03)',
    category: 'AWS CERTIFICATION',
    date: 'Recent Milestone',
    caption:
      'Officially gained the AWS Certified Solutions Architect — Associate (SAA-C03) credential! Validating deep architecture knowledge across multi-AZ high availability, decoupled microservices, VPC network topologies, and cost-optimized cloud infrastructure.',
    image: '/assets/images/siddhant_aws_saa.jpg',
    badge: 'SAA-C03 Verified',
    linkedinUrl: 'https://www.linkedin.com/in/siddhant-gayakwad-524524191/',
  },
  {
    id: 'post-aws-speaker',
    title: 'Keynote Speaker at AWS Community Day Ahmedabad',
    category: 'COMMUNITY & TALK',
    date: 'Community Event',
    caption:
      'Grateful for the opportunity to speak on stage at AWS Community Day Ahmedabad, sharing insights on containerizing microservices, orchestrating workloads on Amazon EKS, and building automated Jenkins deployment pipelines.',
    image: '/assets/images/siddhant_aws_speaker.jpg',
    badge: 'AWS Community Speaker',
    linkedinUrl: 'https://www.linkedin.com/in/siddhant-gayakwad-524524191/',
  },
  {
    id: 'post-devops-workstation',
    title: 'Engineering Scalable CI/CD & Kubernetes Workloads',
    category: 'DEVOPS IN PRACTICE',
    date: 'Engineering Update',
    caption:
      'A look into the daily workflow: monitoring live Kubernetes clusters, optimizing Groovy-driven Jenkins pipelines, and tuning Grafana dashboards for sub-second telemetry across staging and production nodes.',
    image: '/assets/images/siddhant_devops_desk.jpg',
    badge: 'Kubernetes & CI/CD',
    linkedinUrl: 'https://www.linkedin.com/in/siddhant-gayakwad-524524191/',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'getting-started-k8s',
    title: 'Getting Started with Kubernetes: From Local Pods to Cloud Deployments',
    category: 'KUBERNETES',
    readTime: '5 min read',
    date: 'Oct 2026',
    summary:
      'A practical guide to understanding Pods, Deployments, Services, and Ingress without the overwhelming terminology.',
    content: [
      'Kubernetes can feel intimidating when you first transition from docker run to manifests with hundreds of lines of YAML. But once you break down its core abstraction layer, everything snaps into place.',
      'A Pod represents the atomic unit: one or more tightly coupled containers sharing network and storage namespaces. Deployments add declarative desired-state management, handling rollouts, rollbacks, and health checks.',
      'Services act as stable network abstractions across ephemeral pod IP addresses, and Ingress routes incoming HTTP(S) traffic based on hostnames and paths.',
      'Key takeaway: Always define resource requests and limits in your pod specs to avoid the dreaded OOMKilled errors on worker nodes.',
    ],
  },
  {
    id: 'jenkins-groovy-pipelines',
    title: 'Building Bulletproof CI/CD Pipelines with Jenkins and Groovy',
    category: 'CI/CD AUTOMATION',
    readTime: '6 min read',
    date: 'Sep 2026',
    summary:
      'How to structure shared libraries, dynamic parameters, and stage timeouts for enterprise-grade automation.',
    content: [
      'Ad-hoc Freestyle Jenkins jobs lead to configuration drift and unmaintainable build servers. The gold standard is code-defined pipelines stored inside the repository (Jenkinsfile).',
      'By utilizing Groovy scripting inside declarative stages, you can execute conditional steps based on target branches, inject dynamic runtime parameters, and parallelize unit testing.',
      'Implementing cost-efficient agent scaling: Using ephemeral Docker containers as build agents ensures zero tool contamination between builds while freeing up host resources immediately upon pipeline completion.',
    ],
  },
  {
    id: 'docker-vs-kubernetes',
    title: 'Docker vs. Kubernetes: Understanding the Difference & Complementary Roles',
    category: 'CONTAINERS',
    readTime: '4 min read',
    date: 'Aug 2026',
    summary:
      'Why it is not an "either/or" question: how Docker packages applications while Kubernetes runs them at scale.',
    content: [
      'One of the most frequent misconceptions for engineers starting their DevOps journey is comparing Docker and Kubernetes as competitors.',
      'Docker is a containerization platform: it provides the toolset to build container images, run containers on a single host, and manage volumes.',
      'Kubernetes is a container orchestrator: it manages a fleet of machines (nodes), automates pod distribution, schedules workloads across available compute, handles self-healing, and provides service discovery.',
      'In modern production stacks, they work together: Docker produces the Open Container Initiative (OCI) image, and Kubernetes runs it with high availability.',
    ],
  },
];
