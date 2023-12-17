export interface IPost {
    title: string;
    content: string;
    author?: string; // Puede ser el ID del autor
    tags?: string[]; // Etiquetas relacionadas con el post
    date?: Date; // El signo de interrogación indica que este campo es opcional
  }
  