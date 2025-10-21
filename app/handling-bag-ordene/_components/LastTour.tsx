import { Container, Section } from "@/components/ds";
import Image from "next/image";

export const LastTour = () => {
    return (
        <Section>
            <Container>
                <h2 className="text-xl font-bold">
                    Vores tidligere rejse til Østtyrkiet
                </h2>
                <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </Container>
            <Container>
                <div className="grid gap-4">
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
