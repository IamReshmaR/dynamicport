import React from 'react';
import Transition from './Transition';

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

const About = () => {
  const experiences: Experience[] = [
    {
      title: "AI Researcher",
      company: "Middle Tennessee State University",
      period: "Dec 2023 – Present",
      achievements: [
        "Analyzed 22K+ user comments using NLP & statistical methods (ANOVA, Box-Cox) for marketing insights",
        "Built GPT/BERT pipelines with Hugging Face to extract sentiment signals",
        "Automated transcription & analysis with OpenAI Whisper and OpenCV",
        "Developed interactive dashboards (Power BI/Tableau) for stakeholder insights",
        "Streamlined ETL pipelines, improving research agility and data reliability"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "DawnSign Press",
      period: "Jul 2024 – Aug 2024",
      achievements: [
        "Cleaned and analyzed 25K+ GA4 logs using SQL & BigQuery",
        "Segmented traffic sources to identify top-performing marketing channels",
        "Supported Tableau dashboards and documented update workflows"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "Geo Structural (P) Ltd.",
      period: "May 2022 – Jul 2022",
      achievements: [
        "Used SQL & Python to analyze structural data for load patterns",
        "Built Power BI dashboards to automate project tracking"
      ]
    },
    {
      title: "Data Analytics Intern",
      company: "Delhi Metro Rail Corporation Ltd.",
      period: "Jun 2018 – Jul 2018",
      achievements: [
        "Cleaned and visualized soil and structural data using Excel",
        "Assisted with geospatial updates and construction planning reports"
      ]
    }
  ];

  return (
    <section id="about" className="section bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <Transition animation="fade">
          <span className="inline-block py-1 px-3 text-xs rounded-full bg-white/10 text-white mb-4">
            About Me
          </span>
        </Transition>

        <div className="max-w-4xl mx-auto">
          <Transition animation="slide-up" delay={200}>
            <div className="prose prose-invert max-w-none mb-16">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a Data & Analytics Engineer with a passion for transforming raw data into powerful insights. 
                With a strong foundation in Python, SQL, and data visualization tools like Tableau and Power BI, 
                I build scalable solutions and integrate generative AI to supercharge analytics workflows. 
                My background spans marketing analytics, NLP, LLMs, statistical modeling, and building end-to-end data pipelines. 
                I'm driven by curiosity, business impact, and the thrill of solving complex problems with clean, actionable data.
              </p>
            </div>
          </Transition>

          <Transition animation="slide-up" delay={400}>
            <h2 className="text-2xl font-bold mb-8">Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <Transition
                  key={`${exp.company}-${exp.period}`}
                  animation="slide-up"
                  delay={600 + index * 200}
                >
                  <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-gray-400">{exp.company}</p>
                      </div>
                      <p className="text-gray-500 text-sm mt-2 sm:mt-0">{exp.period}</p>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Transition>
              ))}
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default About;
