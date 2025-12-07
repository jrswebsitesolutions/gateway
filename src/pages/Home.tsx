import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, Sparkles, ArrowRight, MapPin, Clock, Youtube, Baby, User, Compass, Anchor } from 'lucide-react';
import heroImage from '../assets/gvc-12.webp';

export default function Home() {
  const ministries = [
    {
      icon: Sparkles,
      title: 'Prayer Ministry',
      description: 'Join us for corporate prayer every 2nd and 4th Tuesday evening, in-person or via Zoom.',
      gradient: 'from-slate-700 to-slate-600'
    },
    {
      icon: BookOpen,
      title: 'Bible Study',
      description: 'Explore Scripture together every 1st and 3rd Tuesday in a welcoming home setting.',
      gradient: 'from-amber-700 to-amber-600'
    },
    {
      icon: Users,
      title: 'Community Groups',
      description: 'Connect with others in meaningful fellowship throughout the week.',
      gradient: 'from-teal-800 to-teal-700'
    },
    {
      icon: Heart,
      title: 'Worship Ministry',
      description: 'Ages 10-16. Young people learning worship, music, and building lasting friendships.',
      gradient: 'from-blue-800 to-blue-700'
    }
  ];

  const values = [
    { title: 'Pursuing Jesus', icon: Compass },
    { title: "There's More", icon: Sparkles },
    { title: 'Loving Life', icon: Heart },
    { title: 'Loving People', icon: Users },
    { title: 'Arms Open', icon: Heart },
    { title: 'Faith-Filled', icon: Anchor },
    { title: 'Aim High', icon: ArrowRight }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.85), rgba(51, 65, 85, 0.85)), url(${heroImage})`,
          backgroundSize: '150%',
          backgroundPosition: 'center 30%',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="max-w-5xl mx-auto text-center px-4 py-20">
          <div className="inline-block mb-8 px-6 py-2 bg-white bg-opacity-15 backdrop-blur-sm rounded-md border border-white border-opacity-20">
            <p className="text-white font-semibold tracking-wide">WELCOME HOME</p>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-wide" style={{ fontFamily: "'Capitana', sans-serif", fontWeight: 800 }}>
            GATEWAY<br />VICTORY CHURCH
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed font-light">
            Creating a church together for life-changing God-encounters
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/be-our-guest"
              className="group bg-white text-slate-800 px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl inline-flex items-center justify-center"
            >
              Plan Your Visit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/sundays"
              className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center border-2 border-white"
            >
              Service Times
            </Link>
            <Link
              to="/watch"
              className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center border-2 border-white"
            >
              <Youtube className="mr-2 h-5 w-5" />
              Watch Online
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/8468426/pexels-photo-8468426.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community gathering"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block mb-6 px-5 py-2 bg-slate-700 text-white rounded-md text-sm font-semibold tracking-wide">
                WHO WE ARE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Arboria', sans-serif" }}>
                A Place to Belong
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We are a community centered on Jesus Christ, committed to authentic worship, meaningful relationships, and living out our faith with purpose and integrity.
              </p>
              <div className="space-y-5 mb-10">
                <div className="flex items-start space-x-4">
                  <Compass className="h-6 w-6 text-slate-700 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">Transformative encounters with God that reshape our lives</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">Genuine community built on care, trust, and mutual support</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Anchor className="h-6 w-6 text-teal-800 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">Faith grounded in Scripture and lived out every day</p>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-slate-800 hover:text-slate-600 font-semibold text-lg group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-5 py-2 bg-amber-700 text-white rounded-md text-sm font-semibold tracking-wide">
              SUNDAYS AT 10:30 AM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Arboria', sans-serif" }}>
              Join Us This Sunday
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gather with us for worship, teaching, and fellowship. Available in-person and online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-700 rounded-lg shadow-lg p-10 text-white">
              <Clock className="h-10 w-10 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Service Time</h3>
              <p className="text-3xl font-bold mb-3">10:30 AM</p>
              <p className="text-gray-200">Every Sunday morning, in-person or online</p>
            </div>

            <div className="bg-amber-700 rounded-lg shadow-lg p-10 text-white">
              <MapPin className="h-10 w-10 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Location</h3>
              <p className="text-xl font-semibold mb-2">1991 Woodview Drive SW</p>
              <p className="text-gray-100">Calgary, Alberta</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-10 md:p-12 text-white mb-10">
            <h3 className="text-2xl font-bold mb-10 text-center">What to Expect</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-lg mb-2">Spirit-Led Worship</p>
                  <p className="text-gray-300 leading-relaxed">Contemporary worship music that draws us into God's presence</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-lg mb-2">Biblical Teaching</p>
                  <p className="text-gray-300 leading-relaxed">Practical, Scripture-based messages relevant to daily life</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-lg mb-2">Prayer Ministry</p>
                  <p className="text-gray-300 leading-relaxed">Personal prayer available after each service</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-lg mb-2">Fellowship Time</p>
                  <p className="text-gray-300 leading-relaxed">Connect with others over coffee and conversation</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-gray-700">
              <h4 className="text-2xl font-bold mb-8">Children's Ministry</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <User className="h-7 w-7 text-amber-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg mb-2">Ages 3-10</p>
                    <p className="text-gray-300 leading-relaxed">Engaging, age-appropriate programs during the service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Baby className="h-7 w-7 text-teal-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg mb-2">Nursery (Ages 0-2)</p>
                    <p className="text-gray-300 leading-relaxed">Safe, caring environment with trained volunteers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/sundays"
              className="inline-block bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg"
            >
              Learn More About Sundays
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-5 py-2 bg-teal-800 text-white rounded-md text-sm font-semibold tracking-wide">
              CONNECT & GROW
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Arboria', sans-serif" }}>
              Ministries & Groups
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deepen your faith and build meaningful connections throughout the week
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
                  <div className={`w-14 h-14 bg-gradient-to-br ${ministry.gradient} rounded-lg flex items-center justify-center mb-6`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{ministry.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{ministry.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/ministries"
              className="inline-flex items-center text-slate-800 hover:text-slate-600 font-semibold text-lg group"
            >
              Explore All Ministries
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Arboria', sans-serif" }}>
              Our Core Values
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Seven foundational principles that guide our community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-opacity-15 transition-all">
                  <Icon className="h-8 w-8 mx-auto mb-4 text-amber-400" />
                  <h3 className="font-semibold text-sm leading-tight">{value.title}</h3>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/values"
              className="inline-block bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl"
            >
              Explore Our Values
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-700 via-amber-800 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Arboria', sans-serif" }}>
            We'd Love to Meet You
          </h2>
          <p className="text-xl mb-10 text-gray-100 leading-relaxed">
            Take the next step and join us this Sunday. Your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/be-our-guest"
              className="bg-white text-slate-800 px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-2xl"
            >
              Plan Your Visit
            </Link>
            <Link
              to="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all border-2 border-white"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
