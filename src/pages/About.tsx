import { Heart, Users, Zap, Star, Target, Sparkles } from 'lucide-react';

export default function About() {
  const beliefs = [
    {
      icon: Zap,
      title: 'Real God Encounters',
      description: 'Not just church vibes—actual, life-changing moments with Jesus through worship, prayer, and His Word.'
    },
    {
      icon: TrendingUp,
      title: 'Always Growing',
      description: "We're all works in progress. Grow deeper with Jesus and level up as His disciple."
    },
    {
      icon: Heart,
      title: 'Love Without Limits',
      description: 'Choose to love boldly, believe the best, and extend grace like Jesus does.'
    },
    {
      icon: Users,
      title: 'Community That\'s Real',
      description: 'Authentic friendships where you can be yourself and actually belong.'
    },
    {
      icon: Star,
      title: 'Faith in Action',
      description: "It's not just what we believe—it's how we live. Be Jesus' hands and feet every day."
    },
    {
      icon: Sparkles,
      title: 'His Presence First',
      description: 'We create spaces where God shows up and people encounter Him personally.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(2, 89, 106, 0.95), rgba(6, 182, 212, 0.95)), url(https://images.pexels.com/photos/8468381/pexels-photo-8468381.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-block mb-6 px-6 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full">
            <p className="text-white font-bold">OUR STORY</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Who We Are
          </h1>
          <p className="text-2xl font-medium max-w-2xl mx-auto">
            A community obsessed with Jesus and passionate about life
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              The Real Deal
            </h2>
            <div className="space-y-8 text-xl text-gray-700 text-left leading-relaxed">
              <p>
                We're a church family that's all about Jesus. Not the boring, religious stuff—we're talking about genuine, life-transforming encounters with God that change everything.
              </p>
              <p>
                Whether you've been following Jesus your whole life or you're just starting to explore faith, you're welcome here. Seriously. No fake smiles, no judgment, just real people on a real journey with a real God.
              </p>
              <p>
                We believe everyone has a story, and we'd love to be part of yours. Come as you are—messy, curious, broken, searching—and watch God do His thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#02596A] to-cyan-500 text-white rounded-full text-sm font-bold">
              WHAT WE'RE ABOUT
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Core Beliefs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The things that shape how we live, love, and do church together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => {
              const Icon = belief.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <Icon className="h-14 w-14 text-[#02596A] mb-4" />
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{belief.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{belief.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#02596A] via-cyan-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-8">
              You Belong Here
            </h2>
            <div className="space-y-8 text-xl leading-relaxed">
              <p>
                At Gateway Victory, church isn't just a Sunday thing—it's a family thing. We're diverse, we're real, and we're united by our love for Jesus.
              </p>
              <p>
                Looking for hope? Healing? Purpose? A place to belong? You just found it.
              </p>
              <p>
                Our gatherings are filled with authentic worship, practical teaching, powerful prayer, and genuine community. We believe transformation happens together, and we're here to walk with you through every season.
              </p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-black mb-4">Our Tagline</h3>
            <p className="text-3xl font-bold italic">
              "A church family where people encounter Jesus and experience life-changing hope."
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="h-20 w-20 text-cyan-400 mx-auto mb-8" />
          <h2 className="text-5xl font-black mb-8">
            The Mission
          </h2>
          <p className="text-2xl mb-8 leading-relaxed">
            Create environments where people encounter God, grow spiritually, and discover their purpose in His kingdom.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed">
            We exist to see lives transformed, families restored, and communities impacted by Jesus.
          </p>
        </div>
      </section>
    </div>
  );
}

function TrendingUp(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );
}
