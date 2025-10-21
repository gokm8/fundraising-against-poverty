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
            <Container>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <h3 className="text-xl font-bold">
                                Gør en forskel i dag
                            </h3>
                        </CardTitle>
                        <CardDescription>
                            <p className="text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                            </p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <p className="text-base font-bold">
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
