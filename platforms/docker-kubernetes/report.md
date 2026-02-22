# Docker & Kubernetes Assessment Report

> [!TIP]
> Use this document to explain your design choices, optimisations and any challenges you faced.

## Dockerfile

<!-- Explaining specific goals and design decisions -->
- Using `node` as the base image instead of `ubuntu` to not include unnecessary os packages.
- Ordered instructions for maximum cache resuse with `COPY package*.json ./` instead of just `COPY . .` before installing the dependencies to minimise reinstallations so that the build time can be reduced.
- Using `.dockerignore` to not copy unnecessary items so that there is less memory usage and faster docker builds.
- Using `npm ci` to clean install dependencies to prevent residual or possibly corrupted packages from affecting the build.
- Using multi-stage builds to seperate buildtime and runtime concerns so that this leads to smaller images and faster startups.

## Kubernetes

<!-- The process for deploying Navidrome on Kubernetes -->
- I first setup minikube and test it to see if it is working correctly.\
- Added correct paths to the music and data folders.
- ran into an error `validating /home/tetnaylin/2026-recruitment-technical-assessment/platforms/docker-kubernetes/navidrome/docker-compose.yml: services.navidrome.environment must be a mapping`
- It was just the environment field being empty from the example.
- Realised that navidrome was in its own container instead of using minikube (minikube is running but there is also a separate navidrome container in docker)
- Realised that I have to use `kubectl create deployment` with the image -> `kubectl create deployment navidrome --image=deluan/navidrome:latest` from a youtube video on deployments with minikube
- Running `kubectl get deployments` and `kubectl get pods` indicates that navidrome exists but `http://localhost:4533/` isn't connecting.
- Found `kubectl expose` so used `kubectl expose deployment navidrome --port=4533`
- Still not connecting on localhost.
- Tried `minikube service navidrome` and apparently navidrome has no node port and has the type "ClusterIP" but is finally reachable on a different port for local development.
- Found `kubectl expose deployment hello-minikube1 --type=NodePort --port=8080` so tried `kubectl expose deployment navidrome --type=NodePort --port=4533`
- Still not connecting on localhost.
- Considering if it is a problem with wsl or port forwarding.
- Finally found `minikube service <service-name> --url`
- Used `minikube service navidrome --url` to finally access the navidrome instance via localhost.
- Discovered `https://kubernetes.io/docs/concepts/services-networking/service/`
- Can use `kubectl apply -f` to make use of the yaml files instead of in the terminal.
