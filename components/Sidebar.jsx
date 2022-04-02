import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "About", to: "/about", id: 2 },
  { name: "Modules", to: "/modules", id: 3 },
  { name: "Teachers", to: "/teachers", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function Sidebar() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <div className="flex flex-reverse-col absolute top-0 left-0 w-full justify-end md:hidden">
      <AnimatePresence>
        {open && (
          <motion.aside
            className="flex flex-col"
            initial={{ width: 0 }}
            animate={{
              width: "80%",
              height: "100vh",
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              className="flex flex-col bg-primaryGreen text-white flex-1 text-center items-center pt-20"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  className="text-xl my-2"
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="bg-primaryGreen p-2 text-white absolute top-5 right-10 rounded-md">
        <button onClick={cycleOpen}>
          {open ? (
            <svg viewPort="0 0 12 12" version="1.1" width="20" height="20"
            xmlns="http://www.w3.org/2000/svg">
           <line x1="1" y1="21" 
                 x2="21" y2="1" 
                 stroke="white" 
                 strokeWidth="2"/>
           <line x1="1" y1="1" 
                 x2="21" y2="21" 
                 stroke="white" 
                 strokeWidth="2"/>
       </svg>
          ) : (
            <svg viewBox="0 0 70 70" width="20" height="20" fill="white">
              <rect width="70" height="8"></rect>
              <rect y="30" width="70" height="8"></rect>
              <rect y="60" width="70" height="8"></rect>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
