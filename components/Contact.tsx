
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send, MessageSquare, AlertCircle, Loader2, CheckCircle2, Check } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    hp_field: '' 
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'cooldown'>('idle');

  // Configurações da Evolution API obtidas via variáveis de ambiente
  const API_KEY = import.meta.env.VITE_EVOLUTION_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_EVOLUTION_API_BASE_URL; 
  const INSTANCE_NAME = import.meta.env.VITE_EVOLUTION_INSTANCE_NAME; 
  const DESTINATION_NUMBER = import.meta.env.VITE_EVOLUTION_DESTINATION_NUMBER;

  const formatPhone = (value: string) => {
    let digits = value.replace(/\D/g, '');
    if (digits.length === 0) return "";
    const limitedDigits = digits.slice(0, 13);
    
    if (limitedDigits.length <= 2) {
      return `+${limitedDigits}`;
    }
    if (limitedDigits.length <= 4) {
      return `+${limitedDigits.slice(0, 2)} (${limitedDigits.slice(2)}`;
    }
    if (limitedDigits.length <= 8) {
      return `+${limitedDigits.slice(0, 2)} (${limitedDigits.slice(2, 4)}) ${limitedDigits.slice(4)}`;
    }
    if (limitedDigits.length <= 12) {
      return `+${limitedDigits.slice(0, 2)} (${limitedDigits.slice(2, 4)}) ${limitedDigits.slice(4, 8)}-${limitedDigits.slice(8)}`;
    }
    return `+${limitedDigits.slice(0, 2)} (${limitedDigits.slice(2, 4)}) ${limitedDigits.slice(4, 9)}-${limitedDigits.slice(9)}`;
  };

  const validate = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (value.length < 3) error = 'O nome deve ter pelo menos 3 caracteres.';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = 'Insira um e-mail válido.';
        break;
      case 'phone':
        const digits = value.replace(/\D/g, '');
        if (digits.length < 12) error = 'Insira o telefone completo com DDI (ex: +55...).';
        break;
      case 'subject':
        if (value.length < 5) error = 'O assunto deve ter pelo menos 5 caracteres.';
        break;
      case 'message':
        if (value.length < 10) error = 'A mensagem deve conter pelo menos 10 caracteres.';
        break;
      default:
        break;
    }
    return error;
  };

  useEffect(() => {
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'hp_field') {
        const error = validate(key, formData[key as keyof typeof formData]);
        if (error) newErrors[key as keyof FormErrors] = error;
      }
    });
    setErrors(newErrors);
    setIsValid(
      Object.keys(newErrors).length === 0 && 
      formData.name !== '' && 
      formData.email !== '' && 
      formData.phone !== '' &&
      formData.subject !== '' &&
      formData.message !== ''
    );
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    if (id === 'phone') {
      const formattedValue = formatPhone(value);
      setFormData(prev => ({ ...prev, [id]: formattedValue }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched(prev => ({ ...prev, [e.target.id]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.hp_field || !isValid || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const whatsappMessage = `*NOVA MENSAGEM DO SITE MASTERTECH*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📧 *E-mail:* ${formData.email}\n` +
      `📱 *WhatsApp:* ${formData.phone}\n` +
      `📝 *Assunto:* ${formData.subject}\n` +
      `💬 *Mensagem:* ${formData.message}`;

    try {
      if (!API_BASE_URL || !INSTANCE_NAME || !API_KEY || !DESTINATION_NUMBER) {
        throw new Error('Configurações da API não encontradas no ambiente.');
      }

      const response = await fetch(`${API_BASE_URL}/message/sendText/${INSTANCE_NAME}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': API_KEY
        },
        body: JSON.stringify({
          number: DESTINATION_NUMBER,
          text: whatsappMessage,
          linkPreview: false
        })
      });

      if (!response.ok) {
        throw new Error(`Erro API: ${response.status}`);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', hp_field: '' });
      setTouched({});
      
    } catch (error) {
      console.error('Falha no envio:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClass = (id: string) => {
    const baseClass = "w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 text-slate-950 bg-white border-slate-300 placeholder:text-slate-400 font-medium";
    if (touched[id] && errors[id as keyof FormErrors]) {
      return `${baseClass} border-red-500 focus:ring-red-200 bg-red-50`;
    }
    return `${baseClass} border-slate-300 focus:ring-mt-blue focus:border-mt-blue`;
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <h2 className="text-mt-blue font-bold uppercase tracking-widest text-sm mb-3">Contato</h2>
            <p className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">Vamos Tirar seu Projeto do Papel?</p>
            
            <p className="text-slate-600 mb-10 text-lg">
              Estamos prontos para ouvir seus desafios e propor as melhores soluções tecnológicas para sua empresa.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mt-blue/10 rounded-xl flex items-center justify-center text-mt-blue flex-shrink-0">
                  <Mail size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">E-mail</h4>
                  <a href="mailto:contato@mastertechbr.com" className="text-slate-500 hover:text-mt-blue transition-colors">contato@mastertechbr.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mt-orange/10 rounded-xl flex items-center justify-center text-mt-orange flex-shrink-0">
                  <Phone size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Telefone / WhatsApp</h4>
                  <a href="tel:3298432685" className="text-slate-500 hover:text-mt-orange transition-colors">(32) 9843-2685</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200 min-h-[500px] flex flex-col justify-center animate-in fade-in slide-in-from-right duration-700">
            {submitStatus === 'success' ? (
              <div className="text-center py-12 flex flex-col items-center">
                {/* Animated Success Icon Container */}
                <div className="relative mb-8">
                  {/* Outer Pulsing Ring */}
                  <div className="absolute inset-0 bg-mt-blue/20 rounded-full animate-ping"></div>
                  
                  {/* Main Circle */}
                  <div className="relative w-28 h-28 bg-mt-blue rounded-full flex items-center justify-center shadow-2xl shadow-mt-blue/30 animate-in zoom-in spin-in-90 duration-700 ease-out">
                    <Check 
                      size={56} 
                      className="text-mt-orange animate-in zoom-in slide-in-from-bottom-4 delay-300 duration-500 fill-mt-orange/10" 
                      strokeWidth={4}
                    />
                  </div>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-8 delay-500 duration-700 fill-mode-both">
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Solicitação Recebida!</h3>
                  <p className="text-slate-600 mb-10 text-lg max-w-sm mx-auto">
                    Excelente! Nossa equipe técnica já foi notificada e entrará em contato com você em breve.
                  </p>
                  <button 
                    onClick={() => setSubmitStatus('idle')}
                    className="px-10 py-4 bg-white border-2 border-mt-blue text-mt-blue rounded-2xl font-bold hover:bg-mt-blue hover:text-white transition-all active:scale-95 shadow-md hover:shadow-xl"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-8">
                   <MessageSquare className="text-mt-blue" size={28} aria-hidden="true" />
                   <h3 className="text-2xl font-bold text-slate-900">Envie uma Mensagem</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="hidden" aria-hidden="true">
                    <input type="text" id="hp_field" tabIndex={-1} value={formData.hp_field} onChange={handleChange} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Nome Completo</label>
                      <input 
                        id="name" type="text" required className={getInputClass('name')}
                        placeholder="Ex: João Silva" value={formData.name}
                        onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting}
                      />
                      {touched.name && errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">E-mail Corporativo</label>
                      <input 
                        id="email" type="email" required className={getInputClass('email')}
                        placeholder="email@empresa.com" value={formData.email}
                        onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting}
                      />
                      {touched.email && errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-700 ml-1">Telefone / WhatsApp</label>
                      <input 
                        id="phone" type="tel" required className={getInputClass('phone')}
                        placeholder="+55 (00) 00000-0000" value={formData.phone}
                        onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting}
                      />
                      {touched.phone && errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-slate-700 ml-1">Assunto</label>
                      <input 
                        id="subject" type="text" required className={getInputClass('subject')}
                        placeholder="Do que você precisa hoje?" value={formData.subject}
                        onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting}
                      />
                      {touched.subject && errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Mensagem</label>
                    <textarea 
                      id="message" required rows={4} className={`${getInputClass('message')} resize-none`}
                      placeholder="Descreva seu projeto ou dúvida..." value={formData.message}
                      onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting}
                    />
                    {touched.message && errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm flex items-start gap-2">
                      <AlertCircle className="mt-0.5 flex-shrink-0" size={18} /> 
                      <div>
                        <p className="font-bold">Falha no Envio</p>
                        <p className="opacity-90">Verifique sua conexão ou tente novamente. Certifique-se de que a instância esteja online.</p>
                      </div>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={!isValid || isSubmitting}
                    className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg ${
                      isValid && !isSubmitting
                        ? 'bg-mt-blue text-white hover:bg-opacity-95 shadow-mt-blue/20 active:scale-95' 
                        : 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                    }`}
                  >
                    {isSubmitting ? (
                      <>Enviando... <Loader2 className="w-5 h-5 animate-spin" /></>
                    ) : (
                      <>Enviar Mensagem <Send size={20} aria-hidden="true" /></>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
