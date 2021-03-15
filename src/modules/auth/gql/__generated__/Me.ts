/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me_animals {
  __typename: "Animal";
  id: string;
  species: string;
  name: string;
  uri: string;
}

export interface Me_me {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  animals: Me_me_animals[] | null;
}

export interface Me {
  me: Me_me | null;
}
