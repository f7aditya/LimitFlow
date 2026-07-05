# FROM node:24-alpine

# WORKDIR /app

# COPY package*.json .

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["npm", "start"]



# ---------- Stage 1 : Dependencies ----------

FROM node:24-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev --ignore-scripts


# ---------- Stage 2 : Production ----------

FROM node:24-alpine

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Give ownership of the application files
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

EXPOSE 3000

CMD ["npm", "start"]