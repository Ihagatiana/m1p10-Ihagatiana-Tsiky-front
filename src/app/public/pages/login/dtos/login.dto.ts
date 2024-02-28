export type LoginDto = {
  email: string;
  password: string;
};

export type AuthData = {
  session: {
    credential: string;
    date: string;
    name: string;
    roles: string;
    token: string;
    photo: any[];
  };
  profile_id: string;
};
