export class SingleSockLink {
  link: string;
  name: string;
  icon?: string;

  constructor(link: string, name: string, icon?: string) {
    this.link = link;
    this.name = name;
    this.icon = icon;
  }
}

export enum RoutePath {
  HOME = "home",
  FIND = "find",
  GIVE = "give",
  CREATE = "create",
  DONATE = "donate",
  DIY = "DIY",
  REGISTER = "register",
  LOGIN = "login",
  PROFILE = "profile"
}

export class SingleSockLinkList {
  links: SingleSockLink[];

  constructor() {
    this.links = [
      new SingleSockLink(RoutePath.HOME, "Home", "fa-home"),
      new SingleSockLink(RoutePath.FIND, "Find Socks", "fa-search"),
      new SingleSockLink(RoutePath.DONATE, "Find Donation Boxes", "fa-map-pin"),
      new SingleSockLink(RoutePath.DIY, "DIY Corner", "fa-signing"),
    ];
  }
}

export class SingleSockLoggedInLinkList {
  links: SingleSockLink[];

  constructor() {
    this.links = [
      new SingleSockLink(RoutePath.CREATE, "Create Sock", "fa-plus"),
      new SingleSockLink(RoutePath.PROFILE, "User Profile", "fa-user"),

    ];
  }
}

export class AuthLinkList {
  links: SingleSockLink[];

  constructor() {
    this.links = [
      new SingleSockLink(RoutePath.LOGIN, "Login", "fa-arrow-right-to-bracket"),
      new SingleSockLink(RoutePath.REGISTER, "Register", "fa-arrow-right-to-bracket"),
    ]
  }
}
