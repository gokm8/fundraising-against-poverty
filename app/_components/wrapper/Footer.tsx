import { Container, Section } from "@/components/ds";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="border-t">
            <Section className="bg-muted">
                <Container className="grid gap-8">
                    <div className="flex flex-col gap-6">
                        <Link href="/">
                            <p className="text-lg font-bold">Under Samme Sol</p>
                        </Link>
                        <p className="text-sm">
                            Din støtte hjælper børn og familier i Østtyrkiet med
                            mad, tøj og tryghed. Selv små bidrag gør en reel
                            forskel.
                        </p>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <h5 className="text-base font-bold">Website</h5>
                            <Link
                                className="underline max-w-[130px] md:max-w-full truncate"
                                href="/">
                                Handling bag ordene
                            </Link>
                            <Link className="underline" href="/">
                                Vores mission
                            </Link>
                            <Link className="underline" href="/">
                                Kontakt os
                            </Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5 className="text-base font-bold">Legal</h5>
                            <Link className="underline" href="/">
                                Privatlivspolitik
                            </Link>
                            <Link className="underline" href="/">
                                Vilkår for tjeneste
                            </Link>
                            <Link className="underline" href="/">
                                Cookiepolitik
                            </Link>
                        </div>
                    </div>
                </Container>
                <Separator />
                <Container>
                    <div className="flex flex-row gap-2">
                        <p>FACEBOOK</p>
                        <p>INSTAGRAM</p>
                        <p>TWITTER</p>
                    </div>
                </Container>
                <Container>
                    <p>
                        © 2025{" "}
                        <Link
                            className="text-primary underline"
                            href="https://gokm8.xyz">
                            gokm8.xyz
                        </Link>
                        {" - "} All rights reserved.
                    </p>
                </Container>
            </Section>
        </footer>
    );
};
