module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
],
safelist: [
  {
    pattern: /^(bg|from|to)-/,
    
  }
  
],
  theme: {
    extend: {},
  },
  plugins: [],
}
