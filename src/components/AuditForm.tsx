import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Loader2, Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
}

interface AuditFormProps {
  isDark?: boolean;
}

export function AuditForm({ isDark = true }: AuditFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: supabaseError } = await supabase.from('leads').insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone || null,
        },
      ]);

      if (supabaseError) {
        setError('Something went wrong. Please try again.');
        console.error(supabaseError);
      } else {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', phone: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={`w-full max-w-md rounded-lg p-8 text-center ${
          isDark
            ? 'bg-green-950 border border-green-900'
            : 'bg-green-50 border border-green-200'
        }`}
      >
        <Check
          className={`w-12 h-12 mx-auto mb-4 ${
            isDark ? 'text-green-400' : 'text-green-600'
          }`}
        />
        <h3
          className={`text-lg font-semibold mb-2 ${
            isDark ? 'text-green-100' : 'text-green-900'
          }`}
        >
          Thank you!
        </h3>
        <p
          className={isDark ? 'text-green-300 text-sm' : 'text-green-700 text-sm'}
        >
          We'll review your situation and reach out within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div>
        <label
          htmlFor="name"
          className={`block text-sm font-medium mb-2 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          Full name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className={`w-full px-4 py-3 rounded-lg transition-colors ${
            isDark
              ? 'bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:bg-slate-750 focus:border-slate-600'
              : 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-slate-400'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isDark ? 'focus:ring-offset-slate-950' : 'focus:ring-offset-white'
          } focus:ring-blue-500`}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className={`block text-sm font-medium mb-2 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          Work email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@company.com"
          className={`w-full px-4 py-3 rounded-lg transition-colors ${
            isDark
              ? 'bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:bg-slate-750 focus:border-slate-600'
              : 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-slate-400'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isDark ? 'focus:ring-offset-slate-950' : 'focus:ring-offset-white'
          } focus:ring-blue-500`}
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className={`block text-sm font-medium mb-2 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          Company
        </label>
        <input
          id="company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          placeholder="Company name"
          className={`w-full px-4 py-3 rounded-lg transition-colors ${
            isDark
              ? 'bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:bg-slate-750 focus:border-slate-600'
              : 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-slate-400'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isDark ? 'focus:ring-offset-slate-950' : 'focus:ring-offset-white'
          } focus:ring-blue-500`}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className={`block text-sm font-medium mb-2 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          Phone (optional)
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          className={`w-full px-4 py-3 rounded-lg transition-colors ${
            isDark
              ? 'bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:bg-slate-750 focus:border-slate-600'
              : 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-slate-400'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isDark ? 'focus:ring-offset-slate-950' : 'focus:ring-offset-white'
          } focus:ring-blue-500`}
        />
      </div>

      {error && (
        <div
          className={`p-3 rounded-lg text-sm ${
            isDark
              ? 'bg-red-950 text-red-200 border border-red-900'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`w-full px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
          isDark
            ? 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-600 disabled:opacity-75'
            : 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-600 disabled:opacity-75'
        }`}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Request Audit'
        )}
      </button>

      <p
        className={`text-xs text-center ${
          isDark ? 'text-slate-500' : 'text-slate-500'
        }`}
      >
        We won't share your information. We'll reach out to discuss your
        situation.
      </p>
    </form>
  );
}
