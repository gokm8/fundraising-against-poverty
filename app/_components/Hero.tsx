import { Container, Section } from "@/components/ds";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
    return (
        <Section>
            <Container>
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="rounded-lg overflow-hidden mb-4">
                        <Image
                            src="/hero/kurdish_child_poor_need_help.jpg"
                            alt="Project Image"
                            width={1000}
                            height={1000}
                            className="rounded-lg h-full"
                        />
                    </div>
                    <div className="gap-4 flex flex-col mb-8">
                        <h1 className="text-3xl font-bold">
                            Sammen kan vi give børn i Østtyrkiet en bedre
                            fremtid
                        </h1>
                        <p className="text-base mb-4">
                            Din støtte går direkte til madpakker, tøj og
                            undervisningsmateriale til børn, der lever i
                            fattigdom i Østtyrkiet. Selv små bidrag gør en
                            mærkbar forskel.
                        </p>
                        <p className="text-base font-bold">Vælg et bidrag</p>
                        <div className="flex flex-col gap-2">
                            <Toggle variant="outline">50 DKK</Toggle>
                            <Toggle variant="outline">100 DKK</Toggle>
                            <Toggle variant="outline">Andet beløb</Toggle>
                        </div>
                        <Button className="w-full">Støt projektet</Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
