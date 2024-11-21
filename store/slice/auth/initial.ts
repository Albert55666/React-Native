export type NotifiersType = {
  loading: boolean;
  user: {
    email: string;
    password: string;
    token: string;
    username: string;
  } | null;
};

export const initialState: NotifiersType = {
  loading: false,
  user: null,
};
