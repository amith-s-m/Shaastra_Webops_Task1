import type { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Header1 from "./components/ui/header-1";
import Footer4Col from "./components/ui/footer-4col";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Attempt");
    console.log("Email:", email);
    console.log("Password:", password);
    alert(`Logged in as: ${email}`);
    navigate("/portal");
  };

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="flex flex-col relative min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950 font-sans text-zinc-900 dark:text-zinc-50 antialiased overflow-x-hidden group"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <Header1 />
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-20 z-10">
        <div className="absolute top-0 right-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_30%,_rgba(16,185,129,0.1)_0%,_transparent_60%)] dark:bg-[radial-gradient(circle_at_70%_30%,_rgba(16,185,129,0.15)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 left-0 h-full w-1/2 -scale-x-100 bg-[radial-gradient(circle_at_70%_30%,_rgba(99,102,241,0.1)_0%,_transparent_60%)] dark:bg-[radial-gradient(circle_at_70%_30%,_rgba(99,102,241,0.15)_0%,_transparent_60%)] pointer-events-none" />

        <div className="relative z-10 container mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
          <motion.div
            className="relative mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="-mt-24 relative z-10 mx-auto max-w-2xl overflow-hidden rounded-2xl border border-zinc-200/50 bg-white/50 dark:border-zinc-800/50 dark:bg-zinc-900/50 p-16 shadow-2xl backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Welcome Back
              </h2>
              <form className="flex flex-col gap-8" onSubmit={handleLogin}>
                <div>
                  <label className="block text-sm text-gray-800 dark:text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full max-w-md p-2 bg-gray-100 dark:bg-gray-800 rounded text-black dark:text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-800 dark:text-gray-400 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full max-w-md p-2 bg-gray-100 dark:bg-gray-800 rounded text-black dark:text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="mx-auto flex items-center gap-2 rounded-full px-6 py-2 text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 sm:w-fit shadow-[0_4px_24px_rgba(0,0,0,0.1)] border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 dark:bg-emerald-500/20 dark:border-emerald-500/30 backdrop-blur-md hover:bg-emerald-500/20 dark:hover:bg-emerald-500/30"
                >
                  Log In
                </button>
                <div className="mt-4 flex flex-col items-center gap-2 text-sm text-zinc-400">
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Forgot your password?
                  </a>
                  <p>
                    Don't have an account?
                    <a
                      href="#"
                      className="ml-2 text-emerald-500 font-semibold hover:text-emerald-400 transition-colors"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </form>
            </div>
            {/* Background glowing effect behind image */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[60%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 dark:bg-emerald-500/10 blur-[100px]" />
          </motion.div>
        </div>
      </section>
      <div className="relative z-10">
        <Footer4Col />
      </div>
    </div>
  );
}
