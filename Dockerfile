FROM oven/bun:1.2.23-alpine AS base

LABEL org.opencontainers.image.source="https://github.com/arman/belajar-k8s"
LABEL org.opencontainers.image.description="Learn Kubernetes"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

RUN apk add --no-cache bash

COPY . .

CMD ["bun", "--version"]