import React from 'react';
import { useCV } from '../../context/CVContext';
import { Languages, Plus, Trash2 } from 'lucide-react';

const LanguagesForm: React.FC = () => {
  const { cvData, addLanguage, updateLanguage, removeLanguage } = useCV();
  const { languages } = cvData;

  const handleChange = (id: string, field: string, value: string) => {
    updateLanguage(id, field, value);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Languages</h2>
        <button
          onClick={addLanguage}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-1 rounded-md flex items-center text-sm"
        >
          <Plus size={16} className="mr-1" /> Add
        </button>
      </div>
      
      {languages.length === 0 && (
        <p className="text-sm text-gray-500 italic">
          No languages added yet. Language skills can be valuable in many professional contexts.
        </p>
      )}

      {languages.map((lang) => (
        <div key={lang.id} className="p-4 border border-gray-300 rounded-md space-y-3">
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-700 flex items-center">
              <Languages size={18} className="mr-2" /> Language
            </h3>
            <button
              onClick={() => removeLanguage(lang.id)}
              className="text-red-500 hover:text-red-700 transition-colors"
              aria-label="Remove language"
            >
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="space-y-3">
            <input
              type="text"
              value={lang.name}
              onChange={(e) => handleChange(lang.id, 'name', e.target.value)}
              placeholder="Language"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            <input
              type="text"
              value={lang.proficiency}
              onChange={(e) => handleChange(lang.id, 'proficiency', e.target.value)}
              placeholder="Proficiency (e.g., Native, Fluent, Intermediate, Beginner)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LanguagesForm;