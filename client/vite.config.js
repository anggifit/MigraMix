import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Configura el proxy solo para la ruta específica
      "/api/sign-up": {
        target: "https://mmx-server.vercel.app",
        changeOrigin: true,
      },
      "/api/sign-in": {
        target: "https://mmx-server.vercel.app", // Reemplaza esto con la URL de tu servidor Express
        changeOrigin: true,
      },
      "/api/organizers/organizer": {
        target: "https://mmx-server.vercel.app", // Reemplaza esto con la URL de tu servidor Express
        changeOrigin: true,
      },
      "/api/events/events": {
        target: "https://mmx-server.vercel.app", // Reemplaza esto con la URL de tu servidor Express
        changeOrigin: true,
      },
      "/api/events/edit-event": {
        target: "https://mmx-server.vercel.app", // Reemplaza esto con la URL de tu servidor Express
        changeOrigin: true,
      },
      "/api/events/delete-event/:eventId": {
        target: "https://mmx-server.vercel.app", // Reemplaza esto con la URL de tu servidor Express
        changeOrigin: true,
      },    
      "/api/artists/artists": {
        target: "https://mmx-server.vercel.app", // Reemplaza esto con la URL de tu servidor Express
        changeOrigin: true,
      },
    },
  }, 
});