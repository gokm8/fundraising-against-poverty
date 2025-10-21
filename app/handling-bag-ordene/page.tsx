import { Container } from "@/components/ds";

import { Main } from "@/components/ds";
import { Header } from "./_components/Header";
import { LastTour } from "./_components/LastTour";
import { KPIs } from "./_components/KPIs";
import { CTA } from "../_components/wrapper/CTA";

export default function HandlingBagOrdene() {
    return (
        <Main>
            <Header />
            <KPIs />
            <LastTour />
            <CTA />
        </Main>
    );
}
