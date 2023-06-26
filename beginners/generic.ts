interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface Ipost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor | ICategory;
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<string> = {
  id: 1,
  title: "test",
  desc: "test",
  extra: ["test", "test2"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "test",
  desc: "test",
  extra: [{ id: 1, username: "test" }],
};

const testMe3: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "test",
  desc: "test",
  extra: [{ id: 1, title: "test" }],
};
