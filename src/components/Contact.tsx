import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Clock,
  CheckCircle,
  User,
  MessageSquare,
  Calendar
} from 'lucide-react';

/**
 * Contact Section Component
 * 
 * Features:
 * - Contact form with validation
 * - Multiple contact methods display
 * - Interactive map placeholder
 * - Availability status and response time
 * - Social media links
 * - Responsive design with mobile optimization
 */
const Contact = () => {
  const { t } = useTranslation();
  
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'web-development'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Contact information
  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      value: t('contact.info.email.value'),
      description: t('contact.info.email.description'),
      href: `mailto:${t('contact.info.email.value')}`,
      color: 'text-orange-400'
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      value: t('contact.info.phone.value'),
      description: t('contact.info.phone.description'),
      href: `tel:${t('contact.info.phone.value')}`,
      color: 'text-pink-400'
    },
    {
      icon: MapPin,
      title: t('contact.info.location.title'),
      value: t('contact.info.location.value'),
      description: t('contact.info.location.description'),
      href: '#',
      color: 'text-blue-400'
    }
  ];

  // Project types for dropdown
  const projectTypes = [
    { value: 'web-development', label: t('contact.form.projectTypes.webDev') },
    { value: 'mobile-app', label: t('contact.form.projectTypes.mobileApp') },
    { value: 'consulting', label: t('contact.form.projectTypes.consulting') },
    { value: 'other', label: t('contact.form.projectTypes.other') }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: 'web-development'
      });
    }, 3000);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-200/30 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-2 rounded-full border border-orange-200/50 mb-6">
            <MessageCircle className="w-4 h-4 text-orange-500" />
            <span className="text-orange-600 font-medium text-sm">{t('contact.badge')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            {t('contact.title.part1')}{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              {t('contact.title.highlight')}
            </span>
          </h2>
          
          <p className="text-slate-600 text-lg lg:text-xl max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-1">
            
            {/* Availability Status */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-slate-800 font-semibold">{t('contact.availability.status')}</span>
              </div>
              <p className="text-slate-600 text-sm mb-4">{t('contact.availability.description')}</p>
              <div className="flex items-center space-x-2 text-slate-500 text-sm">
                <Clock className="w-4 h-4" />
                <span>{t('contact.availability.responseTime')}</span>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="block bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50 hover:shadow-xl hover:border-slate-300/50 transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg flex items-center justify-center group-hover:from-orange-200 group-hover:to-pink-200 transition-colors duration-200`}>
                        <Icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-slate-800 font-semibold mb-1">{info.title}</h3>
                        <p className="text-slate-900 font-medium mb-1">{info.value}</p>
                        <p className="text-slate-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50 mt-8">
              <h3 className="text-slate-800 font-semibold mb-4 flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>{t('contact.location.title')}</span>
              </h3>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                  <p className="text-slate-600 font-medium">{t('contact.location.placeholder')}</p>
                  <p className="text-slate-500 text-sm">{t('contact.location.address')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
              
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{t('contact.form.title')}</h3>
                <p className="text-slate-600">{t('contact.form.subtitle')}</p>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="text-green-800 font-medium">{t('contact.form.success.title')}</p>
                    <p className="text-green-600 text-sm">{t('contact.form.success.message')}</p>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-700 font-medium mb-2 flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{t('contact.form.name.label')}</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder={t('contact.form.name.placeholder')}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-700 font-medium mb-2 flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{t('contact.form.email.label')}</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder={t('contact.form.email.placeholder')}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Subject and Project Type Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-slate-700 font-medium mb-2 flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>{t('contact.form.subject.label')}</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder={t('contact.form.subject.placeholder')}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-slate-700 font-medium mb-2 flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{t('contact.form.projectType.label')}</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
                    >
                      {projectTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-slate-700 font-medium mb-2 flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>{t('contact.form.message.label')}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder={t('contact.form.message.placeholder')}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{t('contact.form.submitting')}</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>{t('contact.form.submitted')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('contact.form.submit')}</span>
                    </>
                  )}
                </button>

                {/* Form Note */}
                <p className="text-slate-500 text-sm text-center">
                  {t('contact.form.note')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;