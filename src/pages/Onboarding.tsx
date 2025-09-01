import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OnboardingStep = ({ children, isActive }: { children: React.ReactNode; isActive: boolean }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: [] as string[],
    goals: '',
    experience: '',
    referral: '',
  });

  const totalSteps = 4;

  const interests = [
    'Leadership Development',
    'Mentorship',
    'Networking',
    'Career Growth',
    'Personal Development',
    'Community Building',
    'Social Impact',
    'Entrepreneurship'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend
    console.log('Form submitted:', formData);
    setStep(totalSteps);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-green-50/30 py-20">
      <div className="max-w-2xl mx-auto px-4">
        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  i + 1 <= step ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {i + 1 <= step ? <CheckCircle className="w-5 h-5" /> : i + 1}
              </div>
            ))}
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-green-600 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <OnboardingStep isActive={step === 1}>
              <h2 className="text-2xl font-bold text-gray-900">Welcome to SAV WOMEN! 👋</h2>
              <p className="text-gray-600">Let's start with the basics</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What's your name?
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
            </OnboardingStep>

            <OnboardingStep isActive={step === 2}>
              <h2 className="text-2xl font-bold text-gray-900">Your Interests</h2>
              <p className="text-gray-600">Select all that apply to you</p>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      formData.interests.includes(interest)
                        ? 'bg-green-100 text-green-800 border-2 border-green-500'
                        : 'bg-gray-50 text-gray-600 border-2 border-gray-200 hover:border-green-300'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </OnboardingStep>

            <OnboardingStep isActive={step === 3}>
              <h2 className="text-2xl font-bold text-gray-900">Your Goals</h2>
              <p className="text-gray-600">Help us understand what you're looking to achieve</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What are your main goals in joining SAV WOMEN?
                  </label>
                  <Textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    placeholder="Share your aspirations and what you hope to achieve..."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your experience
                  </label>
                  <Textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Brief background about your journey so far..."
                    required
                  />
                </div>
              </div>
            </OnboardingStep>

            <OnboardingStep isActive={step === 4}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">You're All Set!</h2>
                <p className="text-gray-600">
                  Welcome to the SAV WOMEN community! We're excited to have you join us.
                  You'll receive a welcome email shortly with next steps.
                </p>
              </div>
            </OnboardingStep>

            <div className="flex justify-between mt-8 pt-4 border-t">
              {step > 1 && step < totalSteps && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              )}
              {step < totalSteps - 1 && (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 ml-auto"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
              {step === totalSteps - 1 && (
                <Button
                  type="submit"
                  className="flex items-center gap-2 ml-auto bg-green-600 hover:bg-green-700"
                >
                  Complete
                  <CheckCircle className="w-4 h-4" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
