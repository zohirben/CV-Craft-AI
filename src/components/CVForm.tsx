import React, { useState } from 'react';
import { useCV } from '../context/CVContext';
import PersonalInfoForm from './form/PersonalInfoForm';
import SummaryForm from './form/SummaryForm';
import SkillsForm from './form/SkillsForm';
import EducationForm from './form/EducationForm';
import ExperienceForm from './form/ExperienceForm';
import LinksForm from './form/LinksForm';
import ProjectsForm from './form/ProjectsForm';
import CertificationsForm from './form/CertificationsForm';
import LanguagesForm from './form/LanguagesForm';
import AwardsForm from './form/AwardsForm';
import { Wand2, FileDown, Copy, RefreshCcw } from 'lucide-react';

const CVForm: React.FC = () => {
  const { loadExampleData, resetData } = useCV();
  
  const [activeTab, setActiveTab] = useState('basic');

  const handleGeneratePDF = () => {
    window.print();
  };

  const tabs = [
    { id: 'basic', label: 'Basic Info' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'optional', label: 'Additional' },
  ];

  return (
    <div className="space-y-6 pb-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">CV Builder</h1>
        <div className="flex space-x-2">
          <button
            onClick={loadExampleData}
            className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <Wand2 size={16} className="mr-1" /> Test Autofill
          </button>
          <button
            onClick={resetData}
            className="flex items-center px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm font-medium"
          >
            <RefreshCcw size={16} className="mr-1" /> Reset
          </button>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="space-y-6">
        {activeTab === 'basic' && (
          <>
            <PersonalInfoForm />
            <SummaryForm />
            <SkillsForm />
            <LinksForm />
          </>
        )}
        
        {activeTab === 'education' && (
          <>
            <EducationForm />
          </>
        )}
        
        {activeTab === 'experience' && (
          <>
            <ExperienceForm />
          </>
        )}
        
        {activeTab === 'optional' && (
          <>
            <ProjectsForm />
            <CertificationsForm />
            <LanguagesForm />
            <AwardsForm />
          </>
        )}
      </div>

      <div className="flex space-x-3 pt-4 border-t border-gray-200 mt-8 print:hidden">
        <button
          onClick={handleGeneratePDF}
          className="flex-1 flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <FileDown size={18} className="mr-2" /> Download as PDF
        </button>
        <button
          onClick={() => {
            const element = document.getElementById('cv-preview');
            if (element) {
              const text = element.innerText;
              navigator.clipboard.writeText(text);
            }
          }}
          className="flex-1 flex justify-center items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
        >
          <Copy size={18} className="mr-2" /> Copy as Text
        </button>
      </div>
    </div>
  );
};

export default CVForm;