import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Sparkles, Heart, Users, Target } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Newsletter signup:', { name, email });
    setName('');
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <div className="w-full bg-gradient-to-br from-neutral-900 via-green-900 to-green-800 text-white relative overflow-hidden py-16 sm:py-24 md:py-32">
      {/* Enhanced background decorative elements - optimized for mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        {/* Optimized animated elements */}
        <div className="absolute top-3/4 right-1/4 w-4 sm:w-6 h-4 sm:h-6 bg-emerald-400/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-2/3 w-6 sm:w-8 h-6 sm:h-8 bg-teal-400/20 rounded-full animate-float-slow"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-neutral-200 px-4 py-2 rounded-lg mb-6 shadow-sm hover:shadow-md transition-all duration-500">
            <Mail className="w-4 h-4 text-green-800" />
            <span className="text-xs font-medium text-neutral-800 tracking-wide uppercase">Stay Connected</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-4 sm:mb-6 leading-tight">
            Join Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-300">
              Community
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed text-neutral-300">
            Get the latest updates, <span className="text-white font-medium">success stories</span>, and{' '}
            <span className="text-white font-medium">opportunities</span> delivered to your inbox.
            Be part of the movement that's <span className="text-white font-medium">empowering women</span> worldwide.
          </p>
        </div>

        {/* Stats Section - mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 sm:mb-10">
          <div className="group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-4 
              border border-white/10 transform transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Users className="w-8 h-8 text-white/80 mx-auto mb-3 transform transition-transform duration-500" />
              <div className="text-2xl font-bold font-playfair text-white mb-1 relative z-10">500+</div>
              <div className="text-neutral-400 text-xs font-medium tracking-wide uppercase relative z-10">Active Members</div>
            </div>
          </div>
          
          <div className="group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-4 
              border border-white/10 transform transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Target className="w-8 h-8 text-white/80 mx-auto mb-3 transform transition-transform duration-500" />
              <div className="text-2xl font-bold font-playfair text-white mb-1 relative z-10">50+</div>
              <div className="text-neutral-400 text-xs font-medium tracking-wide uppercase relative z-10">Programs Launched</div>
            </div>
          </div>
          
          <div className="group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-4 
              border border-white/10 transform transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Heart className="w-8 h-8 text-white/80 mx-auto mb-3 transform transition-transform duration-500" />
              <div className="text-2xl font-bold font-playfair text-white mb-1 relative z-10">25+</div>
              <div className="text-neutral-400 text-xs font-medium tracking-wide uppercase relative z-10">Communities Built</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 
            border border-white/10 shadow-md transform transition-all duration-500 group">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="relative group">
                <div className="relative">
                  <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 bg-white/90 text-neutral-900 border-0 rounded-md h-12 sm:h-10 text-base sm:text-sm placeholder:text-neutral-500 
                      focus:ring-1 focus:ring-green-600 shadow-sm transition-all duration-500 group-hover:shadow-md w-full"
                    required
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/90 text-neutral-900 border-0 rounded-md h-12 sm:h-10 text-base sm:text-sm placeholder:text-neutral-500 
                      focus:ring-1 focus:ring-green-600 shadow-sm transition-all duration-500 group-hover:shadow-md w-full"
                    required
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white hover:bg-neutral-100 text-green-800 font-medium text-base sm:text-sm 
                py-4 sm:py-5 rounded-md shadow-sm hover:shadow-md transition-all duration-500 
                hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed group tracking-wide"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-4 h-4 border-2 border-green-800 border-t-transparent rounded-full animate-spin"></div>
                  <span>Subscribing...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 justify-center">
                  <Sparkles className="w-4 h-4" />
                  <span>Subscribe to Our Newsletter</span>
                </div>
              )}
            </Button>
          </div>
        </form>

        <p className="text-sm text-neutral-400 mt-6">
          We respect your privacy. <span className="text-white font-medium">Unsubscribe at any time</span>.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;