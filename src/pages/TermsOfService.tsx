import React from 'react';
import { ArrowLeft, FileText, Shield, Users, AlertCircle, Gavel } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-femsa-primary">
      {/* Header */}
      <div className="bg-femsa-surface border-b border-femsa-border-subtle">
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
        <div className="glass-card border border-femsa-border-subtle rounded-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-amber-500" />
              </div>
            </div>
            <h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Syne' }}
            >
              Terms of Service
            </h1>
            <p className="text-femsa-secondary text-lg">
              These terms govern your use of FEMSA Group Limited's services and website.
            </p>
            <p className="text-femsa-muted text-sm mt-2">
              Last updated: January 15, 2025
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Gavel className="w-5 h-5 text-amber-500" />
                <h2 
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: 'Syne' }}
                >
                  Acceptance of Terms
                </h2>
              </div>
              <div className="space-y-4 text-femsa-secondary">
                <p>
                  By accessing and using FEMSA Group Limited's website and services, you accept and agree 
                  to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>
            </section>

            {/* Services Description */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-amber-500" />
                <h2 
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: 'Syne' }}
                >
                  Services Description
                </h2>
              </div>
              <div className="space-y-4 text-femsa-secondary">
                <p>
                  FEMSA Group Limited provides the following services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Professional Global Trading solutions</li>
                  <li>Strategic Business Consulting</li>
                  <li>Financial Advisory Services</li>
                  <li>Supply Chain Management</li>
                  <li>Market Expansion Solutions</li>
                  <li>Risk Management and Compliance</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any service at any time without notice.
                </p>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-amber-500" />
                <h2 
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: 'Syne' }}
                >
                  User Responsibilities
                </h2>
              </div>
              <div className="space-y-4 text-femsa-secondary">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Keep your account credentials secure</li>
                  <li>Use our services for lawful purposes only</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Respect intellectual property rights</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-amber-500" />
                <h2 
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: 'Syne' }}
                >
                  Intellectual Property
                </h2>
              </div>
              <div className="space-y-4 text-femsa-secondary">
                <p>
                  All content, trademarks, service marks, logos, and intellectual property on our website 
                  and services are the exclusive property of FEMSA Group Limited.
                </p>
                <p>
                  You may not use, reproduce, or distribute our intellectual property without our prior 
                  written consent.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <h2 
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: 'Syne' }}
                >
                  Limitation of Liability
                </h2>
              </div>
              <div className="space-y-4 text-femsa-secondary">
                <p>
                  To the maximum extent permitted by law, FEMSA Group Limited shall not be liable for any 
                  indirect, incidental, special, or consequential damages arising from your use of our services.
                </p>
                <p>
                  Our total liability for any claims arising from or relating to our services shall not 
                  exceed the amount paid by you for the services in the preceding twelve (12) months.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: 'Syne' }}
              >
                Termination
              </h2>
              <div className="space-y-4 text-femsa-secondary">
                <p>
                  We may terminate or suspend your access to our services immediately, without prior notice 
                  or liability, for any reason, including if you breach the Terms of Service.
                </p>
                <p>
                  Upon termination, your right to use the services will cease immediately.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: 'Syne' }}
              >
                Governing Law
              </h2>
              <div className="space-y-4 text-femsa-secondary">
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws 
                  of the United Republic of Tanzania, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from these terms shall be resolved through arbitration in Dar es Salaam, Tanzania.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: 'Syne' }}
              >
                Changes to Terms
              </h2>
              <div className="space-y-4 text-femsa-secondary">
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will be 
                  effective immediately upon posting on our website. Your continued use of our services 
                  constitutes acceptance of the modified terms.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: 'Syne' }}
              >
                Contact Us
              </h2>
              <div className="space-y-4 text-femsa-secondary">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-femsa-surface border border-femsa-border-subtle rounded-xl p-6">
                  <ul className="space-y-2">
                    <li><strong>Email:</strong> legal@femsagroup.com</li>
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

export default TermsOfService;
