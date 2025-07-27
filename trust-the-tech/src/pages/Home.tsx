import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Users, Clock, Play, Globe, Heart, Shield } from 'lucide-react';
import { allCourses } from './Courses';

const previousIds = ['canva', 'google-docs', 'digital-safety', 'google-sheets', 'social-media', 'video-calls'];
const newCoursesOnly = allCourses.filter((c: any) => !previousIds.includes(c.id));
const previousCoursesOnly = allCourses.filter((c: any) => previousIds.includes(c.id));
const popularCourses = [
  newCoursesOnly[0],
  newCoursesOnly[1],
  previousCoursesOnly[0],
];

const heroImage = '/assets/landing-picture-1.jpg'; // new tech learning group image

const testimonials = [
  {
    name: 'Maria Garcia',
    role: 'Retired Teacher',
    content: 'I was afraid of technology, but Trust the Tech made it so easy to learn. Now I can create beautiful presentations for my community group!',
    rating: 5
  },
  {
    name: 'Robert Wilson',
    role: 'Small Business Owner',
    content: 'The Google Docs course saved me hours every week. The instructors explain everything so clearly, even for someone like me who\'s not tech-savvy.',
    rating: 5
  },
  {
    name: 'Linda Thompson',
    role: 'Grandmother',
    content: 'I can now video call my grandchildren and help them with their homework online. This platform gave me confidence I never thought I\'d have.',
    rating: 5
  }
];

const stats = [
  { icon: Users, label: 'Teachers Trained', value: '300+' },
  { icon: Globe, label: 'Global Reach', value: '500K+' },
  { icon: Heart, label: 'Free Courses', value: '100%' },
  { icon: Shield, label: 'Digital Safety', value: 'Priority' }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Refactored to match reference image layout */}
      <section className="bg-gradient-to-br from-primary/20 via-primary/10 to-white py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Headline, subheadline, CTAs */}
          <div className="flex-1 min-w-[320px] flex flex-col items-start justify-center gap-6">
            <h1 className="text-5xl md:text-6xl font-decorative font-bold text-gray-900 mb-2">
              Empower everyone to <span className="text-secondary">trust technology</span>
            </h1>
            <div className="w-24 h-1 bg-secondary rounded-full mb-2" />
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-xl">
              Every day, new technologies reshape how we live, work, and connect, but while innovation charges forward, many people, especially educators, older adults, and underserved communities, are left behind. Trust the Tech was born to change that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-3">
                <Link to="/courses">Browse Courses</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-secondary text-secondary hover:bg-secondary hover:text-white">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right: Photo and stat/info cards */}
          <div className="flex-1 min-w-[320px] flex items-center justify-center relative mt-12 md:mt-0">
            {/* Main photo (replace src with your own or a placeholder) */}
            <div className="rounded-3xl overflow-hidden shadow-lg w-[320px] h-[380px] relative bg-gray-100">
              <img
                src={heroImage}
                alt="Trust the Tech Student"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Floating stat card: Active Students */}
            <div className="absolute top-4 right-0 md:right-4 bg-white rounded-xl shadow-lg px-6 py-3 flex flex-col items-center border border-gray-100">
              <span className="text-2xl font-bold text-secondary">More than 20<br />free courses</span>
            </div>
            {/* Floating stat card: Weekly Spend Hours */}
            <div className="absolute bottom-4 right-1/2 translate-x-1/2 md:-right-8 md:translate-x-0 bg-white rounded-xl shadow-lg px-6 py-3 flex flex-col items-center border border-gray-100">
              <Heart className="w-8 h-8 text-accent mb-2" />
              <span className="text-gray-600 text-sm mb-1">Social impact project</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-decorative font-bold text-gray-900 mb-6">What is Trust the Tech?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Trust the Tech is an inclusive educational platform that makes digital literacy accessible to everyone. 
                  Through free online courses, interactive sessions, step-by-step manuals, and hands-on learning, 
                  we empower people to master tools like Canva, Google Docs, and digital safety essentials.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Because technology isn't just for coders or startups—it's for teachers, entrepreneurs, 
                  grandparents, and everyone in between.
                </p>
                <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-secondary">
                  <p className="text-secondary font-semibold italic">
                    "Empower people to trust technology, not fear it."
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4"
                  >
                    <div className="p-3 bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-decorative font-bold text-gray-900 mb-6">Meet the Founder</h2>
            <p className="text-xl text-gray-600">Juan Martinez Varela</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img src="/assets/headshot.jpg" alt="Juan Martinez Varela" className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-primary" />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-decorative font-bold text-secondary mb-4">
                  Mexican Student, Digital Literacy Advocate
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  I'm Juan, a Mexican student currently pursuing a dual degree in Computer Science and Economics at Southwestern University in Texas. I want to become a software engineer, and at the same time, I work to help and empower as many people as possible to access and trust technology.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  This started as a project from high school and has been growing, becoming an organization with thousands of people impacted globally.
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

      {/* Popular Courses Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-decorative font-bold text-gray-900 mb-4">Popular Courses</h2>
            <p className="text-xl text-gray-600">Start your digital journey with our most loved courses</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{course.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>By {course.instructor}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                      <Link to={`/courses/${course.id}`}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-decorative font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Real stories from real people who transformed their digital skills</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
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
            <h2 className="text-4xl font-decorative font-bold text-white mb-6">Let's Learn Together</h2>
            <p className="text-xl text-primary mb-8">
              Whether you're a teacher trying to enhance your classroom, a parent navigating the online world, 
              or someone simply curious to learn—you belong here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-3">
                <Link to="/courses">Browse Courses</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-3">
                <Link to="/signup">Sign Up Free</Link>
      </Button>
            </div>
          </motion.div>
        </div>
    </section>
    </div>
  );
} 