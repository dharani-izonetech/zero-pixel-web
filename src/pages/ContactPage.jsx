import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle, XCircle, Loader } from 'lucide-react';

const WEB3FORMS_KEY = '0957585b-94b3-4fbd-99bb-b30bb1271fe8';

const ContactPage = () => {
    const [status, setStatus] = useState('idle'); 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        
        // Validation for phone: strictly numbers and max 10 digits
        if (name === 'phone') {
            value = value.replace(/\D/g, '').slice(0, 10);
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: `New Booking Inquiry from ${formData.name} - ZeroPixel Photography Studio`,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone || 'Not provided',
                    message: formData.message,
                    from_name: 'ZeroPixel Photography Studio Website',
                }),
            });

            const data = await res.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }

        setTimeout(() => setStatus('idle'), 6000);
    };

    return (
        <motion.main 
            className="min-h-screen bg-obsidian text-ghost pt-32 pb-24 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="text-center mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif tracking-widest uppercase mb-6"
                    >
                        Get in <span className="text-amber italic">Touch</span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-24 h-[1px] bg-emerald mx-auto mb-8 origin-left"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-ghost/70 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        Whether you're ready to book a session, or just want to discuss some ideas, we'd love to hear from you.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info & WhatsApp */}
                    <div className="order-2 lg:order-1 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="bg-forest/20 p-8 rounded border border-emerald/40"
                        >
                            <h3 className="text-2xl font-serif tracking-widest uppercase mb-8 text-ghost">
                                Direct <span className="text-amber italic">Contact</span>
                            </h3>

                            <ul className="space-y-6 text-ghost/80">
                                <li className="flex items-start gap-4">
                                    <MapPin className="text-emerald w-6 h-6 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-serif text-lg tracking-wide uppercase mb-1">Studio</p>
                                        <p className="text-base font-medium text-ghost/70">
                                            Karumandapam & LIC Colony,<br />Tiruchirappalli, Tamil Nadu
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4 group">
                                    <Phone className="text-emerald w-6 h-6 flex-shrink-0 group-hover:text-amber transition-colors" />
                                    <a href="tel:+918056636662" className="text-base font-medium text-ghost/70 hover:text-amber transition-colors">
                                        +91 80 566 36662
                                    </a>
                                </li>
                                <li className="flex items-center gap-4 group">
                                    <Mail className="text-emerald w-6 h-6 flex-shrink-0 group-hover:text-amber transition-colors" />
                                    <a href="https://zeropixelstudio.in" target="_blank" rel="noreferrer" className="text-base font-medium text-ghost/70 hover:text-amber transition-colors">
                                        zeropixelstudio.in
                                    </a>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="bg-gradient-to-br from-[#25D366]/20 to-transparent p-8 rounded border border-[#25D366]/60 text-center"
                        >
                            <MessageCircle className="w-12 h-12 text-[#25D366] mx-auto mb-4" />
                            <h3 className="text-xl font-serif tracking-widest uppercase mb-2 text-ghost">WhatsApp Us</h3>
                            <p className="text-sm text-ghost/70 mb-6 font-light">
                                For the fastest response, send us a message directly.
                            </p>
                            <a
                                href="https://wa.me/918056636662"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-obsidian font-serif tracking-widest uppercase text-sm hover:bg-[#1ebe57] transition-colors rounded-full font-medium"
                            >
                                <MessageCircle className="w-4 h-4" /> Message on WhatsApp
                            </a>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <div className="order-1 lg:order-2">
                        <motion.form
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="bg-forest/10 p-8 md:p-12 rounded border border-emerald/40 space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <h3 className="text-3xl font-serif tracking-widest uppercase mb-8 text-ghost text-center">
                                Send a <span className="text-amber italic">Message</span>
                            </h3>

                            {/* Full Name */}
                            <div className="space-y-1 relative">
                                <label htmlFor="name" className="text-xs uppercase tracking-widest text-emerald/80 ml-1" style={{ fontWeight: 600, fontSize: '15px' }}>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-obsidian/50 border-b border-emerald/30 focus:border-amber px-4 py-3 text-ghost outline-none transition-colors rounded-t"
                                    placeholder="Jane Doe"
                                    maxLength="50"
                                    required
                                    disabled={status === 'loading'}
                                />
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1 relative">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-emerald/80 ml-1" style={{ fontWeight: 600, fontSize: '15px' }}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-obsidian/50 border-b border-emerald/30 focus:border-amber px-4 py-3 text-ghost outline-none transition-colors rounded-t"
                                        placeholder="jane@example.com"
                                        maxLength="100"
                                        required
                                        disabled={status === 'loading'}
                                    />
                                </div>
                                <div className="space-y-1 relative">
                                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-emerald/80 ml-1" style={{ fontWeight: 600, fontSize: '15px' }}>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-obsidian/50 border-b border-emerald/30 focus:border-amber px-4 py-3 text-ghost outline-none transition-colors rounded-t"
                                        placeholder="9876543210"
                                        maxLength="10"
                                        pattern="[0-9]{10}"
                                        title="Please enter a valid 10-digit phone number"
                                        disabled={status === 'loading'}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-1 relative">
                                <label htmlFor="message" className="text-xs uppercase tracking-widests text-emerald/80 ml-1" style={{ fontWeight: 600, fontSize: '15px' }}>
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-obsidian/50 border-b border-emerald/30 focus:border-amber px-4 py-3 text-ghost outline-none transition-colors resize-none rounded-t"
                                    placeholder="Tell us about your event, preferred dates, and what you're looking for..."
                                    maxLength="1000"
                                    required
                                    disabled={status === 'loading'}
                                ></textarea>
                            </div>

                            {/* Success Message */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 bg-emerald/10 border border-emerald/50 rounded"
                                >
                                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                                    <p className="text-sm font-serif tracking-wide text-emerald">
                                        Message sent! We'll get back to you soon.
                                    </p>
                                </motion.div>
                            )}

                            {/* Error Message */}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/40 rounded"
                                >
                                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                                    <p className="text-sm font-serif tracking-wide text-red-400">
                                        Something went wrong. Please try WhatsApp instead.
                                    </p>
                                </motion.div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="group relative w-full flex items-center justify-center gap-2 px-8 py-4 bg-emerald/10 border border-emerald text-emerald hover:text-obsidian overflow-hidden transition-colors mt-8 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <div className="absolute inset-0 bg-emerald transform scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100 z-0"></div>
                                <span className="relative z-10 font-serif tracking-widest uppercase text-sm flex items-center gap-2">
                                    {status === 'loading' && (
                                        <><Loader className="w-4 h-4 animate-spin" /> Sending...</>
                                    )}
                                    {status === 'success' && (
                                        <><CheckCircle className="w-4 h-4" /> Sent!</>
                                    )}
                                    {(status === 'idle' || status === 'error') && (
                                        <>Send Inquiry <Send className="w-4 h-4 ml-2" /></>
                                    )}
                                </span>
                            </button>

                        </motion.form>
                    </div>
                </div>

                {/* Google Maps Embed */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 w-full h-[400px] border border-emerald/10 rounded overflow-hidden relative group"
                >
                    <div className="absolute inset-0 bg-obsidian/40 mix-blend-color group-hover:opacity-0 transition-opacity duration-1000 z-10 pointer-events-none"></div>
                    <iframe
                        title="Studio Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125423.0645000571!2d78.61898555776269!3d10.775209384955734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2dba5d7%3A0x10269377464a4d6f!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711714510659!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 w-full h-full"
                    ></iframe>
                </motion.div>

            </div>
        </motion.main>
    );
};

export default ContactPage;