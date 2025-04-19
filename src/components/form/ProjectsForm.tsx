import React from 'react';
import { useCV } from '../../context/CVContext';
import { FolderKanban, Plus, Trash2 } from 'lucide-react';

const ProjectsForm: React.FC = () => {
  const { cvData, addProject, updateProject, removeProject } = useCV();
  const { projects } = cvData;

  const handleChange = (id: string, field: string, value: string) => {
    updateProject(id, field, value);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Projects</h2>
        <button
          onClick={addProject}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-1 rounded-md flex items-center text-sm"
        >
          <Plus size={16} className="mr-1" /> Add
        </button>
      </div>
      
      {projects.length === 0 && (
        <p className="text-sm text-gray-500 italic">
          No projects added yet. Showcase your work by adding relevant personal or professional projects.
        </p>
      )}

      {projects.map((project) => (
        <div key={project.id} className="p-4 border border-gray-300 rounded-md space-y-3">
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-700 flex items-center">
              <FolderKanban size={18} className="mr-2" /> Project
            </h3>
            <button
              onClick={() => removeProject(project.id)}
              className="text-red-500 hover:text-red-700 transition-colors"
              aria-label="Remove project"
            >
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="space-y-3">
            <input
              type="text"
              value={project.name}
              onChange={(e) => handleChange(project.id, 'name', e.target.value)}
              placeholder="Project Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            <textarea
              value={project.description}
              onChange={(e) => handleChange(project.id, 'description', e.target.value)}
              placeholder="Project Description (technologies used, your role, outcomes)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[80px]"
            />
            
            <input
              type="url"
              value={project.url || ''}
              onChange={(e) => handleChange(project.id, 'url', e.target.value)}
              placeholder="Project URL (optional)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsForm;