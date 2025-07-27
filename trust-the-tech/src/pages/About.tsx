import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award, Shield, Globe, GraduationCap, BookOpen, Play, CheckCircle } from 'lucide-react';

const stats = [
  { number: '300+', label: 'Teachers Trained' },
  { number: '500K+', label: 'Global Reach' },
  { number: '20+', label: 'Free Courses' },
  { number: '100%', label: 'Free Access' }
];

const steps = [
  {
    number: '01',
    title: 'Create an account',
    description: 'Sign up for free and join our community of learners'
  },
  {
    number: '02', 
    title: 'Select your course',
    description: 'Choose from our library of digital literacy courses'
  },
  {
    number: '03',
    title: 'Learn at your pace',
    description: 'Access step-by-step tutorials and hands-on practice'
  },
  {
    number: '04',
    title: 'Master digital tools',
    description: 'Gain confidence with technology and digital skills'
  }
];

const services = [
  {
    title: 'Free Online Courses',
    description: 'Access comprehensive tutorials on popular digital tools and platforms.',
    image: '/assets/about-picture-2.jpg'
  },
  {
    title: 'Interactive Sessions',
    description: 'Join live Q&A sessions and get personalized help from our team.',
    image: '/assets/about-picture-3.jpg'
  },
  {
    title: 'Step-by-Step Guides',
    description: 'Follow detailed manuals designed for beginners and visual learners.',
    image: '/assets/about-picture-4.jpg'
  },
  {
    title: '24/7 Community Support',
    description: 'Connect with other learners and get help whenever you need it.',
    image: '/assets/about-picture-5.jpg'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-decorative font-bold text-gray-900 mb-6">
                About Trust the Tech
              </h1>
              <p className="text-2xl text-gray-600 mb-8">
                The world-leading platform with 300+ successful lessons.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                  Get Started
                </button>
                <button className="flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors">
                  <Play className="h-5 w-5" />
                  Watch video
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="/assets/about-picture-1.jpg" 
                alt="Digital learning" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">500K+</p>
                    <p className="text-sm text-gray-600">People reached globally</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-decorative font-bold text-gray-900 mb-6">
              How do I get started?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="/assets/trust-the-tech-logo-2.png" 
                alt="Trust the Tech Logo" 
                className="w-full h-96 object-contain rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-decorative font-bold text-gray-900 mb-6">
                What is Trust the Tech?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Every day, new technologies, apps, and digital platforms reshape how we live, work, and connect. 
                But while innovation charges forward, many people—especially educators, older adults, and underserved communities—are left behind. 
                Trust the Tech was born to change that.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Trust the Tech is an inclusive educational platform that makes digital literacy accessible to everyone. 
                Through free online courses, interactive sessions, step-by-step manuals, and hands-on learning, 
                we empower people to master tools like Canva, Google Docs, and digital safety essentials.
              </p>
              <div className="bg-secondary/10 p-6 rounded-xl border-l-4 border-secondary">
                <p className="text-secondary font-semibold text-lg">
                  "Because technology isn't just for coders or startups—it's for teachers, entrepreneurs, grandparents, and everyone in between."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-decorative font-bold text-gray-900 mb-6">
              What We Provide To You
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the best service that comes with the best results, making digital literacy accessible to everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-decorative font-bold text-gray-900 mb-6">Meet the Founder</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <img 
                src="/assets/headshot.jpg" 
                alt="Juan Martinez Varela" 
                className="w-80 h-80 object-cover rounded-full mx-auto lg:mx-0 shadow-2xl mb-8"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-decorative font-bold text-secondary mb-6">
                Juan Martinez Varela
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm Juan, a Mexican student currently pursuing a dual degree in Computer Science and Economics at Southwestern University in Texas. 
                I want to become a software engineer while helping people with tech.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I launched Trust the Tech in Mexico City after witnessing how many brilliant educators lacked access to the digital tools they needed to thrive in the modern world. 
                What started as a high school project has been growing, becoming an organization with thousands of people impacted globally.
              </p>
              <div className="bg-accent/10 p-6 rounded-xl border-l-4 border-accent">
                <p className="text-accent font-semibold text-lg">
                  "I built this project because I believe that access to technology is a right, not a privilege—and that anyone, with the right support, can learn to use it to their advantage."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-decorative font-bold text-gray-900 mb-6">Why It Matters</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We live in a world where knowing how to create a document, design a poster, or protect your data online 
                can make the difference between falling behind and moving forward.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At Trust the Tech, our mission is simple: Empower people to trust technology, not fear it. 
                Whether you're a teacher trying to enhance your classroom, a parent navigating the online world, 
                or someone simply curious to learn—you belong here.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-gray-700">Free access to all courses</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-gray-700">Step-by-step tutorials</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-gray-700">Community support</span>
                </div>
              </div>
            </motion.div>
            
                          <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/assets/about-picture-6.jpg" 
                  alt="Digital skills for everyone" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>
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
            <h2 className="text-4xl font-decorative font-bold text-white mb-6">Let's Learn Together</h2>
            <p className="text-xl text-primary mb-8">
              Whether you're a teacher trying to enhance your classroom, a parent navigating the online world, 
              or someone simply curious to learn—you belong here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/courses" 
                className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Courses
              </a>
              <a 
                href="/signup" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-colors"
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