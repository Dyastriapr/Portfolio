import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Content } from "./component/Content";
import { Project } from "./component/Project";
import Tech from "./component/Tech";



export default function App() {
  return (
    <div className="container w-full mx-auto flex justify-center items-center bg-">
      <div className="text-white">
      <Content />
      <About  />
      <Tech />
      <Project />
      <Contact />
      </div>
    </div>
  );
}
