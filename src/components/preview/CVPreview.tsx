import React from 'react';
import { useCV } from '../../context/CVContext';
import { Mail, Phone, MapPin, Globe, Briefcase } from 'lucide-react';

const CVPreview: React.FC = () => {
  const { cvData } = useCV();
  const { 
    personalInfo, 
    summary, 
    skills, 
    education, 
    experience, 
    links,
    projects,
    certifications,
    languages,
    awards
  } = cvData;

  return (
    <div 
      id="cv-preview"
      className="bg-white shadow-lg rounded-lg max-w-2xl mx-auto p-8 min-h-[297mm] print:shadow-none print:p-0 print:min-h-0"
    >
      {/* Header / Personal Info */}
      <div className="border-b pb-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        
        <h2 className="text-xl text-blue-700 font-medium mb-4">
          {personalInfo.jobTitle || 'Professional Title'}
        </h2>
        
        <div className="flex flex-wrap text-gray-600 gap-y-2">
          {personalInfo.location && (
            <div className="mr-6 flex items-center text-sm">
              <MapPin size={16} className="mr-1" />
              {personalInfo.location}
            </div>
          )}
          
          {personalInfo.email && (
            <div className="mr-6 flex items-center text-sm">
              <Mail size={16} className="mr-1" />
              {personalInfo.email}
            </div>
          )}
          
          {personalInfo.phone && (
            <div className="mr-6 flex items-center text-sm">
              <Phone size={16} className="mr-1" />
              {personalInfo.phone}
            </div>
          )}
        </div>
        
        {/* Links */}
        {links.length > 0 && (
          <div className="flex flex-wrap mt-3 gap-x-4 gap-y-2">
            {links.map((link) => (
              <div key={link.id} className="text-blue-600 flex items-center text-sm">
                <Globe size={16} className="mr-1" />
                <span className="hover:underline">{link.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 border-b pb-1">Professional Summary</h3>
          <p className="text-gray-700">{summary}</p>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 border-b pb-1">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 border-b pb-1">Work Experience</h3>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{exp.title || 'Job Title'}</h4>
                    <div className="text-gray-700 flex items-center">
                      <Briefcase size={14} className="mr-1" />
                      {exp.company || 'Company Name'}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {exp.startDate && (exp.endDate || exp.current) ? (
                      <>
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </>
                    ) : (
                      'Date Range'
                    )}
                  </div>
                </div>
                
                {exp.achievements.length > 0 && (
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    {exp.achievements.map((achievement, index) => (
                      achievement.trim() && (
                        <li key={index} className="text-sm">
                          {achievement}
                        </li>
                      )
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 border-b pb-1">Education</h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{edu.degree || 'Degree'}</h4>
                    <div className="text-gray-700">{edu.institution || 'Institution'}</div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {edu.startYear && edu.endYear ? (
                      <>
                        {edu.startYear} - {edu.endYear}
                      </>
                    ) : (
                      'Year Range'
                    )}
                  </div>
                </div>
                {edu.description && (
                  <p className="text-sm text-gray-700 mt-1">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 border-b pb-1">Projects</h3>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id}>
                <h4 className="font-medium text-gray-900">{project.name || 'Project Name'}</h4>
                {project.description && (
                  <p className="text-sm text-gray-700 mt-1">{project.description}</p>
                )}
                {project.url && (
                  <div className="text-sm text-blue-600 mt-1 hover:underline cursor-pointer">
                    {project.url}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 border-b pb-1">Certifications</h3>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between">
                <div>
                  <span className="font-medium text-gray-800">{cert.name || 'Certification'}</span>
                  {cert.issuer && (
                    <span className="text-gray-600"> - {cert.issuer}</span>
                  )}
                </div>
                {cert.date && (
                  <div className="text-sm text-gray-600">{cert.date}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 border-b pb-1">Languages</h3>
          <div className="space-y-1">
            {languages.map((lang) => (
              <div key={lang.id} className="flex justify-between text-gray-700">
                <span>{lang.name || 'Language'}</span>
                {lang.proficiency && (
                  <span className="text-gray-600">{lang.proficiency}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Awards */}
      {awards.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 border-b pb-1">Awards & Honors</h3>
          <div className="space-y-3">
            {awards.map((award) => (
              <div key={award.id}>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800">{award.title || 'Award'}</span>
                  {award.date && (
                    <span className="text-sm text-gray-600">{award.date}</span>
                  )}
                </div>
                {award.issuer && (
                  <div className="text-sm text-gray-700">{award.issuer}</div>
                )}
                {award.description && (
                  <p className="text-sm text-gray-700 mt-1">{award.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CVPreview;