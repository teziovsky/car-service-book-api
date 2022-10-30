FROM node:18-alpine AS base

RUN npm i -g pnpm

FROM node:18 As dev

RUN apt-get update
RUN apt-get install -y openssl

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY package*.json ./

RUN pnpm install


FROM base As build

WORKDIR /usr/src/app

COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; pnpm install --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY . .

RUN pnpm build

ENV NODE_ENV production

RUN pnpm install --frozen-lockfile --prod

FROM base As prod

# Copy the bundled code from the build test to the production image
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/dist ./dist
# copy prisma directory
COPY --from=build /usr/src/app/prisma ./prisma

# Start the server using the production build
CMD [ "npm", "run", "start:migrate:prod" ]
