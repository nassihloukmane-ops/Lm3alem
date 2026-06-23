"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  emoji: string;
  name: string;
  alt: string;
  index: number;
}

export function CategoryCard({ emoji, name, alt, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <Card className="group cursor-pointer hover:shadow-card-hover hover:border-saffron/30">
        <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
          <span
            className="text-4xl group-hover:scale-110 transition-transform duration-300"
            role="img"
            aria-label={alt}
          >
            {emoji}
          </span>
          <h3 className="text-sm font-semibold text-teal group-hover:text-saffron-dark transition-colors">
            {name}
          </h3>
        </CardContent>
      </Card>
    </motion.div>
  );
}
