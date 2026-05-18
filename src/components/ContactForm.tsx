'use client';

import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojypgov';
const FALLBACK_EMAIL = 'neuralacresofficial@gmail.com';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        let msg = 'Message could not be sent. Please try again in a moment.';
        try {
          const data = await response.json();
          if (Array.isArray(data?.errors) && data.errors.length > 0) {
            msg = data.errors.map((x: { message?: string }) => x.message).filter(Boolean).join(' ');
          } else if (typeof data?.error === 'string' && data.error.trim().length > 0) {
            msg = data.error;
          }
        } catch {
          // keep default message
        }
        throw new Error(msg);
      }

      form.reset();
      setSubmitted(true);
    } catch (err) {
      const fallback = 'Message could not be sent. Please try again in a moment.';
      if (err instanceof Error && err.message.trim().length > 0) {
        const msg = err.message.trim();
        if (msg.toLowerCase() === 'failed to fetch') {
          setError('Network connection blocked the form request. Please refresh and try again, or use a different network/browser.');
        } else {
          setError(msg);
        }
      } else {
        setError(fallback);
      }
    } finally {
      setLoading(false);
    }
  }

  function handleEmailFallback(e: React.MouseEvent<HTMLAnchorElement>) {
    const form = e.currentTarget.closest('form');
    if (!form) return;

    const fd = new FormData(form);
    const name = String(fd.get('name') || '');
    const email = String(fd.get('email') || '');
    const organization = String(fd.get('organization') || '');
    const interest = String(fd.get('interest') || '');
    const message = String(fd.get('message') || '');

    const subject = encodeURIComponent('Neural Acres investor inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\nInterest: ${interest}\n\nMessage:\n${message}`
    );
    e.currentTarget.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
  }

  if (submitted) {
    return (
      <div className="card p-12 text-center">
        <div className="w-16 h-16 rounded-full border-2 border-teal-500 bg-teal-500/10
          flex items-center justify-center text-3xl text-teal-500 mx-auto mb-6">
          ✓
        </div>
        <h3 className="font-heading font-bold text-silver-100 text-xl mb-3">Message Received</h3>
        <p className="text-silver-400 text-sm leading-relaxed">
          We&apos;ll be in touch within 24 hours to discuss the opportunity.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-8">
      <h2 className="font-heading font-bold text-silver-100 text-xl mb-6">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="_subject" value="New Neural Acres investor inquiry" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-silver-400 mb-2">Full Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full bg-silver-100 border border-teal-500/20 rounded-lg px-4 py-2.5
                text-navy-950 text-sm placeholder:text-slate-400
                focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15
                transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-silver-400 mb-2">Email Address</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full bg-silver-100 border border-teal-500/20 rounded-lg px-4 py-2.5
                text-navy-950 text-sm placeholder:text-slate-400
                focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15
                transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-silver-400 mb-2">Organization / Fund</label>
          <input
            name="organization"
            type="text"
            placeholder="Your organization (optional)"
            className="w-full bg-silver-100 border border-teal-500/20 rounded-lg px-4 py-2.5
              text-navy-950 text-sm placeholder:text-slate-400
              focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15
              transition-all duration-200"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-silver-400 mb-2">Investment Interest</label>
          <select
            name="interest"
            required
            className="w-full bg-navy-800 border border-teal-500/15 rounded-lg px-4 py-2.5
              text-silver-100 text-sm
              focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15
              transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="">Select your interest level...</option>
            <option>Ready to invest — schedule a call</option>
            <option>Interested — request full pitch deck</option>
            <option>Exploring — want more information</option>
            <option>Strategic partner inquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-silver-400 mb-2">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Any questions or comments..."
            className="w-full bg-silver-100 border border-teal-500/20 rounded-lg px-4 py-2.5
              text-navy-950 text-sm placeholder:text-slate-400 resize-none
              focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15
              transition-all duration-200"
          />
        </div>

        {error && (
          <div className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            <p>{error}</p>
            <a
              href={`mailto:${FALLBACK_EMAIL}`}
              onClick={handleEmailFallback}
              className="mt-2 inline-block text-teal-300 underline underline-offset-4 hover:text-teal-200"
            >
              Send via email instead
            </a>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-teal-500 text-navy-950 font-bold text-sm rounded-xl
            shadow-teal-glow hover:bg-teal-400 hover:shadow-teal-glow-lg
            disabled:opacity-60 disabled:cursor-not-allowed
            transition-all duration-200"
        >
          {loading ? 'Sending...' : 'Send Message →'}
        </button>
      </form>
    </div>
  );
}
