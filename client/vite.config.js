import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Configura el proxy solo para la ruta específica
      "/api/sign-up": {
        target: "mmx-server-anggifit-anggifits-projects.vercel.app",
        changeOrigin: true,
      },
      "/api/sign-in": {
        target: "mmx-server-anggifit-anggifits-projects.vercel.app", // Reemplaza esto con la URL de tu servidor Express
        changeOrigin: true,
      },
      "/api/organizers/organizer": {
        target: "mmx-server-anggifit-anggifits-projects.vercel.app", // Reemplaza esto con la URL de tu servidor Express
        changeOrigin: true,
      },
      "/api/events/events": {
        target: "mmx-server-anggifit-anggifits-projects.vercel.app", // Reemplaza esto con la URL de tu servidor Express
        changeOrigin: true,
      },
      "/api/events/edit-event": {
        target: "mmx-server-anggifit-anggifits-projects.vercel.app", // Reemplaza esto con la URL de tu servidor Express
        changeOrigin: true,
      },
      "/api/events/delete-event/:eventId": {
        target: "mmx-server-anggifit-anggifits-projects.vercel.app", // Reemplaza esto con la URL de tu servidor Express
        changeOrigin: true,
      },    
      "/api/artists/artists": {
        target: "mmx-server-anggifit-anggifits-projects.vercel.app", // Reemplaza esto con la URL de tu servidor Express
        changeOrigin: true,
      },
    },
  },
});