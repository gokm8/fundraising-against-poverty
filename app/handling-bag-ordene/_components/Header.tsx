import { Container, Section } from "@/components/ds";

export const Header = () => {
    return (
        <Section>
            <Container>
                <h1 className="text-2xl font-bold">Handling bag ordene</h1>
                <p className="text-base">
                    Her kan du finde information om hvordan vi håndterer ordene.
                </p>
            </Container>
        </Section>
    );
};
