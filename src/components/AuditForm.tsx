import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Loader2, Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
}



export function AuditForm() {
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
      <div className="w-full max-w-md glass-dark rounded-3xl p-12 text-center animate-fade-in border-green-500/20 shadow-2xl shadow-green-500/10">
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">Application Received</h3>
        <p className="text-slate-400 leading-relaxed">
          We'll review your operations and reaching out within 1-2 business days to schedule your deep dive.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md glass-dark p-8 rounded-3xl border-white/5 shadow-2xl space-y-6">
      <div className="space-y-4">
        {[
          { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
          { id: 'email', label: 'Work Email', type: 'email', placeholder: 'john@company.com' },
          { id: 'company', label: 'Company', type: 'text', placeholder: 'Acme Corp' },
          { id: 'phone', label: 'Phone (Optional)', type: 'tel', placeholder: '+1 (555) 000-0000', required: false },
        ].map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium text-slate-400 mb-2 ml-1">
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              name={field.id}
              value={(formData as any)[field.id]}
              onChange={handleChange}
              required={field.required !== false}
              placeholder={field.placeholder}
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-primary/20 focus:border-accent-primary/50 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-shake">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed py-4"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          'Request Free Audit'
        )}
      </button>

      <p className="text-xs text-center text-slate-500 font-medium">
        🔒 Your data is secure and will never be shared.
      </p>
    </form>
  );
}
