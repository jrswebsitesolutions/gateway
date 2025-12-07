import { Heart, Sparkles, Sun, Users, ArrowRight, Shield, TrendingUp } from 'lucide-react';

export default function Values() {
  const values = [
    {
      icon: Heart,
      title: 'Pursuing Jesus',
      subtitle: 'Our Foundation',
      description: 'We exist to minister to Him and carry His presence.',
      details: 'Everything we do flows from our devotion to Jesus. We prioritize worship, prayer, and spending time in His presence. When we pursue Him above all else, everything else falls into place. Our desire is not just to do things for God, but to be with God—to know Him intimately and carry His presence wherever we go.'
    },
    {
      icon: Sparkles,
      title: "There's More",
      subtitle: 'Our Expectation',
      description: 'We believe God always has more love, grace, and growth for every person.',
      details: 'No matter where you are in your journey, God has more for you. More revelation, more growth, more healing, more breakthrough. We refuse to settle or become complacent. We believe in a God of abundance who delights in giving good gifts to His children. Our expectation is that every person who walks through our doors will encounter more of God than they\'ve ever experienced before.'
    },
    {
      icon: Sun,
      title: 'Loving Life',
      subtitle: 'Our Posture',
      description: 'We embrace the abundant life Jesus gives.',
      details: 'Jesus said He came to give us life—abundant, overflowing, and full. We reject the lie that following Jesus means a boring, restrictive life. Instead, we embrace the joy, freedom, and adventure that comes from walking with Him. We celebrate the goodness of God in every season and choose gratitude over complaint. Life is a gift, and we\'re determined to live it to the fullest.'
    },
    {
      icon: Heart,
      title: 'Loving People',
      subtitle: 'Our Character',
      description: 'We choose to believe the best and love boldly.',
      details: 'Love is not passive—it\'s active, intentional, and sometimes costly. We choose to believe the best about people, extend grace freely, and love without condition. We understand that hurt people hurt people, so we respond with compassion rather than judgment. Our goal is to create a community where people feel seen, known, valued, and loved—just as Jesus loves them.'
    },
    {
      icon: Users,
      title: 'Arms Open',
      subtitle: 'Our Welcome',
      description: 'Everyone needs Jesus, so we live ready to welcome people home.',
      details: 'Our doors are wide open to everyone—no matter your past, your questions, or where you are in your faith journey. We believe that the church should be a hospital for sinners, not a museum for saints. Like the father in the prodigal son story, we stand with arms open wide, ready to welcome anyone home. You belong here, and we can\'t wait to meet you.'
    },
    {
      icon: Shield,
      title: 'Faith-Filled',
      subtitle: 'Our Confidence',
      description: 'We trust God to overcome every obstacle.',
      details: 'Faith is the substance of things hoped for and the evidence of things not seen. We believe in a God who moves mountains, heals the sick, restores broken relationships, and does the impossible. When we face challenges, we don\'t shrink back—we step forward in faith, knowing that God is with us and for us. Our confidence is not in ourselves, but in the One who is faithful and true.'
    },
    {
      icon: TrendingUp,
      title: 'Aim High',
      subtitle: 'Our Standard',
      description: 'We strive for excellence in all areas of life and ministry.',
      details: 'We serve an excellent God, and we want everything we do to reflect His nature. This doesn\'t mean perfection—it means giving our best, growing continually, and refusing to settle for mediocrity. Whether it\'s our Sunday gatherings, our care for one another, or how we live our daily lives, we aim high. Excellence honors God and creates an environment where people can truly encounter Him.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[500px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Core Values
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            Seven pillars that guide everything we do
          </p>
          <p className="text-lg text-gray-300">
            These values shape our culture, inform our decisions, and define who we are as a church family.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="flex-1">
                    <div className={`bg-gradient-to-br ${isEven ? 'from-amber-600 to-orange-600' : 'from-gray-900 to-gray-800'} rounded-2xl p-8 text-white shadow-2xl`}>
                      <Icon className="h-16 w-16 mb-4" />
                      <p className="text-sm font-semibold uppercase tracking-wide mb-2 text-amber-200">
                        {value.subtitle}
                      </p>
                      <h2 className="text-4xl font-bold mb-4">{value.title}</h2>
                      <p className="text-xl italic">{value.description}</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-xl p-8">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {value.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Values in Action
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              These aren't just words on a page—they're the DNA of who we are. Every decision we make, every gathering we host, and every relationship we build is shaped by these seven pillars.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">In Worship</h3>
              <p className="text-amber-100">We create space to encounter God's presence and respond to His love.</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">In Community</h3>
              <p className="text-amber-100">We build authentic relationships where people can grow and belong.</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">In Mission</h3>
              <p className="text-amber-100">We live out the Gospel in our city, believing for transformation.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold mb-6">
              Come experience these values in action.
            </p>
            <a
              href="/sundays"
              className="inline-flex items-center bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Visit This Sunday
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
