import { Container, Section } from "@/components/ds";
import {
    Marquee,
    MarqueeContent,
    MarqueeFade,
    MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
export const LogoSpinner = () => {
    return (
        <Section className="bg-muted">
            <Container>
                <div className="flex flex-col gap-4 items-center justify-center text-center">
                    <h2 className="text-xl font-bold">
                        Mange tak til vores sponsorater
                    </h2>
                    <div className="flex size-full items-center justify-center">
                        <Marquee>
                            <MarqueeContent>
                                {new Array(10).fill(null).map((_, index) => (
                                    <MarqueeItem
                                        className="h-16 w-16"
                                        key={index}>
                                        <img
                                            alt={`Placeholder ${index}`}
                                            className="overflow-hidden rounded-full"
                                            src={`https://placehold.co/128x128?random=${index}`}
                                        />
                                    </MarqueeItem>
                                ))}
                            </MarqueeContent>
                        </Marquee>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Vi er stolte af at have samarbejde med disse
                        organisationer, der hjælper os med at nå vores mål.
                    </p>
                </div>
            </Container>
        </Section>
    );
};
