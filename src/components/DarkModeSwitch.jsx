"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? theme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-2xl cursor-pointer hover:text-amber-500"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-2xl cursor-pointer hover:text-amber-500"
        />
      )}
    </div>
  );
}

// "use client";
// import { useTheme } from "next-themes";
// import React, { useEffect, useState } from "react";
// import { MdLightMode, MdDarkMode } from "react-icons/md";

// export default function DarkModeSwitch() {
//   const { theme, setTheme } = useTheme(); // Access current theme and setTheme function
//   const [mounted, setMounted] = useState(false); // Prevent SSR issues by waiting for the component to mount

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null; // Ensure nothing is rendered on the server side during initial render
//   }

//   // Toggling theme between light and dark
//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <div>
//       {theme === "dark" ? (
//         <MdLightMode
//           onClick={toggleTheme}
//           className="text-2xl cursor-pointer hover:text-amber-500"
//         />
//       ) : (
//         <MdDarkMode
//           onClick={toggleTheme}
//           className="text-2xl cursor-pointer hover:text-amber-500"
//         />
//       )}
//     </div>
//   );
// }
