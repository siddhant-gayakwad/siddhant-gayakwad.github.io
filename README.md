# Siddhant Gayakwad — DevOps Portfolio

A modern, high-performance portfolio website built with React, TypeScript, and Vite. Showcases cloud infrastructure on AWS, Kubernetes orchestration, CI/CD automation, production telemetry, and verified AWS certifications.

Live Domain: **[siddhantgayakwad.me](https://siddhantgayakwad.me)**  
AWS Skills Profile: **[AWS Skills Profile](https://skillsprofile.skillbuilder.aws/user/Sid)**

---

## Features

- **Editorial Minimalist Aesthetic**: High-end typography with Space Grotesk, Inter, and JetBrains Mono, monochromatic palette with DevOps green accents.
- **Cinematic DevOps Hero**: Interactive terminal simulator displaying real pipeline health, container stats, and AWS architecture.
- **Verified AWS Certifications & Quests**: Direct badges and verified links for AWS Certified Solutions Architect — Associate (SAA-C03), Cloud Quests, and continuous learning badges.
- **Community & Speaking Gallery**: Visual highlights from AWS user group sessions, community meetups, and DevOps workshops.
- **Interactive Projects Showcase**: Detailed modals with architecture diagrams, GitHub repository links, and production implementation details.
- **Technical Writing & Blog**: In-depth articles covering multi-stage Docker builds, Kubernetes cost optimization, and GitOps workflows.
- **Embedded PDF Resume**: Responsive resume viewer with zoom controls, download action, and full credentials review.

---

## Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS, JetBrains Mono, Space Grotesk
- **CI/CD**: GitHub Actions workflow deploying to GitHub Pages

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Compile and verify TypeScript & production bundle
npm run build
```

---

## GitHub Pages Deployment

The repository is configured with a GitHub Actions workflow in `.github/workflows/gh-pages.yml` that automatically builds and deploys to the `gh-pages` branch upon pushing to `main`.

### Pushing to GitHub

To push the commits from your local machine or terminal:

```bash
# Push main branch (triggers the automated GitHub Pages workflow)
git push origin main

# Or push directly to the gh-pages branch
git push origin gh-pages
```
