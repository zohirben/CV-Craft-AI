import React, { createContext, useContext, useState } from 'react';
import { CVData } from '../types/CVTypes';
import { initialCVData, exampleCVData } from '../utils/initialData';
import { v4 as uuidv4 } from 'uuid';

interface CVContextType {
  cvData: CVData;
  updatePersonalInfo: (field: string, value: string) => void;
  addSkill: (skill: string) => void;
  removeSkill: (index: number) => void;
  addEducation: () => void;
  updateEducation: (id: string, field: string, value: string) => void;
  removeEducation: (id: string) => void;
  addExperience: () => void;
  updateExperience: (id: string, field: string, value: string | boolean) => void;
  addAchievement: (experienceId: string, achievement: string) => void;
  updateAchievement: (experienceId: string, index: number, value: string) => void;
  removeAchievement: (experienceId: string, index: number) => void;
  removeExperience: (id: string) => void;
  updateSummary: (value: string) => void;
  addLink: () => void;
  updateLink: (id: string, field: string, value: string) => void;
  removeLink: (id: string) => void;
  addProject: () => void;
  updateProject: (id: string, field: string, value: string) => void;
  removeProject: (id: string) => void;
  addCertification: () => void;
  updateCertification: (id: string, field: string, value: string) => void;
  removeCertification: (id: string) => void;
  addLanguage: () => void;
  updateLanguage: (id: string, field: string, value: string) => void;
  removeLanguage: (id: string) => void;
  addAward: () => void;
  updateAward: (id: string, field: string, value: string) => void;
  removeAward: (id: string) => void;
  loadExampleData: () => void;
  resetData: () => void;
}

const CVContext = createContext<CVContextType | undefined>(undefined);

export const CVProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cvData, setCVData] = useState<CVData>(initialCVData);

  const updatePersonalInfo = (field: string, value: string) => {
    setCVData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const addSkill = (skill: string) => {
    if (!skill.trim()) return;
    setCVData(prev => ({
      ...prev,
      skills: [...prev.skills, { name: skill.trim() }]
    }));
  };

  const removeSkill = (index: number) => {
    setCVData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    setCVData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: uuidv4(),
          degree: '',
          institution: '',
          startYear: '',
          endYear: '',
          description: ''
        }
      ]
    }));
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setCVData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id: string) => {
    setCVData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addExperience = () => {
    setCVData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: uuidv4(),
          title: '',
          company: '',
          startDate: '',
          endDate: '',
          current: false,
          achievements: ['']
        }
      ]
    }));
  };

  const updateExperience = (id: string, field: string, value: string | boolean) => {
    setCVData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const addAchievement = (experienceId: string, achievement: string) => {
    if (!achievement.trim()) return;
    setCVData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === experienceId 
          ? { ...exp, achievements: [...exp.achievements, achievement] } 
          : exp
      )
    }));
  };

  const updateAchievement = (experienceId: string, index: number, value: string) => {
    setCVData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => {
        if (exp.id === experienceId) {
          const newAchievements = [...exp.achievements];
          newAchievements[index] = value;
          return { ...exp, achievements: newAchievements };
        }
        return exp;
      })
    }));
  };

  const removeAchievement = (experienceId: string, index: number) => {
    setCVData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => {
        if (exp.id === experienceId) {
          return {
            ...exp,
            achievements: exp.achievements.filter((_, i) => i !== index)
          };
        }
        return exp;
      })
    }));
  };

  const removeExperience = (id: string) => {
    setCVData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const updateSummary = (value: string) => {
    setCVData(prev => ({
      ...prev,
      summary: value
    }));
  };

  const addLink = () => {
    setCVData(prev => ({
      ...prev,
      links: [
        ...prev.links,
        {
          id: uuidv4(),
          name: '',
          url: ''
        }
      ]
    }));
  };

  const updateLink = (id: string, field: string, value: string) => {
    setCVData(prev => ({
      ...prev,
      links: prev.links.map(link => 
        link.id === id ? { ...link, [field]: value } : link
      )
    }));
  };

  const removeLink = (id: string) => {
    setCVData(prev => ({
      ...prev,
      links: prev.links.filter(link => link.id !== id)
    }));
  };

  const addProject = () => {
    setCVData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: uuidv4(),
          name: '',
          description: '',
          url: ''
        }
      ]
    }));
  };

  const updateProject = (id: string, field: string, value: string) => {
    setCVData(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === id ? { ...project, [field]: value } : project
      )
    }));
  };

  const removeProject = (id: string) => {
    setCVData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }));
  };

  const addCertification = () => {
    setCVData(prev => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        {
          id: uuidv4(),
          name: '',
          issuer: '',
          date: ''
        }
      ]
    }));
  };

  const updateCertification = (id: string, field: string, value: string) => {
    setCVData(prev => ({
      ...prev,
      certifications: prev.certifications.map(cert => 
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    }));
  };

  const removeCertification = (id: string) => {
    setCVData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(cert => cert.id !== id)
    }));
  };

  const addLanguage = () => {
    setCVData(prev => ({
      ...prev,
      languages: [
        ...prev.languages,
        {
          id: uuidv4(),
          name: '',
          proficiency: ''
        }
      ]
    }));
  };

  const updateLanguage = (id: string, field: string, value: string) => {
    setCVData(prev => ({
      ...prev,
      languages: prev.languages.map(lang => 
        lang.id === id ? { ...lang, [field]: value } : lang
      )
    }));
  };

  const removeLanguage = (id: string) => {
    setCVData(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang.id !== id)
    }));
  };

  const addAward = () => {
    setCVData(prev => ({
      ...prev,
      awards: [
        ...prev.awards,
        {
          id: uuidv4(),
          title: '',
          issuer: '',
          date: '',
          description: ''
        }
      ]
    }));
  };

  const updateAward = (id: string, field: string, value: string) => {
    setCVData(prev => ({
      ...prev,
      awards: prev.awards.map(award => 
        award.id === id ? { ...award, [field]: value } : award
      )
    }));
  };

  const removeAward = (id: string) => {
    setCVData(prev => ({
      ...prev,
      awards: prev.awards.filter(award => award.id !== id)
    }));
  };

  const loadExampleData = () => {
    setCVData(exampleCVData);
  };

  const resetData = () => {
    setCVData(initialCVData);
  };

  return (
    <CVContext.Provider value={{
      cvData,
      updatePersonalInfo,
      addSkill,
      removeSkill,
      addEducation,
      updateEducation,
      removeEducation,
      addExperience,
      updateExperience,
      addAchievement,
      updateAchievement,
      removeAchievement,
      removeExperience,
      updateSummary,
      addLink,
      updateLink,
      removeLink,
      addProject,
      updateProject,
      removeProject,
      addCertification,
      updateCertification,
      removeCertification,
      addLanguage,
      updateLanguage,
      removeLanguage,
      addAward,
      updateAward,
      removeAward,
      loadExampleData,
      resetData
    }}>
      {children}
    </CVContext.Provider>
  );
};

export const useCV = () => {
  const context = useContext(CVContext);
  if (context === undefined) {
    throw new Error('useCV must be used within a CVProvider');
  }
  return context;
};