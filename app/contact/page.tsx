import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Demo — PAVARISE ETHEREAL',
  description: 'Request a live BUDDI demo or 90-day pilot. We respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-white pt-32 pb-16 border-b border-divider">
        <div className="container-site text-center max-w-2xl mx-auto">
          <span className="section-tag">Get Started</span>
          <h1 className="font-serif font-bold text-navy text-5xl md:text-6xl leading-tight mb-4">
            Request a Demo
          </h1>
          <p className="font-sans text-slate text-lg">
            Thirty minutes. A live APT attack scenario. No slides.
            Just BUDDI detecting, predicting, and reporting — entirely on your infrastructure.
            We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAFA] section-pad">
        <div className="container-site max-w-2xl mx-auto">
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="bg-white rounded-card border border-divider shadow-card p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {[
                { label: 'First Name', name: 'first_name', type: 'text', placeholder: 'Vinay', required: true },
                { label: 'Last Name',  name: 'last_name',  type: 'text', placeholder: 'Kumar',  required: true },
              ].map(field => (
                <div key={field.name}>
                  <label className="block font-sans text-xs font-bold tracking-widest text-slate uppercase mb-2">
                    {field.label} {field.required && '*'}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full border border-divider rounded-button px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
              ))}
            </div>

            {[
              { label: 'Work Email', name: 'email', type: 'email', placeholder: 'ciso@organisation.com', required: true },
              { label: 'Company / Organisation', name: 'company', type: 'text', placeholder: 'ACME Bank Ltd', required: true },
            ].map(field => (
              <div key={field.name} className="mb-5">
                <label className="block font-sans text-xs font-bold tracking-widest text-slate uppercase mb-2">
                  {field.label} {field.required && '*'}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full border border-divider rounded-button px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-navy transition-colors"
                />
              </div>
            ))}

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block font-sans text-xs font-bold tracking-widest text-slate uppercase mb-2">
                  Your Role
                </label>
                <select
                  name="role"
                  className="w-full border border-divider rounded-button px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-navy bg-white"
                >
                  <option value="">Select...</option>
                  {['CISO / Security Head', 'CTO / CIO', 'SOC Manager', 'IT Director', 'Security Analyst', 'Procurement', 'Other'].map(r => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-sans text-xs font-bold tracking-widest text-slate uppercase mb-2">
                  Endpoints / Scale
                </label>
                <select
                  name="endpoints"
                  className="w-full border border-divider rounded-button px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-navy bg-white"
                >
                  <option value="">Select...</option>
                  {['< 25 (Free pilot)', '25–100 (SMB)', '100–500 (Mid-Market)', '500+ (Enterprise)', 'Government / Defence'].map(e => (
                    <option key={e}>{e}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-sans text-xs font-bold tracking-widest text-slate uppercase mb-2">
                What are you trying to solve?
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your environment, current tools, compliance requirements, or what's driving this evaluation..."
                className="w-full border border-divider rounded-button px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-navy resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="btn-gold w-full text-sm py-3.5"
            >
              Send Request →
            </button>
            <p className="text-center font-sans text-xs text-slate mt-3">
              We respond within 24 hours. No spam. No marketing lists.
              Direct conversation with the PAVARISE team.
            </p>
          </form>

          {/* Alternative contact */}
          <div className="mt-8 text-center">
            <p className="font-sans text-sm text-slate">
              Prefer email?{' '}
              <a href="mailto:team@pavarise-ethereal.com" className="text-navy font-semibold hover:text-gold transition-colors">
                team@pavarise-ethereal.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
