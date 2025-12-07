import { useState, FormEvent } from 'react';
import { Calendar, MapPin, Users, Heart, CheckCircle, UserPlus, Baby } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function BeOurGuest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitDate: '',
    adultsCount: '1',
    kidsCount: '0',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('guest_visits')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            visit_date: formData.visitDate,
            adults_count: parseInt(formData.adultsCount),
            kids_count: parseInt(formData.kidsCount),
            special_requests: formData.specialRequests || null
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        visitDate: '',
        adultsCount: '1',
        kidsCount: '0',
        specialRequests: ''
      });
    } catch (error) {
      console.error('Error submitting visit request:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: MapPin,
      text: 'Reserve a parking spot for you up front'
    },
    {
      icon: Heart,
      text: 'Meet you at the Welcome Centre'
    },
    {
      icon: Users,
      text: 'Introduce you to new friends and show you around'
    },
    {
      icon: Baby,
      text: 'Get your kids registered in advance'
    },
    {
      icon: UserPlus,
      text: 'Introduce you to our lead pastor'
    }
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(30, 41, 59, 0.85), rgba(51, 65, 85, 0.85)), url(https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-block mb-8 px-6 py-2 bg-white bg-opacity-15 backdrop-blur-sm rounded-md border border-white border-opacity-20">
            <p className="text-white font-semibold tracking-wide">PLAN YOUR VISIT</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Our Church Family
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Making Your First Visit Comfortable
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We understand that visiting a new church can feel uncertain. Our goal is to create a welcoming environment where you feel at ease from the moment you arrive.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By planning your visit in advance, we can connect with you beforehand and ensure you have a friendly face waiting to greet you when you arrive.
              </p>
            </div>
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Two women hugging warmly"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-10 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              When You Plan Ahead, We Will:
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-md">
                    <div className="bg-slate-700 rounded-lg p-3 flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-gray-800 font-medium text-base leading-relaxed">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-10">
              <Calendar className="h-10 w-10 text-slate-700 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">
                Schedule Your Visit
              </h2>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-8 bg-green-50 border-2 border-green-600 rounded-lg p-6 flex items-start space-x-4">
                <CheckCircle className="h-7 w-7 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-green-900 text-lg mb-2">Thank You!</h4>
                  <p className="text-green-800 leading-relaxed">
                    We've received your information and look forward to welcoming you. You'll hear from us soon.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 bg-red-50 border-2 border-red-600 rounded-lg p-6">
                <p className="text-red-800 font-semibold">
                  Something went wrong. Please try again or contact us directly at info@gatewayvictory.com
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                  placeholder="First and last name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="visitDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  Planned Visit Date *
                </label>
                <input
                  type="date"
                  id="visitDate"
                  required
                  value={formData.visitDate}
                  onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="adultsCount" className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Adults
                  </label>
                  <select
                    id="adultsCount"
                    value={formData.adultsCount}
                    onChange={(e) => setFormData({ ...formData, adultsCount: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="kidsCount" className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Children
                  </label>
                  <select
                    id="kidsCount"
                    value={formData.kidsCount}
                    onChange={(e) => setFormData({ ...formData, kidsCount: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                  >
                    {[0, 1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-700 mb-2">
                  Questions or Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  rows={4}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent resize-none"
                  placeholder="Let us know if there's anything we can do to make your visit more comfortable"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-800 hover:bg-slate-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-all shadow-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Visit Request'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-700 via-amber-800 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            We Look Forward to Meeting You
          </h2>
          <p className="text-xl mb-8 text-gray-100 leading-relaxed">
            Thank you for taking the time to plan your visit with us.
          </p>
          <p className="text-lg text-gray-200">
            Questions? Contact us at{' '}
            <a href="mailto:info@gatewayvictory.com" className="underline font-semibold hover:text-white">
              info@gatewayvictory.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
