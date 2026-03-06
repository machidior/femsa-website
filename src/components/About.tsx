import { useState } from "react";
import { Button } from "@/components/ui/button";
import aboutWoman from "@/assets/about-woman.png";
import heroPeople from "@/assets/hero-people.png";

const tabs = ["Our Mission", "Our Vision", "Our Values"];

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = {
    0: {
      title: "Our Mission",
      content: "To empower businesses with innovative solutions, strategic guidance, and resources that drive sustainable growth, trust, and long-term success for our clients and partners."
    },
    1: {
      title: "Our Vision", 
      content: "To be the leading partner in business transformation, creating value through excellence, innovation, and unwavering commitment to our stakeholders' success."
    },
    2: {
      title: "Our Values",
      content: "Integrity, collaboration, trust, and innovation form the foundation of everything we do, guiding our decisions and actions in building lasting partnerships."
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images and Tabs */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src={aboutWoman}
                alt="FEMSA professional"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>

            <div className="space-y-4">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left text-base font-semibold py-4 px-6 rounded-lg transition-all ${
                    activeTab === i
                      ? "text-secondary-foreground bg-secondary shadow-lg"
                      : "text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                We are
                <br />
                <span className="text-secondary">Femsa Group</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tabContent[activeTab].content}
                </p>
              </div>

              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  FEMSA Group is a dynamic and diversified corporation committed to delivering
                  innovative solutions for clients, building value for stakeholders, businesses, and
                  communities. Built on a foundation of integrity, collaboration, and trust, FEMSA
                  Group specializes in sustainable growth across diverse sectors.
                </p>
                <p>
                  We understand the importance of building solid infrastructure to make clients' goals,
                  aspirations, and innovations a reality. Our diverse and rich product and service
                  innovation models are creating pathways for success.
                </p>
              </div>

              <Button variant="cta" size="lg" className="px-8 py-6 text-base">
                Read More
              </Button>
            </div>

            {/* Team image */}
            <div className="flex justify-end">
              <img
                src={heroPeople}
                alt="FEMSA team"
                className="max-w-xs rounded-lg shadow-xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
