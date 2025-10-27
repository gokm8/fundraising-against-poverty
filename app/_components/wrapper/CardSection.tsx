import { Container, Section } from "@/components/ds";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CardSection = ({
    title,
    text1,
    text2,
    img,
    reverse,
    bg,
    buttonText = "",
    link = "",
}: {
    title: string;
    text1: string;
    text2: string;
    img: string;
    reverse: boolean;
    bg: string;
    buttonText?: string;
    link?: string;
}) => {
    return (
        <Section className={bg}>
            <Container>
                <div
                    className={`flex flex-col md:flex-row gap-6 items-center ${
                        reverse ? "md:flex-row-reverse" : ""
                    }`}>
                    <div className="w-full md:w-1/2">
                        <Image
                            src={img}
                            alt={title}
                            width={1000}
                            height={1000}
                            className="rounded-lg h-64 object-cover md:h-96"
                        />
                    </div>

                    <div className="flex flex-col gap-3 w-full md:w-1/2">
                        <h2>{title}</h2>
                        <p>{text1}</p>
                        <p className="mb-4">{text2}</p>

                        {buttonText && (
                            <Button variant="outline" asChild>
                                <Link href={link}>{buttonText}</Link>
                            </Button>
                        )}
                    </div>
                </div>
            </Container>
        </Section>
    );
};
