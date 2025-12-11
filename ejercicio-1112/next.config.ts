/** @type {import('next').NextConfig} */
const nextConfig = {
  // Opciones de configuración de imágenes
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "", // Se deja vacío si no se usa un puerto específico (como es el caso)
        pathname: "/img/**", // Esto permite cualquier ruta dentro de /img/
      },
    ],
  },
};

module.exports = nextConfig;
