import faker from 'faker'

export const createAnimal = (id: number) => ({
  id,
  name: faker.lorem.words(3),
  species: faker.lorem.text(),
})

export type MockAnimalType = ReturnType<typeof createAnimal>

export const createUser = (id: number) => ({
  id,
  firstName: faker.name.findName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
})

export type MockUserType = ReturnType<typeof createUser>

export const createUserWithAnimals = (
  userId: number,
  animalsIds: number[] = []
) => ({
  ...createUser(userId),
  animals: animalsIds.map(createAnimal),
})

export type MockUserWithAnimals = ReturnType<typeof createUserWithAnimals>

export const createAnimalWithUser = (
  animalId: number,
  userId: number,
  animalsIds: number[] = []
) => ({
  ...createAnimal(animalId),
  user: createUserWithAnimals(userId, animalsIds),
})

export type MockAnimalWithUserType = ReturnType<typeof createAnimalWithUser>
