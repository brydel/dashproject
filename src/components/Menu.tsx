import Link from "next/link";
import { role } from "../lib/data";
import {
  MdHome,
  MdSchool,
  MdGroup,
  MdOutlineClass,
  MdEvent,
  MdMessage,
  MdAnnouncement,
  MdOutlinePerson,
  MdSettings,
  MdLogout,
  MdSubject,
  MdAssignment,
  MdAssessment,
  MdLocalLibrary,
  MdCheckCircle,
  MdCalendarToday,
} from "react-icons/md";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <MdHome size={20} />,
        label: "Accueil",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdSchool size={20} />,
        label: "Enseignants",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <MdGroup size={20} />,
        label: "Élèves",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <MdOutlinePerson size={20} />,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: <MdSubject size={20} />,
        label: "Sujets",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <MdOutlineClass size={20} />,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <MdLocalLibrary size={20} />,
        label: "Leçons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <MdAssessment size={20} />,
        label: "Examens",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdAssignment size={20} />,
        label: "Devoirs",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdCheckCircle size={20} />,
        label: "Résultats",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdGroup size={20} />,
        label: "Présence",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdCalendarToday size={20} />,
        label: "Événements",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdMessage size={20} />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdAnnouncement size={20} />,
        label: "Annonces",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "AUTRE",
    items: [
      {
        icon: <MdOutlinePerson size={20} />,
        label: "Profil",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdSettings size={20} />,
        label: "Paramètres",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdLogout size={20} />,
        label: "Déconnexion",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-500 font-light my-4">{section.title}</span>
          {section.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-brydelSkyLight"
                >
                  {item.icon}
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
