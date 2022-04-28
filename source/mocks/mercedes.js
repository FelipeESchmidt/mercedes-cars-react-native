import logo from "../../assets/mercedes-logo.png";
import classeAHatch_A from "../../assets/Cars/classeAHatch_A.png";
import classeAHatch_B from "../../assets/Cars/classeAHatch_B.png";
import classeAHatch_C from "../../assets/Cars/classeAHatch_C.png";
import classeASedan_A from "../../assets/Cars/classeASedan_A.png";
import classeASedan_B from "../../assets/Cars/classeASedan_B.png";
import classeASedan_C from "../../assets/Cars/classeASedan_C.png";
import classeCSedan_A from "../../assets/Cars/classeCSedan_A.png";
import classeCSedan_B from "../../assets/Cars/classeCSedan_B.png";
import classeCSedan_C from "../../assets/Cars/classeCSedan_C.png";
import classeESedan_A from "../../assets/Cars/classeESedan_A.png";
import classeESedan_B from "../../assets/Cars/classeESedan_B.png";
import classeESedan_C from "../../assets/Cars/classeESedan_C.png";
import GLA_SUV_A from "../../assets/Cars/GLA_SUV_A.png";
import GLA_SUV_B from "../../assets/Cars/GLA_SUV_B.png";
import GLA_SUV_C from "../../assets/Cars/GLA_SUV_C.png";
import GLB_SUV_A from "../../assets/Cars/GLB_SUV_A.png";
import GLB_SUV_B from "../../assets/Cars/GLB_SUV_B.png";
import GLB_SUV_C from "../../assets/Cars/GLB_SUV_C.png";
import GLC_SUV_A from "../../assets/Cars/GLC_SUV_A.png";
import GLC_SUV_B from "../../assets/Cars/GLC_SUV_B.png";
import GLC_SUV_C from "../../assets/Cars/GLC_SUV_C.png";
import GLC_Coupe_A from "../../assets/Cars/GLC_Coupe_A.png";
import GLC_Coupe_B from "../../assets/Cars/GLC_Coupe_B.png";
import GLC_Coupe_C from "../../assets/Cars/GLC_Coupe_C.png";
import CLA_Coupe_A from "../../assets/Cars/CLA_Coupe_A.png";
import CLA_Coupe_B from "../../assets/Cars/CLA_Coupe_B.png";
import CLA_Coupe_C from "../../assets/Cars/CLA_Coupe_C.png";

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
        images: [classeAHatch_A, classeAHatch_B, classeAHatch_C],
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
        images: [classeASedan_A, classeASedan_B, classeASedan_C],
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
        images: [classeCSedan_A, classeCSedan_B, classeCSedan_C],
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
        images: [GLA_SUV_A, GLA_SUV_B, GLA_SUV_C],
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
        images: [GLB_SUV_A, GLB_SUV_B, GLB_SUV_C],
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
        images: [classeESedan_A, classeESedan_B, classeESedan_C],
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
        images: [GLC_SUV_A, GLC_SUV_B, GLC_SUV_C],
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
        images: [GLC_Coupe_A, GLC_Coupe_B, GLC_Coupe_C],
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
        images: [CLA_Coupe_A, CLA_Coupe_B, CLA_Coupe_C],
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
