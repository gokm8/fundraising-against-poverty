import { Container, Section } from "@/components/ds";
import Image from "next/image";

export const Header = () => {
    return (
        <Section>
            <Container className="grid md:grid-cols-2 gap-4 md:gap-8">
                <div className="flex flex-col gap-4">
                    <h1>Vores mission</h1>
                    <p className="[text-align:justify] [hyphens:auto]">
                        Vi hjælper udsatte børn i Østtyrkiet med adgang til mad,
                        tøj, tryghed og mulighed for at gå i skole. Mange
                        familier lever i fattigdom og kæmper for at give deres
                        børn en stabil hverdag.
                    </p>
                    <p className="[text-align:justify] [hyphens:auto]">
                        Vi samarbejder med lokale kræfter, der kender behovene
                        bedst, så hjælpen gør en reel forskel og giver børnene
                        og deres familier bedre muligheder og håb for fremtiden.
                    </p>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <Image
                        src="/poverty.jpg"
                        alt="Last Tour"
                        width={1000}
                        height={1000}
                        className="rounded-lg"
                    />
                </div>
            </Container>
        </Section>
    );
};
