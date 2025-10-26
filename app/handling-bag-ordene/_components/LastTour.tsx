import { Container, Section } from "@/components/ds";
import Image from "next/image";

export const LastTour = () => {
    return (
        <Section>
            <Container>
                <div className="flex flex-col gap-4">
                    <h2>Vores tidligere rejse til Østtyrkiet</h2>
                    <p>
                        I 2024 rejste vi til Østtyrkiet for at støtte børn og
                        familier, der lever under barske økonomiske vilkår. Vi
                        mødte mennesker, der kæmper for helt basale behov som
                        varme, tøj og skolegang. Vores arbejde handler ikke om
                        store ord eller fine løfter, men om konkret hjælp, der
                        mærkes i hverdagen.
                    </p>
                </div>
            </Container>
            <Container>
                <div className="grid gap-4 md:grid-cols-2">
                    <Image
                        src="/poverty.jpg"
                        alt="Last Tour"
                        width={1000}
                        height={1000}
                        className="rounded-lg"
                    />
                    <Image
                        src="/poverty.jpg"
                        alt="Last Tour"
                        width={1000}
                        height={1000}
                        className="rounded-lg"
                    />
                    <Image
                        src="/poverty.jpg"
                        alt="Last Tour"
                        width={1000}
                        height={1000}
                        className="rounded-lg"
                    />
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
