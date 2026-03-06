import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Clock, Send, CheckCircle2, Globe, Users, Building2, Award, Target, TrendingUp, Star, Lightbulb, Heart, Handshake, FileText, Shield, Zap, ArrowUpRight, Briefcase, BarChart3, Brain, Rocket, MessageSquare, Calendar, Car, Plane, Wifi, Coffee, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+255 761 351 371'],
      description: 'Mon-Fri 8AM-6PM EAT'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@myfemsa.com'],
      description: '24/7 Response Time'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Headquarters',
      details: ['P.O.Box 40310', 'Dar es Salaam'],
      description: 'Tanzania'
    }
  ];

  const offices = [
    {
      city: 'Dar es Salaam',
      country: 'Tanzania',
      address: 'Kijitonyama Street, City Centre',
      phone: '+255 22 123 456',
      email: 'darensalaam@femsagroup.com',
      services: ['Raw Materials & Packaging', 'Equipment & Machinery'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Mwanza',
      country: 'Tanzania',
      address: 'Industrial Area, Mwanza',
      phone: '+255 22 234 5678',
      email: 'mwanza@femsagroup.com',
      services: ['Equipment & Machinery', 'Spare Parts & Components'],
      image: 'https://images.unsplash.com/photo-1548919175-b36afe8db5a8?auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Arusha',
      country: 'Tanzania',
      address: 'Njiro Road, Arusha',
      phone: '+255 27 123 4567',
      email: 'arusha@femsagroup.com',
      services: ['Raw Materials & Packaging', 'Spare Parts & Components'],
      image: 'https://images.unsplash.com/photo-1524678601617-cb3922573b4f?auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Zanzibar',
      country: 'Tanzania',
      address: 'Stone Town, Zanzibar',
      phone: '+255 24 123 4567',
      email: 'zanzibar@femsagroup.com',
      services: ['Consumables & Plant Supplies', 'Equipment & Machinery'],
      image: 'https://images.unsplash.com/photo-1542051842858-3b271f6075f5?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const services = [
    'Raw Materials & Packaging',
    'Equipment & Machinery',
    'Spare Parts & Components',
    'Consumables & Plant Supplies'
  ];

  const budgets = [
    'Under TSh 100K',
    'TSh 100K - TSh 500K',
    'TSh 500K - TSh 1M',
    'TSh 1M - TSh 5M',
    'TSh 5M - TSh 10M',
    'Over TSh 10M'
  ];

  const timelines = [
    'ASAP',
    '1-3 days',
    '1-2 weeks',
    '2-4 weeks',
    '1-3 months'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 3000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      {/* Enhanced Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80')"
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full mb-6 transition-all duration-700 opacity-100 translate-y-0`}>
              <MessageSquare className="w-4 h-4 text-blue-300 mr-2" />
              <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 opacity-100 translate-y-0">
              Let's Transform
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                {" "}Your Business
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-700 opacity-100 translate-y-0">
              Connect with our expert team to discuss how we can help you achieve your business goals 
              through our integrated solutions and global expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 opacity-100 translate-y-0">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25">
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-blue-100 transition-all duration-700 opacity-100 translate-y-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Trusted Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white mb-6 group-hover:scale-110 transition-all duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-700 font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us about your project and we'll connect you with the right expert team
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Thank You!</h3>
                  <p className="text-green-700 mb-6">
                    Your message has been received successfully. Our team will get back to you within 24 hours.
                  </p>
                  <p className="text-green-600 text-sm">
                    Redirecting back to form...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Acme Corporation"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+254 700 123 456"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Service Interest *
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Project Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, and challenges..."
                    />
                  </div>

                  <div className="mb-6">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        required
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        I agree to the privacy policy and terms of service
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium text-gray-900">+255 761 351 371</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">info@myfemsa.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Business Hours</p>
                      <p className="font-medium text-gray-900">Mon-Fri 8AM-6PM EAT</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose FEMSA?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">15+ Years Experience</p>
                      <p className="text-sm text-gray-600">Proven track record of success</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">5000+ Global Clients</p>
                      <p className="text-sm text-gray-600">Trusted by industry leaders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">24/7 Support</p>
                      <p className="text-sm text-gray-600">Always here when you need us</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Custom Solutions</p>
                      <p className="text-sm text-gray-600">Tailored to your specific needs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Support</h3>
                <p className="text-gray-700 mb-4">
                  For urgent matters, our emergency support team is available 24/7.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Emergency Hotline</p>
                    <p className="font-bold text-orange-600">+255 761 999 999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Tanzania Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at our strategic locations across Tanzania
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={office.image} 
                      alt={office.city}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{office.city}</h3>
                      <p className="text-blue-100">{office.country}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{office.email}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">Services Available:</p>
                      <div className="flex flex-wrap gap-2">
                        {office.services.map((service, serviceIndex) => (
                          <span key={serviceIndex} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-lg">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How quickly can you start a project?</h3>
              <p className="text-gray-600">We typically begin projects within 1-2 weeks of signing, depending on project complexity and resource availability.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What industries do you serve?</h3>
              <p className="text-gray-600">We work across all major industries including manufacturing, technology, finance, healthcare, and retail.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do you offer ongoing support?</h3>
              <p className="text-gray-600">Yes, we provide comprehensive post-project support and maintenance packages tailored to your needs.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What's your pricing structure?</h3>
              <p className="text-gray-600">We offer flexible pricing models including fixed-price, time & materials, and retainer-based arrangements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Take the first step towards transforming your business with our expert solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/25">
              <Phone className="w-5 h-5" />
              <span>Schedule Consultation</span>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Book Meeting</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
