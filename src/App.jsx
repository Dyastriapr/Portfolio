import Content from "./component/Content";
import Profil from "./component/Profil";

export default function App() {
  return (
    <div className="h-screen flex justify-center items-center font-sans bg-gray-950">
      <div className="container mx-auto flex flex-col sm:flex-row w-full sm:w-2/3">
        <div className="w-full sm:w-1/3 mb-5 sm:mb-0 sm:mr-5">
          <Profil />
        </div>
        <div className="w-full sm:w-2/3 flex justify-center">
          <Content />
        </div>
      </div>
    </div>
  );
}
