import "./Hero.css";

import Badge from "../../ui/Badge/Badge";
import Button from "../../ui/Button/Button";

export default function Hero() {

    return (

        <section className="hero">

            <div className="container hero-grid">

                <div className="hero-left">

                    <Badge>

                        🚀 Centro de Desarrollo y Emprendimiento

                    </Badge>

                    <h1>

                        Toda gran empresa comenzó con una decisión.

                        <span>

                            La tuya comienza hoy.

                        </span>

                    </h1>

                    <p>

                        Construimos el ecosistema donde emprendedores y empresas
                        encuentran estrategia, inteligencia artificial,
                        innovación y conexiones para crecer.

                    </p>

                    <div className="hero-buttons">

                        <Button>

                            Comienza a crecer

                        </Button>

                        <Button variant="secondary">

                            Explorar Scala

                        </Button>

                    </div>

                </div>

                <div className="hero-right">

                    <div className="glass-card card-top">

                        <h3>

                            SCALA AI

                        </h3>

                        <p>

                            Automatización Empresarial

                        </p>

                    </div>

                    <div className="glass-card card-bottom">

                        <h3>

                            Growth

                        </h3>

                        <p>

                            Estrategia • IA • Escalamiento

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}