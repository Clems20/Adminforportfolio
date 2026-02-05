import { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input, Textarea } from '../ui/Input';
import { Plus, LayoutGrid, List, MoreVertical, Edit, Trash2, ExternalLink, ArrowLeft, Clock, Users, Target } from 'lucide-react';
import { ProjectEditor } from './ProjectEditor';

import financeImg from 'figma:asset/dc28c46c1756d61425d0d6a85268e61d09c3f388.png';
import workspaceImg from 'figma:asset/0d058a14b8510e94ac2ef1f4ae09422d2d81c27e.png';
import bankingImg from 'figma:asset/c3074eb24da5c82213d541047b7eabba25212e32.png';

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  link: string;
  image: string;
  role: string;
  duration: string;
  team: string;
  overview: string;
  objectives: string[];
  challenge: string;
  solution: string;
  impact: string[];
  lessonsLearned: string[];
}

export function Projects() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Finance Dashboard Redesign',
      description: 'A comprehensive redesign of a financial dashboard with improved UX',
      tools: ['Figma', 'Protopie', 'Miro'],
      link: '#',
      image: financeImg,
      role: 'Lead Product Designer',
      duration: '3 months',
      team: '4 designers, 6 developers',
      overview: 'The Finance Dashboard Redesign project aimed to transform a complex financial platform into an intuitive, user-friendly experience. Through extensive user research and iterative design, we created a dashboard that empowers users to make informed financial decisions quickly and confidently.',
      objectives: [
        'Simplify complex financial data visualization',
        'Improve task completion time by 40%',
        'Enhance mobile responsiveness',
        'Increase user engagement and daily active users'
      ],
      challenge: 'The existing dashboard was cluttered with information, making it difficult for users to find key metrics. Users reported feeling overwhelmed and struggled to complete basic tasks efficiently.',
      solution: 'We implemented a modular card-based layout, progressive disclosure patterns, and customizable widgets. Key metrics were prioritized based on user research, and we introduced smart filters to help users focus on what matters most.',
      impact: [
        '45% reduction in task completion time',
        '60% increase in user satisfaction scores',
        '30% increase in daily active users',
        '25% reduction in support tickets'
      ],
      lessonsLearned: [
        'User research is critical - assumptions about user needs were often incorrect',
        'Progressive disclosure helps manage complexity without removing functionality',
        'Regular stakeholder alignment prevents scope creep and maintains project focus'
      ]
    },
    {
      id: 2,
      title: 'Collaborative Workspace Platform',
      description: 'Modern workspace solution enabling seamless team collaboration',
      tools: ['Sketch', 'Adobe XD', 'Principle'],
      link: '#',
      image: workspaceImg,
      role: 'Senior UX Designer',
      duration: '4 months',
      team: '3 designers, 8 developers, 2 PMs',
      overview: 'Collaborative Workspace Platform is designed to revolutionize how distributed teams work together. By combining project management, communication, and file sharing in one seamless experience, we created a platform that adapts to how teams actually work.',
      objectives: [
        'Create unified workspace for distributed teams',
        'Reduce context switching between tools',
        'Improve team communication efficiency',
        'Enable real-time collaboration on documents'
      ],
      challenge: 'Teams were using 5-7 different tools for collaboration, leading to fragmented communication, lost information, and decreased productivity. There was no single source of truth for project status.',
      solution: 'We designed an integrated platform with intelligent notifications, unified search across all content types, and real-time collaboration features. The interface adapts to different team sizes and workflows through customizable layouts.',
      impact: [
        '50% reduction in tools used per team',
        '35% improvement in project delivery time',
        '70% increase in cross-team collaboration',
        '40% reduction in missed deadlines'
      ],
      lessonsLearned: [
        'One size doesn\'t fit all - flexible configurations are essential for diverse teams',
        'Real-time features require careful UX consideration to avoid overwhelming users',
        'Onboarding is make-or-break for platform adoption'
      ]
    },
    {
      id: 3,
      title: 'Mobile Banking for Gen Z',
      description: 'Next-gen mobile banking app tailored for young adults',
      tools: ['Figma', 'Invision', 'Zeplin'],
      link: '#',
      image: bankingImg,
      role: 'Product Designer',
      duration: '5 months',
      team: '5 designers, 10 developers',
      overview: 'Mobile Banking for Gen Z reimagines banking for digital natives. With gamification, social features, and AI-powered insights, we created a banking experience that feels native to how Gen Z manages their financial lives.',
      objectives: [
        'Attract and retain Gen Z users (18-25)',
        'Make financial literacy engaging and accessible',
        'Integrate social and community features',
        'Provide personalized financial guidance'
      ],
      challenge: 'Traditional banking apps were seen as boring and complicated by Gen Z users. There was a trust gap and lack of engagement with financial planning features.',
      solution: 'We introduced achievement-based savings goals, peer-to-peer payment with social elements, AI-powered spending insights with personality, and bite-sized financial education. The visual design uses vibrant colors and micro-interactions.',
      impact: [
        '200% increase in Gen Z user acquisition',
        '80% monthly active user rate',
        '3x engagement with savings features',
        '90% positive app store rating'
      ],
      lessonsLearned: [
        'Gen Z values authenticity - corporate language doesn\'t resonate',
        'Gamification must feel meaningful, not manipulative',
        'Privacy and security transparency builds trust with younger users'
      ]
    },
  ];

  // Show comprehensive editor for creating or editing
  if (showCreateModal || editingProject) {
    return (
      <ProjectEditor
        project={editingProject}
        onClose={() => {
          setShowCreateModal(false);
          setEditingProject(null);
        }}
        onSave={(projectData) => {
          console.log('Saving project:', projectData);
          setShowCreateModal(false);
          setEditingProject(null);
        }}
      />
    );
  }

  // Show project detail view
  if (selectedProject) {
    return (
      <div className="flex flex-col gap-[32px]">
        {/* Back Button */}
        <div>
          <Button variant="ghost" onClick={() => setSelectedProject(null)}>
            <ArrowLeft size={18} />
            Back to Projects
          </Button>
        </div>

        {/* Hero Section */}
        <div>
          <h1 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[32px] sm:text-[48px] leading-[36px] sm:leading-[48px] tracking-[-1.2px] mb-[16px]">
            {selectedProject.title}
          </h1>
          <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[29.25px] max-w-[768px]" style={{ fontVariationSettings: "'opsz' 9" }}>
            {selectedProject.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full rounded-[16px] overflow-hidden">
          <img 
            src={selectedProject.image} 
            alt={selectedProject.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Project Meta */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px] sm:gap-[24px]">
          <Card padding="md">
            <div className="flex items-start gap-[12px]">
              <div className="bg-[rgba(249,115,22,0.1)] rounded-full p-[10px]">
                <Users size={20} className="text-[#F97316]" />
              </div>
              <div>
                <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[12px] mb-[4px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                  Role
                </p>
                <p className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[16px]">
                  {selectedProject.role}
                </p>
              </div>
            </div>
          </Card>
          
          <Card padding="md">
            <div className="flex items-start gap-[12px]">
              <div className="bg-[rgba(249,115,22,0.1)] rounded-full p-[10px]">
                <Clock size={20} className="text-[#F97316]" />
              </div>
              <div>
                <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[12px] mb-[4px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                  Duration
                </p>
                <p className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[16px]">
                  {selectedProject.duration}
                </p>
              </div>
            </div>
          </Card>

          <Card padding="md">
            <div className="flex items-start gap-[12px]">
              <div className="bg-[rgba(249,115,22,0.1)] rounded-full p-[10px]">
                <Target size={20} className="text-[#F97316]" />
              </div>
              <div>
                <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[12px] mb-[4px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                  Team
                </p>
                <p className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[16px]">
                  {selectedProject.team}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Overview */}
        <Card padding="lg">
          <h2 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[32px] mb-[16px]">
            Overview
          </h2>
          <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[16px] leading-[26px] max-w-[768px]" style={{ fontVariationSettings: "'opsz' 9" }}>
            {selectedProject.overview}
          </p>
        </Card>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[24px]">
          {/* Project Objectives */}
          <Card padding="lg">
            <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[20px] sm:text-[24px] mb-[16px]">
              Project Objectives
            </h3>
            <div className="space-y-[12px]">
              {selectedProject.objectives.map((objective, index) => (
                <div key={index} className="flex gap-[12px]">
                  <div className="bg-[rgba(249,115,22,0.6)] rounded-full w-[6px] h-[6px] mt-[10px] flex-shrink-0" />
                  <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[16px] leading-[26px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    {objective}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Tools Used */}
          <Card padding="lg">
            <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[20px] sm:text-[24px] mb-[16px]">
              Tools Used
            </h3>
            <div className="flex flex-wrap gap-[12px]">
              {selectedProject.tools.map((tool) => (
                <div
                  key={tool}
                  className="px-[16px] py-[8px] bg-[rgba(249,115,22,0.1)] text-[#F97316] rounded-[8px] font-['Space_Grotesk:Regular',sans-serif] text-[14px] sm:text-[16px] border border-[#F97316]/20"
                >
                  {tool}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Challenge */}
        <Card padding="lg">
          <h2 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[24px] sm:text-[32px] mb-[16px]">
            The Challenge
          </h2>
          <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[16px] leading-[26px] max-w-[768px]" style={{ fontVariationSettings: "'opsz' 9" }}>
            {selectedProject.challenge}
          </p>
        </Card>

        {/* Solution */}
        <Card padding="lg">
          <h2 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[24px] sm:text-[32px] mb-[16px]">
            The Solution
          </h2>
          <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[16px] leading-[26px] max-w-[768px]" style={{ fontVariationSettings: "'opsz' 9" }}>
            {selectedProject.solution}
          </p>
        </Card>

        {/* Impact */}
        <Card padding="lg">
          <h2 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[24px] sm:text-[32px] mb-[16px] sm:mb-[24px]">
            Impact & Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            {selectedProject.impact.map((item, index) => (
              <div 
                key={index}
                className="p-[20px] bg-[rgba(249,115,22,0.05)] rounded-[12px] border border-[#374151]"
              >
                <div className="flex gap-[12px]">
                  <div className="bg-[rgba(249,115,22,0.6)] rounded-full w-[6px] h-[6px] mt-[10px] flex-shrink-0" />
                  <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#fafaf9] text-[16px] leading-[26px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Lessons Learned */}
        <Card padding="lg">
          <h2 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[32px] mb-[16px]">
            Lessons Learned
          </h2>
          <div className="space-y-[12px]">
            {selectedProject.lessonsLearned.map((lesson, index) => (
              <div key={index} className="flex gap-[12px]">
                <div className="bg-[rgba(249,115,22,0.6)] rounded-full w-[6px] h-[6px] mt-[10px] flex-shrink-0" />
                <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[16px] leading-[26px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                  {lesson}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Actions */}
        <div className="flex gap-[12px] justify-end pt-[24px] border-t border-[#374151]">
          <Button variant="ghost">
            <Edit size={18} />
            Edit Project
          </Button>
          <Button variant="secondary">
            <ExternalLink size={18} />
            View Live
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[24px]">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px]">
        <div className="flex items-center gap-[12px]">
          <Button
            variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <LayoutGrid size={16} />
            <span className="hidden sm:inline">Grid</span>
          </Button>
          <Button
            variant={viewMode === 'list' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List size={16} />
            <span className="hidden sm:inline">List</span>
          </Button>
        </div>

        <Button onClick={() => setShowCreateModal(true)}>
          <Plus size={18} />
          <span className="hidden sm:inline">New Project</span>
          <span className="sm:hidden">New</span>
        </Button>
      </div>

      {/* Projects Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[24px]">
          {projects.map((project) => (
            <Card key={project.id} padding="md">
              <div className="flex flex-col gap-[16px]">
                {/* Project Image */}
                <div 
                  className="w-full h-[160px] rounded-[8px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Info */}
                <div>
                  <h3 
                    className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[16px] mb-[8px] cursor-pointer hover:text-[#F97316] transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>
                  <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[14px] leading-[20px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    {project.description}
                  </p>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-[8px]">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-[8px] py-[4px] bg-[rgba(249,115,22,0.1)] text-[#F97316] rounded-[4px] font-['DM_Sans:9pt_Regular',sans-serif] text-[12px]"
                      style={{ fontVariationSettings: "'opsz' 9" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-[8px] pt-[8px] border-t border-[#374151]">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setEditingProject(project)}
                  >
                    <Edit size={14} />
                    Edit
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink size={14} />
                    Live
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      if (confirm(`Are you sure you want to delete "${project.title}"?`)) {
                        console.log('Deleting project:', project.id);
                      }
                    }}
                  >
                    <Trash2 size={14} className="text-[#dc2626]" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card padding="md">
          <div className="space-y-[16px]">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex items-center gap-[24px] py-[16px] border-b border-[#374151] last:border-0"
              >
                <div 
                  className="w-[80px] h-[80px] rounded-[8px] flex-shrink-0 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 
                    className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[16px] mb-[4px] cursor-pointer hover:text-[#F97316] transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>
                  <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[14px] mb-[8px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    {project.description}
                  </p>
                  <div className="flex gap-[8px]">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-[8px] py-[2px] bg-[rgba(249,115,22,0.1)] text-[#F97316] rounded-[4px] font-['DM_Sans:9pt_Regular',sans-serif] text-[12px]"
                        style={{ fontVariationSettings: "'opsz' 9" }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-[8px]">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setEditingProject(project)}
                  >
                    <Edit size={14} />
                    Edit
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink size={14} />
                    Live
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      if (confirm(`Are you sure you want to delete "${project.title}"?`)) {
                        console.log('Deleting project:', project.id);
                      }
                    }}
                  >
                    <Trash2 size={14} className="text-[#dc2626]" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Create Modal (simplified) */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowCreateModal(false)}>
          <div className="w-[600px]" onClick={(e) => e.stopPropagation()}>
            <Card padding="lg">
              <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[20px] mb-[24px]">
                Create New Project
              </h3>
              
              <div className="flex flex-col gap-[16px]">
                <Input label="Project Title" placeholder="Enter project title" />
                <Textarea label="Short Description" placeholder="Brief description of the project" />
                <Input label="Tools Used" placeholder="Figma, Adobe XD, etc." />
                <Input label="External Link" placeholder="https://..." />
                
                <div className="flex gap-[12px] mt-[16px]">
                  <Button className="flex-1" onClick={() => setShowCreateModal(false)}>
                    Create Project
                  </Button>
                  <Button variant="ghost" onClick={() => setShowCreateModal(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}