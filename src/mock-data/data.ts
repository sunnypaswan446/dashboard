export const menus = [
  {
    menuText: "Home",
    menuLink: "/",
    menuIcon: {
      path: "./images/home.svg",
      altText: "home",
      width: "35",
      height: "35",
    },
  },
  {
    menuText: "Server",
    menuLink: "/server",
    menuIcon: {
      path: "./images/server.svg",
      altText: "server",
      width: "35",
      height: "35",
    },
  },
  {
    menuText: "Domain",
    menuLink: "/domain",
    menuIcon: {
      path: "./images/domain.svg",
      altText: "domain",
      width: "35",
      height: "35",
    },
  },
  {
    menuText: "SSL",
    menuLink: "/ssl",
    menuIcon: {
      path: "./images/ssl.svg",
      altText: "ssl",
      width: "35",
      height: "35",
    },
  },
  {
    menuText: "Billing",
    menuLink: "/billing",
    menuIcon: {
      path: "/images/billing.svg",
      altText: "billing",
      width: "35",
      height: "35",
    },
  },
  {
    menuText: "Support",
    menuLink: "/support",
    menuIcon: {
      path: "/images/support.svg",
      altText: "support",
      width: "35",
      height: "35",
    },
  },
  {
    menuText: "Referrals",
    menuLink: "/referrals",
    menuIcon: {
      path: "/images/referrals.svg",
      altText: "referrals",
      width: "35",
      height: "35",
    },
  },
];

export const addButton = {
  buttonText: "Add Funds",
  buttonLink: "/addfund",
  hasIcon: true,
  buttonIcon: {
    name: "add",
    width: "16",
    height: "16",
    altText: "add fund",
  },
};

export const editButton = {
  buttonText: "Edit Profile",
  buttonLink: "/edit-icon",
  hasIcon: true,
  buttonIcon: {
    name: "edit",
    width: "16",
    height: "16",
    altText: "edit icon",
  },
};

export const homepage = {
  buttonText: "Back to Home",
  buttonLink: "./",
  hasIcon: false,
};

export const asideSubMenus = {
  headerText: "Your Info",
  headerIcon: {
    path: "../images/profile-icon.svg",
    altText: "profile",
    width: "16",
    height: "16",
  },
  type: "info",
  accordionInfo: [
    {
      labelText: "Company Name",
      labelValue: "Microsoft",
    },
    {
      labelText: "Name",
      labelValue: "George Roy",
    },
    {
      labelText: "Address",
      labelValue: "Mohali",
    },
    {
      labelText: "Address 2nd",
      labelValue: "Mohali, Chandigarh",
    },
    {
      labelText: "Landmark*",
      labelValue: "Near by Bank",
    },
    {
      labelText: "Pincode / Zipcode",
      labelValue: "160063",
    },
  ],
};

export const availCredit = {
  headerText: "Available Credit",
  headerIcon: {
    path: "../images/profile-icon.svg",
    altText: "profile",
    width: "16",
    height: "16",
  },
  accordionInfo: [
    {
      labelText: "Amount",
      labelValue: "$1255",
    },
  ],
};

export const displayCard = [
  {
    href: "/server",
    heading: "10",
    subheading: "Services",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: {
      path: "../images/services.svg",
      altText: "services icon",
      width: "52",
      height: "53",
    },
  },
  {
    href: "./domain",
    heading: "12",
    subheading: "Domains",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: {
      path: "../images/domains.svg",
      altText: "domains icon",
      width: "52",
      height: "53",
    },
  },
  {
    href: "/support",
    heading: "80",
    subheading: "Tickets",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: {
      path: "../images/tickets.svg",
      altText: "tickets icon",
      width: "52",
      height: "53",
    },
  },
  {
    href: "/billing",
    heading: "27",
    subheading: "Invoices",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: {
      path: "../images/invoices.svg",
      altText: "invoices icon",
      width: "52",
      height: "53",
    },
  },
];

export const formData = {
  logo: {
    src: "../images/logo-color.svg",
    alt: "logo",
  },
  heading: "Sign Up",
  description: "Sign up to enjoy the feature of Revolutie",
  sections: [
    {
      title: "Personal Information",
      fields: [
        {
          type: "text",
          id: "firstName",
          name: "firstname",
          label: "First Name",
          placeholder: "First name",
        },
        {
          type: "text",
          id: "lastName",
          name: "lastname",
          label: "Last Name",
          placeholder: "Last name",
        },
        {
          type: "email",
          id: "emailaddress",
          name: "email",
          label: "Email Address",
          placeholder: "Email address",
        },
        {
          type: "number",
          id: "contactNumber",
          name: "phone",
          label: "Phone Number",
          placeholder: "Phone number",
        },
        {
          type: "password",
          id: "newPassword",
          name: "password",
          label: "New Password",
          placeholder: "Password",
        },
        {
          type: "password",
          id: "confirmPassword",
          name: "confirmPassword",
          label: "Confirm your password",
          placeholder: "Confirm your password",
        },
      ],
    },
    {
      title: "Billing Address",
      fields: [
        {
          type: "text",
          id: "companyName",
          name: "company",
          label: "Company Name (optional)",
          placeholder: "Company",
        },
        {
          type: "text",
          id: "adress1",
          name: "address1",
          label: "Street Address",
          placeholder: "Street address",
        },
        {
          type: "text",
          id: "adress2",
          name: "address2",
          label: "Street Address 2",
          placeholder: "Street address 2",
        },
        {
          type: "select",
          id: "city",
          name: "city",
          label: "City",
          options: ["Select", "Data"],
        },
        {
          type: "select",
          id: "state",
          name: "state",
          label: "State",
          options: ["Select", "Data"],
        },
        {
          type: "select",
          id: "country",
          name: "country",
          label: "Country",
          options: ["Select", "Data"],
        },
        {
          type: "text",
          id: "zipCode",
          name: "zipcode",
          label: "Postcode",
          placeholder: "Postcode",
        },
      ],
    },
  ],
  terms: {
    label: "I have read and agreed to the Terms of Service",
    link: "#",
  },
  submitText: "Sign Up",
  loginText: "Already have an account? Login",
  loginLink: "/login",
};

// Aside Menus Data
export const homepageMenu = [
  {
    headerText: "Your Info",
    headerIcon: {
      path: "../images/profile-icon.svg",
      altText: "profile",
      width: "16",
      height: "16",
    },
    type: "info",
    accordionInfo: [
      {
        labelText: "Company Name",
        labelValue: "Microsoft",
        labelLink: "",
      },
      {
        labelText: "Name",
        labelValue: "George Roy",
        labelLink: "",
      },
      {
        labelText: "Address",
        labelValue: "Mohali",
        labelLink: "",
      },
      {
        labelText: "Address 2nd",
        labelValue: "Mohali, Chandigarh",
        labelLink: "",
      },
      {
        labelText: "Landmark*",
        labelValue: "Near by Bank",
        labelLink: "",
      },
      {
        labelText: "Pincode / Zipcode",
        labelValue: "160063",
        labelLink: "",
      },
    ],
  },
  {
    type: "info",
    headerText: "Available Credit",
    headerIcon: {
      path: "../images/profile-icon.svg",
      altText: "profile",
      width: "16",
      height: "16",
    },
    accordionInfo: [
      {
        labelText: "Amount",
        labelValue: "$1255",
      },
    ],
  },
];

export const serverMenu = [
  {
    type: "menu",
    accordionInfo: [
      {
        labelText: "My Server",
        labelLink: "/server",
      },
      {
        labelText: "Purchase a New Server",
        labelLink: "/purchaseSSL",
      },
    ],
  },
];

export const profileMenu = {
  type: "menu",
  accordionInfo: [
    {
      labelText: "My Detail",
      labelLink: "/myDetails",
    },
    {
      labelText: "Change Password",
      labelLink: "/changePassowrd",
    },
    {
      labelText: "Security Setting",
      labelLink: "/securitySetting",
    },
    {
      labelText: "Logout",
      labelLink: "/logout",
    },
  ],
};

