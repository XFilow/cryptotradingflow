import { Icon } from "@iconify/react/dist/iconify.js";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center relative">
      <Icon
        icon="emojione-v1:stock-chart"
        width="20em"
        height="20em"
        style={{ transform: "scaleX(-1)" }}
      />
      <h2 className="text-4xl mt-7 font-semibold text-white">
        Página não encontrada
      </h2>
    </div>
  );
};

export default NotFound;
