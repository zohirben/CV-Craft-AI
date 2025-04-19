import React from 'react';
import { useCV } from '../../context/CVContext';
import { FileText } from 'lucide-react';

const SummaryForm: React.FC = () => {
  const { cvData, updateSummary } = useCV();
  const { summary } = cvData;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateSummary(e.target.value);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Professional Summary</h2>
      
      <div className="relative">
        <div className="absolute top-3 left-3 text-gray-500">
          <FileText size={18} />
        </div>
        <textarea
          value={summary}
          onChange={handleChange}
          placeholder="Write a compelling professional summary highlighting your key qualifications, experience, and career goals..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px]"
        />
      </div>
      <p className="text-xs text-gray-500">
        Tip: A strong summary is 3-5 sentences that highlights your most relevant skills and experiences. Focus on what makes you valuable to potential employers.
      </p>
    </div>
  );
};

export default SummaryForm;