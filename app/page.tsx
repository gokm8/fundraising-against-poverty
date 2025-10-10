import { Main, Section, Container } from "@/components/ds";

export default function Home() {
    return (
        <Main>
            <Section className="bg-primary">
                <Container className="">
                    <h1 className="text-2xl font-bold text-primary-foreground">
                        Fundraising Against Poverty
                    </h1>
                </Container>
            </Section>
        </Main>
    );
}
