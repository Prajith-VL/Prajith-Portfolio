"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function validate(name: string, email: string, message: string): Errors {
  const e: Errors = {};
  const trimmedName = name.trim();
  const trimmedMsg = message.trim();
  if (!trimmedName) e.name = "Name is required.";
  if (!email.trim()) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Enter a valid email.";
  if (!trimmedMsg) e.message = "Message is required.";
  else if (trimmedMsg.length < 10) e.message = "Please write at least 10 characters.";
  return e;
}

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[var(--muted)] outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const next = validate(name, email, message);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSent(true);
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-5"
      noValidate
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div>
        <label htmlFor="contact-name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "err-name" : undefined}
        />
        {errors.name && (
          <p id="err-name" className="mt-1 text-xs text-red-400" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "err-email" : undefined}
        />
        {errors.email && (
          <p id="err-email" className="mt-1 text-xs text-red-400" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y min-h-[120px]`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
        />
        {errors.message && (
          <p id="err-message" className="mt-1 text-xs text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-full border border-[var(--accent)] bg-[var(--accent-dim)] py-3 font-mono text-sm uppercase tracking-wider text-[var(--accent)] transition hover:bg-[var(--accent)]/20"
      >
        Send message
      </button>

      <AnimatePresence>
        {sent && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center text-sm text-[var(--accent)]"
            role="status"
          >
            Thanks — your message is ready to send. Connect via email for a guaranteed reply, or wire this form to a backend later.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
