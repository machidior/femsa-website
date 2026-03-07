import React from 'react';
import { ArrowLeft, Shield, Eye, Cookie, Database, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-amber-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-lg">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Last updated: January 15, 2025
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Information We Collect */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-5 h-5 text-amber-500" />
                <h2 className="text-2xl font-bold text-white">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fill out our contact forms or request consultations</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Create an account on our platform</li>
                  <li>Apply for jobs or partnerships</li>
                </ul>
                <p>
                  This information may include your name, email address, phone number, company name, and other relevant details.
                </p>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-amber-500" />
                <h2 className="text-2xl font-bold text-white">
                  How We Use Your Information
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide our services and respond to your inquiries</li>
                  <li>Personalize your experience and improve our offerings</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Analyze website usage and improve our services</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-5 h-5 text-amber-500" />
                <h2 className="text-2xl font-bold text-white">
                  Cookies and Tracking
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  You can control cookie settings through our cookie consent banner.
                </p>
                <p>
                  Types of cookies we use:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Functional Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Marketing Cookies:</strong> Used for personalized advertising and marketing</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-amber-500" />
                <h2 className="text-2xl font-bold text-white">
                  Data Security
                </h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  These measures include encryption, secure servers, and regular security assessments. 
                  However, no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Your Rights
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and know what personal data we have about you</li>
                  <li>Request correction of inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Us
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  If you have any questions about this Privacy Policy or how we handle your data, 
                  please contact us:
                </p>
                <div className="bg-slate-700 border border-slate-600 rounded-xl p-6">
                  <ul className="space-y-2">
                    <li><strong>Email:</strong> privacy@femsagroup.com</li>
                    <li><strong>Phone:</strong> +255 761 351 371</li>
                    <li><strong>Address:</strong> P.O.Box 40310, Dar es Salaam, Tanzania</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
