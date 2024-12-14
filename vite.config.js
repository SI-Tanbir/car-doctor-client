import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// console.log('Environment Variables:', process.env);
console.log('Environment Variables:', {
  VITE_API_KEY: process.env.VITE_API_KEY,
  VITE_APPID: process.env.VITE_APPID,
  VITE_AUTH_DOMAIN: process.env.VITE_AUTH_DOMAIN,
});
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
