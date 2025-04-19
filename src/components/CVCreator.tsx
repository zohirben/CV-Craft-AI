import React from 'react';
import CVForm from './CVForm';
import CVPreview from './preview/CVPreview';
import { CVProvider } from '../context/CVContext';
import { Toaster } from 'react-hot-toast';

const CVCreator: React.FC = () => {
  return (
    <CVProvider>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 overflow-y-auto lg:sticky lg:top-8" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
              <CVForm />
            </div>
            <div className="lg:sticky lg:top-8" style={{ maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}>
              <CVPreview />
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </CVProvider>
  );
};

export default CVCreator;