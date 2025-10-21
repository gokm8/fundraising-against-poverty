import { Main, Section, Container } from "@/components/ds";
import { Hero } from "@/app/_components/Hero";
import { Marquee } from "@/components/ui/shadcn-io/marquee";
import { LogoSpinner } from "@/app/_components/LogoSpinner";

export default function Home() {
    return (
        <Main>
            <Hero />
            <LogoSpinner />
        </Main>
    );
}
