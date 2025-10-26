import { Container, Section } from "@/components/ds";
import Image from "next/image";

export const Header = () => {
    return (
        <Section>
            <Container className="grid md:grid-cols-2 gap-4 md:gap-8">
                <div className="flex flex-col gap-4">
                    <h1>Handling bag ordene</h1>
                    <p className="[text-align:justify] [hyphens:auto]">
                        I 2024 rejste vi til Østtyrkiet for at støtte børn og
                        familier, der lever under barske økonomiske vilkår.
                    </p>
                    <p className="[text-align:justify] [hyphens:auto]">
                        Vi mødte mennesker, der kæmper for helt basale behov som
                        varme, tøj og skolegang. Vores arbejde handler ikke om
                        store ord eller fine løfter, men om konkret hjælp, der
                        mærkes i hverdagen.
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
