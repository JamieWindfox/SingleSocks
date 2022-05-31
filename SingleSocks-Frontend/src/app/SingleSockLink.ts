export class SingleSockLink {
  link: string;
  name: string;

  constructor(link: string, name: string) {
    this.link = link;
    this.name = name;
  }
}

export enum RoutePath {
  HOME = "home",
  FIND = "find",
  GIVE = "give",
  DONATE = "donate",
  DIY = "DIY",
  REGISTER = "register"
}

export class SingleSockLinkList {
  links: SingleSockLink[];

  constructor() {
    this.links = [
      new SingleSockLink(RoutePath.HOME, "Home"),
      new SingleSockLink(RoutePath.FIND, "Find Socks"),
      new SingleSockLink(RoutePath.GIVE, "Give Away Socks"), // TODO html
      new SingleSockLink(RoutePath.DONATE, "Find Donation Boxes"),
      new SingleSockLink(RoutePath.DIY, "DIY Corner")
      // new SingleSockLink("", "About"),
      // new SingleSockLink("", "Fun")
    ];
  }
}

export class AuthLinkList {
  links: SingleSockLink[];

  constructor() {
    this.links = [
      new SingleSockLink("", "Login"),
      new SingleSockLink(RoutePath.REGISTER, "Register"),
      new SingleSockLink("", "Profile"),
      new SingleSockLink("", "Logout")
    ]
  }
}
