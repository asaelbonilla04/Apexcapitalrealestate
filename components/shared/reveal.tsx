"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  /** Stagger delay in seconds for sequential reveals. */
  delay?: number;
  /** Travel distance in px for the entrance transform. */
  y?: number;
  className?: string;
}

/**
 * Lightweight scroll/entrance animation wrapper.
 *
 * Fades and lifts its children into view once. Animations are subtle by
 * design and are neutralized for users with `prefers-reduced-motion` via the
 * global CSS reset in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
