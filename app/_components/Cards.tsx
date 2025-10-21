import { Container } from "@/components/ds";
import Image from "next/image";
import { Section } from "@/components/ds";
import { Button } from "@/components/ui/button";

export const Cards = () => {
    return (
        <>
            <Section>
                <Container className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Image
                            src="/poverty.jpg"
                            alt="Poverty"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">
                            Fattigdom og ulighed
                        </h3>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book.
                        </p>
                        <br />
                        <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book.
                        </p>
                        <Button variant="secondary">Læs mere</Button>
                    </div>
                </Container>
            </Section>
            <Section>
                <Container className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-2xl font-bold">Hvem er vi?</h3>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book.
                        </p>
                        <br />
                        <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book.
                        </p>
                        <Button variant="secondary">Læs mere</Button>
                    </div>
                    <div>
                        <Image
                            src="/poverty.jpg"
                            alt="Poverty"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </Container>
            </Section>
            <Section>
                <Container className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Image
                            src="/poverty.jpg"
                            alt="Poverty"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">
                            Kom i kontakt med os
                        </h3>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book.
                        </p>
                        <br />
                        <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book.
                        </p>
                        <Button variant="secondary">Kontakt os</Button>
                    </div>
                </Container>
            </Section>
        </>
    );
};
