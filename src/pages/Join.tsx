import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, ArrowRight, MessageCircle, Users, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Join: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Submit form
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      // Reset form
      setFormData({ name: '', email: '', role: '', message: '' });
      setStep(1);
    }
  };

  const faqs = [
    {
          question: "Who can join SAV WOMEN?",
    answer: "SAV WOMEN is open to young women and girls who are committed to personal growth, leadership development, and community engagement. We welcome participants from all backgrounds and experience levels."
    },
    {
      question: "What does membership include?",
      answer: "Members get access to our private WhatsApp community, monthly virtual meetups, exclusive workshops, mentorship opportunities, resource library, and networking events."
    },
    {
      question: "Is there a membership fee?",
      answer: "Our core community membership is free. Some premium workshops and events may have a small fee to cover costs, but we offer scholarships to ensure accessibility."
    },
    {
      question: "How can I get involved as a mentor or volunteer?",
      answer: "We're always looking for experienced women to mentor our community members and volunteers to help with events and programs. Fill out the form above and select 'Mentor' or 'Volunteer' as your role."
    },
    {
      question: "What time commitment is expected?",
      answer: "Participation is flexible and self-directed. We recommend attending monthly community calls and engaging in the WhatsApp group, but you can participate at your own pace."
    },
    {
      question: "How do I stay updated on events and opportunities?",
      answer: "Once you join, you'll receive our weekly newsletter and be added to our WhatsApp community where we share real-time updates about events, opportunities, and resources."
    }
  ];

  const roles = [
    { value: 'participant', label: 'Community Member', description: 'Join as a participant in our programs' },
    { value: 'mentor', label: 'Mentor', description: 'Share your experience and guide others' },
    { value: 'volunteer', label: 'Volunteer', description: 'Help with events and community initiatives' },
    { value: 'partner', label: 'Partner/Collaborate', description: 'Explore partnership opportunities' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join <span className="text-green-800">SAV WOMEN</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Become part of a supportive community of empowered women committed to growth, 
              leadership, and making a positive impact.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Supportive Community</h3>
                <p className="text-gray-600 text-sm">
                  Connect with like-minded women on similar journeys of growth and empowerment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Mentorship & Guidance</h3>
                <p className="text-gray-600 text-sm">
                  Access experienced mentors and receive personalized guidance for your goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-green-800 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-gray-600 text-sm">
                  Participate in workshops, events, and programs designed for your development.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Multi-step Form */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-center">
                Join Our Community - Step {step} of 4
              </CardTitle>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div 
                  className="bg-green-800 h-2 rounded-full transition-all"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">What's your name?</h3>
                    <Input
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">What's your email address?</h3>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">How would you like to get involved?</h3>
                    <div className="space-y-3">
                      {roles.map((role) => (
                        <label key={role.value} className="flex items-start space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="role"
                            value={role.value}
                            checked={formData.role === role.value}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="mt-1"
                            required
                          />
                          <div>
                            <div className="font-medium">{role.label}</div>
                            <div className="text-sm text-gray-600">{role.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Tell us a bit about yourself</h3>
                    <Textarea
                      placeholder="What interests you most about joining SAV WOMEN? What are your goals or how would you like to contribute?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                )}

                <div className="flex justify-between">
                  {step > 1 && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setStep(step - 1)}
                    >
                      Previous
                    </Button>
                  )}
                  <Button 
                    type="submit" 
                    className="bg-green-800 hover:bg-green-900 ml-auto"
                  >
                    {step === 4 ? (
                      <>Submit Application <CheckCircle className="ml-2 h-4 w-4" /></>
                    ) : (
                      <>Next <ArrowRight className="ml-2 h-4 w-4" /></>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Join;