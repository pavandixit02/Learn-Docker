# 🐳 Docker Learning

Welcome to my **Docker Learning Repository**.

This repository contains my **Docker theory notes, practical commands, Node.js containerization project, Docker Compose experiments, Play with Docker practice, and GitLab on Docker setup**.

The purpose of this repository is to learn Docker from **beginner level to practical DevOps usage** through hands-on implementation.

---

## 📚 About This Repository

I am learning Docker by combining:

- 📖 Theory
- 💻 Docker Commands
- 🧪 Practical Experiments
- 🟢 Node.js Containerization
- 🖼️ Docker Images
- 📦 Docker Containers
- 💾 Docker Volumes
- ⚙️ Docker Compose
- ☁️ Play with Docker
- 🦊 GitLab on Docker

The repository is continuously updated as I learn new Docker and DevOps concepts.

---

# 🗺️ Docker Learning Path

```text
Docker Introduction
        ↓
Docker Images
        ↓
Docker Containers
        ↓
Docker Hub
        ↓
Docker Desktop
        ↓
Pull & Run Images
        ↓
Node.js Application
        ↓
Dockerfile
        ↓
.dockerignore
        ↓
Image Creation
        ↓
Image Versioning
        ↓
Docker Volumes
        ↓
Docker Compose
        ↓
Play with Docker
        ↓
GitLab on Docker
        ↓
Advanced Docker & DevOps
```

---

# 📖 Topics Covered

## 1. Docker Introduction

Basic Docker fundamentals:

- What is Docker?
- Why Docker?
- Problems before Docker
- Containers
- Images
- Benefits of Docker
- Docker workflow

📄 `docker-intro/introduction.html`

---

## 2. Docker Hub & Docker Desktop

Understanding Docker's ecosystem and local Docker environment.

Topics include:

- Docker Hub
- Docker Desktop
- Docker Hub vs Docker Desktop
- Docker Desktop installation
- Docker environment verification

📄 `hub-desktop/hub-desktop.html`

📄 `hub-desktop/DD-install.html`

---

## 3. Docker Images & Containers

Understanding the core concepts of Docker Images and Containers.

Topics include:

- Docker Images
- Docker Containers
- Image vs Container
- Container lifecycle
- Basic Docker commands
- Running containers
- Managing containers

📄 `images-container/images-container.html`

---

# 🚀 Pull & Run Docker Images

Learning how to download images from Docker Hub and run them as containers.

Topics include:

- `docker pull`
- `docker run`
- Port mapping
- Detached mode
- Container naming
- `docker ps`
- `docker logs`
- `docker stop`
- `docker rm`

📄 `pull-run_image/pull-run.html`

---

# 🟢 Node.js Docker Mini Project

A Node.js application is used as the main practical project throughout this repository.

The project demonstrates how a real application can be containerized using Docker.

```text
Node.js Application
        ↓
Dockerfile
        ↓
Docker Image
        ↓
Docker Container
        ↓
Running Application
```

The mini-project is also extended with:

- `.dockerignore`
- Image tagging
- Image versioning
- Docker Volumes
- Docker Compose
- Docker Hub
- Play with Docker

---

# 🧹 .dockerignore

Learning how to control which files are included in the Docker build context.

Topics include:

- What is `.dockerignore`?
- Why `.dockerignore` is required
- Ignoring `node_modules`
- Ignoring unnecessary files
- Reducing Docker build context
- Docker build best practices

📄 `node-app-mini/.dockerignore`

---

# 🖼️ Docker Image Creation

Learning how to create a Docker image for the Node.js application.

Topics include:

- Dockerfile
- `FROM`
- `WORKDIR`
- `COPY`
- `RUN`
- `EXPOSE`
- `CMD`
- `docker build`
- Image tags
- Image versions

Example:

```bash
docker build -t node-docker-app:1.0 .
```

📄 `node-app-mini/dockerfile`

