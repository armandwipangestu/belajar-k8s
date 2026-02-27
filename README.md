<h1 align="center">Belajar Kubernetes (K8s)</h1>

<div align="center">

![Kubernetes](https://img.shields.io/badge/-Kubernetes-131821?style=for-the-badge&logo=kubernetes)&nbsp;
![Docker](https://img.shields.io/badge/-Docker-131821?style=for-the-badge&logo=docker)&nbsp;
![YAML](https://img.shields.io/badge/-YAML-131821?style=for-the-badge&logo=yaml)&nbsp;
![Bun](https://img.shields.io/badge/-Bun-131821?style=for-the-badge&logo=bun)&nbsp;
![Linux](https://img.shields.io/badge/-Linux-131821?style=for-the-badge&logo=linux)&nbsp;
![Semantic Release](https://img.shields.io/badge/-Semantic%20Release-131821?style=for-the-badge&logo=semantic-release)&nbsp;
![Dependabot](https://img.shields.io/badge/-Dependabot-131821?style=for-the-badge&logo=dependabot)&nbsp;
![GitHub Actions](https://img.shields.io/badge/-GitHub%20Actions-131821?style=for-the-badge&logo=githubactions)&nbsp;

</div>

<p align="center">
  <img src="assets/kubernetes.svg" width="200" alt="Kubernetes Logo" />
</p>

## Description

This repository is dedicated to storing Kubernetes (K8s) manifests for my blog series about learning Kubernetes. Each folder corresponds to an episode or a specific topic covered in the series, providing hands-on examples and configurations.

## Features

- **Episode-based Learning**: Manifests are organized by episodes, making it easy to follow along with the blog posts.
- **Ready-to-use Manifests**: Includes configurations for Pods, Deployments, Services (LoadBalancer, ClusterIP), and more.
- **Standardized Configuration**: Uses YAML for all Kubernetes resources.
- **Modern Workflow**:
  - Semantic Versioning & Conventional Commits for clear project history.
  - Automated releases via GitHub Actions.

## Repo Stats

![Alt](https://repobeats.axiom.co/api/embed/2f8bf4557ef4bc2fb3a57089c94f83be6d622a74.svg "Repobeats analytics image")

## Star History

<a href="https://www.star-history.com/#armandwipangestu/belajar-k8s&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=armandwipangestu/belajar-k8s&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=armandwipangestu/belajar-k8s&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=armandwipangestu/belajar-k8s&type=date&legend=top-left" />
 </picture>
</a>

## Contributors

<a href="https://github.com/armandwipangestu/belajar-k8s/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=armandwipangestu/belajar-k8s" />
</a>

## Getting Started

### Prerequisites

- A running Kubernetes cluster (Minikube, Kind, or a cloud provider).
- `kubectl` installed and configured.

### Usage

```bash
# Clone the repository
git clone https://github.com/armandwipangestu/belajar-k8s.git

# Navigate to a specific episode
cd episode-3/example

# Apply the manifests
kubectl apply -f nginx-deployment.yml
kubectl apply -f nginx-service.yml
```

## License

This project is [MIT licensed](https://github.com/armandwipangestu/belajar-k8s/blob/main/LICENSE).
