FROM node:22.19

COPY public /app/public
COPY src /app/
COPY .gitignore /app/
COPY next-env.d.ts /app/
COPY package.json /app/
COPY package-lock.json /app/
COPY postcss.config.mjs /app/
COPY README.md /app/
COPY tsconfig.json /app/

WORKDIR /app

RUN npm install 

CMD [ "npm", "run", "dev" ]