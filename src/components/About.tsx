import { useState } from "react";
import { Button } from "@/components/ui/button";
import aboutWoman from "@/assets/about-woman.png";

const tabs = ["Our Mission", "Our Vision", "Our Values"];

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                We are
                <br />
                Femsa Group
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`text-left text-sm font-medium py-2 px-4 rounded transition-colors ${
                    activeTab === i
                      ? "text-secondary border-l-4 border-secondary bg-secondary/5"
                      : "text-muted-foreground hover:text-foreground border-l-4 border-transparent"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <Button variant="cta" size="lg">
              Read More
            </Button>

            <div className="pt-6">
              <img
                src={aboutWoman}
                alt="FEMSA professional"
                className="rounded-lg shadow-xl max-w-xs"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-5 text-muted-foreground text-sm leading-relaxed">
            <p>
              FEMSA Group is a dynamic and diversified corporation committed to delivering
              innovative solutions for clients, building value for stakeholders, businesses, and
              communities. Built on a foundation of integrity, collaboration, and trust, FEMSA
              Group specializes in sustainable growth across diverse sectors, creating meaningful
              opportunities for partners and clients. From its roots as a visionary enterprise to its
              position as a trusted market leader.
            </p>
            <p>
              At FEMSA Group, we understand the importance of building a solid infrastructure to make
              clients' goals, aspirations, innovations, and reality. Whether in consulting services or
              investing, FEMSA Group's diverse and rich product and service innovation models are
              creating pathways for success. We are not just a business; we are a partner you can trust,
              building relationships based on transparency, trust, and shared prosperity.
            </p>
            <p>
              With a clear commitment to its impact, FEMSA Group invites you to join us in bringing
              confidence in partnership, lasting impact, and real change. Dive deeper into our vision to
              create opportunities, capitalize on trends, set standards, and deliver results that surpass
              expectations. In each initiative, our people's innovative approach and solutions serve
              clients, and stakeholders can depend on to navigate challenges and unlock
              opportunities.
            </p>
            <p>
              Our work stands for a building force for shaping a future where individuals and
              organizations alike thrive. From global market ventures, institution building, FEMSA
              Group isn't just leading this story of innovation, empowerment, and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
