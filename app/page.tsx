import { Main, Section, Container } from "@/components/ds";
import { Hero } from "@/app/_components/Hero";
import { Marquee } from "@/components/ui/shadcn-io/marquee";
import { LogoSpinner } from "@/app/_components/LogoSpinner";
import { Cards } from "./_components/Cards";
import { CTA } from "./_components/wrapper/CTA";

export default function Home() {
    return (
        <Main>
            <Hero />
            <LogoSpinner />
            <Cards />
            <CTA />
        </Main>
    );
}
