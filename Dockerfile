# Etapa 1: Construir la aplicación
# Utiliza una imagen de Node.js como base
FROM node:16 as builder

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia los archivos del proyecto al directorio de trabajo
COPY . .

# Compila los archivos TypeScript a JavaScript
RUN npm run build

# Etapa 2: Configurar el entorno de ejecución
# Utiliza otra vez la imagen de Node.js
FROM node:16

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia solo los archivos necesarios para la ejecución (node_modules y archivos compilados)
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

# Expone el puerto que tu aplicación utiliza
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["node", "./dist/server/server.js"]