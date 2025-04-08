import { ReactNode, createContext, useState } from "react";
import { Planet } from "../shared/components/atoms/InputSearch";

export type PlanetSearchContextProps = {
  search: string;
  searchType: ISearchType | undefined;
  loading: boolean;

  planet: Planet | undefined;
  setPlanet: React.Dispatch<React.SetStateAction<Planet | undefined>>;

  changeSearch: (search: string) => void;
  changeSearchType: (type: ISearchType) => void;
  changeLoading: (value: boolean) => void;
  clearStates: () => void;
};

export type PlanetSearchData = {
  children: ReactNode;
};

type ISearchType = "name" | "population";

export const PlanetSearchContext = createContext<PlanetSearchContextProps>(
  {} as PlanetSearchContextProps
);

export const PlanetSearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState<ISearchType>();
  const [loading, setLoading] = useState(false);

  const [planet, setPlanet] = useState<Planet>();

  const changeSearch = (search: string) => setSearch(search);

  const changeSearchType = (type: ISearchType) => setSearchType(type);

  const changeLoading = (value: boolean) => setLoading(value);

  const clearStates = () => {
    setSearch("");
    setSearchType(undefined);
    setLoading(false);
    setPlanet(undefined);
  };

  return (
    <PlanetSearchContext.Provider
      value={{
        search,
        searchType,
        loading,

        changeSearch,
        changeSearchType,
        changeLoading,
        clearStates,

        planet,
        setPlanet,
      }}
    >
      {children}
    </PlanetSearchContext.Provider>
  );
};
