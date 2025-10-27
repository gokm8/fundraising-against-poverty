import { CardSection } from "@/app/_components/wrapper/CardSection";

const cards = [
    {
        title: "1) Fokus på fattigdom",
        text1: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...",
        text2: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...",
        img: "/poverty.jpg",
        button: "Støt projektet",
        reverse: true,
        link: "/",
        bg: "",
    },
    {
        title: "2) Fokus på ulighed",
        text1: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...",
        text2: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...",
        img: "/poverty.jpg",
        button: "Støt projektet",
        reverse: false,
        link: "/",
        bg: "bg-muted/50",
    },
    {
        title: "3) Kom i kontakt med os",
        text1: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...",
        text2: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...",
        img: "/poverty.jpg",
        button: "Støt projektet",
        reverse: true,
        link: "/",
        bg: "",
    },
];

export const Cards = () => {
    return (
        <>
            {cards.map((card, i) => (
                <CardSection
                    key={i}
                    title={card.title}
                    text1={card.text1}
                    text2={card.text2}
                    img={card.img}
                    reverse={card.reverse as boolean}
                    bg={card.bg as string}
                    buttonText={card.button}
                    link={card.link as string}
                />
            ))}
        </>
    );
};
