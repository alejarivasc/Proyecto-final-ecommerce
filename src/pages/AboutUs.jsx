import banner21 from "../assets/img/banner212.png";
import logo from "../assets/img/servifinder.png";

export default function AboutUs() {
  return (
    <div>
      <div>
        <img className="banner" src={banner21} />
      </div>
      <div className=" d-flex container-txt">
        <div>
          <p className="txt ">
            Somos un equipo de emprendedores apasionados por ayudar a las
            personas y empresas a conectarse con profesionales altamente
            calificados en diferentes áreas de servicio.{" "}
          </p>
          <p className="txt">
            Nuestro objetivo es ayudar a nuestros usuarios a obtener la mejor
            experiencia en la publicación y búsqueda de servicios,
            permitiéndoles ahorrar tiempo y dinero creando una plataforma fácil
            de usar, confiable y segura.
          </p>
          <p className="txt">
            En nuestra aplicación, se ofrecen una amplia variedad de servicios,
            desde servicios de limpieza, jardinería y mantenimiento del hogar
            hasta servicios de programación, diseño web, marketing digital y
            mucho más. Nos aseguramos de que todos los proveedores estén
            debidamente verificados y calificados para garantizar la
            satisfacción del cliente.
          </p>
          <img className="logobig" src={logo} />
        </div>
      </div>
    </div>
  );
}
