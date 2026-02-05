import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input, Textarea } from '../ui/Input';
import { Save, Eye, Moon, Sun } from 'lucide-react';

export function Settings() {
  return (
    <div className="flex flex-col gap-[24px]">
      {/* Social Links */}
      <Card padding="md">
        <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[18px] mb-[16px]">
          Social Links
        </h3>
        
        <div className="grid grid-cols-2 gap-[16px]">
          <Input label="LinkedIn" placeholder="https://linkedin.com/in/..." />
          <Input label="Dribbble" placeholder="https://dribbble.com/..." />
          <Input label="Behance" placeholder="https://behance.net/..." />
          <Input label="Twitter / X" placeholder="https://twitter.com/..." />
          <Input label="Instagram" placeholder="https://instagram.com/..." />
          <Input label="GitHub" placeholder="https://github.com/..." />
        </div>
      </Card>

      {/* SEO Settings */}
      <Card padding="md">
        <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[18px] mb-[16px]">
          SEO & Meta Information
        </h3>
        
        <div className="flex flex-col gap-[16px]">
          <Input 
            label="Page Title"
            defaultValue="Portfolio - Product Designer & UX Specialist"
            placeholder="Site title for search engines"
          />
          
          <Textarea 
            label="Meta Description"
            defaultValue="Experienced product designer specializing in user-centered design and creating delightful digital experiences."
            rows={3}
            placeholder="Brief description for search results (150-160 characters)"
          />

          <div>
            <label className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[14px] mb-[8px] block">
              Open Graph Image
            </label>
            <div className="flex items-center gap-[16px]">
              <div className="w-[200px] h-[105px] bg-[#374151] rounded-[8px] flex items-center justify-center">
                <Eye size={24} className="text-[#9ca3af]" />
              </div>
              <div className="flex-1">
                <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[14px] mb-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                  This image appears when your portfolio is shared on social media. Recommended: 1200x630px
                </p>
                <Button variant="secondary" size="sm">Upload Image</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Theme Preview */}
      <Card padding="md">
        <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[18px] mb-[16px]">
          Theme Preview
        </h3>
        
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[14px] mb-[24px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          Preview of your portfolio's color scheme and key UI elements
        </p>

        <div className="grid grid-cols-2 gap-[24px]">
          {/* Dark Theme Preview */}
          <div className="p-[16px] bg-[#111827] rounded-[8px] border border-[#374151]">
            <div className="flex items-center gap-[8px] mb-[16px]">
              <Moon size={16} className="text-[#9ca3af]" />
              <span className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[14px]">
                Dark Mode
              </span>
            </div>
            
            <div className="space-y-[12px]">
              {/* Color Swatches */}
              <div className="flex gap-[8px]">
                <div className="flex-1 h-[40px] bg-[#1f2937] rounded-[4px] flex items-center justify-center">
                  <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[10px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    Card
                  </span>
                </div>
                <div className="flex-1 h-[40px] bg-[#374151] rounded-[4px] flex items-center justify-center">
                  <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[10px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    Border
                  </span>
                </div>
                <div className="flex-1 h-[40px] bg-[#F97316] rounded-[4px] flex items-center justify-center">
                  <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#fafaf9] text-[10px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    Accent
                  </span>
                </div>
              </div>

              {/* Sample Card */}
              <div className="p-[12px] bg-[#1f2937] rounded-[8px] border border-[#374151]">
                <p className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[12px] mb-[4px]">
                  Sample Heading
                </p>
                <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#9ca3af] text-[10px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                  Sample body text with secondary color
                </p>
                <div className="mt-[8px] px-[8px] py-[4px] bg-[rgba(249,115,22,0.1)] text-[#F97316] rounded-[4px] inline-block">
                  <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[10px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    Tag
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Light Theme Indication (Preview Only) */}
          <div className="p-[16px] bg-[#f5f5f5] rounded-[8px] border border-[#e5e5e5]">
            <div className="flex items-center gap-[8px] mb-[16px]">
              <Sun size={16} className="text-[#737373]" />
              <span className="font-['Space_Grotesk:Regular',sans-serif] text-[#171717] text-[14px]">
                Light Mode
              </span>
            </div>
            
            <div className="space-y-[12px]">
              <div className="flex gap-[8px]">
                <div className="flex-1 h-[40px] bg-white rounded-[4px] flex items-center justify-center border border-[#e5e5e5]">
                  <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#737373] text-[10px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    Card
                  </span>
                </div>
                <div className="flex-1 h-[40px] bg-[#e5e5e5] rounded-[4px] flex items-center justify-center">
                  <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#737373] text-[10px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    Border
                  </span>
                </div>
                <div className="flex-1 h-[40px] bg-[#F97316] rounded-[4px] flex items-center justify-center">
                  <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-white text-[10px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    Accent
                  </span>
                </div>
              </div>

              <div className="p-[12px] bg-white rounded-[8px] border border-[#e5e5e5]">
                <p className="font-['Space_Grotesk:Regular',sans-serif] text-[#171717] text-[12px] mb-[4px]">
                  Sample Heading
                </p>
                <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#737373] text-[10px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                  Sample body text with secondary color
                </p>
                <div className="mt-[8px] px-[8px] py-[4px] bg-[rgba(249,115,22,0.1)] text-[#F97316] rounded-[4px] inline-block">
                  <span className="font-['DM_Sans:9pt_Regular',sans-serif] text-[10px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    Tag
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[16px] p-[12px] bg-[rgba(249,115,22,0.1)] rounded-[8px] border border-[#F97316]/20">
          <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[#F97316] text-[14px]" style={{ fontVariationSettings: "'opsz' 9" }}>
            <strong>Note:</strong> Theme customization is currently view-only. Contact support to modify color schemes.
          </p>
        </div>
      </Card>

      {/* Analytics */}
      <Card padding="md">
        <h3 className="font-['Space_Grotesk:Regular',sans-serif] text-[#fafaf9] text-[18px] mb-[16px]">
          Analytics & Tracking
        </h3>
        
        <div className="flex flex-col gap-[16px]">
          <Input 
            label="Google Analytics ID"
            placeholder="G-XXXXXXXXXX"
          />
          <Input 
            label="Google Tag Manager ID"
            placeholder="GTM-XXXXXXX"
          />
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end gap-[12px]">
        <Button variant="ghost">Reset</Button>
        <Button>
          <Save size={18} />
          Save Settings
        </Button>
      </div>
    </div>
  );
}
