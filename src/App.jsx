import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

const App = () => {
  useGSAP(() => {
    Draggable.create("#card", {
      bounds: ".bounding",
    });
  });

  return (
    <section className="flex justify-center items-center h-dvh overflow-hidden bg-black bounding">
      <h1
        id="card"
        className="text-3xl font-bold underline bg-blue-100 text-blue-600 p-10 rounded-md w-fit hover:bg-green-600 hover:text-green-100"
      >
        Hello world!
      </h1>
    </section>
  );
};

export default App;
