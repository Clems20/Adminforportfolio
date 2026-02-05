import { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input, Textarea } from '../ui/Input';
import { ArrowLeft, Upload, X, Plus, GripVertical, Eye } from 'lucide-react';

interface ProjectSection {
  id: string;
  type: 'text' | 'image' | 'images';
  title: string;
  content?: string;
  images?: string[];
}

interface ProjectEditorProps {
  project?: any;
  onClose: () => void;
  onSave: (project: any) => void;
}

export function ProjectEditor({ project, onClose, onSave }: ProjectEditorProps) {
  const [category, setCategory] = useState(project?.category || 'Product Design');
  const [year, setYear] = useState(project?.year || '2024');
  const [title, setTitle] = useState(project?.title || '');
  const [heroDescription, setHeroDescription] = useState(project?.heroDescription || '');
  const [heroImages, setHeroImages] = useState<string[]>(project?.heroImages || []);
  const [overview, setOverview] = useState(project?.overview || '');
  const [objectives, setObjectives] = useState<string[]>(project?.objectives || ['']);
  const [sections, setSections] = useState<ProjectSection[]>(project?.sections || [
    { id: '1', type: 'text', title: 'User Research', content: '' },
    { id: '2', type: 'images', title: 'User Research', images: [] },
    { id: '3', type: 'text', title: 'Wireframes and Concept Testing', content: '' },
    { id: '4', type: 'images', title: 'Wireframes and Concept Testing', images: [] },
    { id: '5', type: 'text', title: 'Final Design', content: '' },
    { id: '6', type: 'images', title: 'Final Design', images: [] },
  ]);
  const [lessonsLearned, setLessonsLearned] = useState<string[]>(project?.lessonsLearned || ['']);
  const [previewMode, setPreviewMode] = useState(false);

  const addObjective = () => {
    setObjectives([...objectives, '']);
  };

  const updateObjective = (index: number, value: string) => {
    const updated = [...objectives];
    updated[index] = value;
    setObjectives(updated);
  };

  const removeObjective = (index: number) => {
    setObjectives(objectives.filter((_, i) => i !== index));
  };

  const addLesson = () => {
    setLessonsLearned([...lessonsLearned, '']);
  };

  const updateLesson = (index: number, value: string) => {
    const updated = [...lessonsLearned];
    updated[index] = value;
    setLessonsLearned(updated);
  };

  const removeLesson = (index: number) => {
    setLessonsLearned(lessonsLearned.filter((_, i) => i !== index));
  };

  const addSection = (type: 'text' | 'image' | 'images') => {
    const newSection: ProjectSection = {
      id: Date.now().toString(),
      type,
      title: 'New Section',
      content: type === 'text' ? '' : undefined,
      images: type === 'images' ? [] : undefined
    };
    setSections([...sections, newSection]);
  };

  const updateSection = (id: string, updates: Partial<ProjectSection>) => {
    setSections(sections.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const removeSection = (id: string) => {
    setSections(sections.filter(s => s.id !== id));
  };

  const handleSave = () => {
    onSave({
      category,
      year,
      title,
      heroDescription,
      heroImages,
      overview,
      objectives: objectives.filter(o => o.trim()),
      sections,
      lessonsLearned: lessonsLearned.filter(l => l.trim())
    });
  };

  if (previewMode) {
    return (
      <div className="flex flex-col gap-[32px]">
        {/* Preview Header */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => setPreviewMode(false)}>
            <ArrowLeft size={18} />
            Back to Editor
          </Button>
          <div className="flex gap-[12px]">
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
            <Button onClick={handleSave}>Save Project</Button>
          </div>
        </div>

        {/* Preview Content */}
        <div className="bg-[#111827] rounded-[16px] p-[48px]">
          {/* Hero Section */}
          <div className="mb-[48px]">
            <div className="flex items-center gap-[12px] mb-[24px]">
              <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#f97316] text-[14px] tracking-[0.7px] uppercase" style={{ fontVariationSettings: "'opsz' 9" }}>
                {category}
              </span>
              <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[14px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                ·
              </span>
              <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[14px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                {year}
              </span>
            </div>

            <h1 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[72px] leading-[72px] tracking-[-1.8px] mb-[24px] max-w-[896px]">
              {title || 'Project Title'}
            </h1>

            <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[20px] leading-[28px] max-w-[768px]" style={{ fontVariationSettings: "'opsz' 9" }}>
              {heroDescription || 'Project description'}
            </p>
          </div>

          {/* Hero Images */}
          {heroImages.length > 0 && (
            <div className="mb-[64px] relative">
              <div className="w-full h-[620px] bg-[#374151] rounded-[16px] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af]" style={{ fontVariationSettings: "'opsz' 9" }}>
                  Hero Image Preview
                </div>
              </div>
              {heroImages.length > 1 && (
                <div className="absolute top-[16px] right-[16px] bg-[rgba(17,24,39,0.8)] px-[12px] py-[4px] rounded-full">
                  <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#fafaf9] text-[14px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    1 / {heroImages.length}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Overview */}
          {overview && (
            <div className="mb-[48px]">
              <h2 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[32px] mb-[16px]">
                Overview
              </h2>
              <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[16px] leading-[26px] max-w-[768px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                {overview}
              </p>
            </div>
          )}

          {/* Project Objectives */}
          {objectives.filter(o => o.trim()).length > 0 && (
            <div className="mb-[48px]">
              <h2 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[32px] mb-[16px]">
                Project Objectives
              </h2>
              <div className="space-y-[12px]">
                {objectives.filter(o => o.trim()).map((objective, index) => (
                  <div key={index} className="flex gap-[12px]">
                    <div className="bg-[rgba(249,115,22,0.6)] rounded-full w-[6px] h-[6px] mt-[10px] flex-shrink-0" />
                    <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[16px] leading-[26px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dynamic Sections */}
          {sections.map((section) => (
            <div key={section.id} className="mb-[48px]">
              <h2 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[32px] mb-[16px]">
                {section.title}
              </h2>
              {section.type === 'text' && section.content && (
                <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[16px] leading-[26px] max-w-[768px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                  {section.content}
                </p>
              )}
              {section.type === 'images' && section.images && section.images.length > 0 && (
                <div className="grid grid-cols-2 gap-[16px]">
                  {section.images.map((_, idx) => (
                    <div key={idx} className="w-full h-[400px] bg-[#374151] rounded-[12px] flex items-center justify-center">
                      <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af]" style={{ fontVariationSettings: "'opsz' 9" }}>
                        Image {idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Lessons Learned */}
          {lessonsLearned.filter(l => l.trim()).length > 0 && (
            <div>
              <h2 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[32px] mb-[16px]">
                Lessons Learned
              </h2>
              <div className="space-y-[12px]">
                {lessonsLearned.filter(l => l.trim()).map((lesson, index) => (
                  <div key={index} className="flex gap-[12px]">
                    <div className="bg-[rgba(249,115,22,0.6)] rounded-full w-[6px] h-[6px] mt-[10px] flex-shrink-0" />
                    <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[16px] leading-[26px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                      {lesson}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[24px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Button variant="ghost" onClick={onClose}>
            <ArrowLeft size={18} />
            Back to Projects
          </Button>
        </div>
        <div className="flex gap-[12px]">
          <Button variant="ghost" onClick={() => setPreviewMode(true)}>
            <Eye size={18} />
            Preview
          </Button>
          <Button onClick={handleSave}>
            Save Project
          </Button>
        </div>
      </div>

      {/* Basic Information */}
      <Card padding="lg">
        <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[20px] mb-[24px]">
          Basic Information
        </h3>
        <div className="grid grid-cols-2 gap-[16px]">
          <Input
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Product Design, UX/UI Design"
          />
          <Input
            label="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="2024"
          />
        </div>
        <div className="mt-[16px]">
          <Input
            label="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Finance Dashboard Redesign"
          />
        </div>
        <div className="mt-[16px]">
          <Textarea
            label="Hero Description"
            value={heroDescription}
            onChange={(e) => setHeroDescription(e.target.value)}
            placeholder="A brief compelling description that appears below the title"
            rows={3}
          />
        </div>
      </Card>

      {/* Hero Images */}
      <Card padding="lg">
        <div className="flex items-center justify-between mb-[16px]">
          <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[20px]">
            Hero Images
          </h3>
          <Button variant="ghost" size="sm" onClick={() => setHeroImages([...heroImages, ''])}>
            <Plus size={16} />
            Add Image
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-[16px]">
          {heroImages.map((img, index) => (
            <div key={index} className="relative">
              <div className="aspect-video bg-[#374151] rounded-[8px] flex flex-col items-center justify-center gap-[8px] cursor-pointer hover:bg-[#4b5563] transition-all border-2 border-dashed border-[#9ca3af]/30">
                <Upload size={24} className="text-[#9ca3af]" />
                <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                  Upload Image {index + 1}
                </span>
              </div>
              <button
                onClick={() => setHeroImages(heroImages.filter((_, i) => i !== index))}
                className="absolute -top-[8px] -right-[8px] bg-[#dc2626] rounded-full p-[4px] hover:bg-[#b91c1c] transition-all"
              >
                <X size={14} className="text-white" />
              </button>
            </div>
          ))}
          {heroImages.length === 0 && (
            <div className="aspect-video bg-[#374151] rounded-[8px] flex flex-col items-center justify-center gap-[8px] cursor-pointer hover:bg-[#4b5563] transition-all border-2 border-dashed border-[#9ca3af]/30"
              onClick={() => setHeroImages([''])}
            >
              <Upload size={24} className="text-[#9ca3af]" />
              <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                Upload Hero Image
              </span>
            </div>
          )}
        </div>
      </Card>

      {/* Overview */}
      <Card padding="lg">
        <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[20px] mb-[16px]">
          Overview
        </h3>
        <Textarea
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
          placeholder="Write a comprehensive overview of the project..."
          rows={6}
        />
      </Card>

      {/* Project Objectives */}
      <Card padding="lg">
        <div className="flex items-center justify-between mb-[16px]">
          <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[20px]">
            Project Objectives
          </h3>
          <Button variant="ghost" size="sm" onClick={addObjective}>
            <Plus size={16} />
            Add Objective
          </Button>
        </div>
        <div className="space-y-[12px]">
          {objectives.map((objective, index) => (
            <div key={index} className="flex gap-[8px]">
              <Input
                value={objective}
                onChange={(e) => updateObjective(index, e.target.value)}
                placeholder="Enter objective..."
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeObjective(index)}
                disabled={objectives.length === 1}
              >
                <X size={16} />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Dynamic Sections */}
      <Card padding="lg">
        <div className="flex items-center justify-between mb-[24px]">
          <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[20px]">
            Content Sections
          </h3>
          <div className="flex gap-[8px]">
            <Button variant="ghost" size="sm" onClick={() => addSection('text')}>
              <Plus size={16} />
              Text Section
            </Button>
            <Button variant="ghost" size="sm" onClick={() => addSection('images')}>
              <Plus size={16} />
              Image Gallery
            </Button>
          </div>
        </div>
        <div className="space-y-[16px]">
          {sections.map((section, index) => (
            <div key={section.id} className="p-[16px] bg-[#111827] rounded-[12px] border border-[#374151]">
              <div className="flex items-center gap-[12px] mb-[16px]">
                <GripVertical size={16} className="text-[#9ca3af] cursor-move" />
                <Input
                  value={section.title}
                  onChange={(e) => updateSection(section.id, { title: e.target.value })}
                  placeholder="Section title"
                  className="flex-1"
                />
                <Button variant="ghost" size="sm" onClick={() => removeSection(section.id)}>
                  <X size={16} />
                </Button>
              </div>

              {section.type === 'text' && (
                <Textarea
                  value={section.content || ''}
                  onChange={(e) => updateSection(section.id, { content: e.target.value })}
                  placeholder="Write section content..."
                  rows={4}
                />
              )}

              {section.type === 'images' && (
                <div>
                  <div className="grid grid-cols-3 gap-[12px]">
                    {(section.images || []).map((img, imgIndex) => (
                      <div key={imgIndex} className="relative">
                        <div className="aspect-video bg-[#374151] rounded-[8px] flex items-center justify-center cursor-pointer hover:bg-[#4b5563] transition-all">
                          <Upload size={20} className="text-[#9ca3af]" />
                        </div>
                        <button
                          onClick={() => {
                            const updated = [...(section.images || [])];
                            updated.splice(imgIndex, 1);
                            updateSection(section.id, { images: updated });
                          }}
                          className="absolute -top-[6px] -right-[6px] bg-[#dc2626] rounded-full p-[3px] hover:bg-[#b91c1c]"
                        >
                          <X size={12} className="text-white" />
                        </button>
                      </div>
                    ))}
                    <div
                      onClick={() => {
                        const updated = [...(section.images || []), ''];
                        updateSection(section.id, { images: updated });
                      }}
                      className="aspect-video bg-[#374151] rounded-[8px] flex flex-col items-center justify-center gap-[6px] cursor-pointer hover:bg-[#4b5563] transition-all border-2 border-dashed border-[#9ca3af]/30"
                    >
                      <Plus size={20} className="text-[#9ca3af]" />
                      <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[11px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                        Add Image
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Lessons Learned */}
      <Card padding="lg">
        <div className="flex items-center justify-between mb-[16px]">
          <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[20px]">
            Lessons Learned
          </h3>
          <Button variant="ghost" size="sm" onClick={addLesson}>
            <Plus size={16} />
            Add Lesson
          </Button>
        </div>
        <div className="space-y-[12px]">
          {lessonsLearned.map((lesson, index) => (
            <div key={index} className="flex gap-[8px]">
              <Textarea
                value={lesson}
                onChange={(e) => updateLesson(index, e.target.value)}
                placeholder="Enter lesson learned..."
                rows={2}
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeLesson(index)}
                disabled={lessonsLearned.length === 1}
              >
                <X size={16} />
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
