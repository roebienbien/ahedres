export default function Navbar() {
  return (
    <div className="w-full bg-slate-100">
      <div className="mx-auto flex w-10/12 items-center justify-between  p-2">
        <h2 className="cursor-pointer text-4xl font-bold">Ahedras</h2>
        <ul className="flex space-x-8">
          {NavLinks.map((link, index) => (
            <li key={index} className="cursor-pointer text-xl">
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const NavLinks = [
  {
    title: "Home",
  },
  {
    title: "Courses",
  },
  {
    title: "Services",
  },
  {
    title: "About",
  },
  {
    title: "Contact",
  },
];
