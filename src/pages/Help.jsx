import { Accordion } from "react-bootstrap";

export default function Help() {
  return (
    <div>
      <h2>¿Necesitas ayuda?</h2>
      <p>
        Estamos aquí para ayudarte. Te presentamos algunas preguntas frecuentes.
      </p>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header> ¿Cómo puedo crear una cuenta?</Accordion.Header>
          <Accordion.Body>
            Para crear una cuenta, haz clic en el link "Crear usuario" en la
            parte superior de la página y sigue las instrucciones.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header> ¿Cómo puedo iniciar sesión?</Accordion.Header>
          <Accordion.Body>
            Para iniciar sesión, haz clic en el link "Iniciar sesión" en la
            parte superior de la página y sigue las instrucciones.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header> ¿Qué garantías ofrecen?</Accordion.Header>
          <Accordion.Body>
            Garantizamos la calidad de del trabajo. Todos los colaboradores son
            verificados a fondo y evaluados antes de aceptar su publicación por
            lo que trabajaremos en conjunto hasta que esté completamente
            satisfecho con el resultado final.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            {" "}
            ¿Cuál es su política de privacidad?
          </Accordion.Header>
          <Accordion.Body>
            Respetamos su privacidad y protegemos la información que nos
            proporciona. Puede leer nuestra política de privacidad completa en
            nuestra página web.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
