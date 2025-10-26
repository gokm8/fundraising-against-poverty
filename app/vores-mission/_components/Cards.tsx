import { Container, Section } from "@/components/ds";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const cards = [
    {
        title: "1) Fokus på fattigdom",
        text1: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        text2: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        img: "/poverty.jpg",
        button: "Støt projektet",
        reverse: false,
    },
    {
        title: "2) Fokus på ulighed",
        text1: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        text2: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        img: "/poverty.jpg",
        button: "Støt projektet",
        reverse: true,
    },
    {
        title: "3) Kom i kontakt med os",
        text1: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        text2: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        img: "/poverty.jpg",
        button: "Støt projektet",
        reverse: false,
    },
];

export const Cards = () => {
    return (
        <>
            {cards.map((card, i) => (
                <Section key={i} className={i === 1 ? "bg-muted/50" : ""}>
                    <Container
                        className={`grid md:grid-cols-2 gap-4 ${
                            card.reverse
                                ? "md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1"
                                : ""
                        }`}>
                        <div>
                            <Image
                                src={card.img}
                                alt={card.title}
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2>{card.title}</h2>
                            <p>{card.text1}</p>
                            <p>{card.text2}</p>
                            <Button variant="secondary">{card.button}</Button>
                        </div>
                    </Container>
                </Section>
            ))}
        </>
    );
};
