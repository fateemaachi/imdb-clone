'use client'

import { ThemeProvider } from "next-themes"

const Providers = ({children}) => {
  return (
   <ThemeProvider defaultTheme="system" attribute='class'>
     <div className="transition: background-color 0.3s ease, color 0.3s ease;">
      { children}
     </div>
   </ThemeProvider>
  )
}

export default Providers