import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Users, Clock, Play, Globe, Heart, Shield } from 'lucide-react';

const popularCourses = [
  {
    id: 'canva',
    title: 'How to use Canva',
    description: 'Learn the basics of creating beautiful designs with Canva.',
    instructor: 'Sarah Johnson',
    rating: 4.8,
    students: 1247,
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop'
  },
  {
    id: 'google-docs',
    title: 'Intro to Google Docs',
    description: 'Master document creation, editing, and sharing in Google Docs.',
    instructor: 'Mike Chen',
    rating: 4.9,
    students: 2156,
    duration: '1.5 hours',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'
  },
  {
    id: 'digital-safety',
    title: 'Digital Safety 101',
    description: 'Stay safe online with essential digital safety tips.',
    instructor: 'Dr. Emily Rodriguez',
    rating: 4.7,
    students: 892,
    duration: '3 hours',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop'
  }
];

const instructors = [
  {
    name: 'Sarah Johnson',
    role: 'Design Expert',
    bio: 'Former senior designer at Adobe with 10+ years teaching digital design.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    courses: 5
  },
  {
    name: 'Mike Chen',
    role: 'Productivity Coach',
    bio: 'Google Workspace certified trainer helping teams work smarter.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    courses: 3
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Cybersecurity Specialist',
    bio: 'PhD in Computer Science with focus on digital safety education.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    courses: 4
  }
];

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-primary/10 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-decorative font-bold text-gray-900 mb-6">
              Empower Everyone to{' '}
              <span className="text-secondary">Trust Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Every day, new technologies reshape how we live, work, and connect. But while innovation charges forward, 
              many people—especially educators, older adults, and underserved communities—are left behind. 
              Trust the Tech was born to change that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-3">
                <Link to="/courses">Browse Courses</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-secondary text-secondary hover:bg-secondary hover:text-white">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
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
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-6xl font-decorative font-bold">
                  JM
                </div>
              </div>
              <div className="md:col-span-2">
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

      {/* Instructors Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-decorative font-bold text-gray-900 mb-4">Meet Our Instructors</h2>
            <p className="text-xl text-gray-600">Learn from experienced professionals who understand your needs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl mb-2">{instructor.name}</CardTitle>
                  <p className="text-secondary font-medium mb-2">{instructor.role}</p>
                  <p className="text-gray-600 mb-4">{instructor.bio}</p>
                  <p className="text-sm text-gray-500">{instructor.courses} courses</p>
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
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-3">
                <Link to="/signup">Sign Up Free</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 