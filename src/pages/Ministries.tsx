import { Sparkles, BookOpen, Users, Heart, Calendar, MapPin, Video } from 'lucide-react';

export default function Ministries() {
  const ministries = [
    {
      icon: Sparkles,
      title: 'Tuesday Night Prayer',
      schedule: '2nd & 4th Tuesdays',
      location: 'In-Person + Zoom',
      color: 'from-amber-600 to-orange-600',
      description: 'Interceding for the church, city, nation, families, and revival.',
      details: [
        'A powerful time of corporate prayer and intercession',
        'Available both in-person and via Zoom for remote participation',
        'Praying for breakthrough in our church, families, and community',
        'Contending for revival and spiritual awakening',
        'Everyone welcome, regardless of prayer experience'
      ]
    },
    {
      icon: BookOpen,
      title: 'Bible Study',
      schedule: '1st & 3rd Tuesdays',
      location: 'Leadership Home',
      color: 'from-blue-600 to-cyan-600',
      description: 'Thoughtful, relational, Scripture-focused conversation.',
      details: [
        'Recent studies include the book of Ephesians',
        'Held in a welcoming home environment',
        'Atmosphere of authentic discussion and learning',
        'Dive deeper into God\'s Word together',
        'Build meaningful relationships while growing in knowledge'
      ]
    },
    {
      icon: Users,
      title: 'Youth & Young Adults',
      schedule: 'Weekly Gatherings',
      location: 'Various Locations',
      color: 'from-green-600 to-emerald-600',
      description: 'Weekly gatherings and events designed to grow, connect, and explore faith in practical ways.',
      details: [
        'Age-appropriate teaching and discipleship',
        'Fun activities and community building events',
        'Practical faith for everyday life',
        'Leadership development opportunities',
        'Safe space to ask questions and explore faith'
      ]
    },
    {
      icon: Heart,
      title: 'Worship Club',
      schedule: 'Saturdays',
      location: 'Leader\'s Home',
      color: 'from-pink-600 to-rose-600',
      description: 'Ages 10–16: Worship training, Bible learning, creativity, and community.',
      details: [
        'Learn to worship God authentically through music',
        'Develop musical and vocal skills',
        'Creative expression through worship arts',
        'Biblical foundation for worship and ministry',
        'Building friendships in a Christ-centered environment'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/8468545/pexels-photo-8468545.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ministries & Weekly Life
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Connect, grow, and serve together
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Find Your Place
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Gateway Victory is more than just Sunday services. Throughout the week, we gather in various ways to worship, pray, study Scripture, and build authentic community.
            </p>
            <p className="text-lg text-gray-600">
              Whether you're looking to deepen your relationship with God through prayer, grow in biblical knowledge, or connect with others your age, there's a place for you here.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-100 hover:shadow-2xl transition-shadow"
                >
                  <div className={`bg-gradient-to-r ${ministry.color} p-8 text-white`}>
                    <div className="flex items-start space-x-6">
                      <Icon className="h-16 w-16 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-2">{ministry.title}</h3>
                        <p className="text-lg mb-4 text-white text-opacity-90">
                          {ministry.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                            <Calendar className="h-5 w-5" />
                            <span className="font-semibold">{ministry.schedule}</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                            {ministry.location.includes('Zoom') ? (
                              <Video className="h-5 w-5" />
                            ) : (
                              <MapPin className="h-5 w-5" />
                            )}
                            <span className="font-semibold">{ministry.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-gray-50">
                    <ul className="space-y-3">
                      {ministry.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">{detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-16 w-16 text-amber-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Life Is Better Together
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              We believe that transformation happens in community. Whether you're just starting your faith journey or you've been walking with Jesus for years, there's a place for you to connect, grow, and serve.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Don't just attend church—become part of the family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Connected
              </a>
              <a
                href="/sundays"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Visit This Sunday
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
