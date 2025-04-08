import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePlanetSearchContext } from "@/src/hooks/usePlanetsSearchContext";
import { usePlanetsService } from "@/src/hooks/usePlanetsService";
import { Person } from "@/src/shared/assets/Person";
import { Films } from "@/src/shared/assets/Films";
import CardDetails from "../../molecules/CardDetails";
import DetailsPlanetHeader from "../../molecules/DetailPlanetHeader";
import { PlanetDetailsContainer, WrapperCardDetails } from "./styles";

const PlanetInfoDetails = () => {
  const { planet, setPlanet } = usePlanetSearchContext();
  const { getPlanetResidents, getPlanetFilms, searchPlanetsRequest } =
    usePlanetsService();
  const [loading, setLoading] = useState(false);

  const [residentNames, setResidentNames] = useState<string[]>([]);
  const [filmTitles, setFilmTitles] = useState<string[]>([]);

  const router = useRouter();
  const planetNameFromUrl = decodeURIComponent(
    (router.query.planet_name as string) || ""
  );

  useEffect(() => {
    const fetchPlanetIfNeeded = async () => {
      if (!planet && planetNameFromUrl) {
        try {
          const response = await searchPlanetsRequest(planetNameFromUrl);
          if (response.results.length > 0) {
            setPlanet(response.results[0]);
          }
        } catch (err) {
          console.error("Erro ao buscar planeta pelo nome:", err);
        }
      }
    };

    fetchPlanetIfNeeded();
  }, [planet, planetNameFromUrl]);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!planet) return;

      setLoading(true);
      try {
        const [residents, films] = await Promise.all([
          getPlanetResidents(planet.residents),
          getPlanetFilms(planet.films),
        ]);

        setResidentNames(residents);
        setFilmTitles(films);
      } catch (err) {
        console.error("Erro ao buscar detalhes do planeta:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [planet]);

  return (
    <PlanetDetailsContainer>
      <DetailsPlanetHeader />
      <WrapperCardDetails>
        <CardDetails
          icon={<Person />}
          title="Residents:"
          dataCard={
            loading
              ? "..."
              : residentNames.length
              ? residentNames.join(", ")
              : "No residents"
          }
        />
        <CardDetails
          icon={<Films />}
          title="Films:"
          dataCard={
            loading
              ? "..."
              : filmTitles.length
              ? filmTitles.join(", ")
              : "No films"
          }
        />
      </WrapperCardDetails>
    </PlanetDetailsContainer>
  );
};

export default PlanetInfoDetails;
