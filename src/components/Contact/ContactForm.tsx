"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
}

interface ContactFormProps {
  className?: string;
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '', onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default form submission behavior
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert('Thank you for your message! We&apos;ll get back to you soon.');
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {/* Name and Email Row */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full py-3 px-4 bg-white dark:bg-blacksection border border-gray-300 dark:border-strokedark rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-waterloo focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full py-3 px-4 bg-white dark:bg-blacksection border border-gray-300 dark:border-strokedark rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-waterloo focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      {/* Phone and Inquiry Type Row */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full py-3 px-4 bg-white dark:bg-blacksection border border-gray-300 dark:border-strokedark rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-waterloo focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
            placeholder="+254 xxx xxx xxx"
          />
        </div>
        <div>
          <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Inquiry Type
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleInputChange}
            className="w-full py-3 px-4 bg-white dark:bg-blacksection border border-gray-300 dark:border-strokedark rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
          >
            <option value="general">General Inquiry</option>
            <option value="volunteer">Volunteer Opportunities</option>
            <option value="partnership">Partnership</option>
            <option value="donation">Donations</option>
            <option value="media">Media Inquiry</option>
          </select>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full py-3 px-4 bg-white dark:bg-blacksection border border-gray-300 dark:border-strokedark rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-waterloo focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
          placeholder="How can we help you?"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full py-3 px-4 bg-white dark:bg-blacksection border border-gray-300 dark:border-strokedark rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-waterloo focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 resize-vertical"
          placeholder="Tell us more about your inquiry..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 bg-gradient-to-r from-primary to-primaryho text-white font-semibold rounded-lg hover:shadow-solid-5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <i className="fas fa-spinner fa-spin"></i>
            Sending Message...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <i className="fas fa-paper-plane"></i>
            Send Message
          </span>
        )}
      </motion.button>

      {/* Form Footer */}
      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <p className="text-sm text-gray-700 dark:text-waterloo flex items-center gap-2">
          <i className="fas fa-shield-alt text-primary"></i>
          We respect your privacy. Your information will never be shared with third parties.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
