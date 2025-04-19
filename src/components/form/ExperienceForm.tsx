import React, { useState } from 'react';
import { useCV } from '../../context/CVContext';
import { Briefcase, Plus, Trash2, X } from 'lucide-react';

const ExperienceForm: React.FC = () => {
  const { 
    cvData, 
    addExperience, 
    updateExperience, 
    removeExperience,
    addAchievement,
    updateAchievement,
    removeAchievement
  } = useCV();
  const { experience } = cvData;
  
  const [newAchievements, setNewAchievements] = useState<{[key: string]: string}>({});

  const handleChange = (id: string, field: string, value: string | boolean) => {
    updateExperience(id, field, value);
    
    // If current is checked, clear the end date
    if (field === 'current' && value === true) {
      updateExperience(id, 'endDate', '');
    }
  };
  
  const handleNewAchievementChange = (id: string, value: string) => {
    setNewAchievements({
      ...newAchievements,
      [id]: value
    });
  };
  
  const handleAddAchievement = (id: string) => {
    const achievement = newAchievements[id]?.trim();
    if (achievement) {
      addAchievement(id, achievement);
      // Clear the input after adding
      setNewAchievements({
        ...newAchievements,
        [id]: ''
      });
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddAchievement(id);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Work Experience</h2>
        <button
          onClick={addExperience}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-1 rounded-md flex items-center text-sm"
        >
          <Plus size={16} className="mr-1" /> Add
        </button>
      </div>
      
      {experience.length === 0 && (
        <p className="text-sm text-gray-500 italic">
          No work experience added yet. Click "Add" to include your professional history.
        </p>
      )}

      {experience.map((exp) => (
        <div key={exp.id} className="p-4 border border-gray-300 rounded-md space-y-3">
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-700 flex items-center">
              <Briefcase size={18} className="mr-2" /> Work Experience
            </h3>
            <button
              onClick={() => removeExperience(exp.id)}
              className="text-red-500 hover:text-red-700 transition-colors"
              aria-label="Remove experience"
            >
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="space-y-3">
            <input
              type="text"
              value={exp.title}
              onChange={(e) => handleChange(exp.id, 'title', e.target.value)}
              placeholder="Job Title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            <input
              type="text"
              value={exp.company}
              onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
              placeholder="Company"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={exp.startDate}
                onChange={(e) => handleChange(exp.id, 'startDate', e.target.value)}
                placeholder="Start Date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              
              <input
                type="text"
                value={exp.endDate}
                onChange={(e) => handleChange(exp.id, 'endDate', e.target.value)}
                placeholder="End Date"
                disabled={exp.current}
                className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${exp.current ? 'bg-gray-100' : ''}`}
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id={`current-${exp.id}`}
                checked={exp.current}
                onChange={(e) => handleChange(exp.id, 'current', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor={`current-${exp.id}`} className="ml-2 block text-sm text-gray-700">
                I currently work here
              </label>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Key Achievements
              </label>
              
              {exp.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="text"
                    value={achievement}
                    onChange={(e) => updateAchievement(exp.id, index, e.target.value)}
                    placeholder="Describe an achievement or responsibility"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={() => removeAchievement(exp.id, index)}
                    className="bg-gray-200 hover:bg-gray-300 transition-colors px-3 py-2 rounded-r-md"
                    aria-label="Remove achievement"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
              
              <div className="flex items-center">
                <input
                  type="text"
                  value={newAchievements[exp.id] || ''}
                  onChange={(e) => handleNewAchievementChange(exp.id, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, exp.id)}
                  placeholder="Add another achievement (press Enter)"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={() => handleAddAchievement(exp.id)}
                  className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-2 rounded-r-md"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceForm;