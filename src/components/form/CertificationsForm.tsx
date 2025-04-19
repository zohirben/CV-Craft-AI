import React from 'react';
import { useCV } from '../../context/CVContext';
import { Award, Plus, Trash2 } from 'lucide-react';

const CertificationsForm: React.FC = () => {
  const { cvData, addCertification, updateCertification, removeCertification } = useCV();
  const { certifications } = cvData;

  const handleChange = (id: string, field: string, value: string) => {
    updateCertification(id, field, value);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Certifications</h2>
        <button
          onClick={addCertification}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-1 rounded-md flex items-center text-sm"
        >
          <Plus size={16} className="mr-1" /> Add
        </button>
      </div>
      
      {certifications.length === 0 && (
        <p className="text-sm text-gray-500 italic">
          No certifications added yet. Professional certifications can enhance your credibility.
        </p>
      )}

      {certifications.map((cert) => (
        <div key={cert.id} className="p-4 border border-gray-300 rounded-md space-y-3">
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-700 flex items-center">
              <Award size={18} className="mr-2" /> Certification
            </h3>
            <button
              onClick={() => removeCertification(cert.id)}
              className="text-red-500 hover:text-red-700 transition-colors"
              aria-label="Remove certification"
            >
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="space-y-3">
            <input
              type="text"
              value={cert.name}
              onChange={(e) => handleChange(cert.id, 'name', e.target.value)}
              placeholder="Certification Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            <input
              type="text"
              value={cert.issuer}
              onChange={(e) => handleChange(cert.id, 'issuer', e.target.value)}
              placeholder="Issuing Organization"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            <input
              type="text"
              value={cert.date}
              onChange={(e) => handleChange(cert.id, 'date', e.target.value)}
              placeholder="Date Issued (e.g., May 2023)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationsForm;