# --- Builder stage ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY web/package.json web/pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY web ./web
WORKDIR /app/web
RUN pnpm run build

# --- Runner stage ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/web/.next ./.next
COPY --from=builder /app/web/public ./public
COPY --from=builder /app/web/node_modules ./node_modules
COPY --from=builder /app/web/package.json ./package.json
EXPOSE 3000
CMD ["pnpm", "start"] 