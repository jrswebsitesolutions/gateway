import { Youtube, Clock, Bell, Play, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Watch() {
  return (
    <div className="min-h-screen">
      <section
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <Youtube className="h-20 w-20 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Watch Online
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Join us live or watch past messages anytime
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl shadow-2xl p-8 text-white mb-12">
            <div className="flex items-center justify-center mb-6">
              <Clock className="h-12 w-12 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">Sunday Service — 10:30 AM</h2>
            </div>
            <p className="text-center text-xl text-amber-100 mb-8">
              Live stream available every Sunday on YouTube
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 mb-12 text-center">
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center text-white">
                <Play className="h-24 w-24 mx-auto mb-4 text-amber-500" />
                <p className="text-xl">YouTube Livestream Embed</p>
                <p className="text-gray-400 mt-2">Connect your YouTube channel to display live services here</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              To embed your YouTube livestream, replace this placeholder with your YouTube channel's embed code
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Youtube className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Watch Live</h3>
              <p className="text-gray-700 mb-4">
                Join us every Sunday at 10:30 AM for live worship and teaching
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Play className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rewatch Messages</h3>
              <p className="text-gray-700 mb-4">
                Missed a service? All messages are archived and available anytime
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Bell className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Subscribe for Updates</h3>
              <p className="text-gray-700 mb-4">
                Get notified when we go live and never miss a service
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Watch Online?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Can't Make It In Person</h4>
                  <p className="text-gray-700">Watch from home when you're traveling, sick, or unable to attend in person.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Checking Us Out</h4>
                  <p className="text-gray-700">Get a feel for Gateway Victory before visiting in person.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Rewatch Messages</h4>
                  <p className="text-gray-700">Go back and listen to a message again to dig deeper.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Share With Others</h4>
                  <p className="text-gray-700">Send messages to friends and family who might benefit from hearing the Gospel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            We'd Love to Meet You In Person
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            While we're glad you can watch online, nothing beats the experience of worshiping together in person. We'd love to welcome you to our community!
          </p>
          <Link
            to="/sundays"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
