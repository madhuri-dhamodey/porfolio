const Mail = 'madhuri.dhamodey@gmail.com';
const Gh = 'https://github.com/madhuri-dhamodey';
const In = 'https://www.linkedin.com/in/madhuri-dhamodey/';

const connectLinks: {
  id: string;
  link: string;
}[] = [
    {
      id: 'gmail',
      link: 'mailto:madhuri.dhamodey@gmail.com',
    },
    {
      id: 'linkedin',
      link: 'https://www.linkedin.com/in/madhuri-dhamodey/',
    },
    {
      id: 'github',
      link: 'https://github.com/madhuri-dhamodey',
    },
    {
      id: 'whatsapp',
      link: 'https://api.whatsapp.com/send/?phone=%2B919424314993&text=hi&type=phone_number&app_absent=0',
    },
    {
      id: 'call',
      link: 'tel:+919380444911',
    }
  ];

export { Mail, Gh, In, connectLinks };
