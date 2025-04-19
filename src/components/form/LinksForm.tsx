import React from 'react';
import { useCV } from '../../context/CVContext';
import { Link as LinkIcon, Plus, Trash2 } from 'lucide-react';

const LinksForm: React.FC = () => {
  const { cvData, addLink, updateLink, removeLink } = useCV();
  const { links } = cvData;

  const handleChange = (id: string, field: string, value: string) => {
    updateLink(id, field, value);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Links</h2>
        <button
          onClick={addLink}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-1 rounded-md flex items-center text-sm"
        >
          <Plus size={16} className="mr-1" /> Add
        </button>
      </div>
      
      {links.length === 0 && (
        <p className="text-sm text-gray-500 italic">
          No links added yet. Add your LinkedIn, GitHub, portfolio, or other professional profiles.
        </p>
      )}

      {links.map((link) => (
        <div key={link.id} className="p-4 border border-gray-300 rounded-md space-y-3">
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-700 flex items-center">
              <LinkIcon size={18} className="mr-2" /> Link
            </h3>
            <button
              onClick={() => removeLink(link.id)}
              className="text-red-500 hover:text-red-700 transition-colors"
              aria-label="Remove link"
            >
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="space-y-3">
            <input
              type="text"
              value={link.name}
              onChange={(e) => handleChange(link.id, 'name', e.target.value)}
              placeholder="Platform or Website Name (e.g., LinkedIn, GitHub)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            <input
              type="url"
              value={link.url}
              onChange={(e) => handleChange(link.id, 'url', e.target.value)}
              placeholder="URL (https://...)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinksForm;