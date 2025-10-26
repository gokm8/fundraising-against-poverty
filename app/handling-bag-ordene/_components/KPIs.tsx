import { Container, Section } from "@/components/ds";
import { HandCoins } from "lucide-react";
import { Users } from "lucide-react";
import { HouseHeart } from "lucide-react";

export const KPIs = () => {
    return (
        <Section className="bg-muted">
            <Container className="max-w-5xl">
                <div className="flex flex-col gap-4 items-center justify-center text-center">
                    <h2 className="text-base font-bold">
                        Vi har allerede gjort en forskel
                    </h2>
                    <div className="flex flex-col md:flex-row text-sm justify-between w-full gap-4">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                            <HandCoins className="w-8 h-8" />
                            <p>73.580 DKK indsamlet</p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                            <Users className="w-8 h-8" />
                            <p>1.200 børn støttet</p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                            <HouseHeart className="w-8 h-8" />
                            <p>8 landsbyer hjulpet</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
