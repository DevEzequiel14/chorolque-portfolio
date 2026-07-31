/** Perfiles públicos usados en UI y JSON-LD (sameAs). */
export const socialProfiles = {
  linkedin: "https://www.linkedin.com/in/chorolque-ezequiel/",
  github: "https://github.com/DevEzequiel14",
  cv: "https://drive.google.com/uc?export=download&id=1J1kff1C9AFaGsCmKkxRijcLZ2oHT8mc4",
} as const;

export const sameAsProfiles = [
  socialProfiles.linkedin,
  socialProfiles.github,
] as const;
