interface FooterItemsData {
  id: string;
  title: string;
  path: string;
}

interface FooterGroupData {
  links: FooterItemsData[];
  contacts: FooterItemsData[];
}

export const footerItems: FooterGroupData = {
  links: [
    {
      id: crypto.randomUUID(),
      title: "Sobre o desenvolvedor",
      path: "/about-me",
    },
    {
      id: crypto.randomUUID(),
      title: "API utilizada",
      path: "/api",
    },
  ],
  contacts: [
    {
      id: crypto.randomUUID(),
      title: "LinkedIn",
      path: "/",
    },
    {
      id: crypto.randomUUID(),
      title: "E-mail",
      path: "/series",
    },
    {
      id: crypto.randomUUID(),
      title: "Whatsapp",
      path: "/tv-shows",
    },
  ],
};
