import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ds";

import { Section } from "@/components/ds";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

export const CTA = () => {
    return (
        <Section>
            <Container className="max-w-5xl">
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle>
                            <h3>Gør en forskel i dag</h3>
                        </CardTitle>
                        <CardDescription>
                            <p>
                                Din støtte hjælper børn og familier i Østtyrkiet
                                med mad, tøj og tryghed. Selv små bidrag gør en
                                reel forskel.
                            </p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <p className="text-foreground font-bold text-start">
                                Vælg et bidrag
                            </p>
                            <Toggle variant="outline">50 DKK</Toggle>
                            <Toggle variant="outline">100 DKK</Toggle>
                            <Toggle variant="outline">Andet beløb</Toggle>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Støt projektet</Button>
                    </CardFooter>
                </Card>
            </Container>
        </Section>
    );
};
