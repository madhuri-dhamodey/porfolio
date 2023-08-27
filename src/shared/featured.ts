import { shopping, corpus, blogger, ems, noetic } from '@static/images';

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
      name: 'Junior Software Engineer @ Noetic IT Services',
      date: "(06/2020 - 12/2020)",
      info: `<React.Fragment>
    <ul type="disc">
    Engaged as a full-time professional, undertaking diverse projects such as Apnatok, ChaiWala, and others.
  <br><strong><u><center>Achievements/Tasks</center></u></strong>
  <li>•Took complete ownership of developing <strong>Apnatok</strong> it is a social media app. Designed various components to enhance the UI/UX of the application..</li>
  <li>•Implemented Mobx State Tree to ensured a streamlined flow of data, enabling enhanced performance and maintainability; reducing their <strong>load time by 37%</strong> and increasing <strong>user engagement rates by 25%</strong>.</li>
  <li>•We used React Navigation as a standalone library to facilitate seamless navigation within our application.</li>
  </ul>
<React.Fragment>`,

      stack: ['React Native', 'Redux', 'Mobx', 'HTML', 'CSS', 'JavaScript'],
      code: '',
      live: 'https://www.noeticitservices.com/',
      image: noetic,
    },
    {
      id: 'sde',
      name: 'React Native Developer @ Corpusvision Pvt Ltd ',
      date: "(06/2020 - 12/2020)",
      info: `<React.Fragment>
    <ul type="disc">
  <br><strong><u><center>Achievements/Tasks</center></u></strong>
  <li>•Refactored existing React Native codebase to enhance stability, reduce memory consumption and improve the overall user experience; increased mobile app performance by <strong>40% in 3 months.</strong></li>
  <li>•Structured reusable UI components based on custom design specifications in order to optimize coding efficiency and maintain high-quality standards throughout the project duration; <strong>reduced bug count by 20%.</strong></li>
  </ul>
<React.Fragment>`,

      stack: ['React Native', 'Mobx-State-Tree'],
      code: '',
      live: 'https://corpusvision.com/',
      image: corpus,
    },
    {
      id: 'ems',
      name: 'Software Developer Intern @ Engineer Master Solution Pvt Ltd',
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