📄 `node-mini-app-html/image-create&run.html`

---

# 🏷️ Docker Image Versioning

Learning how to maintain different versions of the same application image.

Examples:

```text
node-docker-app:1.0
node-docker-app:1.1
node-docker-app:2.0
```

Important commands:

```bash
docker images

docker tag node-docker-app:1.0 node-docker-app:stable
```

This helps understand image tagging and application version management.

---

# 💾 Docker Volumes

Learning persistent storage in Docker.

Topics include:

- What is Docker Volume?
- Why persistent storage is required
- Container vs Volume
- Creating volumes
- Mounting volumes
- Using volumes with containers
- Persistent data
- Updating volume data
- Dockerfile and Volume relationship

Example:

```bash
docker volume create node-app-data
```

Run container with volume:

```bash
docker run -d \
  --name node-app-volume \
  -p 3000:3000 \
  -v node-app-data:/app/data \
  node-docker-app:1.0
```

---

# ⚙️ Docker Compose

Docker Compose is used to define and manage application services using a YAML configuration file.

The Node.js mini-project includes a Compose configuration:

📄 `node-app-mini/compose.yml`

Compose concepts covered:

- `services`
- `build`
- `context`
- `dockerfile`
- `image`
- `container_name`
- `ports`
- `volumes`
- `environment`
- `command`
- `restart`
- `depends_on`
- `networks`

Example:

```yaml
services:

  app:

    build:
      context: .
      dockerfile: dockerfile

    image: node-docker-app:1.0

    container_name: node-app-compose

    ports:
      - "3000:3000"

    volumes:
      - node-app-data:/app/data

    environment:
      NODE_ENV: production

    restart: unless-stopped

volumes:

  node-app-data:
```

Important Compose commands:

```bash
docker compose config

docker compose build

docker compose up -d

docker compose up -d --build

docker compose ps

docker compose logs

docker compose pull

docker compose down
```

📄 `node-mini-app-html/compose_ymal.html`

---

# ☁️ Play with Docker

Learning how to use Docker in a browser-based Docker playground.

Topics include:

- What is Play with Docker?
- Why Play with Docker?
- Docker image hosting
- Docker Hub integration
- Pulling Docker images
- Running containers
- Running Compose applications
- Port access
- Practical Docker experiments

Learning flow:

```text
Local Node.js Project
        ↓
Docker Image
        ↓
Docker Hub
        ↓
Play with Docker
        ↓
docker pull
        ↓
Docker Container
        ↓
Browser
```

📄 `play_with_docker/com-image_play_docker.html`

---

# 🦊 GitLab on Docker

Learning how to run GitLab Community Edition inside a Docker container.

Topics include:

- GitLab basics
- GitLab Docker image
- Pulling GitLab image
- Running GitLab container
- Port mapping
- Accessing GitLab from browser
- Finding container ID
- `docker ps`
- `docker ps -l`
- `docker exec`
- Getting initial root password
- GitLab login
- Container logs
- GitLab container lifecycle
- Basic troubleshooting

GitLab image:

```text
gitlab/gitlab-ce
```

Pull image:

```bash
docker pull gitlab/gitlab-ce
```

Run GitLab:

```bash
docker run -p 8000:80 gitlab/gitlab-ce
```

Access GitLab:

```text
http://localhost:8000
```

Find latest container:

```bash
docker ps -l
```

Get initial root password:

```bash
docker exec -it CONTAINER_ID cat /etc/gitlab/initial_root_password
```

Login:

```text
Username: root
Password: Initial Root Password
```

📄 `setup-run gitlab-docker/docker-gitlab.html`

---

# 🛠️ Important Docker Commands

## Images

```bash
docker images

docker pull IMAGE

docker build -t IMAGE:TAG .

docker tag IMAGE:TAG NEW_IMAGE:TAG

docker push IMAGE:TAG

docker rmi IMAGE
```

---

## Containers

