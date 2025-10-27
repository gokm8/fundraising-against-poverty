import { Main } from "@/components/ds";
import { Hero } from "@/app/_components/Hero";
import { LogoSpinner } from "@/app/_components/LogoSpinner";
import { Cards } from "@/app/_components/Cards";
import { CTA } from "@/app/_components/wrapper/CTA";

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
