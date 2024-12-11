/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        maxWidth: {
          container: "1520px",
          214:"214px",
          306:"306px",
          320:"320px",
          324:"324px",
          382:"382px",
          436:"436px",
          755:"755px",
          821:"1300px",
          849:"849px",
        },
        colors: {
          "banner-white-all": "#F8FAFC",
          "banner-black": "#0C0C0C",
          "primary-white": "#F8FAFC",
          "primary-black": "#232323",
          "secondary-black": "#272343",
          "third-black": "#9A9CAA",
          "four-black": "#758888",
          "five-black": "#334A55",
          "six-black": "#1D242D",
          "seven-black": "#494C61",
          "orange": "#FF7D29",
          "green": "#00B047",
          "greentwo": "#D9F3E3",
          "cus-pink": "#F74B81",
          "cus-orrange": "#F59758",
          "primary-text": "#2B2B2D",
          "secondary-text": "#777777",
          "border-color": "#e9e9e9",
        },
        fontSize:{
            32: "32px",
            36: "36px",
            40: "40px",
            45: "45px",
            62: "62px",
            120: "120px",
        },
        fontFamily: {
            roboto: ['var(--font-roboto)'], 
            figtree: ['var(--font-figtree)'], 
            dmSans: ['var(--font-dm-sans)'], 
            inter: ['var(--font-inter)'], 
            kumbhSans: ['var(--font-kumbh-sans)'], 
            gg: ['var(--font-yuji-mai)'], 
          },
        width: {
            15:'15%',
            24:'24%',
            30:'32%',
            32:'33%',
            40:'40%',
            49:'49%',
            200:'200px',
            250:'250px',
            280:'280px',
            335:'335px',
            
          },
          spacing: {
            
          },
          minWidth: {
            
          },
          clipPath: {
            'coupon-card': 'circle(50% at 10% 50%)', // Left cut-out
            'coupon-card-right': 'circle(50% at 90% 50%)', // Right cut-out
          },
          boxShadow: {
            custom: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
            custom2: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
          },
      },
  },
  plugins: [],
}
