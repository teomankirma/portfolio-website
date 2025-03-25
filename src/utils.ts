export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);

  if (element) {
    const navbarHeight = 80; // 5rem or h-20
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const BIRTH_DATE = new Date("07-27-2002");

export function calculateAge(): number {
  const today = new Date();
  let age = today.getFullYear() - BIRTH_DATE.getFullYear();
  const monthDiff = today.getMonth() - BIRTH_DATE.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < BIRTH_DATE.getDate())
  ) {
    age--;
  }

  return age;
}
