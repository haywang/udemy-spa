// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         "./components/**/*.{js,vue,ts}",
//         "./layouts/**/*.vue",
//         "./pages/**/*.vue",
//         "./plugins/**/*.{js,ts}",
//         "./app.vue",
//     ],
//     theme: {
//         extend: {
//             colors: {
//                 primary: {
//                     50: '#f5f9ff',
//                     100: '#e8f1ff',
//                     200: '#d1e2ff',
//                     300: '#a6c7ff',
//                     400: '#7aa3ff',
//                     500: '#1c1d1f', // 主色调
//                     600: '#401b9c',
//                     700: '#2d1372',
//                     800: '#1f0d4d',
//                     900: '#130832',
//                 },
//                 secondary: {
//                     50: '#f6f6f7',
//                     100: '#e7e7ea',
//                     200: '#c8c9cf',
//                     300: '#a5a6af',
//                     400: '#636579',
//                     500: '#5624d0', // 次要色调
//                     600: '#1c1d1f',
//                     700: '#131315',
//                     800: '#0d0d0e',
//                     900: '#070708',
//                 },
//                 success: {
//                     50: '#f0fdf4',
//                     100: '#dcfce7',
//                     200: '#bbf7d0',
//                     300: '#86efac',
//                     400: '#4ade80',
//                     500: '#22c55e', // 成功色调
//                     600: '#16a34a',
//                     700: '#15803d',
//                     800: '#166534',
//                     900: '#14532d',
//                 },
//                 warning: {
//                     50: '#fffbeb',
//                     100: '#fef3c7',
//                     200: '#fde68a',
//                     300: '#fcd34d',
//                     400: '#fbbf24',
//                     500: '#f59e0b', // 警告色调
//                     600: '#d97706',
//                     700: '#b45309',
//                     800: '#92400e',
//                     900: '#78350f',
//                 },
//                 danger: {
//                     50: '#fef2f2',
//                     100: '#fee2e2',
//                     200: '#fecaca',
//                     300: '#fca5a5',
//                     400: '#f87171',
//                     500: '#ef4444', // 危险色调
//                     600: '#dc2626',
//                     700: '#b91c1c',
//                     800: '#991b1b',
//                     900: '#7f1d1d',
//                 }
//             },
//         },
//     },
//     plugins: [],
// }

import colors from 'tailwindcss/colors'

export default {
    theme: {
        extend: {
            colors: {
                primary: colors.green
            }
        }
    }
}