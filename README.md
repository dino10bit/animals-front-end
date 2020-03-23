#Demo:
See: https://youtu.be/Z7xB7vrn2yI

##Installation:
1. `brew install node`
2. `brew install yarn`
3  `yarn install`
4. `yarn apollo:generate-types`

# Run production server:
1. `SERVER_URL=http://localhost:8080/graphql yarn build`
2. `yarn prod`

#### Useful Commands

- `docker-compose up` run the application in Docker 🐳 container
- `yarn apollo:remove-all-types` remove all automatically generated TS definitions
- `yarn apollo:generate-types` generate TS definitions from GraphQL schema
- `yarn lint:ts` lint TS files
- `yarn lint:css` lint CSS
- `yarn lint:circular-dependencies` detect circular dependencies
- `yarn test` run jest
- Run development server:
  1. `yarn install`
  2. `yarn apollo:generate-types`
  3. `yarn watch`
