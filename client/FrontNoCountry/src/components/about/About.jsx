import "../../assets/css/about/about.css";

const About = () => {
  const barbers = [
    {
      name: 'Barbero 1',
      description: 'Especialista en cortes clásicos y modernos.',
      socialMedia: {
        facebook: 'https://www.facebook.com/barbero1',
        instagram: 'https://www.instagram.com/barbero1',
        twitter: 'https://twitter.com/barbero1',
      },
    },
    {
      name: 'Barbero 2',
      description: 'Creador de estilos únicos y personalizados.',
      socialMedia: {
        facebook: 'https://www.facebook.com/barbero2',
        instagram: 'https://www.instagram.com/barbero2',
        twitter: 'https://twitter.com/barbero2',
      },
    },
    {
        name: 'Barbero 3',
        description: 'Creador de estilos únicos y personalizados.',
        socialMedia: {
          facebook: 'https://www.facebook.com/barbero2',
          instagram: 'https://www.instagram.com/barbero2',
          twitter: 'https://twitter.com/barbero2',
        },
      },
      {
        name: 'Barbero 4',
        description: 'Creador de estilos únicos y personalizados.',
        socialMedia: {
          facebook: 'https://www.facebook.com/barbero2',
          instagram: 'https://www.instagram.com/barbero2',
          twitter: 'https://twitter.com/barbero2',
        },
      },
  ];

  return (
    <div className="about-us-container">
      <h2>Sobre Nosotros</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero deleniti dolores voluptate perspiciatis iusto corporis, quam qui beatae voluptatibus, illo iste accusantium enim et molestiae, nostrum illum tenetur harum!</p>
      <div className="barber-list">
        {barbers.map((barber, index) => (
          <div key={index} className="barber-card">
            <h3>{barber.name}</h3>
            <p>{barber.description}</p>
            <div className="social-icons">
              <a href={barber.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href={barber.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={barber.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
