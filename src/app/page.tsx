import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { WorkExperienceSection } from "@/components/sections/work-experience";
import { EducationSection } from "@/components/sections/education";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { GitHubActivitySection } from "@/components/sections/github-activity";
import { GetInTouchSection } from "@/components/sections/get-in-touch";
import { FloatingDock } from "@/components/floating-dock";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 md:px-8 py-16">
        <HeroSection />
        <div className="space-y-12">
          <AboutSection />
          <WorkExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <SkillsSection />
          <GitHubActivitySection />
          <GetInTouchSection />
        </div>
      </main>
      <FloatingDock />
    </div>
  );
}
