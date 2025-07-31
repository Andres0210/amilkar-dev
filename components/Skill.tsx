"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SkillType } from "@/types";

export default function Skill({ name, logo }: SkillType) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className="relative group w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 dark:bg-white/100 shadow-md flex items-center justify-center"
    >
      <Image src={logo} alt={name} width={22} height={22} />
      <span className="absolute opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded-md bottom-[-35px] left-1/2 -translate-x-1/2 z-10">
        {name}
      </span>
    </motion.div>
  );
}
