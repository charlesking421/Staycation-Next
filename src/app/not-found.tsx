"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg p-8 md:p-16 max-w-lg text-center">
        <motion.img
          src="https://taskpro-website.vercel.app/_next/static/images/lighbulb-898dc38fcd4319fe9c2e9cf0fe42b5a0.gif"
          alt="Staycation"
          className="mx-auto mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          404
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Oops! Halaman yang Anda cari tidak ditemukan.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p className="text-gray-500 mb-8">
            Sepertinya Anda tersesat. Jangan khawatir, kembali ke halaman utama
            dan lanjutkan staycation Anda.
          </p>
        </motion.div>
        <Link href="/">
          <motion.button
            className="inline-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Kembali ke Beranda
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
