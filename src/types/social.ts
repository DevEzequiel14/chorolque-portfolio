export type SocialIconName = "linkedin" | "github" | "cv" | "mail";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}
