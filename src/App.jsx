import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Content } from "./component/Content";
import { Project } from "./component/Project";
import Tech from "./component/Tech";



export default function App() {
  return (
    <div>
      <Content />
    <div className="container w-full mx-auto flex justify-center items-center">
      <div className="text-white">
      
      <About  />
      <Tech />
      <Project />
      <Contact />
      </div>
    </div>
    </div>
  );
}
