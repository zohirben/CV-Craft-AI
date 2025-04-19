import React from 'react';
import { useCV } from '../../context/CVContext';
import { Trophy, Plus, Trash2 } from 'lucide-react';

const AwardsForm: React.FC = () => {
  const { cvData, addAward, updateAward, removeAward } = useCV();
  const { awards } = cvData;

  const handleChange = (id: string, field: string, value: string) => {
    updateAward(id, field, value);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Awards & Honors</h2>
        <button
          onClick={addAward}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-1 rounded-md flex items-center text-sm"
        >
          <Plus size={16} className="mr-1" /> Add
        </button>
      </div>
      
      {awards.length === 0 && (
        <p className="text-sm text-gray-500 italic">
          No awards or honors added yet. Recognition of your achievements can strengthen your CV.
        </p>
      )}

      {awards.map((award) => (
        <div key={award.id} className="p-4 border border-gray-300 rounded-md space-y-3">
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-700 flex items-center">
              <Trophy size={18} className="mr-2" /> Award/Honor
            </h3>
            <button
              onClick={() => removeAward(award.id)}
              className="text-red-500 hover:text-red-700 transition-colors"
              aria-label="Remove award"
            >
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="space-y-3">
            <input
              type="text"
              value={award.title}
              onChange={(e) => handleChange(award.id, 'title', e.target.value)}
              placeholder="Award Title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            <input
              type="text"
              value={award.issuer}
              onChange={(e) => handleChange(award.id, 'issuer', e.target.value)}
              placeholder="Awarding Organization"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            <input
              type="text"
              value={award.date}
              onChange={(e) => handleChange(award.id, 'date', e.target.value)}
              placeholder="Date Received"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            <textarea
              value={award.description}
              onChange={(e) => handleChange(award.id, 'description', e.target.value)}
              placeholder="Description (why you received it, significance)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[60px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AwardsForm;