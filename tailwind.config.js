module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: "var(--ff-roboto)",
      inter: "var(--ff-inter)",
      roboserif: "var(--ff-robo_serif)",
    },
    container: {
      center: true,
      padding: "12px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1120px",
        "2xl": "1200px",
        "3xl": "1326px",
      },
    },
    extend: {
      letterSpacing: {
        '2': '-2.2px',
      },
      colors: {
        "white-color": "var(--white-color)",

        "medium-blue": "var(--medium-blue)",
        "dark-blue": "var(--dark-blue)",
        "black-color": "var(--black-color)",
        "btn-title-color": "var(--btn-title-color)",
        'gray': "var(--gray)",
        "btn-blue": "var( --btn-blue)",
        "light-blue": "var(--light-blue)",
        "gray-ttl": "var(--gray-ttl)",
      },
      backgroundColor: {
        "blue-gradient-bg": "var(--blue-gradient-bg)",
        "sky-blue-gradient": "var(--sky-blue-gradient)",
        "blue-bg": "var(--blue-bg)",
        "btn-gray-light":'var(--btn-gray-light)',
      },
      backgroundImage:{
        "light-bg" : 'var(--light-blue-bg)',
        "blue-gradient": "var(--blue-gradient-bg-2)",

      }
    },
  },
  plugins: [],
};
