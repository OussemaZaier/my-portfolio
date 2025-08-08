import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Award, 
  Code, 
  Users, 
  TrendingUp,
  Quote
} from 'lucide-react';

/**
 * Experience Showcase Component
 * 
 * Features:
 * - Professional timeline with detailed experience
 * - Interactive testimonials carousel
 * - Achievement highlights with quantifiable results
 * - Technology stack displays
 * - Responsive design with mobile optimization
 * - Multi-language support
 */
const ExperienceShowcase = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Professional experience timeline data
  const experiences = [
    {
      id: 'senior',
      title: t('experience.timeline.senior.title'),
      company: t('experience.timeline.senior.company'),
      location: t('experience.timeline.senior.location'),
      period: t('experience.timeline.senior.period'),
      description: t('experience.timeline.senior.description'),
      achievements: [
        t('experience.timeline.senior.achievement1'),
        t('experience.timeline.senior.achievement2'),
        t('experience.timeline.senior.achievement3')
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'],
      isCurrent: true
    },
    {
      id: 'fullstack',
      title: t('experience.timeline.fullstack.title'),
      company: t('experience.timeline.fullstack.company'),
      location: t('experience.timeline.fullstack.location'),
      period: t('experience.timeline.fullstack.period'),
      description: t('experience.timeline.fullstack.description'),
      achievements: [
        t('experience.timeline.fullstack.achievement1'),
        t('experience.timeline.fullstack.achievement2'),
        t('experience.timeline.fullstack.achievement3')
      ],
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'Kubernetes'],
      isCurrent: false
    },
    {
      id: 'frontend',
      title: t('experience.timeline.frontend.title'),
      company: t('experience.timeline.frontend.company'),
      location: t('experience.timeline.frontend.location'),
      period: t('experience.timeline.frontend.period'),
      description: t('experience.timeline.frontend.description'),
      achievements: [
        t('experience.timeline.frontend.achievement1'),
        t('experience.timeline.frontend.achievement2'),
        t('experience.timeline.frontend.achievement3')
      ],
      technologies: ['JavaScript', 'React', 'Sass', 'Webpack', 'Jest'],
      isCurrent: false
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 'sarah',
      name: t('experience.testimonials.sarah.name'),
      role: t('experience.testimonials.sarah.role'),
      company: t('experience.testimonials.sarah.company'),
      content: t('experience.testimonials.sarah.content'),
      rating: 5,
      type: t('experience.coworker'),
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'michael',
      name: t('experience.testimonials.michael.name'),
      role: t('experience.testimonials.michael.role'),
      company: t('experience.testimonials.michael.company'),
      content: t('experience.testimonials.michael.content'),
      rating: 5,
      type: t('experience.coworker'),
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'emily',
      name: t('experience.testimonials.emily.name'),
      role: t('experience.testimonials.emily.role'),
      company: t('experience.testimonials.emily.company'),
      content: t('experience.testimonials.emily.content'),
      rating: 5,
      type: t('experience.client'),
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'david',
      name: t('experience.testimonials.david.name'),
      role: t('experience.testimonials.david.role'),
      company: t('experience.testimonials.david.company'),
      content: t('experience.testimonials.david.content'),
      rating: 5,
      type: t('experience.coworker'),
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  // Navigation functions for testimonials
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 px-4 py-2 rounded-full border border-orange-500/30 mb-6">
            <Award className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-medium text-sm">{t('experience.badge')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t('experience.title.part1')}{' '}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              {t('experience.title.highlight')}
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg lg:text-xl max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-12 text-center">
            {t('experience.timeline.title')}
          </h3>
          
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                
                {/* Timeline Connector - Desktop Only */}
                {index < experiences.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-orange-500/50 to-pink-500/50"></div>
                )}

                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  
                  {/* Timeline Icon */}
                  <div className="lg:col-span-1 flex justify-center lg:justify-start">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                      exp.isCurrent 
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 border-orange-300 shadow-lg shadow-orange-500/25' 
                        : 'bg-slate-800 border-slate-600'
                    }`}>
                      {exp.isCurrent ? (
                        <TrendingUp className="w-6 h-6 text-white" />
                      ) : (
                        <Code className="w-6 h-6 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Experience Content */}
                  <div className="lg:col-span-11">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20">
                      
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="text-xl lg:text-2xl font-bold text-white">{exp.title}</h4>
                            {exp.isCurrent && (
                              <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                                {t('experience.current')}
                              </span>
                            )}
                          </div>
                          <p className="text-orange-400 font-semibold text-lg">{exp.company}</p>
                        </div>
                        
                        <div className="flex flex-col sm:items-end space-y-1 mt-2 sm:mt-0">
                          <div className="flex items-center space-x-2 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-slate-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-white font-semibold mb-3 flex items-center space-x-2">
                          <Award className="w-4 h-4 text-orange-400" />
                          <span>{t('experience.achievements')}</span>
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-3 text-slate-300">
                              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-white font-semibold mb-3 flex items-center space-x-2">
                          <Code className="w-4 h-4 text-pink-400" />
                          <span>{t('experience.technologies')}</span>
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-sm font-medium border border-slate-600/50 hover:border-slate-500/50 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            {t('experience.testimonials.title')}
          </h3>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            {t('experience.testimonials.subtitle')}
          </p>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-700/50 shadow-2xl">
              
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="mb-8">
                <p className="text-slate-200 text-lg lg:text-xl leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>

                {/* Star Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-600"
                  />
                  <div className="text-left">
                    <h4 className="text-white font-semibold text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-orange-400 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                    <span className="inline-block bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-400 px-2 py-1 rounded-full text-xs font-medium mt-1 border border-orange-500/30">
                      {testimonials[currentTestimonial].type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors duration-200 text-slate-300 hover:text-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Pagination Dots */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentTestimonial
                          ? 'bg-gradient-to-r from-orange-500 to-pink-500 scale-110'
                          : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors duration-200 text-slate-300 hover:text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceShowcase;