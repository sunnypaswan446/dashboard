export interface button {
  buttonText: string;
  buttonLink: string;
  hasIcon?: boolean;
  buttonIcon?: image;
  // buttonStyle?: string;
  style?: string;
}

export interface image {
  name?: string;
  path?: string;
  altText: string;
  width?: string;
  height?: string;
}

export interface menu {
  menuText: string;
  menuLink: string;
  menuIcon?: image;
}

export interface infoWithLabel {
  labelText: string;
  labelValue: string;
}

// export interface asideSubmenuType{

// }

// export interface {}
export interface accordionMenus {
  headerText: string;
  headerIcon?: image;
  menus?: menu[];
  hasInfo?: boolean;
  accordionInfo: infoWithLabel[];
}

export interface FormProps {
  formData: {
    logo: { src: string; alt: string };
    heading: string;
    description: string;
    sections: { title: string; fields: any[] }[];
    terms: { label: string; link: string };
    submitText: string;
    loginText: string;
    loginLink: string;
  };
}
