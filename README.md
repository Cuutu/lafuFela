# Tienda de Ropa

Una aplicación web moderna para una tienda de ropa construida con Next.js, TypeScript, Tailwind CSS y Prisma.

## Características

- 🛍️ Catálogo de productos con filtros por categoría
- 🎨 Interfaz de usuario moderna y responsive
- 🛒 Carrito de compras
- 🔍 Búsqueda de productos
- 📱 Diseño adaptable a dispositivos móviles
- 🚀 Optimizado para rendimiento
- 🔒 Autenticación de usuarios
- 💳 Procesamiento de pagos

## Tecnologías

- [Next.js](https://nextjs.org/) - Framework de React
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Prisma](https://www.prisma.io/) - ORM para bases de datos
- [PostgreSQL](https://www.postgresql.org/) - Base de datos
- [Vercel](https://vercel.com/) - Plataforma de despliegue

## Requisitos

- Node.js 18.x o superior
- npm 9.x o superior
- PostgreSQL 14.x o superior

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/tienda-ropa.git
cd tienda-ropa
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env.local
```

4. Ejecuta las migraciones de la base de datos:
```bash
npx prisma migrate dev
```

5. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter
- `npm run prisma:studio` - Abre Prisma Studio para gestionar la base de datos

## Estructura del Proyecto

```
tienda-ropa/
├── app/                  # Directorio de la aplicación Next.js
│   ├── api/             # Rutas de API
│   ├── components/      # Componentes React
│   └── pages/          # Páginas de la aplicación
├── lib/                 # Utilidades y configuraciones
├── prisma/             # Configuración y esquema de Prisma
├── public/             # Archivos estáticos
└── types/              # Definiciones de tipos TypeScript
```

## Contribución

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Tu Nombre - [@tutwitter](https://twitter.com/tutwitter) - email@ejemplo.com

Link del Proyecto: [https://github.com/tu-usuario/tienda-ropa](https://github.com/tu-usuario/tienda-ropa)
