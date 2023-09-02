/* NOTA IMPORTANTE: TailwindCSS es un framework de css el cual nos facilita estilizar el sitio de una forma más rápida.
                    Por lo tanto para poder usarlo debemos instalarlo, adicionalmente TailwindCSS no solo sirve para Vite
                    sino que también lo podemos usar con Next.js, laravel, Nuxt.js, Angular y otros frameworks descritos
                    en su web oficial.
                    
                    La url de la Web oficial es: https://tailwindcss.com/
                    
                    Y allí podemos encontrar el get started, elegir el framework y seguir los pasos para su corrcta 
                    configuración.
*/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

