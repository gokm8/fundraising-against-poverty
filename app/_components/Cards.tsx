import { CardSection } from "./wrapper/CardSection";

const items = [
    {
        title: "Vores mission",
        image: "/hero/kurdish_child_with_a_tire.jpg",
        text1: "Vi hjælper udsatte børn i Østtyrkiet med adgang til mad, tøj, tryghed og mulighed for at gå i skole. Mange familier lever i fattigdom og kæmper for at give deres børn en stabil hverdag.",
        text2: "Vi samarbejder med lokale kræfter, der kender behovene bedst, så hjælpen gør en reel forskel og giver børnene og deres familier bedre muligheder og håb for fremtiden.",
        button: "Læs mere om vores mission",
        bg: "",
        reverse: false,
        link: "/vores-mission",
    },
    {
        title: "Handling bag ordene",
        image: "/hero/kurdish_child_alone.jpg",
        text1: "Vi er en organisation, der arbejder for at støtte udsatte børn og familier i Østtyrkiet. Vores indsats bygger på et personligt kendskab til området og et ønske om at hjælpe dér, hvor behovet er størst.",
        text2: "Vi samarbejder med lokale kontaktpersoner, så hjælpen når direkte frem til dem, der har brug for den. Vi tror på ansvarlighed, gennemsigtighed og støtte, der faktisk gør en forskel i hverdagen.",
        button: "Læs mere om hvem vi er",
        bg: "bg-muted/50",
        reverse: true, // denne skal flippes
        link: "/handling-bag-ordene",
    },
    {
        title: "Kom i kontakt med os",
        image: "/poverty.jpg",
        text1: "Har du spørgsmål eller ønsker du at høre mere om vores arbejde, er du altid velkommen til at kontakte os.",
        text2: "Hvis du ønsker at bidrage, blive frivillig, eller blot høre mere om mulighederne for at hjælpe, så lytter vi gerne.",
        button: "Kontakt os",
        bg: "",
        reverse: false,
        link: "/kontakt-os",
    },
];

export const Cards = () => {
    return (
        <>
            {items.map((item, index) => (
                <CardSection
                    key={index}
                    title={item.title}
                    text1={item.text1}
                    text2={item.text2}
                    img={item.image}
                    reverse={item.reverse as boolean}
                    bg={item.bg as string}
                    buttonText={item.button as string}
                    link={item.link as string}
                />
            ))}
        </>
    );
};
