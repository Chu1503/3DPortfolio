// import React, { useState, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";

// import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

// const LoadingScreen = () => (
//   <div className="w-screen min-h-screen flex justify-center items-center">
//     <img
//       src="https://cdn.discordapp.com/attachments/894801439992475768/1129751993066471424/loading.gif"
//       alt="Loading"
//       className="w-screen h-full"
//     />
//   </div>
// );

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <BrowserRouter>
//       {loading ? (
//         <LoadingScreen />
//       ) : (
//         <div className="relative z-0 bg-primary">
//           <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//             <Navbar />
//             <Hero />
//             {/* <ComputersCanvas /> */}
//           </div>
//           <About />
//           <Experience />
//           <Tech />
//           <Works />
//           {/* <Feedbacks /> */}
//           <div className="relative z-0">
//             <Contact />
//             <StarsCanvas />
//           </div>
//         </div>
//       )}
//     </BrowserRouter>
//   );
// };

// export default App;

import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
// import { ComputersCanvas } from "./components/canvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          {/* <ComputersCanvas /> */}
        </div>
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;