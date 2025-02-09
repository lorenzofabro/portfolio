export function useCommands() {
    const commands = {
      help: () => `
  Available commands:
    - help: Show this help message
    - about: Display information about me
    - experience: Show my work experience
    - skills: List my technical skills
    - projects: Show my projects
    - contact: Display my contact information
    - clear: Clear the terminal
      `,
      about: () => `
  Hi, I'm Lorenzo Fabro, a Senior Fullstack Developer based in Copenhagen, Denmark.
  I specialize in building modern web applications with Python (Django, FastAPI, Flask), React, Svelte, and Flutter, alongside expertise in infrastructure technologies like Kubernetes and Terraform.
  Currently, I'm working at DoLand, a SaaS platform focused on impact-driven investment solutions.
      `,
      experience: () => `
  Work Experience:
  1. Senior Backend Developer at Doland | Apr 2024 - Present
     - Developing SaaS solutions for impact and investment needs.

  2. Moni Online | Feb 2021 - Apr 2024
     - Senior Fullstack Developer & Technical Leader | Jul 2022 - Apr 2024: Led backend development, modernized workflows, and mentored a team of developers.
     - Senior Fullstack Developer | Nov 2021 - Jul 2022: Redeveloped microservices and enhanced application security features.
     - Semi-senior Fullstack Developer | Feb 2021 - Nov 2021: Built QR payment workflows and improved transaction processes.

  3. Fullstack Developer at Pabex | Jun 2018 - Feb 2021
     - Developed key features for administrative panels and security applications.
      `,
      skills: () => `
  Technical Skills:
    Backend
      - Python (Django, FastAPI, Flask)
      - RESTful APIs
      - Microservices Architecture

    Frontend
      - React.js
      - Svelte
      - Flutter
      - TypeScript
      - JavaScript (ES6+)
      - HTML5 & CSS3

    Infrastructure
      - Kubernetes
      - Docker
      - Terraform
      - AWS (Cloud Services)

    Other
      - SaaS Development
      - Agile Methodologies
      - Technical Leadership
      - Problem Solving
      - CI/CD Pipelines
      `,
      projects: () => `
  Featured Projects:
  Check out my work at <a href="https://github.com/lorenzofabro" target="_blank" class="text-blue-400 hover:underline">github.com/lorenzofabro</a>

  Some of my personal projects:
    - <a href="https://splitty.loren.land" target="_blank" class="text-blue-400 hover:underline">splitty.loren.land</a>
    - <a href="https://weatherly.loren.land" target="_blank" class="text-blue-400 hover:underline">weatherly.loren.land</a>
      `,
      contact: () => `
  Contact Information:
    - Email: <a href="mailto:lorenzofabro1997@gmail.com" class="text-blue-400 hover:underline">lorenzofabro1997@gmail.com</a>
    - LinkedIn: <a href="https://www.linkedin.com/in/lorenzo-fabro-90a022164" target="_blank" class="text-blue-400 hover:underline">linkedin.com/in/lorenzo-fabro-90a022164</a>
    - GitHub: <a href="https://github.com/lorenzofabro" target="_blank" class="text-blue-400 hover:underline">github.com/lorenzofabro</a>
    - Location: Copenhagen, Denmark
      `,
      clear: () => "",
    }

    const executeCommand = async (command: string) => {
      const [cmd, ...args] = command.toLowerCase().split(" ")
      if (cmd in commands) {
        return commands[cmd as keyof typeof commands](...args)
      } else {
        return `Command not found: ${cmd}. Type 'help' for a list of available commands.`
      }
    }

    return { executeCommand }
  }

