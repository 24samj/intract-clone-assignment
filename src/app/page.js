import Navbar from "@/components/Navbar";
import Quest from "@/components/Quest";
import Certificate from "@/components/Certificate";
import TopProjects from "@/components/TopProjects";
import Dictionary from "@/components/Dictionary";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import SectionWithHeader from "@/components/SectionWithHeader";
import StickyNav from "@/components/StickyNav";
import { dictionary, quests, topProjects } from "@/utils/constants";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                {quests.map((quest, index) => (
                    <Section key={index} reverse={index % 2 !== 0}>
                        <Quest
                            quest={quest.steps}
                            title={quest.questTitle}
                            subtitle={quest.questSubtitle}
                        />
                        <Certificate
                            title={quest.certificate.title}
                            subtitle={quest.certificate.subtitle}
                            imgUrl={quest.certificate.imgUrl}
                        />
                    </Section>
                ))}
                <SectionWithHeader
                    title="Top Crypto Creators and Projects to Follow"
                    subtitle="Answers to your crypto doubts, straight from the experts">
                    <TopProjects projects={topProjects} />
                </SectionWithHeader>
                <SectionWithHeader
                    title="Crypto Dictionary"
                    subtitle="Your one-stop to catch up on all crypto terms">
                    <Dictionary
                        dictionary={dictionary}
                        imgUrl={
                            "https://images.unsplash.com/photo-1567274333060-04b18e634717?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                    />
                </SectionWithHeader>
                <StickyNav />
                <Footer />
            </main>
        </>
    );
}
