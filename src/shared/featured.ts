import { shopping, corpus, blogger, ems } from '@static/images';

export const featured: {
  id: string;
  name: string;
  date: string;
  info: string;
  stack: string[];
  code?: string;
  live?: string;
  image?: string;
}[] = [
    {
      id: 'sde',
      name: 'SDE@Corpusvision Pvt Ltd ',
      date: "(06/2020 - 12/2020)",
      info: `<React.Fragment>
    <ul type="disc">
    Engaged as a freelance professional, undertaking diverse projects such as Apnatok, ChaiWala, and others.
  <br><strong><u><center>Achievements/Tasks</center></u></strong>
  <li>•Worked on Apnatok It's an ultimate app for unleashing your creativity and connecting with a global community. With ApnaTok, you can create and share short, captivating videos that showcase your talents, unique perspective, and vibrant personality.</li>
  <li>•By implementing Mobx-State-Tree, we ensured a streamlined flow of data, enabling enhanced performance and maintainability.</strong></li>
  <li>•We used React Navigation as a standalone library to facilitate seamless navigation within our application.</li>
  </ul>
<React.Fragment>`,

      stack: ['React Native', 'Mobx-State-Tree'],
      code: '',
      live: 'https://corpusvision.com/',
      image: corpus,
    },
    {
      id: 'ems',
      name: 'Software Developer Intern@Engineer Master Solution Pvt Ltd',
      date: "(06/2019 - 07/2019)",
      info: `<React.Fragment>
      <ul type="disc">
    <br><strong><u><center>Achievements/Tasks</center></u></strong>
    <li>•Developed and integrated traffic alarm APIs, leveraging expertise in API creation, implementation, and action-oriented problem-solving.</li>
    <li>•Implemented Navigation and developed components of various projects.</strong></li>
    <li>•We used React Navigation as a standalone library to facilitate seamless navigation within our application.</li>
    </ul>
  <React.Fragment>`,
      stack: ['React Native', 'REST APIs', 'HTML', 'CSS'],
      code: '',
      live: 'https://www.engineermaster.in/',
      image: ems,
    },
    {
      id: 'blogger',
      name: 'Online Blogging Platform | Spring Boot',
      date: "(05/2023 - 06/2023)",
      info: 'Created a custom online blogging system using Java, Spring Boot, MySQL, and Hibernate. It includes essential features like writing, updating, reading, and deleting blogs, along with the ability to like posts from other users.',
      stack: ['Java', 'Spring Boot', 'Thymeleaf', 'JavaScript','HTML', 'CSS'],
      code: '',
      live: '',
      image: blogger,
    },
    {
      id: 'blogger',
      name: 'Online Mobile Shopping | ReactJs',
      date: "(05/2023 - 06/2023)",
      info: 'Led e-commerce website development, facilitating secure transactions and effortless mobile device discovery. Leveraged React.js and Bootstrap 4 to create dynamic, interactive UI components, expediting and simplifying web development.',
      stack: ['ReactJs', 'NodeJs', 'HTML', 'CSS'],
      code: 'https://github.com/madhuri-dhamodey/react-e-commerce',
      live: 'https://react-e-commerce-md.netlify.app/',
      image: shopping,
    }
  ];
