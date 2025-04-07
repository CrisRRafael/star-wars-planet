import { Planet } from "../shared/components/atoms/InputSearch";

export const usePlanetsService = () => {
  const searchPlanetsRequest = async (search: string) => {
    const response = await fetch(
      `https://swapi.dev/api/planets/?searchs=${search}`
    );

    return await response.json();
  };

  const searchPlanetsByPopulation = async (
    minPopulation: string
  ): Promise<Planet[]> => {
    const firstRes = await fetch("https://swapi.dev/api/planets/");
    const firstData: SwapiResponse = await firstRes.json();

    const totalPages = Math.ceil(firstData.count / 10);

    const pageRequests = Array.from({ length: totalPages - 1 }, (_, i) =>
      fetch(`https://swapi.dev/api/planets/?page=${i + 2}`).then((res) =>
        res.json()
      )
    );

    const otherPages: SwapiResponse[] = await Promise.all(pageRequests);

    const allPlanets = [
      ...firstData.results,
      ...otherPages.flatMap((page) => page.results),
    ];

    const filtered = allPlanets.filter((planet) => {
      const pop = planet.population;
      return pop !== "unknown" && Number(pop) === Number(minPopulation);
    });

    return filtered;
  };

  return {
    searchPlanetsRequest,
    searchPlanetsByPopulation,
  };
};

interface SwapiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}
