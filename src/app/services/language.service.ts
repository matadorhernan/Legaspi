import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public currentLanguage: BehaviorSubject<string> = new BehaviorSubject(
    'spanish'
  );

  public spanish = {
    shared: {
      navbar: {
        contact: {
          phone: '(449) 449 7623',
          facebook: '#',
          youtube: '#',
          twitter: '#',
          email: '#',
        },
        language: 'English ?',
        button: 'Armar un paquete',
        menu: {
          home: 'Inicio',
          catering: 'Banqueteria',
          booking: 'Salones',
          gallery: 'Galeria'
        }
      },
      footer: {
        text:
          'Abrimos nuestras puertas en 2013 en la ciudad de Aguascalientes, Mexico, Somos una empresa vibrante y amamos lo que hacemos. ',
        menu: {
          home: 'Navegar a Inicio ',
          catering: 'Navegar a Banqueteria ',
          booking: 'Navegar a Salones ',
          gallery: 'Navegar a Galeria '
        },
        licence:
          'Corporativo Legaspi by Jimena © 2019 - Developed by cuadrosoft.com'
      }
    },
    home: {
      header: {
        title: 'Bienvenido!',
        desc:
          'Corporativo Legaspi by Jimena ofrece servicios para que tu evento sea un éxito, nuestra empresa fue fundada en 2013. Con la alta calidad de nuestros servicios organizamos cada vez más eventos en Aguascalientes e interior de la Republica. Tenemos a su alcance desde sillas plegables, Tiffany, Phoenix, Cross-back; mesas redondas, cuadradas, tablones; manteles con textura y de diferentes colores; mobiliario para salas, lobby, lounge; sombrillas individuales, de jardín, para mesas y carpas; renta de rockolas, inflables; servicio de meseros, mariachi, seguridad, preparación de comida, dj, etc.',
        button: 'Armar un paquete'
      },
      subtitle: {
        title: 'Nuestros Salones',
        desc:
          'Corporativo Legaspi by Jimena esta aliado con los salones, quintas, y hoteles más exclusivos de Aguascalientes, y aunque todos son perfectos, podrás elegir entre todos por jardín, alberca, estacionamiento, hospedaje, localización, precio, etc.',
        button: 'Ver todos los salones'
      }
    },
    catering: {
      header: {
        title: 'Servicio de Banquetes Legaspi',
        desc:
          'El servicio de Banquetes Legaspi ofrece una alta variedad de banquetes temáticos, y de presupuestos variados. Nuestros banquetes pueden ser sencillos para fiestas regulares, complejos para ocasiones empresariales o de etiqueta. Nosotros nos adaptaremos a su necesidad, elección de ingredientes, e instrucciones.'
      },
      tree: {
        title: 'Banquetes',
        desc:
          'Si usted planea contratar el servicio de alimentos, nosotros nos adaptaremos a la ocasión de su evento.',
        company: {
          title: 'Empresas',
          desc:
            'En un entorno profesional, una reunión de negocios, junta administrativa.',
          subsection: {
            one: {
              title: 'Bocadillos y Canapés ',
              desc: 'Pequeños refrigerios para entornos de producción. '
            },
            two: {
              title: 'Desayunos y Brunch',
              desc: 'Ideal para reuniones de personal o ceremonias. '
            },
            three: {
              title: 'Catering para cenas ',
              desc:
                'Banquete o a la carta, ideal para negocios y reuniones pequeñas.'
            }
          }
        },
        family: {
          title: 'Familiar',
          desc:
            ' Eventos familiares regulares o importantes, bautizos, ceremonias, bodas, etc.',
          subsection: {
            one: {
              title: 'Banquetes para fiestas',
              desc: 'Banquete temático completo ideal para eventos familiares. '
            },
            two: {
              title: 'Mesa de quesos',
              desc:
                'Postres y alimentos de entrada, ideal para fiestas grandes. '
            },
            three: {
              title: 'Mesa de dulces ',
              desc: 'Quiosco dulcería para eventos infantiles. '
            }
          }
        }
      }
    },
    booking: {
      header: {
        title: 'Nuestros Salones en Aguascalientes ',
        desc:
          'Corporativo Legaspi by Jimena esta aliado con los salones, quintas, y hoteles más exclusivos de Aguascalientes, y aunque todos son perfectos, podrás elegir entre todos por jardín, alberca, estacionamiento, hospedaje, localización, precio, etc.'
      }
    }
  };

  public english = {
    shared: {
      navbar: {
        contact: {
          phone: '(449) 449 7623',
          facebook: '#',
          youtube: '#',
          twitter: '#',
          email: '#',
        },
        language: 'Español ?',
        button: 'Get an estimate',
        menu: {
          home: 'Home',
          catering: 'Catering',
          booking: 'Event Halls',
          gallery: 'Gallery'
        }
      },
      footer: {
        text:
          'Abrimos nuestras puertas en 2013 en la ciudad de Aguascalientes, Mexico, Somos una empresa vibrante y amamos lo que hacemos. ',
        menu: {
          home: 'Back to home',
          catering: 'Back to catering',
          booking: 'Back to event halls ',
          gallery: 'Back to gallery '
        },
        licence:
          'Corporativo Legaspi by Jimena © 2019 - Developed by cuadrosoft.com'
      }
    },
    home: {
      header: {
        title: 'Wellcome!',
        desc:
          'Corporativo Legaspi by Jimena ofrece servicios para que tu evento sea un éxito, nuestra empresa fue fundada en 2013. Con la alta calidad de nuestros servicios organizamos cada vez más eventos en Aguascalientes e interior de la Republica. Tenemos a su alcance desde sillas plegables, Tiffany, Phoenix, Cross-back; mesas redondas, cuadradas, tablones; manteles con textura y de diferentes colores; mobiliario para salas, lobby, lounge; sombrillas individuales, de jardín, para mesas y carpas; renta de rockolas, inflables; servicio de meseros, mariachi, seguridad, preparación de comida, dj, etc.',
        button: 'Get an estimate'
      },
      subtitle: {
        title: 'Our Event Halls',
        desc:
          'Corporativo Legaspi by Jimena esta aliado con los salones, quintas, y hoteles más exclusivos de Aguascalientes, y aunque todos son perfectos, podrás elegir entre todos por jardín, alberca, estacionamiento, hospedaje, localización, precio, etc.',
        button: 'Continue to event halls'
      }
    },
    catering: {
      header: {
        title: 'Servicio de Banquetes Legaspi',
        desc:
          'El servicio de Banquetes Legaspi ofrece una alta variedad de banquetes temáticos, y de presupuestos variados. Nuestros banquetes pueden ser sencillos para fiestas regulares, complejos para ocasiones empresariales o de etiqueta. Nosotros nos adaptaremos a su necesidad, elección de ingredientes, e instrucciones.'
      },
      tree: {
        title: 'Banquetes',
        desc:
          'Si usted planea contratar el servicio de alimentos, nosotros nos adaptaremos a la ocasión de su evento.',
        company: {
          title: 'Empresas',
          desc:
            'En un entorno profesional, una reunión de negocios, junta administrativa.',
          subsection: {
            one: {
              title: 'Bocadillos y Canapés ',
              desc: 'Pequeños refrigerios para entornos de producción. '
            },
            two: {
              title: 'Desayunos y Brunch',
              desc: 'Ideal para reuniones de personal o ceremonias. '
            },
            three: {
              title: 'Catering para cenas ',
              desc:
                'Banquete o a la carta, ideal para negocios y reuniones pequeñas.'
            }
          }
        },
        family: {
          title: 'Familiar',
          desc:
            ' Eventos familiares regulares o importantes, bautizos, ceremonias, bodas, etc.',
          subsection: {
            one: {
              title: 'Banquetes para fiestas',
              desc: 'Banquete temático completo ideal para eventos familiares. '
            },
            two: {
              title: 'Mesa de quesos',
              desc:
                'Postres y alimentos de entrada, ideal para fiestas grandes. '
            },
            three: {
              title: 'Mesa de dulces ',
              desc: 'Quiosco dulcería para eventos infantiles. '
            }
          }
        }
      }
    },
    booking: {
      header: {
        title: 'Nuestros Salones en Aguascalientes ',
        desc:
          'Corporativo Legaspi by Jimena esta aliado con los salones, quintas, y hoteles más exclusivos de Aguascalientes, y aunque todos son perfectos, podrás elegir entre todos por jardín, alberca, estacionamiento, hospedaje, localización, precio, etc.'
      }
    }
  };

  public content = this.spanish;

  constructor() {
    this.currentLanguage.subscribe(language => {
      if (language == 'spanish') {
        this.content = this.spanish;
      } else {
          this.content = this.english;
      }
    });
  }
}
