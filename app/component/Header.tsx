import Link from "next/link";

export default function Header() {
  return (
     <ul className="header"> 
   <li>
        <Link className= "link" href="/">Home</Link>
      </li>
      <li> <Link className= "link" href="about">About</Link></li>
      <li>
        <Link className= "link" href="contact">Contact</Link>
      </li>
      <li>
        <Link className= "link" href="carrer">Carrer</Link>
      </li>
          </ul>
  );
}

