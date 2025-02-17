// 'use client';
// import { motion } from 'framer-motion';

// const sectors = [
//   {
//     title: "UAV-Assisted Agriculture",
//     image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=500&q=80",
//     description: "Develop UAVs for agricultural monitoring and crop health assessment."
//   },
//   {
//     title: "Payload Delivery",
//     image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=500&q=80",
//     description: "Design drone systems for accurate payload delivery and precision landing."
//   },
//   {
//     title: "Environmental Monitoring",
//     image: "https://images.unsplash.com/photo-1527672809634-04ed36500acd?auto=format&fit=crop&w=500&q=80",
//     description: "Collect and analyze environmental data using sensor-equipped drones."
//   },
//   {
//     title: "Autonomous Navigation",
//     image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80",
//     description: "Create software for real-time obstacle detection and navigation."
//   },
//   {
//     title: "Computer Vision",
//     image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=500&q=80",
//     description: "Implement ML algorithms for target recognition and tracking."
//   },
//   {
//     title: "Swarm Coordination",
//     image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=500&q=80",
//     description: "Enable multi-drone collaboration and formation flying."
//   },
//   {
//     title: "Search and Rescue",
//     image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=500&q=80",
//     description: "Equip drones for locating and rescuing individuals in disasters."
//   },
//   {
//     title: "Pipeline Inspection",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
//     description: "Develop autonomous drones for infrastructure inspection."
//   },
//   {
//     title: "FPV Sky Challenge",
//     image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=500&q=80",
//     description: "Race high-speed FPV drones through obstacle courses."
//   }
// ];

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       {/* Navigation */}
//       <motion.nav 
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="fixed w-full transparent-header z-50"
//       >
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex items-center">
//             <div className="flex space-x-6">
//               <a href="#about" className="nav-link">About</a>
//               <a href="#coordinators" className="nav-link">Coordinators</a>
//             </div>
//             <motion.div 
//               className="ml-auto"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               <div className="text-white text-xl font-bold">Drone Fusion 2025</div>
//               <div className="text-white text-lg font-medium">SAHE Department of EIE</div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Hero Section */}
//       <section className="wave-bg pt-32 pb-48">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center text-white"
//           >
//             <h1 className="text-5xl font-bold mb-6">Drone Fusion Hackathon 2025</h1>
//             <p className="text-xl mb-8">A National-Level 24-Hour Drone Innovation Challenge</p>
//             <p className="text-lg">April 3rd - 4th, 2025</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="container mx-auto px-6 py-16 -mt-20">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-white rounded-lg shadow-lg p-8"
//         >
//           <h2 className="text-3xl font-bold mb-6 text-center">About the Hackathon</h2>
//           <div className="space-y-4 text-gray-700">
//             <p>
//               Drone Fusion 2025 is a national-level hackathon designed to bring together innovative minds in the field of drone technology. This exciting 24-hour competition challenges participants to build creative, technical, and practical solutions using drones. 
//             </p>
//             <p>
//               Over the course of the event, participants will work in teams to solve real-world problems using drones, ranging from agricultural applications to disaster response systems. With support from industry mentors, participants will have access to state-of-the-art equipment and resources to bring their ideas to life.
//             </p>
//             <p>
//               This is a unique opportunity for drone enthusiasts, engineers, and innovators to push the limits of what is possible in drone technology, while competing for exciting prizes and recognition in the industry. Whether you're a beginner or an expert, Drone Fusion 2025 offers a platform for learning, networking, and transforming ideas into reality.
//             </p>
//             <p>
//               Join us and be part of this groundbreaking event that promises to shape the future of drone technology and innovation!
//             </p>
//           </div>
//         </motion.div>
//       </section>

//       {/* Sectors Grid */}
//       <section id="sectors" className="container mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {sectors.map((sector, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="sector-card"
//             >
//               <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
//                 <img
//                   src={sector.image}
//                   alt={sector.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{sector.title}</h3>
//               <p className="text-gray-600">{sector.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Coordinators Section */}
//       <section id="coordinators" className="bg-gradient-to-b from-transparent to-gray-100 text-gray-800 py-16">
//         <div className="container mx-auto px-6">
//           <motion.h2 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-3xl font-bold mb-8 text-center"
//           >
//             Coordinators
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h3 className="text-xl font-semibold mb-4">Faculty Coordinators</h3>
//               <p>Dr. Vimala Kumari J</p>
//               <p>9701387118</p>
//               <p>vimalakumari@vrsiddhartha.ac.in</p>
//               <p className="mt-4">Mrs. B. Swarupa Rani</p>
//               <p>7013447813</p>
//               <p>swaruparani@vrsiddhartha.ac.in</p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h3 className="text-xl font-semibold mb-4">Student Coordinators</h3>
//               <p>Jaladi Francis</p>
//               <p>9491440419</p>
//               <p>francisjaladi13@gmail.com</p>
//               <p className="mt-4">MD. Ayisha Firdos</p>
//               <p>8897129277</p>
//               <p>mohammadayishafirdos@gmail.com</p>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// // 
'use client';
import { motion } from 'framer-motion';

