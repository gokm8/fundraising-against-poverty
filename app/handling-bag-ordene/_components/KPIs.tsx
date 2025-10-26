import { Container, Section } from "@/components/ds";
import { HandCoins, Users, HouseHeart } from "lucide-react";

const kpis = [
    {
        icon: HandCoins,
        label: "73.580 DKK indsamlet",
    },
    {
        icon: Users,
        label: "1.200 børn støttet",
    },
    {
        icon: HouseHeart,
        label: "8 landsbyer hjulpet",
    },
];

export const KPIs = () => {
    return (
        <Section className="bg-muted">
            <Container className="max-w-5xl">
                <div className="flex flex-col gap-6 items-center justify-center text-center">
                    <h2 className="text-lg font-bold md:text-2xl ">
                        Vi har allerede gjort en forskel
                    </h2>

                    <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                        {kpis.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row items-center justify-center gap-2">
                                    <Icon className="w-8 h-8 text-muted-foreground" />
                                    <p className="text-base font-semibold text-muted-foreground">
                                        {item.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    );
};
