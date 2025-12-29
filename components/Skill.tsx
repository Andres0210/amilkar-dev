"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SkillType } from "@/types";

export default function Skill({ name, logo }: SkillType) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm"
    >
      <Image src={logo} alt={name} width={28} height={28} />
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
}