export const billingMenu = [
  {
    type: "menu",
    accordionInfo: [
      {
        labelText: "My Invoice",
        labelLink: "/billing",
      },
      {
        labelText: "Mass Payment",
        labelLink: "/massPayment",
      },
      {
        labelText: "Payment Method",
        labelLink: "/paymentMethod",
      },
      {
        labelText: "Add Fund",
        labelLink: "/addFund",
      },
    ],
  },
  {
    type: "menu",
    headerText: "Account",
    headerIcon: {
      path: "../images/acct.svg",
      altText: "manage",
      width: "16",
      height: "16",
    },
    accordionInfo: [
      {
        labelText: "My Details",
        labelLink: "/myDetails",
      },
      {
        labelText: "Email History",
        labelLink: "/emailHistory",
      },
    ],
  },
  {
    type: "info",
    headerText: "Available Credit",
    button: true,
    buttonInfo: {
      buttonText: "Add Funds",
      buttonLink: "/addFund",
      buttonIcon: "add",
    },
    accordionInfo: [
      {
        labelText: "Amount",
        labelValue: "$1255",
      },
    ],
  },
];

export const domainMenu = [
  {
    type: "menu",
    accordionInfo: [
      {
        labelText: "My Domain",
        labelLink: "/domain",
      },
      {
        labelText: "Manage DNS",
        labelLink: "/domain/manage-dns",
      },
      {
        labelText: "Manage Reverse Domains",
        labelLink: "/domain/manage-reverse-domains",
      },
      {
        labelText: "Renew Domain",
        labelLink: "/domain/renew-domain",
      },
      {
        labelText: "Register a New Domain",
        labelLink: "/domain/register-new-domain",
      },
      {
        labelText: "Private Nameservers",
        labelLink: "/domain/private-nameservers",
      },
    ],
  },
  {
    type: "menu",
    headerText: "Manage",
    headerIcon: {
      path: "../images/support-icon.svg",
      altText: "manage",
      width: "16",
      height: "16",
    },
    accordionInfo: [
      {
        labelText: "Overview",
        labelLink: "/domain/overview",
      },
      {
        labelText: "Auto Renew",
        labelLink: "/domain/auto-renew",
      },
      {
        labelText: "Nameservers",
        labelLink: "/domain/nameservers",
      },
      {
        labelText: "Registrar Lock",
        labelLink: "/domain/registrar-lock",
      },
      {
        labelText: "Contact Information",
        labelLink: "/domain/contact-information",
      },
      {
        labelText: "Private Nameservers",
        labelLink: "/domain/private-nameservers",
      },
    ],
  },
];

export const sslMenu = [
  {
    type: "menu",
    accordionInfo: [
      {
        labelText: "My SSL",
        labelLink: "/ssl",
      },
      {
        labelText: "Purchase a new SSL Certificate",
        labelLink: "/ssl/purchase-ssl-certificate",
      },
    ],
  },
];

export const supportMenu = [
  {
    headerText: "Support",
    headerIcon: {
      path: "../images/support-icon.svg",
      altText: "support",
      width: "16",
      height: "16",
    },
    type: "menu",
    accordionInfo: [
      {
        labelText: "My Support tickets",
        labelLink: "/support",
      },
      {
        labelText: "Announcements",
        labelLink: "/support/announcements",
      },
      {
        labelText: "Knowledgebase",
        labelLink: "/support/knowledgebase",
      },
      {
        labelText: "Network status",
        labelLink: "/support/network-status",
      },
      {
        labelText: "Open ticket",
        labelLink: "/support/open-ticket",
      },
    ],
  },
];

export const referralMenu = [
  {
    type: "menu",
    accordionInfo: [
      {
        labelText: "Referral",
        labelLink: "/referrals",
      },
      {
        labelText: "Program Terms",
        labelLink: "/referrals/program-terms",
      },
    ],
  },
];
