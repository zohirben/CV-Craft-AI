import React from 'react';
import { useCV } from '../../context/CVContext';
import { School, Plus, Trash2 } from 'lucide-react';

const EducationForm: React.FC = () => {
  const { cvData, addEducation, updateEducation, removeEducation } = useCV();
  const { education } = cvData;

  const handleChange = (id: string, field: string, value: string) => {
    updateEducation(id, field, value);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Education</h2>
        <button
          onClick={addEducation}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-1 rounded-md flex items-center text-sm"
        >
          <Plus size={16} className="mr-1" /> Add
        </button>
      </div>
      
      {education.length === 0 && (
        <p className="text-sm text-gray-500 italic">
          No education added yet. Click "Add" to include your educational background.
        </p>
      )}

      {education.map((edu) => (
        <div key={edu.id} className="p-4 border border-gray-300 rounded-md space-y-3">
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-700 flex items-center">
              <School size={18} className="mr-2" /> Education Detail
            </h3>
            <button
              onClick={() => removeEducation(edu.id)}
              className="text-red-500 hover:text-red-700 transition-colors"
              aria-label="Remove education"
            >
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="space-y-3">
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => handleChange(edu.id, 'degree', e.target.value)}
              placeholder="Degree / Diploma"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            <input
              type="text"
              value={edu.institution}
              onChange={(e) => handleChange(edu.id, 'institution', e.target.value)}
              placeholder="Institution"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={edu.startYear}
                onChange={(e) => handleChange(edu.id, 'startYear', e.target.value)}
                placeholder="Start Year"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              
              <input
                type="text"
                value={edu.endYear}
                onChange={(e) => handleChange(edu.id, 'endYear', e.target.value)}
                placeholder="End Year (or expected)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <textarea
              value={edu.description}
              onChange={(e) => handleChange(edu.id, 'description', e.target.value)}
              placeholder="Description (relevant coursework, honors, etc.)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[60px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationForm;