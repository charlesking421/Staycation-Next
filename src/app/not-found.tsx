"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg p-8 md:p-16 max-w-lg text-center">
        <Image
          src="https://taskpro-website.vercel.app/_next/static/images/lighbulb-898dc38fcd4319fe9c2e9cf0fe42b5a0.gif"
          alt="Staycation"
          className="mx-auto mb-8"
          width={400}
          height={500}
        />
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          404
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Oops! The page you are looking for was not found.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p className="text-gray-500 mb-8">
            Looks like {`you're`} lost. {`Don't`} worry, go back to the main
            page and continue your staycation.
          </p>
        </motion.div>
        <Link href="/">
          <motion.button
            className="inline-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Go Home
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