```bash
docker ps

docker ps -a

docker ps -l

docker run IMAGE

docker start CONTAINER

docker stop CONTAINER

docker restart CONTAINER

docker rm CONTAINER

docker logs CONTAINER

docker exec -it CONTAINER sh
```

---

## Volumes

```bash
docker volume ls

docker volume create VOLUME

docker volume inspect VOLUME

docker volume rm VOLUME

docker volume prune
```

---

## Docker Compose

```bash
docker compose config

docker compose build

docker compose up

docker compose up -d

docker compose up -d --build

docker compose ps

docker compose logs

docker compose pull

docker compose stop

docker compose restart

docker compose down
```

---

# 🧪 Practical Learning Approach

This repository focuses on **hands-on Docker learning**, not only theory.

```text
Learn Concept
      ↓
Understand Why
      ↓
Write Command
      ↓
Run Command
      ↓
Observe Output
      ↓
Build Practical
      ↓
Troubleshoot Errors
      ↓
Document Learning
      ↓
Repeat
```

---

# 🎯 Learning Goals

Through this repository, I am working toward understanding:

- Docker Fundamentals
- Docker Images
- Docker Containers
- Dockerfile
- Docker Build
- Docker Run
- Docker Hub
- Docker Desktop
- `.dockerignore`
- Image Tagging
- Image Versioning
- Docker Volumes
- Persistent Storage
- Docker Compose
- YAML Configuration
- Container Networking
- Play with Docker
- Docker Hub Image Distribution
- GitLab on Docker
- Container Troubleshooting
- Docker Best Practices

---

# 🔮 Upcoming Docker Topics

The learning journey will continue with advanced topics such as:

- Docker Bind Mounts
- Volumes vs Bind Mounts
- Docker Networking
- Bridge Network
- Host Network
- Docker Compose Advanced
- Multi-Container Applications
- Dockerfile Optimization
- Multi-Stage Builds
- Docker Image Optimization
- Environment Variables
- `.env` Files
- Docker Secrets
- Health Checks
- Docker Registry
- Docker Hub
- Node.js + Database with Docker
- Docker Compose with Database
- Docker + CI/CD
- Docker with GitHub Actions
- Docker with GitLab CI/CD
- Docker in Cloud
- Docker Security
- Container Monitoring

---

# 📂 Repository

```text
.
├── .gitignore
├── README.md
│
├── docker-intro/
│   └── introduction.html
│
├── hub-desktop/
│   ├── DD-install.html
│   └── hub-desktop.html
│
├── images-container/
│   └── images-container.html
│
├── node-app-mini/
│   ├── .dockerignore
│   ├── compose.yml
│   ├── dockerfile
│   ├── index.js
│   ├── p1.txt
│   ├── p2.txt
│   ├── p3.txt
│   ├── package-lock.json
│   └── package.json
│
├── node-mini-app-html/
│   ├── add_volume_image.html
│   ├── compose_ymal.html
│   ├── ignore-multiple_image.html
│   └── image-create&run.html
│
├── play_with_docker/
│   └── com-image_play_docker.html
│
├── pull-run_image/
│   └── pull-run.html
│
└── setup-run gitlab-docker/
    └── docker-gitlab.html
```

---

# 🚀 Project Focus

```text
Docker
  +
Node.js
  +
Dockerfile
  +
Docker Compose
  +
Docker Volumes
  +
Docker Hub
  +
Play with Docker
  +
GitLab
  =
Practical DevOps Foundation
```

---

# ⭐ Learning Philosophy

> **Learn → Practice → Break → Troubleshoot → Fix → Document → Repeat**

This repository represents my practical journey of learning **Docker, Containerization, and DevOps** through real commands and projects.

---

# 📌 Current Status

🚧 **Docker Learning in Progress**

I am continuously adding new concepts, practical examples, commands, and DevOps experiments to this repository.

---

## 📜 License

This repository is created for **learning and educational purposes**.