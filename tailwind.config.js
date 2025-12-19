/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#1e1b4b', // deep indigo (primary)
                    primary: '#312e81', // indigo-900 like
                    secondary: '#14b8a6', // teal (calm/intelligence)
                    accent: '#fcd34d', // amber (smart alerts)
                    bg: '#f8fafc', // slate-50
                    subtle: '#64748b' // slate-500
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
