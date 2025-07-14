import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award, Shield, Globe, GraduationCap, BookOpen } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Teachers Trained', value: '300+' },
  { icon: Globe, label: 'Global Reach', value: '500K+' },
  { icon: BookOpen, label: 'Free Courses', value: '100%' },
  { icon: GraduationCap, label: 'Digital Literacy', value: 'Priority' }
];

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'We prioritize digital safety and security in all our courses, ensuring students can navigate the online world with confidence.'
  },
  {
    icon: Users,
    title: 'Inclusive Learning',
    description: 'Our courses are designed for everyone, with special attention to older adults and underserved communities who may feel left behind by technology.'
  },
  {
    icon: Globe,
    title: 'Real-World Skills',
    description: 'We focus on practical, everyday digital tools that people actually use, from social media to productivity apps.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-primary/10 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-decorative font-bold text-gray-900 mb-6">
              About Trust the Tech
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Empowering everyone to navigate the digital world with confidence and safety
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-decorative font-bold text-gray-900 mb-6">What is Trust the Tech?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Every day, new technologies, apps, and digital platforms reshape how we live, work, and connect. 
              But while innovation charges forward, many people—especially educators, older adults, and underserved communities—are left behind. 
              Trust the Tech was born to change that.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Trust the Tech is an inclusive educational platform that makes digital literacy accessible to everyone. 
              Through free online courses, interactive sessions, step-by-step manuals, and hands-on learning, 
              we empower people to master tools like Canva, Google Docs, and digital safety essentials—tools that can transform their daily lives and careers.
            </p>
            <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-secondary max-w-2xl mx-auto">
              <p className="text-secondary font-semibold italic text-lg">
                "Because technology isn't just for coders or startups—it's for teachers, entrepreneurs, grandparents, and everyone in between."
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <stat.icon className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-decorative font-bold text-gray-900 mb-6">Meet the Founder</h2>
            <p className="text-xl text-gray-600">Juan Martinez Varela</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-6xl font-decorative font-bold">
                  JM
                </div>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-decorative font-bold text-secondary mb-4">
                  Mexican Student & Digital Literacy Advocate
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  I'm Juan, currently pursuing a dual degree in Computer Science and Economics at Southwestern University in Texas, 
                  on a full-ride scholarship awarded through the Beca Ricardo Salinas Pliego.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  I launched Trust the Tech—originally known as "Pero ¿No Me Hackean?"—in Mexico City after witnessing 
                  how many brilliant educators lacked access to the digital tools they needed to thrive in the modern world.
                </p>
                <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                  <p className="text-accent font-semibold">
                    "I built this project because I believe that access to technology is a right, not a privilege."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-decorative font-bold text-gray-900 mb-6">Who It's For</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform is designed for anyone who wants to feel more confident with technology, 
              with special focus on those who may have been left behind by the digital revolution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Older Adults</h3>
                  <p className="text-gray-600">
                    Seniors who want to stay connected with family, manage their digital lives, 
                    and participate in the modern world without feeling overwhelmed.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Underserved Communities</h3>
                  <p className="text-gray-600">
                    Individuals and families who may not have had access to technology education 
                    or who face barriers to digital inclusion.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Everyone Else</h3>
                  <p className="text-gray-600">
                    Anyone who wants to improve their digital skills, whether you're a beginner 
                    or just looking to stay current with the latest tools and platforms.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-decorative font-bold text-gray-900 mb-6">Why It Matters</h2>
            <p className="text-lg text-gray-600 mb-8">
              We live in a world where knowing how to create a document, design a poster, or protect your data online 
              can make the difference between falling behind and moving forward.
            </p>
            <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary max-w-2xl mx-auto">
              <p className="text-secondary font-semibold italic text-lg">
                "At Trust the Tech, our mission is simple: Empower people to trust technology, not fear it."
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <value.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-decorative font-bold text-white mb-6">Let's Learn Together</h2>
            <p className="text-xl text-primary mb-8">
              Whether you're a teacher trying to enhance your classroom, a parent navigating the online world, 
              or someone simply curious to learn—you belong here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/courses" 
                className="bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Courses
              </a>
              <a 
                href="/signup" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-colors"
              >
                Sign Up Free
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 