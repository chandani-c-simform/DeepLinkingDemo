type DetailsProps = {
  navigation: NavigationDataType;
};
type NavigationDataType = {
  navigate: (
    screen: string,
    params?: {
      image: string;
      name: string;
      price: string;
    },
  ) => void;
};

export type {DetailsProps, NavigationDataType};
