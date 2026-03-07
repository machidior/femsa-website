import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown, 
  ArrowRight, 
  Loader2, 
  Check, 
  Linkedin, 
  Twitter, 
  Instagram,
  Facebook,
  Clock,
  Calendar,
  Send,
  Globe,
  Building2,
  Users,
  MessageSquare,
  FileText,
  Shield,
  Zap
} from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  companySize: string;
  serviceOfInterest: string;
  preferredDate: string;
  hearAboutUs: string;
  businessChallenge: string;
  privacyAccepted: boolean;
}

interface Office {
  id: number;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: { lat: number; lng: number };
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  expertise: string;
  avatar: string;
  availability: 'available' | 'busy' | 'offline';
}

const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'consultation' | 'message'>('consultation');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    companySize: '',
    serviceOfInterest: '',
    preferredDate: '',
    hearAboutUs: '',
    businessChallenge: '',
    privacyAccepted: false
  });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const offices: Office[] = [
    {
      id: 1,
      city: 'Lagos',
      country: 'Nigeria',
      address: 'Victoria Island, Lagos 101241',
      phone: '+234 (0) 800 FEMSA',
      email: 'lagos@femsagroup.com',
      hours: 'Mon–Fri: 8AM–6PM WAT',
      coordinates: { lat: 6.4531, lng: 3.3958 }
    },
    {
      id: 2,
      city: 'Nairobi',
      country: 'Kenya',
      address: 'Westlands, Nairobi 00800',
      phone: '+254 (0) 800 FEMSA',
      email: 'nairobi@femsagroup.com',
      hours: 'Mon–Fri: 8AM–6PM EAT',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 3,
      city: 'Johannesburg',
      country: 'South Africa',
      address: 'Sandton, Johannesburg 2196',
      phone: '+27 (0) 800 FEMSA',
      email: 'johannesburg@femsagroup.com',
      hours: 'Mon–Fri: 8AM–6PM SAST',
      coordinates: { lat: -26.2041, lng: 28.0473 }
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Sarah Chen',
      position: 'Senior Business Consultant',
      expertise: 'Strategic Planning & Market Entry',
      avatar: 'SC',
      availability: 'available'
    },
    {
      id: 2,
      name: 'Michael Okonkwo',
      position: 'Financial Advisory Lead',
      expertise: 'Capital Raising & Investment Strategy',
      avatar: 'MO',
      availability: 'available'
    },
    {
      id: 3,
      name: 'Amara Diallo',
      position: 'Supply Chain Expert',
      expertise: 'Logistics Optimization & Operations',
      avatar: 'AD',
      availability: 'busy'
    },
    {
      id: 4,
      name: 'Jean-Pierre Dubois',
      position: 'International Trade Specialist',
      expertise: 'Global Markets & Compliance',
      avatar: 'JD',
      availability: 'available'
    }
  ];

  const services = [
    'Business Consulting',
    'Financial Advisory',
    'Supply Chain Optimization',
    'International Trade',
    'Market Entry Strategy',
    'Risk Management',
    'Digital Transformation',
    'Other'
  ];

  const companySizes = [
    'Startup (1-10 employees)',
    'Small (11-50 employees)',
    'Medium (51-200 employees)',
    'Large (201-1000 employees)',
    'Enterprise (1000+ employees)'
  ];

  const hearAboutOptions = [
    'Referral from partner/client',
    'Google search',
    'Social media',
    'Industry publication',
    'Conference/Event',
    'Advertisement',
    'Other'
  ];

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

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!emailPattern.test(formData.email)) errors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.company.trim()) errors.company = 'Company name is required';
    if (!formData.serviceOfInterest) errors.serviceOfInterest = 'Please select a service of interest';
    if (!formData.privacyAccepted) errors.privacyAccepted = 'You must accept the privacy policy';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        companySize: '',
        serviceOfInterest: '',
        preferredDate: '',
        hearAboutUs: '',
        businessChallenge: '',
        privacyAccepted: false
      });
      setFormErrors({});
    }, 5000);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'bg-green-500';
      case 'busy': return 'bg-orange-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center px-4 py-2 bg-orange-50 rounded-full mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <MessageSquare className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-semibold text-orange-700 tracking-wide uppercase">Get In Touch</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.1s' }}>
            Let's Build Your
            <span className="text-orange-500"> Success Story</span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.2s' }}>
            Ready to transform your business? Our expert team is here to help you achieve your goals.
          </p>
        </div>

        {/* Contact Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab('consultation')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'consultation' 
                  ? 'bg-white text-orange-600 shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Schedule Consultation
            </button>
            <button
              onClick={() => setActiveTab('message')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'message' 
                  ? 'bg-white text-orange-600 shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Send Message
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div className={`lg:col-span-1 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '0.3s' }}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a href="mailto:hello@femsagroup.com" className="text-orange-600 hover:text-orange-700 transition-colors duration-300">
                      hello@femsagroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <a href="tel:+2340800FEMSA" className="text-orange-600 hover:text-orange-700 transition-colors duration-300">
                      +234 (0) 800 FEMSA
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Business Hours</div>
                    <div className="text-gray-600">Mon–Fri: 8AM–6PM WAT</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Response Time</div>
                    <div className="text-gray-600">Under 4 hours on business days</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="font-semibold text-gray-900 mb-4">Connect With Us</div>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Form */}
          <div className={`lg:col-span-1 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {activeTab === 'consultation' ? 'Schedule Consultation' : 'Send Message'}
              </h3>
              
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">
                    {activeTab === 'consultation' 
                      ? 'We\'ll contact you within 24 hours to schedule your consultation.'
                      : 'Your message has been received. We\'ll respond within 24 hours.'
                    }
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300 ${
                          formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="John"
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300 ${
                          formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Doe"
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300 ${
                          formErrors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="john.doe@company.com"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300 ${
                          formErrors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+234 (0) 800 0000"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Company Fields */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300 ${
                        formErrors.company ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Company Name"
                    />
                    {formErrors.company && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.company}</p>
                    )}
                  </div>

                  {/* Position & Company Size */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                      <input
                        type="text"
                        value={formData.position}
                        onChange={(e) => handleInputChange('position', e.target.value)}
                        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300 border-gray-300"
                        placeholder="Your Position"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                      <select
                        value={formData.companySize}
                        onChange={(e) => handleInputChange('companySize', e.target.value)}
                        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300 border-gray-300"
                      >
                        <option value="">Select company size</option>
                        {companySizes.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Service & Date */}
                  {activeTab === 'consultation' && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Service of Interest *</label>
                          <select
                            value={formData.serviceOfInterest}
                            onChange={(e) => handleInputChange('serviceOfInterest', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300 ${
                              formErrors.serviceOfInterest ? 'border-red-500' : 'border-gray-300'
                            }`}
                          >
                            <option value="">Select a service</option>
                            {services.map(service => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </select>
                          {formErrors.serviceOfInterest && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.serviceOfInterest}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                          <input
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300 border-gray-300"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Additional Fields for Message Tab */}
                  {activeTab === 'message' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                        <select
                          value={formData.hearAboutUs}
                          onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
                          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300 border-gray-300"
                        >
                          <option value="">Select an option</option>
                          {hearAboutOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Business Challenge</label>
                        <textarea
                          value={formData.businessChallenge}
                          onChange={(e) => handleInputChange('businessChallenge', e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors duration-300 border-gray-300 resize-none"
                          placeholder="Tell us about your business challenges..."
                        />
                      </div>
                    </>
                  )}

                  {/* Privacy Acceptance */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={formData.privacyAccepted}
                      onChange={(e) => handleInputChange('privacyAccepted', e.target.checked)}
                      className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-2 focus:ring-orange-200"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-700 cursor-pointer">
                      I accept the <a href="#" className="text-orange-600 hover:text-orange-700 underline">Privacy Policy</a> and <a href="#" className="text-orange-600 hover:text-orange-700 underline">Terms of Service</a> *
                    </label>
                    {formErrors.privacyAccepted && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.privacyAccepted}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  {!submitSuccess && (
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>{activeTab === 'consultation' ? 'Schedule Consultation' : 'Send Message'}</span>
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Right Column - Team & Offices */}
          <div className={`lg:col-span-1 space-y-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '0.5s' }}>
            {/* Team Availability */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Expert Team Available</h3>
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={member.id} className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center text-gray-600 font-bold">
                        {member.avatar}
                      </div>
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${getAvailabilityColor(member.availability)} ${
                        member.availability === 'available' ? 'animate-pulse' : ''
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-600">{member.position}</div>
                      <div className="text-xs text-orange-500 font-medium">{member.expertise}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      member.availability === 'available' ? 'bg-green-100 text-green-700' :
                      member.availability === 'busy' ? 'bg-orange-100 text-orange-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {member.availability}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`lg:col-span-3 text-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Take the first step towards transforming your business. Our team is ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Call</span>
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all duration-300">
                  <FileText className="w-5 h-5 mr-2" />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
