// UNIONS -  o ts possui suporte de união de tipos

export type stringOrBoolean = string | boolean;
let strOrBool: stringOrBoolean;


export interface User {
  id: string;
  name: string;
}

export interface Classroom {
  id: number;
  name: string;
}

export type UserOrClassroom = User | Classroom;
export function check(UserOrClassroom: UserOrClassroom) {
  return UserOrClassroom.id;
}