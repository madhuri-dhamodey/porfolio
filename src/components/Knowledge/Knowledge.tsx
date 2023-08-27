import { TagCloud } from '@frank-mayer/react-tag-cloud';
import './knowledge.css';
const Knowledge = () => {
  interface TagCloudOptions {}
  return (
    <div className="knowledge-sphere-box">
      <TagCloud
        className="knowledge-sphere"
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(570, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: 'fast',
          containerClass: 'sphere',
          itemClass: 'sphere--item',
        })}
      >
        {[
          'React Native',
          'Java',
          'Spring Boot',
          'MySQL',
          'HTML',
          'CSS',
          'JavaScript ',
          'Git',
          'REST APIs',
          'Microservices'
        ]}
      </TagCloud>
    </div>
  );
};

export default Knowledge;
