import React from "react";

// Icons
import { BsShieldShaded } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { SiFastapi } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

// Component
const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start"data-aos="fade-right">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Welcome to the Future,
          <br />
          Continue to improve web 3.0 for Financial
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        Meningkatkan efisiensi dan mengurangi biaya dalam pengelolaan keuangan Koperasi,
   	    Mencegah adanya kecurangan dan penggelapan dana keuangan.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center"data-aos="fade-right">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security"
          icon={<BsShieldShaded fontSize={21} className="text-white" />}
          subtitle="Keamanan Terjamin. Selalu menjaga privasi data-data dalam Blockchain Sehingga Aman"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Transparency"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Transparansi. Mencegah adanya kecurangan dan korupsi dalam pengelolaan keuangan pemerintah"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<SiFastapi fontSize={21} className="text-white" />}
          subtitle="Transaksi Cepat. Tanpa adanya kendala dalam transaksi karena menggunakan teknologi blockchain"
        />
      </div>
    </div>
  </div>
);

export default Services;
