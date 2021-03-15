/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface ChangePasswordInput {
  password: string;
  token: string;
}

export interface CreateAnimalInput {
  species: string;
  name: string;
  uri: string;
}

export interface RegisterInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface UpdateAnimalInput {
  id: number;
  species: string;
  name: string;
  uri: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
