import { ReactNode, createContext, useState } from "react";

export type PlanetSearchContextProps = {
  search: string;
  searchType: ISearchType | undefined;
  loading: boolean;
  // setSearch: React.Dispatch<React.SetStateAction<string>>;

  changeSearch: (search: string) => void;
  changeSearchType: (type: ISearchType) => void;
  changeLoading: (value: boolean) => void;
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

  const changeSearch = (search: string) => setSearch(search);

  const changeSearchType = (type: ISearchType) => setSearchType(type);

  const changeLoading = (value: boolean) => setLoading(value);

  return (
    <PlanetSearchContext.Provider
      value={{
        search,
        searchType,
        loading,

        changeSearch,
        changeSearchType,
        changeLoading,

        // setSearchType
      }}
    >
      {children}
    </PlanetSearchContext.Provider>
  );
};
