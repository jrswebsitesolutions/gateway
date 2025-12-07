import { Clock, MapPin, Coffee, Heart, Music, MessageCircle, Users, Baby, User, Car, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sundays() {
  const steps = [
    {
      icon: Car,
      title: 'Arrive & Park',
      description: 'Plenty of parking available. Arrive a few minutes early to get settled and grab a coffee.'
    },
    {
      icon: Users,
      title: 'Check In',
      description: 'Our welcome team will greet you at the door. If you have kids, we\'ll help you check them into their age-appropriate ministry.'
    },
    {
      icon: Coffee,
      title: 'Get Comfortable',
      description: 'Grab a coffee or snack, find a seat, and get ready to experience authentic worship and teaching.'
    },
    {
      icon: Heart,
      title: 'Connect',
      description: 'After service, stick around for coffee and conversation. We\'d love to get to know you better!'
    }
  ];

  const faqs = [
    {
      question: 'What should I wear?',
      answer: 'Come as you are! We have no dress code. Some people dress casually, others dress up—whatever makes you comfortable.'
    },
    {
      question: 'How long is the service?',
      answer: 'Our Sunday service is about 2 hours, including worship, teaching, and prayer ministry. You\'re welcome to stay for coffee and fellowship afterwards.'
    },
    {
      question: 'What about my kids?',
      answer: 'We have a nursery for ages 2 and under, and kids ministry for ages 3-10 who go downstairs after worship. Your kids will be safe, cared for, and taught age-appropriate biblical truths.'
    },
    {
      question: 'Is there parking?',
      answer: 'Yes! We have plenty of parking available on-site.'
    },
    {
      question: 'What if I\'m not a Christian?',
      answer: 'You are absolutely welcome! We believe everyone is on a journey, and we\'re honored to walk alongside you wherever you are in yours.'
    },
    {
      question: 'Can I watch online instead?',
      answer: 'Yes! We livestream every Sunday service on YouTube. However, we\'d love to meet you in person when you\'re ready.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/8468383/pexels-photo-8468383.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Plan Your Visit
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            We can't wait to meet you!
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-lg shadow-xl p-8">
              <Clock className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Sunday Service</h3>
              <p className="text-3xl font-bold mb-2">10:30 AM</p>
              <p className="text-amber-100">In-Person & Online</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl p-8">
              <MapPin className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Location</h3>
              <p className="text-xl mb-2">1991 Woodview Drive SW</p>
              <p className="text-gray-300">Calgary, AB, Canada</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What You'll Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <Music className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Uplifting Worship</h3>
                  <p className="text-gray-700">Contemporary worship that invites God's presence and prepares hearts for His Word.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Practical Messages</h3>
                  <p className="text-gray-700">Life-applicable teaching from Scripture that you can use in your everyday life.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Heart className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Prayer Ministry</h3>
                  <p className="text-gray-700">Optional end-of-service prayer for anyone seeking God's touch in their life.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Warm Community</h3>
                  <p className="text-gray-700">Friendly people who genuinely care and want to get to know you.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Coffee className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Coffee & Snacks</h3>
                  <p className="text-gray-700">Time to connect over refreshments after the service.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Casual Environment</h3>
                  <p className="text-gray-700">No dress code, no pressure—just come as you are and be yourself.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-2 border-amber-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Kids Ministry
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <User className="h-10 w-10 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ages 3–10</h3>
                  <p className="text-gray-700 mb-2">
                    Kids go downstairs after worship for age-appropriate teaching, games, and activities.
                  </p>
                  <p className="text-gray-700">
                    Our volunteers are caring, trained, and excited to help your kids learn about Jesus in fun, engaging ways.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Baby className="h-10 w-10 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nursery Available</h3>
                  <p className="text-gray-700 mb-2">
                    For ages 2 and under, we have a safe, clean nursery with caring volunteers.
                  </p>
                  <p className="text-gray-700">
                    We understand parents need peace of mind, and we take child safety seriously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Your First Visit: 4 Simple Steps
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 rounded-full p-3 flex-shrink-0">
                      <Icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <HelpCircle className="h-12 w-12 text-amber-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            We're here to help! Reach out and we'll answer any questions you have.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
