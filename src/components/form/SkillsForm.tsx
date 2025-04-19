import React, { useState } from 'react';
import { useCV } from '../../context/CVContext';
import { CloudLightning as Lightning, Plus, X } from 'lucide-react';

const SkillsForm: React.FC = () => {
  const { cvData, addSkill, removeSkill } = useCV();
  const { skills } = cvData;
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      addSkill(newSkill);
      setNewSkill('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Skills</h2>
      
      <div className="flex">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            <Lightning size={18} />
          </div>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a skill"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleAddSkill}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-2 rounded-r-md flex items-center justify-center"
        >
          <Plus size={18} />
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center text-sm"
          >
            {skill.name}
            <button 
              onClick={() => removeSkill(index)}
              className="ml-1 p-1 text-blue-800 hover:text-blue-900 focus:outline-none"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
      
      {skills.length === 0 && (
        <p className="text-sm text-gray-500 italic">
          No skills added yet. Try adding skills like "JavaScript", "Project Management", or "Customer Service".
        </p>
      )}
    </div>
  );
};

export default SkillsForm;