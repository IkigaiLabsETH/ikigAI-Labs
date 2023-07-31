import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import iOSHeight from "@rvxlab/tailwind-plugin-ios-full-height";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class", '[data-theme="dark"]'],
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./templates/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            "max-h-950": { raw: "(max-height: 950px)" },
            // => @media (max-height: 950px) { ... }
            "max-h-850": { raw: "(max-height: 850px)" },
            // => @media (max-height: 850px) { ... }
            "4xl": { max: "1719px" },
            // => @media (max-width: 1719px) { ... }
            "2xl": { max: "1419px" },
            // => @media (max-width: 1419px) { ... }
            xl: { max: "1179px" },
            // => @media (max-width: 1179px) { ... }
            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }
            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }
            sm: { max: "480px" },
            // => @media (max-width: 480px) { ... }
        },
        extend: {
            colors: {
                color: {
                    1: "#FF66C2",
                    2: "#066FF4",
                    3: "#4BAB71",
                    4: "#FFC224",
                    5: "#FF6C3E",
                },
                n: {
                    1: "#FCFDFE",
                    2: "#F1F5F9",
                    3: "#E3E9EE",
                    4: "#7C878E",
                    5: "#393E44",
                    6: "#292D32",
                    7: "#181B1F",
                },
                primary: {
                    1: "#0C018C",
                    2: "#331BD7",
                    3: "#735FFA",
                    4: "#BE87FF",
                    5: "#DABAFF",
                    6: "#E3CBFF",
                    7: "#EBDBFF",
                },
            },
            zIndex: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
            },
            spacing: {
                0.25: "0.0625rem",
                0.75: "0.1875rem",
                4.5: "1.125rem",
                5.5: "1.375rem",
                6.5: "1.75rem",
                7.5: "1.875rem",
                8.5: "2.125rem",
                9.5: "2.375rem",
                13: "3.25rem",
                15: "3.75rem",
                17: "4.25rem",
                18: "4.5rem",
                19: "4.75rem",
                21: "5.25rem",
                22: "5.5rem",
                26: "6.5rem",
                30: "7.5rem",
                34: "8.5rem",
                38: "9.5rem",
                42: "10.5rem",
                54: "13.5rem",
                58: "14.5rem",
            },
            transitionDuration: {
                DEFAULT: "200ms",
            },
            transitionTimingFunction: {
                DEFAULT: "linear",
            },
            opacity: {
                15: ".15",
                25: ".25",
                85: ".85",
                95: ".95",
            },
            borderRadius: {
                1: "0.0625rem",
                "4xl": "2rem",
                "5xl": "2.5rem",
            },
            borderWidth: {
                DEFAULT: "0.0625rem",
                0: "0",
                2: "0.125rem",
                4: "0.25rem",
                8: "0.5rem",
            },
            boxShadow: {
                1: "0 1.5rem 2rem -1rem rgba(0, 0, 0, 0.1)",
                2: "0 1rem 1rem -0.25rem rgba(0, 0, 0, 0.1)",
                3: "0 0.25rem 0.5rem -0.25rem rgba(0, 0, 0, 0.1)",
                4: "0 1.5rem 2rem -1rem rgba(0, 0, 0, 0.5)",
                modal: "0 0.125rem 0.5rem rgba(0, 0, 0, 0.05), 0 2.75rem 3rem -0.75rem rgba(0, 0, 0, 0.15), 0 0 1.5rem 0.25rem rgba(0, 0, 0, 0.05)",
                inner: "inset 0 0 0 0.125rem rgba(255, 255, 255, 0.3)",
                "stroke-light": "inset 0 0 0 0.125rem rgba(255, 255, 255, 0.5)",
                "stroke-dark": "inset 0 0 0 0.125rem rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                sans: ["var(--font-archivo)", ...fontFamily.sans],
                inter: "var(--font-inter)",
                code: "var(--font-source-code-pro)",
            },
            fontSize: {
                0: ["0px", "0px"],
                h1: [
                    "4rem",
                    {
                        lineHeight: "4.5rem",
                        fontWeight: "600",
                        letterSpacing: "-0.01em",
                    },
                ],
                h2: [
                    "3rem",
                    {
                        lineHeight: "3.5rem",
                        fontWeight: "600",
                        letterSpacing: "-0.01em",
                    },
                ],
                h3: [
                    "2.5rem",
                    {
                        lineHeight: "3rem",
                        fontWeight: "600",
                        letterSpacing: "-0.01em",
                    },
                ],
                h4: [
                    "2rem",
                    {
                        lineHeight: "2.5rem",
                        fontWeight: "600",
                        letterSpacing: "-0.01em",
                    },
                ],
                h5: [
                    "1.5rem",
                    {
                        lineHeight: "2rem",
                        fontWeight: "600",
                        letterSpacing: "-0.01em",
                    },
                ],
                h6: [
                    "1.25rem",
                    {
                        lineHeight: "1.5rem",
                        fontWeight: "600",
                        letterSpacing: "-0.01em",
                    },
                ],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                fadeDown: {
                    "0%": { opacity: 1 },
                    "100%": { opacity: 0 },
                },
            },
        },
    },
    plugins: [
        require("@headlessui/tailwindcss")({ prefix: "ui" }),
        require("tailwind-scrollbar"),
        iOSHeight,
        plugin(function ({ addBase, addComponents, addUtilities }) {
            addBase({
                html: {
                    "@apply text-[1rem]": {},
                },
            });
            addComponents({
                ".btn": {
                    "@apply inline-flex items-center justify-center h-12 px-5.5 border-2 border-transparent rounded-3xl text-base-2 font-semibold transition-colors disabled:opacity-20 disabled:pointer-events-none":
                        {},
                },
                ".btn svg": {
                    "@apply fill-inherit first:mr-2.5 last:ml-2.5": {},
                },
                ".btn-blue-dark": {
                    "@apply btn bg-primary-2 border-primary-2 text-n-1 fill-n-1 hover:bg-primary-2/90 hover:border-transparent":
                        {},
                },
                ".btn-purple": {
                    "@apply btn bg-primary-3 border-primary-3 text-n-1 fill-n-1 hover:bg-primary-3/95 hover:border-transparent":
                        {},
                },
                ".btn-red": {
                    "@apply btn bg-color-5 border-color-5 text-n-1 fill-n-1 hover:bg-color-5/90 hover:border-transparent":
                        {},
                },
                ".btn-dark": {
                    "@apply btn bg-n-7 border-n-7 text-n-1 fill-n-1 hover:bg-n-5 hover:border-transparent dark:bg-n-2 dark:border-n-6 dark:text-n-6 dark:fill-n-6 dark:hover:text-primary-3 dark:hover:fill-primary-3":
                        {},
                },
                ".btn-light": {
                    "@apply btn bg-n-2 border-n-2 text-n-7 fill-n-7 hover:bg-n-3 hover:border-transparent":
                        {},
                },
                ".btn-gradient": {
                    "@apply btn px-6 border-0 bg-gradient-to-b from-[#9A77FF] to-[#735FFA] text-n-1 fill-n-1 transition-shadow hover:shadow-[inset_0_0_0_0.125rem_rgba(51,27,215,.6)]":
                        {},
                },
                ".btn-gradient-stroke": {
                    "@apply btn-gradient border border-primary-2 shadow-[inset_0_0_0_0.0625rem_rgba(255,255,255,0.5)] hover:shadow-[inset_0_0_0_0.0625rem_#331BD7]":
                        {},
                },
                ".btn-stroke": {
                    "@apply btn bg-transparent border-n-3 text-n-5 fill-n-4 hover:border-n-7 hover:fill-n-7 hover:text-n-7 dark:border-n-5 dark:text-n-3 dark:hover:border-n-3 dark:hover:fill-n-3":
                        {},
                },
                ".btn-stroke-light": {
                    "@apply btn bg-transparent border-n-4 text-n-1 fill-n-1 hover:border-transparent hover:bg-n-4":
                        {},
                },
                ".btn-square": {
                    "@apply w-12 !px-0 rounded-xl": {},
                },
                ".btn-square svg": {
                    "@apply !ml-0 !mr-0": {},
                },
                ".btn-medium": {
                    "@apply h-10 px-3.5": {},
                },
                ".btn-square.btn-medium": {
                    "@apply w-10": {},
                },
                ".text-body-1": {
                    "@apply text-[1.125rem] leading-6": {},
                },
                ".text-body-2": {
                    "@apply text-[1rem] leading-6": {},
                },
                ".text-base-1": {
                    "@apply font-inter text-[1rem] leading-6": {},
                },
                ".text-base-2": {
                    "@apply font-inter text-[0.875rem] leading-6 -tracking-[.01em]":
                        {},
                },
                ".text-small": {
                    "@apply font-inter text-[0.75rem] leading-5 -tracking-[.01em]":
                        {},
                },
                ".text-smaller": {
                    "@apply font-inter text-[0.6875rem] leading-[0.875rem]": {},
                },
                ".text-code": {
                    "@apply font-inter text-[0.875rem] leading-6 -tracking-[.01em]":
                        {},
                },
                ".gradient": {
                    "@apply bg-gradient-to-b from-[#9A77FF] to-[#735FFA] to-70%":
                        {},
                },
                ".gradient-1": {
                    "@apply bg-gradient-to-br from-[#F3EEE2] to-[#DEF0D6] to-70%":
                        {},
                },
                ".gradient-2": {
                    "@apply bg-gradient-to-br from-[#E0C6FF] to-[#FFE1FA] to-70%":
                        {},
                },
                ".gradient-3": {
                    "@apply bg-gradient-to-br from-[#E2F3E9] to-[#E0F8FF] to-70%":
                        {},
                },
                ".gradient-4": {
                    "@apply bg-gradient-to-r from-[#FFF2DF] to-[#E7E1FF] to-70%":
                        {},
                },
            });
            addUtilities({
                ".tap-highlight-color": {
                    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
                },
            });
        }),
    ],
};
