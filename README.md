# 🐳 Docker Learning

Welcome to my **Docker Learning Repository**.

This repository contains my **Docker learning notes, practical examples, commands, and Node.js mini-project experiments**.  
I am building this repository step-by-step while learning Docker and DevOps.

---

## 📚 About This Repository

The main goal of this repository is to learn Docker from **beginner to practical level** by understanding concepts and implementing them with real examples.

Topics are documented in HTML pages so that each concept can be easily revised later.

### Learning Approach

```text
Docker Theory
     ↓
Docker Commands
     ↓
Practical Examples
     ↓
Node.js Mini Project
     ↓
Docker Images
     ↓
Docker Containers
     ↓
Volumes & Persistent Data
     ↓
Advanced Docker Concepts
```

---

# 📖 Topics Covered

## 1. Docker Introduction

Basic Docker concepts and fundamentals:

- What is Docker?
- Why Docker?
- Problems before Docker
- Containers
- Docker Images
- Docker benefits
- Docker workflow

📄 `docker-intro/introduction.html`

---

## 2. Docker Hub & Docker Desktop

Understanding Docker ecosystem and local Docker environment.

Topics include:

- Docker Hub
- Docker Desktop
- Docker Hub vs Docker Desktop
- Docker Desktop installation
- Basic Docker environment setup

📄 `hub-desktop/hub-desktop.html`

📄 `hub-desktop/DD-install.html`

---

## 3. Docker Images & Containers

Understanding the difference between Docker Images and Containers.

Topics include:

- Docker Image
- Docker Container
- Image vs Container
- Creating containers
- Running containers
- Container lifecycle
- Basic Docker commands

📄 `images-container/images-container.html`

---

# 🚀 Docker Image Pull & Run

Learning how to download images from Docker Hub and run containers.

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

A Node.js application is used throughout the practical Docker learning process.

The mini-project helps understand how a real application can be:

```text
Node.js Application
        ↓
Dockerfile
        ↓
Docker Image
        ↓
Docker Container
        ↓
Application Running
```

Project files:

```text
node-app-mini/
├── .dockerignore
├── dockerfile
├── index.js
├── p1.txt
├── p2.txt
├── p3.txt
├── package.json
└── package-lock.json
```

---

# 🧹 .dockerignore

The project also includes practical learning for `.dockerignore`.

Topics include:

- What is `.dockerignore`?
- Why use `.dockerignore`?
- Excluding unnecessary files from Docker build context
- Ignoring `node_modules`
- Ignoring environment/configuration files
- Reducing Docker build context

📄 `node-app-mini/.dockerignore`

---

# 🖼️ Docker Image Creation

The Node.js mini-project is used to understand how to create a Docker image.

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

---

# ▶️ Docker Container Run

After creating the image, the application is run inside a Docker container.

Example:

```bash
docker run -d \
  --name node-app-container \
  -p 3000:3000 \
  node-docker-app:1.0
```

The application can then be accessed through:

```text
http://localhost:3000
```

---

# 🏷️ Docker Image Versioning

The Node.js mini-project is also used to understand Docker image tags and versions.

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

This helps understand how different versions of an application image can be maintained.

---

# 💾 Docker Volumes

Persistent storage is another important part of this learning project.

Topics include:

- What is Docker Volume?
- Why volumes are required
- Persistent data
- Creating a volume
- Mounting a volume
- Using volume with containers
- Container vs Volume
- Volume lifecycle
- Updating volume data
- Dockerfile and Volume relationship

Example:

```bash
docker volume create node-app-data
```

Run a container with volume:

```bash
docker run -d \
  --name node-app-volume \
  -p 3000:3000 \
  -v node-app-data:/app/data \
  node-docker-app:1.0
```

---

# 🛠️ Important Docker Commands

Some of the commands used throughout this repository:

### Images

```bash
docker images
docker pull IMAGE
docker build -t IMAGE:TAG .
docker tag IMAGE:TAG NEW_IMAGE:TAG
docker rmi IMAGE
```

### Containers

```bash
docker ps
docker ps -a
docker run IMAGE
docker stop CONTAINER
docker start CONTAINER
docker restart CONTAINER
docker rm CONTAINER
docker logs CONTAINER
docker exec -it CONTAINER sh
```

### Volumes

```bash
docker volume ls
docker volume create VOLUME
docker volume inspect VOLUME
docker volume rm VOLUME
docker volume prune
```

---

# 🧪 Practical Learning

This repository is not only based on theory.

Each major topic is learned using practical examples.

The learning process follows:

```text
Understand
    ↓
Write Notes
    ↓
Run Command
    ↓
Observe Output
    ↓
Create Practical
    ↓
Troubleshoot Error
    ↓
Document Learning
```

---

# 📂 Repository Structure

```text
.
├── .gitignore
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
│   ├── ignore-multiple_image.html
│   └── image-create&run.html
│
└── pull-run_image/
    └── pull-run.html
```

---

# 🎯 Learning Goals

Through this repository, I am working toward understanding:

- Docker fundamentals
- Images
- Containers
- Dockerfile
- Docker Build
- Docker Run
- Port Mapping
- Container Lifecycle
- Docker Hub
- Docker Desktop
- `.dockerignore`
- Image Tagging & Versioning
- Docker Volumes
- Persistent Storage
- Node.js application containerization
- Docker troubleshooting
- Docker best practices

---

# 🔮 Upcoming Topics

The Docker learning journey will continue with topics such as:

- Bind Mounts
- Volumes vs Bind Mounts
- Docker Networking
- Docker Compose
- Dockerfile Optimization
- Docker Image Optimization
- Multi-stage Builds
- Environment Variables
- Docker Secrets
- Container Health Checks
- Docker Registry
- Docker Hub Push/Pull
- Docker Compose with Node.js
- Node.js + Database using Docker
- Docker + CI/CD
- Docker in DevOps

---

# 🧑‍💻 Learning Project

**Project:** Docker Learning & Node.js Containerization

**Focus:** Docker + DevOps

**Application:** Node.js

**Purpose:** Learn Docker concepts through practical implementation.

---

## ⭐ Learning Philosophy

> **Learn → Practice → Break → Troubleshoot → Fix → Document → Repeat**

This repository represents my practical journey of learning Docker and building a strong foundation for **DevOps, Cloud, and Containerization**.

---

## 📌 Status

🚧 **Currently Learning Docker**

More practical examples and advanced Docker topics will be added progressively.

---

## 📜 License

This repository is created for **learning and educational purposes**.