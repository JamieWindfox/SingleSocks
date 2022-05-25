export class SingleSockLink {
  link: string;
  name: string;

  constructor(link: string, name: string) {
    this.link = link;
    this.name = name;
  }
}

export class SingleSockLinkList {
  links: SingleSockLink[];

  constructor() {
    this.links = [
      new SingleSockLink("home.component.html", "Home"),
      new SingleSockLink("", "Find Socks"),
      new SingleSockLink("", "Give Away Socks"),
      new SingleSockLink("", "Find Donation Boxes"),
      new SingleSockLink("", "DIY Corner"),
      new SingleSockLink("", "About"),
      new SingleSockLink("", "Fun")
    ];
  }
}

export class AuthLinkList {
  links: SingleSockLink[];

  constructor() {
    this.links = [
      new SingleSockLink("", "Login"),
      new SingleSockLink("", "Register"),
      new SingleSockLink("", "Profile"),
      new SingleSockLink("", "Logout")
    ]
  }
}
