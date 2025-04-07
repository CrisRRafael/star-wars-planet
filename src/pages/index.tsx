import Head from "next/head";
import { SearchPlanets } from "../shared/components/organisms/SearchPlanets";
import SectionPlanets from "../shared/components/templates/SectionPlanets";

export default function Home() {
  return (
    <>
      <Head>
        <title> Star Wars Planets Search</title>
      </Head>
      <SectionPlanets>
        <SearchPlanets />
      </SectionPlanets>
    </>
  );
}
