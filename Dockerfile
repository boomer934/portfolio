# Base image
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copia tutto il progetto
COPY . .

# Genera Prisma Client **prima della build**
RUN npx prisma generate

# Build Next.js
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
