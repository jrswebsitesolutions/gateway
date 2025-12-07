import { MapPin, Mail, Church, Youtube, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-amber-700 rounded-lg p-2">
                <Church className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Gateway Victory</h3>
                <p className="text-sm text-gray-400">Faith. Community. Purpose.</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A church community centered on Jesus Christ, committed to authentic faith and meaningful relationships.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/be-our-guest" className="text-gray-300 hover:text-white transition-colors">
                  Plan Your Visit
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="text-gray-300 hover:text-white transition-colors">
                  Ministries
                </Link>
              </li>
              <li>
                <Link to="/watch" className="text-gray-300 hover:text-white transition-colors">
                  Watch Online
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  1991 Woodview Drive SW<br />
                  Calgary, AB, Canada
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a
                  href="mailto:info@gatewayvictory.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@gatewayvictory.com
                </a>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-all">
                  <Youtube className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-all">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Gateway Victory Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
