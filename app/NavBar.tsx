import { Button, Container, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { RiGraduationCapFill } from "react-icons/ri";

const links = [
  { link: "/home", label: "Home" },
  { link: "/resources", label: "Resources" },
  { link: "/about", label: "About" },
  { link: "/contact", label: "Contact" },
];

const NavBar = () => {
  return (
    <nav>
      <Container className="border">
        <Flex height={"9"} align={"center"} justify={"between"} width={"100%"}>
          <Flex align={"center"} gap={"3"}>
            <RiGraduationCapFill />
            <Text size={"4"} weight={"bold"}>
              CourseStop
            </Text>
          </Flex>
          <Flex gap={"6"}>
            {links.map(({ link, label }) => (
              <Link
                href={link}
                key={link}
                className="hover:text-[var(--violet-a11)] transition-all"
              >
                {label}
              </Link>
            ))}
          </Flex>
          <Flex>
            <Link href={"/login"}>
              <Button>Log in</Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
