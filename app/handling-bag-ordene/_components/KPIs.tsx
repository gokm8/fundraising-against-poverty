import { Container, Section } from "@/components/ds";

export const KPIs = () => {
    return (
        <Section className="bg-muted">
            <Container>
                <div className="flex flex-col gap-4 items-center justify-center text-center">
                    <h2 className="text-base font-bold">
                        Vi har allerede gjort en forskel
                    </h2>
                    <div className="flex flex-row text-sm justify-between w-full">
                        <div>
                            <p>ICON</p>
                            <p>Doneret xxx</p>
                        </div>
                        <div>
                            <p>ICON</p>
                            <p>Doneret xxx</p>
                        </div>
                        <div>
                            <p>ICON</p>
                            <p>Doneret xxx</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
