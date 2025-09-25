# 🛒 Store Demo

Una tienda online moderna y responsiva construida con **Astro 5.14.0**, diseñada para demostrar las mejores prácticas de desarrollo web moderno.

![Store Demo](https://img.shields.io/badge/Astro-5.14.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## ✨ Características

- 🚀 **Astro 5.14.0** - Framework moderno con arquitectura de islas
- 🎨 **Diseño responsivo** - Optimizado para móviles, tablets y desktop
- 🛒 **Carrito de compras** - Funcionalidad completa de e-commerce
- 🌐 **Localización** - Interfaz en español
- 📱 **Mobile-first** - Diseño adaptativo
- ⚡ **Rendimiento** - Carga rápida y optimizada
- 🔧 **TypeScript** - Tipado estático para mejor desarrollo

## 🏗️ Arquitectura del Proyecto

```
store-demo/
├── 📁 src/
│   ├── 📁 components/          # Componentes reutilizables
│   ├── 📁 data/               # Datos centralizados (futuro: API)
│   │   └── 📄 products.ts     # Productos y lógica del carrito
│   ├── 📁 layouts/            # Layouts de página
│   │   └── 📄 Layout.astro    # Layout principal
│   └── 📁 pages/              # Páginas de la aplicación
│       └── 📄 index.astro     # Página del carrito
├── 📄 astro.config.mjs        # Configuración de Astro
├── 📄 package.json            # Dependencias y scripts
└── 📄 README.md               # Este archivo
```

## 🚀 Instalación y Configuración

### Prerrequisitos

Asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/store-demo.git
cd store-demo
```

### 2. Instalar Dependencias

```bash
npm install
# o
yarn install
```

### 3. Ejecutar en Modo Desarrollo

```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en: **http://localhost:4321**

### 4. Construir para Producción

```bash
npm run build
# o
yarn build
```

### 5. Vista Previa de Producción

```bash
npm run preview
# o
yarn preview
```

## 📋 Scripts Disponibles

| Comando | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Vista previa de la build de producción |
| `npm run astro` | Ejecuta comandos de Astro CLI |

## 🎯 Funcionalidades Implementadas

### ✅ Carrito de Compras
- Visualización de productos en el carrito
- Cálculo automático de totales (subtotal, envío, impuestos)
- Estados de stock (En Stock/Agotado)
- Cantidades editables
- Productos recomendados

### ✅ Navegación
- Header con navegación principal
- Enlaces a: Inicio, Catálogo, Contacto
- Botón de carrito con icono
- Footer con enlaces organizados

### ✅ Diseño
- Layout responsivo con CSS Grid y Flexbox
- Tipografía moderna (Inter font)
- Colores consistentes y accesibles
- Animaciones suaves y hover effects

## 🔧 Tecnologías Utilizadas

- **[Astro 5.14.0](https://astro.build/)** - Framework web moderno
- **TypeScript** - Tipado estático
- **CSS3** - Estilos modernos con variables CSS
- **HTML5** - Semántica moderna
- **ES6+** - JavaScript moderno

## 📱 Responsive Design

El proyecto está optimizado para:

- 📱 **Móviles** (320px - 768px)
- 📱 **Tablets** (768px - 1024px)
- 💻 **Desktop** (1024px+)

## 🚧 Próximas Funcionalidades

- [ ] **Página de catálogo** de productos
- [ ] **Página de producto individual**
- [ ] **Página de contacto**
- [ ] **Funcionalidad del carrito** (agregar/eliminar productos)
- [ ] **Integración con API** real
- [ ] **Autenticación** de usuarios
- [ ] **Proceso de checkout** completo
- [ ] **Sistema de pagos**

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu LinkedIn](https://linkedin.com/in/tu-perfil)

## 🙏 Agradecimientos

- [Astro](https://astro.build/) por el framework increíble
- [Unsplash](https://unsplash.com/) por las imágenes de productos
- Comunidad de desarrolladores por la inspiración

---

<div align="center">

**⭐ Si te gusta este proyecto, ¡dale una estrella! ⭐**

[![GitHub stars](https://img.shields.io/github/stars/tu-usuario/store-demo?style=social)](https://github.com/tu-usuario/store-demo)

</div>