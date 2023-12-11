import Container from "./Container";
import { motion } from "framer-motion";
import Link from "next/link";



const BannerText = ({ title }) => {
  return (
    <div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
      <Container className="flex h-full flex-col gap-y-6 justify-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-bold text-black"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-black-100"
        >
          As a healer, I embrace the responsibility to listen, diagnose, and treat with precision <br />
          awesome mid-season sale.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex gap-x-4 mt-2"
        >
          <button className="py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold">
            Find out more
          </button>
          <button className="py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold">
          <Link href={"/appointment "}> <p className="  hover:text-[#159EEC] cursor-pointer duration-200">Appointment Now</p></Link>
          </button>
        </motion.div>
      </Container>
    </div>
  );
};

export default BannerText;







// import Container from "./Container";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const BannerText = ({ title }) => {
//   return (
//     <div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
//       <Container className="flex h-full flex-col gap-y-6 justify-center">
//         <motion.h2
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-7xl font-bold text-black"
//         >
//           {title}
//         </motion.h2>
//         <motion.p
//           initial={{ y: 40, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-lg text-black-100"
//         >
//           As a healer, I embrace the responsibility to listen, diagnose, and treat with precision <br />
//           awesome mid-season sale.
//         </motion.p>
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.7 }}
//           className="flex gap-x-4 mt-2"
//         >
//           <button className="py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold">
//             Find out more
//           </button>
//           <button className="py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold">
//             <Link href={"/appointment "}> 
//               <p className="hover:text-[#159EEC] cursor-pointer duration-200">Appointment Now</p>
//             </Link>
//           </button>
//         </motion.div>
//       </Container>
//     </div>
//   );
// };

// export default BannerText;

