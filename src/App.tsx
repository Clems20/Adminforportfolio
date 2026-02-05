import { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { Dashboard } from './components/pages/Dashboard';
import { Projects } from './components/pages/Projects';
import { About } from './components/pages/About';
import { Settings } from './components/pages/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pageConfig = {
    dashboard: {
      title: 'Dashboard',
      subtitle: 'Overview of your portfolio performance',
      component: Dashboard
    },
    projects: {
      title: 'Projects',
      subtitle: 'Manage your portfolio projects',
      component: Projects
    },
    about: {
      title: 'About & Bio',
      subtitle: 'Edit your profile and information',
      component: About
    },
    settings: {
      title: 'Settings',
      subtitle: 'Configure site settings and preferences',
      component: Settings
    }
  };

  const config = pageConfig[currentPage as keyof typeof pageConfig];
  const PageComponent = config.component;

  return (
    <div className="flex h-screen bg-[#0a0e1a] overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar currentPage={currentPage} onNavigate={(page) => {
          setCurrentPage(page);
          setSidebarOpen(false);
        }} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Top Bar */}
        <TopBar 
          title={config.title} 
          subtitle={config.subtitle}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-[16px] sm:p-[24px] lg:p-[32px]">
          <div className="max-w-[1400px] mx-auto">
            <PageComponent />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;