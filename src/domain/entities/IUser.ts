export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  roles: string[]; // Roles del usuario
  isActive: boolean; // Si el usuario está activo
  lastLogin?: Date; // Opcional: última vez que el usuario inició sesión
  createdAt?: Date; // Opcional: fecha de creación del usuario
  updatedAt?: Date; // Opcional: fecha de la última actualización del usuario
}
