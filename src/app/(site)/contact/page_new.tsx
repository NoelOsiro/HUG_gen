"use client";

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/UI';
import { ContactForm } from '@/components/Contact';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
}

const ContactPage = () => {
  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Our Office',
      details: ['Malindi Complex Lamu Road', 'Malindi, Kenya'],
      color: 'text-red-500'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Call Us',
      details: ['+254 714 956 717', 'Mon - Fri: 8AM - 6PM'],
      color: 'text-green-500'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: ['humblegenerationke@gmail.com', 'We respond within 24 hours'],
      color: 'text-blue-500'
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', href: '#', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: 'fab fa-twitter', href: '#', color: 'hover:bg-blue-400' },
    { name: 'Instagram', icon: 'fab fa-instagram', href: '#', color: 'hover:bg-pink-500' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', href: '#', color: 'hover:bg-blue-700' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', href: '#', color: 'hover:bg-green-500' }
  ];

  const handleSubmit = async (data: ContactFormData) => {
    // Form submission logic here
    console.log('Form submitted:', data);
    // You can add API call here to send the form data to your backend
  };

  return (
    <Section className="bg-white dark:bg-blacksection transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-meta/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <SectionHeader
          subtitle="Contact Us"
          title="Let's Start a Conversation"
          description="Have questions, ideas, or want to get involved? We'd love to hear from you. Reach out and let's explore how we can work together to create positive change."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-700 dark:text-waterloo text-lg leading-relaxed mb-8">
                Whether you&apos;re interested in volunteering, partnering with us, or simply want to learn more about our mission, 
                we&apos;re here to listen and help. Every conversation is a step toward building stronger communities.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-blackho border border-gray-200 dark:border-strokedark rounded-xl hover:shadow-solid-5 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 bg-white dark:bg-blacksection rounded-lg flex items-center justify-center ${info.color} shadow-sm`}>
                    <i className={`${info.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-700 dark:text-waterloo">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Follow Our Journey
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-200 dark:bg-blackho rounded-full flex items-center justify-center text-gray-600 dark:text-waterloo transition-all duration-300 hover:text-white hover:shadow-solid-5 ${social.color}`}
                    title={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-50 dark:bg-blackho border border-gray-200 dark:border-strokedark rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h3>

            <ContactForm onSubmit={handleSubmit} />
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Find Us on the Map
            </h3>
            <p className="text-gray-700 dark:text-waterloo">
              Visit our office in Malindi, Kenya. We&apos;re always happy to welcome visitors and discuss our programs in person.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-blackho border border-gray-200 dark:border-strokedark rounded-2xl p-8 text-center">
            <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-meta/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map-marked-alt text-4xl text-primary mb-4"></i>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Interactive Map Coming Soon
                </h4>
                <p className="text-gray-700 dark:text-waterloo">
                  Malindi Complex Lamu Road, Malindi, Kenya
                </p>
                <motion.a
                  href="https://maps.google.com/?q=Malindi+Complex+Lamu+Road+Malindi+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:shadow-solid-5 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-external-link-alt"></i>
                  View on Google Maps
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactPage;
