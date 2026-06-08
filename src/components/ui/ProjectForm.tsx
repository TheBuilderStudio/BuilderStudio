"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Loader2, Check, AlertCircle } from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormFields {
  name: string
  email: string
  timeline: string
  details: string
}

interface FormErrors {
  name?: string
  email?: string
  details?: string
}

// ─── Validation ───────────────────────────────────────────────────────────────

const validate = (fields: FormFields): FormErrors => {
  const errors: FormErrors = {}

  // Name
  if (!fields.name.trim()) {
    errors.name = "Name is required."
  } else if (fields.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters."
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!fields.email.trim()) {
    errors.email = "Email is required."
  } else if (!emailRegex.test(fields.email)) {
    errors.email = "Enter a valid email address."
  }

  // Project Details
  if (!fields.details.trim()) {
    errors.details = "Please tell us about your project."
  } else if (fields.details.trim().length < 20) {
    errors.details = "Please provide at least 20 characters."
  }

  return errors
}

// ─── Component ────────────────────────────────────────────────────────────────

export const ProjectForm = () => {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    timeline: "asap",
    details: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [serverError, setServerError] = useState("")

  // Auto-reset form state after success
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    if (status === "success") {
      timeoutId = setTimeout(() => {
        setStatus("idle")
      }, 4000) // Reset after 4 seconds
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [status])

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    const updated = { ...fields, [name]: value }
    setFields(updated)

    // Live-validate touched fields
    if (touched[name]) {
      setErrors(validate(updated))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors(validate(fields))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mark everything touched
    setTouched({ name: true, email: true, details: true })
    const validationErrors = validate(fields)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    // Guard: check if access key is configured
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      setStatus("error")
      setServerError("Form is not configured yet. Add your Web3Forms key to .env file.")
      return
    }

    setStatus("submitting")
    setServerError("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Project Inquiry from ${fields.name}`,
          from_name: "The Builder Studio",
          name: fields.name,
          email: fields.email,
          timeline: fields.timeline,
          message: fields.details,
          // Honeypot — hidden spam trap
          botcheck: "",
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        setFields({ name: "", email: "", timeline: "asap", details: "" })
        setTouched({})
      } else {
        throw new Error(data.message || "Submission failed.")
      }
    } catch (err: unknown) {
      setStatus("error")
      setServerError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      )
    }
  }

  // ── Styles ──────────────────────────────────────────────────────────────────

  const inputBase =
    "w-full bg-white/[0.04] border rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 focus:outline-none transition-all duration-300 text-sm"

  const inputClass = (field: keyof FormErrors) =>
    `${inputBase} ${
      errors[field] && touched[field]
        ? "border-red-500/60 focus:border-red-500 bg-red-500/[0.04]"
        : "border-white/[0.08] focus:border-emerald-500/50 focus:bg-emerald-500/[0.04]"
    }`

  const labelClass = "block text-left text-sm font-medium text-white/70 mb-2"

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="w-full max-w-lg relative">
      {/* Glow Border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative rounded-2xl bg-[#0D0D0D]/80 backdrop-blur-2xl border border-white/[0.08] overflow-hidden">
        {/* Top accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

        {/* Inner glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-emerald-500/5 blur-[60px] pointer-events-none" />

        <div className="relative z-10 p-8">
          {/* Header */}
          <div className="mb-7">
            <h3 className="text-xl font-semibold text-white mb-1.5">Tell us about your idea</h3>
            <p className="text-sm text-white/40">We typically respond within 24 hours.</p>
          </div>

          <AnimatePresence mode="wait">
            {/* ── Success State ── */}
            {status === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <Check size={32} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg mb-1">Inquiry sent successfully!</p>
                  <p className="text-white/50 text-sm">
                    We'll review your idea and get back to you within 24 hours. ✨
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-xs text-white/30 hover:text-white/60 transition-colors underline underline-offset-4"
                >
                  Send another inquiry
                </button>
              </motion.div>
            )}

            {/* ── Form State ── */}
            {status !== "success" && (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Honeypot — hidden from users, catches bots */}
                <input type="checkbox" name="botcheck" className="hidden" readOnly />

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={labelClass}>Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={fields.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Arjun Sharma"
                      className={inputClass("name")}
                    />
                    <AnimatePresence>
                      {errors.name && touched.name && (
                        <motion.p
                          key="name-err"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                        >
                          <AlertCircle size={11} /> {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={fields.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="arjun@startup.in"
                      className={inputClass("email")}
                    />
                    <AnimatePresence>
                      {errors.email && touched.email && (
                        <motion.p
                          key="email-err"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                        >
                          <AlertCircle size={11} /> {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label htmlFor="timeline" className={labelClass}>Expected Timeline</label>
                  <div className="relative">
                    <select
                      id="timeline"
                      name="timeline"
                      value={fields.timeline}
                      onChange={handleChange}
                      className={`${inputBase} border-white/[0.08] focus:border-emerald-500/50 focus:bg-emerald-500/[0.04] appearance-none cursor-pointer pr-10`}
                      style={{ backgroundColor: "#111111", colorScheme: "dark" }}
                    >
                      <option value="asap" style={{ backgroundColor: "#111111", color: "#fff" }}>
                        ASAP — Within 4 weeks
                      </option>
                      <option value="1-2-months" style={{ backgroundColor: "#111111", color: "#fff" }}>
                        1–2 Months
                      </option>
                      <option value="flexible" style={{ backgroundColor: "#111111", color: "#fff" }}>
                        Flexible / Not Sure Yet
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="details" className={labelClass}>Project Details</label>
                  <textarea
                    id="details"
                    name="details"
                    value={fields.details}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Main ek SaaS banana chahta hoon jo Indian freelancers ke liye..."
                    rows={4}
                    className={`${inputClass("details")} resize-none`}
                  />
                  <AnimatePresence>
                    {errors.details && touched.details && (
                      <motion.p
                        key="details-err"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                      >
                        <AlertCircle size={11} /> {errors.details}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Server Error Banner */}
                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400"
                    >
                      <AlertCircle size={15} className="mt-0.5 flex-shrink-0" />
                      <span>{serverError || "Submission failed. Please try again."}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group relative w-full mt-2 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl px-6 py-4 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
                >
                  {/* Shine sweep */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />

                  {status === "submitting" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Launch My Startup</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-white/25 leading-relaxed">
                  No spam. No commitment. Just a conversation about your idea.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
