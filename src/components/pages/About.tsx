import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input, Textarea } from '../ui/Input';
import { Upload, Save } from 'lucide-react';

export function About() {
  return (
    <div className="flex flex-col gap-[24px]">
      {/* Profile Image */}
      <Card padding="md">
        <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[18px] mb-[16px]">
          Profile Image
        </h3>
        
        <div className="flex items-start gap-[24px]">
          <div className="w-[120px] h-[120px] rounded-full bg-[#374151] flex items-center justify-center overflow-hidden">
            <span className="font-['Space_Grotesk:Regular',sans-serif] text-[#9ca3af] text-[48px]">
              AD
            </span>
          </div>
          
          <div className="flex-1">
            <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[14px] mb-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
              Upload a professional photo that will appear in your portfolio header. Recommended size: 400x400px
            </p>
            <Button variant="secondary" size="sm">
              <Upload size={16} />
              Upload New Image
            </Button>
          </div>
        </div>
      </Card>

      {/* About Section */}
      <Card padding="md">
        <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[18px] mb-[16px]">
          About Section
        </h3>
        
        <div className="flex flex-col gap-[16px]">
          <Input 
            label="Headline" 
            defaultValue="I design things people actually enjoy using"
            placeholder="Your professional headline"
          />
          
          <Textarea 
            label="Bio / Introduction"
            defaultValue="As a passionate product designer, I specialize in creating user-centered experiences that solve real problems. With over 5 years of experience in the industry, I've had the privilege of working with startups and established companies..."
            rows={8}
            placeholder="Write your professional bio"
          />
        </div>
      </Card>

      {/* Focus Areas */}
      <Card padding="md">
        <div className="flex items-center justify-between mb-[16px]">
          <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[18px]">
            Focus Areas
          </h3>
          <Button variant="ghost" size="sm">
            Add Focus Area
          </Button>
        </div>
        
        <div className="space-y-[12px]">
          {[
            { area: 'UX Research', description: 'Understanding user needs through research and analysis' },
            { area: 'UI Design', description: 'Creating beautiful and functional interfaces' },
            { area: 'Prototyping', description: 'Building interactive prototypes to test ideas' }
          ].map((focus, index) => (
            <div 
              key={index}
              className="p-[16px] bg-[#111827] rounded-[8px] border border-[#374151]"
            >
              <div className="flex flex-col gap-[8px]">
                <Input 
                  label="Focus Area"
                  defaultValue={focus.area}
                  placeholder="e.g., UX Research"
                />
                <Textarea 
                  label="Description"
                  defaultValue={focus.description}
                  rows={2}
                  placeholder="Brief description"
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Contact Information */}
      <Card padding="md">
        <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[18px] mb-[16px]">
          Contact Information
        </h3>
        
        <div className="flex flex-col gap-[16px]">
          {/* Email */}
          <Input 
            label="Email Address" 
            defaultValue="your.email@example.com" 
            type="email"
            placeholder="your.email@example.com"
          />
          
          {/* Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            <Input 
              label="LinkedIn URL" 
              defaultValue="https://linkedin.com/in/yourprofile" 
              placeholder="https://linkedin.com/in/yourprofile"
            />
            <Input 
              label="Twitter/X URL" 
              defaultValue="https://x.com/yourhandle" 
              placeholder="https://x.com/yourhandle"
            />
            <Input 
              label="Instagram URL" 
              defaultValue="https://instagram.com/yourhandle" 
              placeholder="https://instagram.com/yourhandle"
            />
            <Input 
              label="Dribbble URL" 
              defaultValue="https://dribbble.com/yourprofile" 
              placeholder="https://dribbble.com/yourprofile"
            />
          </div>
          
          {/* Location & Availability */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            <Input 
              label="Location" 
              defaultValue="San Francisco, CA" 
              placeholder="City, State/Country"
            />
            <Input 
              label="Availability Status" 
              defaultValue="Open to opportunities" 
              placeholder="e.g., Available for freelance"
            />
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end gap-[12px]">
        <Button variant="ghost">Cancel</Button>
        <Button>
          <Save size={18} />
          Save Changes
        </Button>
      </div>
    </div>
  );
}