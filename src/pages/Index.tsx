import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { HomeSection } from "@/components/sections/HomeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import portfolioDataImport from "@/data/portfolio.json";

const Index = () => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [portfolioData, setPortfolioData] = useState(portfolioDataImport);

  useEffect(() => {
    const savedData = localStorage.getItem("portfolioData");
    if (savedData) {
      try {
        setPortfolioData(JSON.parse(savedData));
      } catch (error) {
        console.error("Failed to parse saved data:", error);
      }
    }
  }, []);

  const handleLogoClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      navigate("/admin");
      setClickCount(0);
    }

    setTimeout(() => {
      if (clickCount < 5) {
        setClickCount(0);
      }
    }, 2000);
  };

  return (
    <div className="w-full">
      <Navigation onLogoClick={handleLogoClick} />
      <HomeSection data={portfolioData.profile} />
      <AboutSection data={{ profile: portfolioData.profile, contact: portfolioData.contact }} />
      <ExperienceSection data={portfolioData.experiences} />
      <SkillsSection data={portfolioData.skills} />
      <ProjectsSection data={portfolioData.projects} />
      <AwardsSection data={portfolioData.awards as any} />
      <ContactSection data={portfolioData.contact} />
    </div>
  );
};

export default Index;
