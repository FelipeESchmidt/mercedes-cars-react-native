import logo from "../../assets/mercedes-logo.png";
import classeAHatch from "../../assets/Cars/classeAHatch.png";
import classeASedan from "../../assets/Cars/classeASedan.png";
import classeCSedan from "../../assets/Cars/classeCSedan.png";
import classeESedan from "../../assets/Cars/classeESedan.png";
import GLA_SUV from "../../assets/Cars/GLA_SUV.png";
import GLB_SUV from "../../assets/Cars/GLB_SUV.png";
import GLC_SUV from "../../assets/Cars/GLC_SUV.png";
import GLC_Coupe from "../../assets/Cars/GLC_Coupe.png";
import CLA_Coupe from "../../assets/Cars/CLA_Coupe.png";

const mercedes = {
  header: {
    logo: logo,
    title: "Mercedes-Benz",
    subtitle: "Bem-vindo a sua zona de conforto",
  },
  footer: {
    logo: logo,
    title: "Mercedes-Benz",
  },
  cars: {
    availableTitle: "Lista de carros disponíveis",
    available: [
      {
        name: "Mercedes-Benz Classe A Hatch",
        image: classeAHatch,
        info: [
          {
            carId: "classeAHatch",
            up: "de 0 a 100 km/h",
            mid: "6,2 s",
            bottom: "Aceleração",
          },
          {
            carId: "classeAHatch",
            up: "",
            mid: "224 cv",
            bottom: "Potência",
          },
          {
            carId: "classeAHatch",
            up: "",
            mid: "250 km/h",
            bottom: "Velocidade máxima",
          },
        ],
      },
      {
        name: "Mercedes-Benz Classe A Sedan",
        image: classeASedan,
        info: [
          {
            carId: "classeASedan",
            up: "de 0 a 100 km/h",
            mid: "6,2 s",
            bottom: "Aceleração",
          },
          {
            carId: "classeASedan",
            up: "",
            mid: "224 cv",
            bottom: "Potência",
          },
          {
            carId: "classeASedan",
            up: "",
            mid: "250 km/h",
            bottom: "Velocidade máxima",
          },
        ],
      },
      {
        name: "Mercedes-Benz Classe C Sedan",
        image: classeCSedan,
        info: [
          {
            carId: "classeCSedan",
            up: "de 0 a 100 km/h",
            mid: "6,0 s",
            bottom: "Aceleração",
          },
          {
            carId: "classeCSedan",
            up: "",
            mid: "258 cv",
            bottom: "Potência",
          },
        ],
      },
      {
        name: "Mercedes-Benz GLA SUV",
        image: GLA_SUV,
        info: [
          {
            carId: "GLA_SUV",
            up: "",
            mid: "1.485 kg",
            bottom: "Peso",
          },
          {
            carId: "GLA_SUV",
            up: "",
            mid: "163 cv",
            bottom: "Potência",
          },
        ],
      },
      {
        name: "Mercedes-Benz GLB SUV",
        image: GLB_SUV,
        info: [
          {
            carId: "GLB_SUV",
            up: "",
            mid: "1.630 kg",
            bottom: "Peso",
          },
          {
            carId: "GLB_SUV",
            up: "",
            mid: "163 cv",
            bottom: "Potência",
          },
          {
            carId: "GLB_SUV",
            up: "",
            mid: "207 km/h",
            bottom: "Velocidade máxima",
          },
        ],
      },
    ],
    unavailableTitle: "Lista de carros indisponíveis",
    unavailable: [
      {
        name: "Mercedes-Benz Classe E Sedan",
        image: classeESedan,
        info: [
          {
            carId: "classeESedan",
            up: "",
            mid: "370 Nm",
            bottom: "Torque",
          },
          {
            carId: "classeESedan",
            up: "de 0 a 100 km/h",
            mid: "6,2 s",
            bottom: "Aceleração",
          },
          {
            carId: "classeESedan",
            up: "",
            mid: "261 cv",
            bottom: "Potência",
          },
        ],
      },
      {
        name: "Mercedes-Benz GLC SUV",
        image: GLC_SUV,
        info: [
          {
            carId: "GLC_SUV",
            up: "",
            mid: "1.835 kg",
            bottom: "Peso",
          },
          {
            carId: "GLC_SUV",
            up: "",
            mid: "194 cv",
            bottom: "Potência",
          },
        ],
      },
      {
        name: "Mercedes-Benz GLC Coupé",
        image: GLC_Coupe,
        info: [
          {
            carId: "GLC_Coupe",
            up: "de 0 a 100 km/h",
            mid: "6,3 s",
            bottom: "Aceleração",
          },
          {
            carId: "GLC_Coupe",
            up: "",
            mid: "258 cv",
            bottom: "Potência",
          },
          {
            carId: "GLC_Coupe",
            up: "",
            mid: "240 km/h",
            bottom: "Velocidade máxima",
          },
        ],
      },
      {
        name: "Mercedes-Benz CLA Coupé",
        image: CLA_Coupe,
        info: [
          {
            carId: "CLA_Coupe",
            up: "de 0 a 100 km/h",
            mid: "6,5 s",
            bottom: "Aceleração",
          },
          {
            carId: "CLA_Coupe",
            up: "",
            mid: "211 cv",
            bottom: "Potência",
          },
          {
            carId: "CLA_Coupe",
            up: "",
            mid: "240 km/h",
            bottom: "Velocidade máxima",
          },
        ],
      },
    ],
  },
};

export default mercedes;
