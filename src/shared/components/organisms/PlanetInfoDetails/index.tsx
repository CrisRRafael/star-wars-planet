import { Person } from "@/src/shared/assets/Person";
import CardDetails from "../../molecules/CardDetails";
import DetailsPlanetHeader from "../../molecules/DetailPlanetHeader";
import { PlanetDetailsContainer, WrapperCardDetails } from "./styles";
import { Films } from "@/src/shared/assets/Films";
import { usePlanetSearchContext } from "@/src/hooks/usePlanetsSearchContext";
import { usePlanetsService } from "@/src/hooks/usePlanetsService";
import { useEffect, useState } from "react";

const PlanetInfoDetails = () => {
  const { planet } = usePlanetSearchContext();
  const { getPlanetResidents, getPlanetFilms } = usePlanetsService();
  const [loading, setLoading] = useState(false);

  const [residentNames, setResidentNames] = useState<string[]>([]);
  const [filmTitles, setFilmTitles] = useState<string[]>([]);

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
  }, []);

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
