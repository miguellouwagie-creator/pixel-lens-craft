// src/pages/Contact.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ScrollToTop from "@/components/ScrollToTop";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "+34 667 326 300";

  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <main className="relative">
        {/* Simple hero */}
        <section className="pt-32 pb-16 px-8 max-w-7xl mx-auto">
          <span className="font-label text-secondary tracking-widest uppercase text-xs font-bold block mb-4">
            Get In Touch
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary mb-6">
            Let's architect your <span className="text-secondary">digital presence.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
            We are currently accepting select projects. Book a discovery call and let's build your visual legacy.
          </p>
        </section>

        {/* 2-column grid */}
        <section className="py-24 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Left column — existing ContactForm */}
          <div>
            <ContactForm />
          </div>

          {/* Right column — contact info */}
          <div className="space-y-10 lg:pl-12">
            
            {/* Phone/WhatsApp */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Phone className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1 font-bold">
                  WhatsApp
                </p>
                <p className="font-headline font-bold text-xl text-primary">{whatsappNumber}</p>
                <p className="text-sm text-on-surface-variant mt-1">Available Mon-Fri, 9am-6pm CET</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Mail className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1 font-bold">
                  Email
                </p>
                <a href="mailto:hello@studiopixelens.com" className="font-headline font-bold text-xl text-primary hover:text-secondary transition-colors">
                  hello@studiopixelens.com
                </a>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1 font-bold">
                  Location
                </p>
                <p className="font-headline font-bold text-xl text-primary">Available worldwide</p>
                <p className="text-sm text-on-surface-variant mt-1">Based in Alicante, Europe</p>
              </div>
            </div>
            
            {/* Availability badge */}
            <div className="mt-12 inline-block bg-secondary-container/20 border border-secondary/20 px-8 py-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
                <p className="font-label text-xs uppercase tracking-widest text-secondary font-bold">
                  Availability
                </p>
              </div>
              <p className="font-headline font-bold text-lg text-primary">Currently accepting projects for Q2 2026</p>
            </div>
          </div>

        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