const sectors = [
  {
    title: "UAV-Assisted Agriculture",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=500&q=80",
    description: "Develop UAVs for agricultural monitoring and crop health assessment."
  },
  {
    title: "Payload Delivery",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=500&q=80",
    description: "Design drone systems for accurate payload delivery and precision landing."
  },
  {
    title: "Environmental Monitoring",
    image: "https://images.unsplash.com/photo-1527672809634-04ed36500acd?auto=format&fit=crop&w=500&q=80",
    description: "Collect and analyze environmental data using sensor-equipped drones."
  },
  {
    title: "Autonomous Navigation",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80",
    description: "Create software for real-time obstacle detection and navigation."
  },
  {
    title: "Computer Vision",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=500&q=80",
    description: "Implement ML algorithms for target recognition and tracking."
  },
  {
    title: "Swarm Coordination",
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=500&q=80",
    description: "Enable multi-drone collaboration and formation flying."
  },
  {
    title: "Search and Rescue",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=500&q=80",
    description: "Equip drones for locating and rescuing individuals in disasters."
  },
  {
    title: "Pipeline Inspection",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
    description: "Develop autonomous drones for infrastructure inspection."
  },
  {
    title: "FPV Sky Challenge",
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=500&q=80",
    description: "Race high-speed FPV drones through obstacle courses."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-blue-900 z-50 shadow-lg"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-6">
              <a href="#about" className="text-white text-lg font-semibold hover:text-yellow-300 transition">About</a>
              <a href="#sectors" className="text-white text-lg font-semibold hover:text-yellow-300 transition">Sectors</a>
              <a href="#coordinators" className="text-white text-lg font-semibold hover:text-yellow-300 transition">Coordinators</a>
            </div>
            <motion.div 
              className="ml-auto text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-white text-2xl font-bold">Drone Fusion 2025</div>
              <div className="text-white text-lg font-medium">SAHE Department of EIE</div>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="wave-bg pt-32 pb-48">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-6">Drone Fusion Hackathon 2025</h1>
            <p className="text-xl mb-8">A National-Level 24-Hour Drone Innovation Challenge</p>
            <p className="text-lg">April 3rd - 4th, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-16 -mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">About the Hackathon</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Drone Fusion 2025 is a national-level hackathon designed to bring together innovative minds in the field of drone technology. This exciting 24-hour competition challenges participants to build creative, technical, and practical solutions using drones. 
            </p>
            <p>
              Over the course of the event, participants will work in teams to solve real-world problems using drones, ranging from agricultural applications to disaster response systems. With support from industry mentors, participants will have access to state-of-the-art equipment and resources to bring their ideas to life.
            </p>
            <p>
              This is a unique opportunity for drone enthusiasts, engineers, and innovators to push the limits of what is possible in drone technology, while competing for exciting prizes and recognition in the industry. Whether you're a beginner or an expert, Drone Fusion 2025 offers a platform for learning, networking, and transforming ideas into reality.
            </p>
            <p>
              Join us and be part of this groundbreaking event that promises to shape the future of drone technology and innovation!
            </p>
          </div>
        </motion.div>
      </section>

      {/* Sectors Grid */}
      <section id="sectors" className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="sector-card"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{sector.title}</h3>
              <p className="text-gray-600">{sector.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Coordinators Section */}
      <section id="coordinators" className="bg-gradient-to-b from-transparent to-gray-100 text-gray-800 py-16">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Coordinators
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Faculty Coordinators</h3>
              <p>Dr. Vimala Kumari J</p>
              <p>9701387118</p>
              <p>vimalakumari@vrsiddhartha.ac.in</p>
              <p className="mt-4">Mrs. B. Swarupa Rani</p>
              <p>7013447813</p>
              <p>swaruparani@vrsiddhartha.ac.in</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Student Coordinators</h3>
              <p>Jaladi Francis</p>
              <p>9491440419</p>
              <p>francisjaladi13@gmail.com</p>
              <p className="mt-4">MD. Ayisha Firdos</p>
              <p>8897129277</p>
              <p>mohammadayishafirdos@gmail.com</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
