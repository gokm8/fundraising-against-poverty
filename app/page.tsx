import { Main, Section, Container } from "@/components/ds";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import Image from "next/image";

export default function Home() {
    return (
        <Main>
            <Section>
                <Container>
                    <div className="rounded-lg overflow-hidden mb-4">
                        <Image
                            src="/poverty.jpg"
                            alt="Project Image"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="gap-2 flex flex-col mb-8">
                        <h1 className="text-2xl font-bold">
                            Project: Helping XXXXX
                        </h1>
                        <p className="text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                    <div className="gap-2 flex flex-col">
                        <p className="text-base font-bold">Vælg et bidrag</p>
                        <div className="flex flex-col gap-2">
                            <Toggle variant="outline">50 DKK</Toggle>
                            <Toggle variant="outline">100 DKK</Toggle>
                            <Toggle variant="outline">Andet beløb</Toggle>
                        </div>
                        <Button className="w-full">Støt projektet</Button>
                    </div>
                </Container>
            </Section>
        </Main>
    );
}
