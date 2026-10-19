import { useState } from 'react';
import { track } from '../utils/track';

const PORTAL_ID = '52189125';
const FORM_ID = '7404080e-90a2-4d9e-97b3-9327fc19f1a1';

export default function LeadForm() {
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = Object.fromEntries(new FormData(form));
        setStatus('loading');

        const body = {
            fields: [
                { name: 'firstname', value: data.firstname },
                { name: 'lastname', value: data.lastname },
                { name: 'email', value: data.email },
            ],
            context: { pageUri: window.location.href, pageName: document.title },
        };

        try {
            const res = await fetch(
                `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                }
            );
            if (!res.ok) throw new Error('Error HubSpot');
            track('form_submit', { form_name: 'lead_form' });
            setStatus('success');
            form.reset();
        } catch {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    name="firstname"
                    placeholder="Nombre"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300"
                />
                <input
                    name="lastname"
                    placeholder="Apellidos"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300"
                />
            </div>
            <input
                name="email"
                type="email"
                placeholder="Correo"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300"
            />
            <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3 rounded-xl bg-[#0052FF] text-white font-bold disabled:opacity-60"
            >
                {status === 'loading' ? 'Enviando...' : 'Enviar'}
            </button>
            {status === 'success' && (
                <p className="text-green-600 font-semibold">Gracias. Te contactaremos dentro de poco.</p>
            )}
            {status === 'error' && (
                <p className="text-red-600 font-semibold">Ocurrió un error, intenta de nuevo.</p>
            )}
        </form>
    );
}